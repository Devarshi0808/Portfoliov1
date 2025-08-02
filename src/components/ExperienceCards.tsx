'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Code2, Building2, MapPin, Award, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { useOutsideClick } from '@/hooks/use-outside-click';

// Experience data structure
interface Experience {
  id: number;
  title: string;
  company: string;
  logo: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
  technologies: string[];
  color: string;
  borderColor: string;
  iconColor: string;
}

// Context for managing popup state
const ExperienceContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

// Experience data
const experiences: Experience[] = [
  {
    id: 1,
    title: "AI Intern",
    company: "Reliance Jio",
    logo: "/jio-logo.png",
    period: "July 2025 – Present",
    location: "Frisco, Texas, United States",
    type: "Full-time",
    achievements: [
      "Designed hybrid AI Copilot for NOC engineers using CrewAI multi-agent architecture",
      "Reduced query latency from 200s to 30s using CPU-optimized llamafile models",
      "Built intelligent query routing and 1ms response caching for 7,000+ telecom sites",
      "Developed Python-driven dynamic code generation with voice commands and anomaly detection"
    ],
    technologies: ["CrewAI", "Multi-Agent Systems", "Llamafile", "Python", "LLMs", "Edge Optimization", "Anomaly Detection", "Voice I/O", "Dashboarding"],
    color: "from-blue-50 to-blue-100 dark:from-[#329696]/20 dark:to-[#329696]/10",
    borderColor: "border-blue-200 dark:border-[#329696]/40",
    iconColor: "text-blue-600 dark:text-[#329696]"
  },
  {
    id: 2,
    title: "Data Science Research Assistant",
    company: "GE Healthcare (UW-Madison)",
    logo: "/uw-madison-logo.png",
    period: "Jan 2025 – May 2025",
    location: "Madison, Wisconsin, United States",
    type: "Research",
    achievements: [
      "Developed transformer-based anomaly detection achieving 94% F1-score on 2M+ HALT/HASS logs",
      "Built AutoML pipeline using Optuna, reducing hyperparameter selection time",
      "Deployed TensorFlow Serving API scaling to 10K+ predictions/sec"
    ],
    technologies: ["Transformers", "TensorFlow", "LogAI", "Optuna", "Anomaly Detection", "AutoML"],
    color: "from-emerald-50 to-emerald-100 dark:from-[#B95F9D]/20 dark:to-[#B95F9D]/10",
    borderColor: "border-emerald-200 dark:border-[#B95F9D]/40",
    iconColor: "text-emerald-600 dark:text-[#B95F9D]"
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "EarnIn",
    logo: "/earnin-logo.png",
    period: "June 2024 – Aug 2024",
    location: "Palo Alto, California, United States",
    type: "Internship",
    achievements: [
      "Performed PySpark analysis on 1M+ users, improving risk precision by 28%",
      "Built rule-based payment prediction model with 87% date and 92% amount accuracy",
      "Created Bayesian A/B testing pipeline increasing product metrics by 8.5%"
    ],
    technologies: ["PySpark", "Bayesian Inference", "Rule-Based Models", "A/B Testing", "SQL"],
    color: "from-violet-50 to-violet-100 dark:from-[#3E9858]/20 dark:to-[#3E9858]/10",
    borderColor: "border-violet-200 dark:border-[#3E9858]/40",
    iconColor: "text-violet-600 dark:text-[#3E9858]"
  },
  {
    id: 4,
    title: "Data Science Research Assistant",
    company: "USDA Lab (UW-Madison)",
    logo: "/uw-madison-logo.png",
    period: "Jan 2024 – May 2024",
    location: "Madison, Wisconsin, United States",
    type: "Research",
    achievements: [
      "Optimized computer vision pipelines reducing training time by 45%",
      "Fused ResNet-EfficientNet models achieving 95% crop quality classification accuracy",
      "Applied ANOVA and regression improving crop yield forecasting by 18%"
    ],
    technologies: ["Computer Vision", "OpenCV", "ResNet", "EfficientNet", "EXIF Metadata", "ANOVA", "Regression"],
    color: "from-emerald-50 to-emerald-100 dark:from-[#B95F9D]/20 dark:to-[#B95F9D]/10",
    borderColor: "border-emerald-200 dark:border-[#B95F9D]/40",
    iconColor: "text-emerald-600 dark:text-[#B95F9D]"
  },
  {
    id: 5,
    title: "Data Scientist Intern",
    company: "Mindbody",
    logo: "/mindbody-logo.png",
    period: "Jan 2023 – June 2023",
    location: "Pune, Maharashtra, India",
    type: "Internship",
    achievements: [
      "Trained XGBoost lead scoring model boosting conversion rates by 80%",
      "Designed collaborative filtering recommendation engine with 1M+ suggestions",
      "Built Redis-based real-time feature store handling 100K+ events/min"
    ],
    technologies: ["XGBoost", "Collaborative Filtering", "Redis", "Meta Ads Manager", "Recommendation Systems"],
    color: "from-rose-50 to-rose-100 dark:from-[#C19433]/20 dark:to-[#C19433]/10",
    borderColor: "border-rose-200 dark:border-[#C19433]/40",
    iconColor: "text-rose-600 dark:text-[#C19433]"
  },
  {
    id: 6,
    title: "Data Scientist Intern",
    company: "Atlas Copco",
    logo: "/atlas-copco-logo.png",
    period: "July 2021 – Dec 2021",
    location: "Pune, Maharashtra, India",
    type: "Internship",
    achievements: [
      "Developed predictive maintenance system reducing downtime by 58%",
      "Built time-series Isolation Forest model preventing 23 major equipment failures",
      "Created interactive Plotly dashboards for real-time production monitoring"
    ],
    technologies: ["Random Forest", "Time Series", "Isolation Forest", "Plotly", "Predictive Maintenance"],
    color: "from-amber-50 to-amber-100 dark:from-[#329696]/20 dark:to-[#329696]/10",
    borderColor: "border-amber-200 dark:border-[#329696]/40",
    iconColor: "text-amber-600 dark:text-[#329696]"
  }
];

