'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, PenTool, Users, Cloud } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming & Statistical Analysis',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Python',
        'SQL',
        'R',
        'C++',
        'Hypothesis Testing',
        'A/B Testing',
        'Regression Modeling',
      ],
      color: 'text-blue-700 border-blue-200',
      badgeColor: 'hover:scale-105',
      backgroundColor: '#D6EAF8',
      textColor: '#1B4F72',
    },
    {
      category: 'Machine Learning & AI',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Scikit-learn',
        'XGBoost',
        'LightGBM',
        'TensorFlow',
        'PyTorch',
        'Transformers',
        'LLMs',
        'RAG',
      ],
      color: 'text-emerald-700 border-emerald-200',
      badgeColor: 'hover:scale-105',
      backgroundColor: '#E8DAEF',
      textColor: '#512E5F',
    },
    {
      category: 'Big Data & Cloud',
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        'AWS',
        'GCP',
        'Spark',
        'Kafka',
        'Databricks',
        'BigQuery',
        'Hadoop',
      ],
      color: 'text-purple-700 border-purple-200',
      badgeColor: 'hover:scale-105',
      backgroundColor: '#FCF3CF',
      textColor: '#7D6608',
    },
    {
      category: 'Visualization & MLOps',
      icon: <PenTool className="h-5 w-5" />,
      skills: [
        'Streamlit',
        'Tableau',
        'Power BI',
        'Plotly',
        'Matplotlib',
        'MLflow',
        'Docker',
        'FastAPI',
        'Git',
      ],
      color: 'text-indigo-700 border-indigo-200',
      badgeColor: 'hover:scale-105',
      backgroundColor: '#D5F5E3',
      textColor: '#145A32',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Communication',
        'Problem-Solving',
        'Adaptability',
        'Learning Agility',
        'Teamwork',
        'Creativity',
        'Focus',
      ],
      color: 'text-amber-700 border-amber-200',
      badgeColor: 'hover:scale-105',
      backgroundColor: '#F2F4F4',
      textColor: '#212F3C',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-10 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-4 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <h3 className="text-accent-foreground text-xl font-bold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge 
                        className={`${section.badgeColor} border px-4 py-2 text-sm font-medium transition-all duration-200`}
                        style={{
                          backgroundColor: section.backgroundColor,
                          color: section.textColor,
                          borderColor: section.textColor + '40'
                        }}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
