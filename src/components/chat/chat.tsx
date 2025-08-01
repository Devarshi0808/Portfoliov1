'use client';
import { useChat } from '@ai-sdk/react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

// Component imports
import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { SimplifiedChatView } from '@/components/chat/simple-chat-view';
import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import WelcomeModal from '@/components/welcome-modal';
import { X } from 'lucide-react';


import HelperBoost from './HelperBoost';

// ClientOnly component for client-side rendering
//@ts-ignore
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

// Define Avatar component props interface
interface AvatarProps {
  hasActiveTool: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isTalking: boolean;
}

// Dynamic import of Avatar component
const Avatar = dynamic<AvatarProps>(
  () =>
    Promise.resolve(({ hasActiveTool, videoRef, isTalking }: AvatarProps) => {
      // This function will only execute on the client
      const isIOS = () => {
        // Check if we're on the client side
        if (typeof window === 'undefined') {
          console.log('Avatar: Server side rendering, returning false for iOS');
          return false;
        }
        
        // Multiple detection methods
        const userAgent = window.navigator.userAgent;
        const platform = window.navigator.platform;
        const maxTouchPoints = window.navigator.maxTouchPoints || 0;

        // UserAgent-based check
        const isIOSByUA =
          //@ts-ignore
          /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

        // Platform-based check
        const isIOSByPlatform = /iPad|iPhone|iPod/.test(platform);

        // iPad Pro check
        const isIPadOS =
          //@ts-ignore
          platform === 'MacIntel' && maxTouchPoints > 1 && !window.MSStream;

        // Safari check
        const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);

        const isIOSDevice = isIOSByUA || isIOSByPlatform || isIPadOS || isSafari;
        console.log('Avatar: iOS detection result:', isIOSDevice);
        return isIOSDevice;
      };

      // Conditional rendering based on detection
      const isIOSDevice = isIOS();
      console.log('Avatar: Rendering with iOS device:', isIOSDevice, 'isTalking:', isTalking);
      
      return (
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'}`}
        >
          <div
            className="relative cursor-pointer"
            onClick={() => (window.location.href = '/')}
          >
            {isIOSDevice ? (
              <img
                src="/landing-memojis.png"
                alt="iOS avatar"
                className="h-full w-full scale-[1.8] object-contain"
                onLoad={() => console.log('Avatar: iOS image loaded successfully')}
                onError={(e) => console.error('Avatar: iOS image failed to load:', e)}
              />
            ) : (
              <video
                ref={videoRef}
                className="h-full w-full scale-[1.8] object-contain"
                muted
                playsInline
                loop
                autoPlay
                onLoadStart={() => console.log('Avatar: Video loading started')}
                onLoadedData={() => console.log('Avatar: Video data loaded successfully')}
                onError={(e) => console.error('Avatar: Video failed to load:', e)}
              >
                <source src="/final_memojis.webm" type="video/webm" />
                <source src="/final_memojis_ios.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      );
    }),
  { ssr: false }
);

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut' as const,
  },
};

