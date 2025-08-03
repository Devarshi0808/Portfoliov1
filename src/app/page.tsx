'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import TalentContactModal from '@/components/TalentContactModal';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  UserRoundSearch,
  Loader2,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the chat component
const ChatComponent = dynamic(() => import('@/components/chat/chat'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
    </div>
  ),
});

/* ---------- titles array ---------- */
const TITLES = [
  'Machine Learning Engineer',
  'Data Scientist',
  'GenAI Developer',
];

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Tell me about yourself briefly.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Experience: 'What is your work experience? Tell me about your internships and jobs.',
  Contact: 'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Experience', color: '#B95F9D', icon: BriefcaseBusiness },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTalentModalOpen, setIsTalentModalOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const [currentTitle, setCurrentTitle] = useState(0);
  const titleTimeout = useRef<NodeJS.Timeout | null>(null);

  const openChat = async (query: string) => {
    setInitialQuery(query);
    setIsChatOpen(true);
  };

  const openTalentModal = () => {
    setIsTalentModalOpen(true);
  };

  /* hero animations (unchanged) */
/* hero animations */
const topElementVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};
const bottomElementVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' as const },
  },
};

  // Page transition variants
  const pageTransitionVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: { duration: 0.3, ease: 'easeInOut' as const }
  };

  useEffect(() => {
    titleTimeout.current = setTimeout(() => {
      setCurrentTitle((prev) => (prev + 1) % TITLES.length);
    }, 2000);
    return () => {
      if (titleTimeout.current) clearTimeout(titleTimeout.current);
    };
  }, [currentTitle]);

  useEffect(() => {
    // Preload chat assets in background
    const img = new window.Image();
    img.src = '/new-character.png';
  }, []);

  return (
    <motion.div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/50 to-neutral-500/10 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          
        </div>
      </div>



      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={openTalentModal}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:bg-neutral-800/30 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800/60"
        >
          {/* Green pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Looking for a talent?
        </button>
      </div>

      {/* LinkedIn Logo - Top Right */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <ThemeToggle />
        <a
          href="https://www.linkedin.com/in/devarshi8/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border border-white/20 shadow-md backdrop-blur-lg transition-all duration-300 hover:bg-white/60 hover:scale-110 dark:bg-neutral-800/30 dark:border-neutral-700 dark:hover:bg-neutral-800/60"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-0 flex flex-col items-center text-center md:mt-4 md:mb-0"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >


        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl mb-4">
          Hey, I'm Devarshi 👋
        </h2>
        <div style={{ minHeight: 60 }}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={TITLES[currentTitle]}
              className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {TITLES[currentTitle]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* centre memoji */}
      <motion.div 
        className="relative z-10 mb-4 flex justify-center -mt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/new-character.png"
          alt="Hero character"
          width={300}
          height={300}
          priority
          className="h-48 w-48 object-contain sm:h-64 sm:w-64"
        />
      </motion.div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-2 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free-form question */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (input.trim()) {
              await openChat(input.trim());
            }
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/30 dark:hover:border-neutral-600">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* quick-question grid */}
        <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <motion.div
              key={key}
              whileHover={{ 
                scale: 1.08,
                y: -4,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Button
                onClick={() => openChat(questions[key])}
                variant="outline"
                className="relative aspect-square w-full cursor-pointer rounded-2xl border py-10 shadow-lg backdrop-blur-lg active:scale-95 md:p-12 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5"
                style={{
                  backgroundColor: `${color}20`, // 20% opacity
                  borderColor: `${color}40`, // 40% opacity for border
                }}
              >
                {/* Gradient swipe overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1s_ease-in-out] pointer-events-none" />
                
                <div className="relative flex h-full flex-col items-center justify-center gap-1 text-gray-700 dark:text-gray-200">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="group-hover:animate-bounce"
                  >
                    <Icon size={40} strokeWidth={2} color={color} />
                  </motion.div>
                  <motion.span 
                    className="text-sm font-bold sm:text-base font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {key}
                  </motion.span>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Me Message Display */}
      {/* Removed as per edit hint */}

      {/* Chat Overlay */}
      <AnimatePresence mode="wait">
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: '100%', scale: 0.95 }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 300,
              duration: 0.6
            }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="relative h-full w-full">
              {/* Chat component */}
              <ChatComponent initialQuery={initialQuery} onClose={() => setIsChatOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Talent Contact Modal */}
      <TalentContactModal 
        isOpen={isTalentModalOpen} 
        onClose={() => setIsTalentModalOpen(false)} 
      />

      <FluidCursor />
    </motion.div>
  );
}