// Experience Card Component (Simple View)
const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(ExperienceContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      {/* Popup Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-10 h-fit max-w-4xl rounded-3xl bg-white font-sans dark:bg-neutral-900"
            >
              {/* Close button */}
              <div className="sticky top-4 z-52 flex justify-end px-8 pt-8 md:px-14 md:pt-8">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
                  onClick={handleClose}
                >
                  <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>

              {/* Header */}
              <div className="px-8 pt-2 pb-8 md:px-14">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-16 h-16">
                    {experience.logo ? (
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain w-16 h-16"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallbackIcon = document.createElement('div');
                            fallbackIcon.innerHTML = `<svg class="h-10 w-10 ${experience.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`;
                            parent.appendChild(fallbackIcon.firstChild!);
                          }
                        }}
                      />
                    ) : (
                      <Building2 className={`h-10 w-10 ${experience.iconColor}`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.title}</h2>
                      <span className="px-3 py-1 text-sm font-medium bg-white text-gray-700 border border-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                        {experience.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{experience.company}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-14 md:px-14">
                {/* Achievements */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Achievements</span>
                  </div>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                        <span className="text-green-500 text-sm flex-shrink-0 mt-1">•</span>
                        <span className="text-base leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="h-5 w-5 text-purple-600" />
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

                                     {/* Simple Card */}
                        <motion.button
                          onClick={handleOpen}
                          className={`w-full bg-gradient-to-r ${experience.color} ${experience.borderColor} border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-left dark:shadow-neutral-800/20`}
                        >
         <div className="flex items-center justify-between">
           {/* Left Side: Logo + Content */}
           <div className="flex items-center gap-4">
             <div className="flex items-center justify-center w-12 h-12">
               {experience.logo ? (
                 <Image
                   src={experience.logo}
                   alt={`${experience.company} logo`}
                   width={48}
                   height={48}
                   className="object-contain w-12 h-12"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     const parent = target.parentElement;
                     if (parent) {
                       const fallbackIcon = document.createElement('div');
                       fallbackIcon.innerHTML = `<svg class="h-6 w-6 ${experience.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`;
                       parent.appendChild(fallbackIcon.firstChild!);
                     }
                   }}
                 />
               ) : (
                 <Building2 className={`h-6 w-6 ${experience.iconColor}`} />
               )}
             </div>
             <div>
               {/* First line: Company + Type */}
               <div className="flex items-center gap-2">
                 <span className="text-base font-semibold text-gray-700 dark:text-gray-300">{experience.company}</span>
                 <span className="px-2 py-1 text-xs font-medium bg-white text-gray-700 border border-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                   {experience.type}
                 </span>
               </div>
               {/* Second line: Role */}
               <div className="text-base font-bold text-gray-900 dark:text-gray-100">
                 {experience.title}
               </div>
             </div>
           </div>
           
           {/* Right Side: Dates + Location */}
           <div className="text-right">
             {/* First line: Dates */}
             <div className="text-base font-medium text-gray-900 dark:text-gray-100">
               {experience.period}
             </div>
             {/* Second line: Location */}
             <div className="text-sm text-gray-600 dark:text-gray-400">
               {experience.location}
             </div>
           </div>
         </div>
       </motion.button>
    </>
  );
};

// Main Experience Cards Component
const ExperienceCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ExperienceContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="w-full h-full pt-8">
        <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 font-sans mb-4">
          Work Experience
        </h2>
        <p className="max-w-7xl mx-auto text-base text-neutral-600 dark:text-neutral-400 font-sans mb-8 text-center">
          🎯 Click on any experience card to dive deeper and discover the magic behind each role! ✨
        </p>
        
        <div className="max-w-4xl mx-auto space-y-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard experience={exp} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </ExperienceContext.Provider>
  );
};

export default ExperienceCards; 