const Chat = ({ initialQuery: propInitialQuery, onClose }: { initialQuery?: string; onClose?: () => void }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const searchParams = useSearchParams();
  const urlInitialQuery = searchParams.get('query');
  const initialQuery = propInitialQuery || urlInitialQuery;
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  // Safe video play function with proper error handling
  const safePlayVideo = async () => {
    if (!videoRef.current || isVideoPlaying) {
      console.log('safePlayVideo: Skipping play - no video ref or already playing');
      return;
    }
    
    try {
      console.log('safePlayVideo: Starting video play');
      setIsVideoPlaying(true);
      playPromiseRef.current = videoRef.current.play();
      await playPromiseRef.current;
      console.log('safePlayVideo: Video play successful');
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // Play was interrupted by pause - this is expected behavior
        console.log('safePlayVideo: Video play was interrupted by pause');
      } else {
        console.error('safePlayVideo: Failed to play video:', error);
      }
    } finally {
      setIsVideoPlaying(false);
      playPromiseRef.current = null;
    }
  };

  // Safe video pause function
  const safePauseVideo = () => {
    if (!videoRef.current) {
      console.log('safePauseVideo: No video ref available');
      return;
    }
    
    console.log('safePauseVideo: Pausing video');
    // If there's a pending play promise, we need to handle the interruption
    if (playPromiseRef.current) {
      // The pause will automatically reject the play promise
      // We don't need to do anything special here
      console.log('safePauseVideo: Interrupting pending play promise');
    }
    
    videoRef.current.pause();
    setIsVideoPlaying(false);
    playPromiseRef.current = null;
  };

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    setMessages,
    setInput,
    reload,
    addToolResult,
    append,
  } = useChat({
    onResponse: (response) => {
      if (response) {
        setLoadingSubmit(false);
        setIsTalking(true);
        safePlayVideo();
      }
    },
    onFinish: () => {
      setLoadingSubmit(false);
      setIsTalking(false);
      safePauseVideo();
    },
    onError: (error) => {
      setLoadingSubmit(false);
      setIsTalking(false);
      safePauseVideo();
      console.error('Chat error:', error.message, error.cause);
      toast.error(`Error: ${error.message}`);
    },
    onToolCall: (tool) => {
      const toolName = tool.toolCall.toolName;
      console.log('Tool call:', toolName);
    },
  });

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const latestAIMessageIndex = messages.findLastIndex(
      (m) => m.role === 'assistant'
    );
    const latestUserMessageIndex = messages.findLastIndex(
      (m) => m.role === 'user'
    );

    const result = {
      currentAIMessage:
        latestAIMessageIndex !== -1 ? messages[latestAIMessageIndex] : null,
      latestUserMessage:
        latestUserMessageIndex !== -1 ? messages[latestUserMessageIndex] : null,
      hasActiveTool: false,
    };

    if (result.currentAIMessage) {
      result.hasActiveTool =
        result.currentAIMessage.parts?.some(
          (part) =>
            part.type === 'tool-invocation' &&
            part.toolInvocation?.state === 'result'
        ) || false;
    }

    if (latestAIMessageIndex < latestUserMessageIndex) {
      result.currentAIMessage = null;
    }

    return result;
  }, [messages]);

  const isToolInProgress = messages.some(
    (m) =>
      m.role === 'assistant' &&
      m.parts?.some(
        (part) =>
          part.type === 'tool-invocation' &&
          part.toolInvocation?.state !== 'result'
      )
  );

  //@ts-ignore
  const submitQuery = (query) => {
    if (!query.trim() || isToolInProgress) return;
    setLoadingSubmit(true);
    append({
      role: 'user',
      content: query,
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.pause();
    }

    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted]);

  useEffect(() => {
    console.log('useEffect isTalking: isTalking =', isTalking, 'videoRef.current =', !!videoRef.current);
    if (videoRef.current) {
      if (isTalking) {
        console.log('useEffect isTalking: Calling safePlayVideo');
        safePlayVideo();
      } else {
        console.log('useEffect isTalking: Calling safePauseVideo');
        safePauseVideo();
      }
    } else {
      console.log('useEffect isTalking: No video ref available');
    }
  }, [isTalking]);

  // Cleanup effect to handle component unmounting
  useEffect(() => {
    return () => {
      // Cleanup video state when component unmounts
      if (videoRef.current) {
        safePauseVideo();
      }
    };
  }, []);

  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isToolInProgress) return;
    submitQuery(input);
    setInput('');
  };

  const handleStop = () => {
    stop();
    setLoadingSubmit(false);
    setIsTalking(false);
    safePauseVideo();
  };

  // Check if this is the initial empty state (no messages)
  const isEmptyState =
    !currentAIMessage && !latestUserMessage && !loadingSubmit;

  // Calculate header height based on hasActiveTool
  const headerHeight = hasActiveTool ? 100 : 180;

  return (
    <div className="relative h-screen overflow-hidden">


      {/* Fixed Avatar Header with Gradient */}
      <div
        className="fixed top-0 right-0 left-0 z-50"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${hasActiveTool ? 'pt-6 pb-0' : 'py-6'}`}
        >
          {/* Close button for overlay mode */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          
          <div className="flex justify-center">
            <ClientOnly>
              <Avatar
                hasActiveTool={hasActiveTool}
                videoRef={videoRef}
                isTalking={isTalking}
              />
            </ClientOnly>
          </div>

          <AnimatePresence>
            {latestUserMessage && !currentAIMessage && (
              <motion.div
                {...MOTION_CONFIG}
                className="mx-auto flex max-w-3xl px-4"
              >
                <ChatBubble variant="sent">
                  <ChatBubbleMessage>
                    <ChatMessageContent
                      message={latestUserMessage}
                      isLast={true}
                      isLoading={false}
                      reload={() => Promise.resolve(null)}
                    />
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto flex h-full max-w-3xl flex-col">
        {/* Scrollable Chat Content */}
        <div
          className="flex-1 overflow-y-auto px-2"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div
                key="landing"
                className="flex min-h-full items-center justify-center"
                {...MOTION_CONFIG}
              >
                <ChatLanding submitQuery={submitQuery} />
              </motion.div>
            ) : currentAIMessage ? (
              <div className="pb-4">
                <SimplifiedChatView
                  message={currentAIMessage}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                />
              </div>
            ) : (
              loadingSubmit && (
                <motion.div
                  key="loading"
                  {...MOTION_CONFIG}
                  className="px-4 pt-18"
                >
                  <ChatBubble variant="received">
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Fixed Bottom Bar */}
        <div className="sticky bottom-0 bg-white px-2 pt-3 md:px-0 md:pb-4">
          <div className="relative flex flex-col items-center gap-3">
            <HelperBoost submitQuery={submitQuery} setInput={setInput} />
            <ChatBottombar
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={onSubmit}
              isLoading={isLoading}
              stop={handleStop}
              isToolInProgress={isToolInProgress}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chat;
