'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Download, Mail, Linkedin, MapPin, Briefcase, GraduationCap, Code, Cloud, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TalentContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TalentContactModal: React.FC<TalentContactModalProps> = ({ isOpen, onClose }) => {
  const handleDownloadResume = () => {
    // Your actual resume URL
    const resumeUrl = '/Devarshi.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Devarshi_Wadadkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.open('mailto:devarshiw8@gmail.com?subject=Potential Opportunity Discussion', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/devarshi8/', '_blank');
  };

  const handleCalendarClick = () => {
    // Your actual calendar link
    window.open('https://calendly.com/devarshiw8/15min', '_blank');
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-xl shadow-2xl">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
              >
                <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-3">
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-tight">
                    Hey there! 👋 I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Devarshi</span> — a Data Scientist & AI/ML Engineer building GenAI systems. Open to full-time roles — let's connect!
                  </p>
                </div>

                {/* Contact Actions */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-3">
                  <Button
                    onClick={handleCalendarClick}
                    variant="outline"
                    className="flex items-center gap-2 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a Call
                  </Button>
                  
                  <Button
                    onClick={handleDownloadResume}
                    variant="outline"
                    className="flex items-center gap-2 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </Button>
                  
                  <Button
                    onClick={handleEmailClick}
                    variant="outline"
                    className="flex items-center gap-2 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
                  </Button>

                  <Button
                    onClick={handleLinkedInClick}
                    variant="outline"
                    className="flex items-center gap-2 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>

                {/* Skills & Experience Card */}
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700">
                  <CardContent className="space-y-1 pt-3">
                    <div className="flex items-center gap-2 text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                      <Briefcase className="h-6 w-6" />
                      Quick Overview
                    </div>
                    {/* Location & Education */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                          <p className="text-gray-600 dark:text-gray-300">Bay Area, California</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                          <p className="text-gray-600 dark:text-gray-300">MS Data Science, UW-Madison</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Skills */}
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        <Code className="h-5 w-5 text-blue-600" />
                        Key Skills
                      </h3>
                                              <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-300">Machine Learning & AI</Badge>
                          <Badge className="bg-purple-50 text-purple-900 dark:bg-violet-900/30 dark:text-violet-300">LLMs & RAG</Badge>
                          <Badge className="bg-orange-50 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">Agents</Badge>
                          <Badge className="bg-zinc-100 text-zinc-800 dark:bg-slate-800/40 dark:text-slate-200">Data Science</Badge>
                          <Badge className="bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Statistical Analysis</Badge>
                          <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Python</Badge>
                          <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">React</Badge>
                          <Badge className="bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300">SQL</Badge>
                          <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">Cloud</Badge>
                        </div>
                    </div>

                    {/* Recent Experience */}
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                        Recent Experience
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300">AI Intern at Reliance Jio</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Present</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300">Data Science RA at UW-Madison</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2025</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300">Data Science Intern at EarnIn</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                        </div>
                      </div>
                    </div>

                                         {/* What I'm Looking For */}
                     <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                       <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What I'm Looking For:</h4>
                       <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                         <li>• Full-time roles in Data Science, Machine Learning, or GenAI</li>
                         <li>• Applied AI/ML work with measurable real-world outcomes</li>
                         <li>• Teams solving impactful problems using data</li>
                         <li>• Opportunities to grow AI products from idea to deployment</li>
                       </ul>
                     </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TalentContactModal; 


