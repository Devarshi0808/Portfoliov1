'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export function Presentation() {
  const [llmDescription, setLlmDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Personal information
  const profile = {
    name: 'Devarshi Portfolio',
    age: '24 years old',
    location: 'Bay Area, CA',
    src: '/devarshi-profile.png',
    fallbackSrc:
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3',
  };

  // Skills data
  const skills = ['Data Science', 'Machine Learning', 'GenAI', 'Statistics', 'UW-Madison'];

  // Fetch LLM description
  useEffect(() => {
    const fetchLlmDescription = async () => {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [
              {
                role: 'user',
                content: 'Tell me about yourself briefly.',
              },
            ],
          }),
        });

        if (response.ok) {
          const reader = response.body?.getReader();
          if (reader) {
            let result = '';
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              
              const chunk = new TextDecoder().decode(value);
              const lines = chunk.split('\n');
              
              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const data = line.slice(6);
                  if (data === '[DONE]') break;
                  
                  try {
                    const parsed = JSON.parse(data);
                    if (parsed.type === 'text-delta' && parsed.textDelta) {
                      result += parsed.textDelta;
                      setLlmDescription(result);
                    }
                  } catch (e) {
                    // Ignore parsing errors
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('Error fetching LLM description:', error);
        setLlmDescription('I\'m a passionate Data Scientist and AI enthusiast who loves turning complex problems into elegant solutions. What excites you about AI and data science?');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLlmDescription();
  }, []);

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  // Animation for the entire paragraph rather than word-by-word
  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-6xl py-6 font-sans">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        {/* Left Column - Photo and LLM Paragraph */}
        <div className="flex flex-col items-center space-y-6">
          {/* Circular Photo */}
          <div className="relative mx-auto aspect-square w-full max-w-[200px]">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' as const }}
                className="h-full w-full"
              >
                <Image
                  src={profile.src}
                  alt={profile.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = profile.fallbackSrc;
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* LLM Generated Paragraph */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground text-center leading-relaxed max-w-md"
          >
            {isLoading ? null : (
              <p>{llmDescription}</p>
            )}
          </motion.div>
        </div>

        {/* Right Column - Name and Skills */}
        <div className="flex flex-col space-y-6">
          {/* Name and Location */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-center md:text-left"
          >
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-2 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.age}</p>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </motion.div>

          {/* Skills Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col space-y-3"
          >
            <h3 className="text-lg font-semibold text-foreground">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
