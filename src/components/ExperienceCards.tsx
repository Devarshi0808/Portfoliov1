'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Building2, MapPin, Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const ExperienceCards = () => {
  const experiences = [
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
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
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
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
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
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
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
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600"
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
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600"
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
      color: "from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      iconColor: "text-gray-600"
    }
  ];

  return (
    <div className="w-full h-full pt-8">
      <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
        Work Experience
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-r ${exp.color} ${exp.borderColor} border rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
          >
            <div className="flex flex-col gap-4">
              {/* Company info */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-16 h-16">
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={64}
                      height={64}
                      className="object-contain w-16 h-16"
                      onError={(e) => {
                        // Fallback to Building2 icon if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallbackIcon = document.createElement('div');
                          fallbackIcon.innerHTML = `<svg class="h-10 w-10 ${exp.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`;
                          parent.appendChild(fallbackIcon.firstChild!);
                        }
                      }}
                    />
                  ) : (
                    <Building2 className={`h-10 w-10 ${exp.iconColor}`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-white text-gray-700 border border-gray-200 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-1">{exp.company}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-lg font-semibold text-gray-800">Key Achievements</span>
                </div>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 text-sm flex-shrink-0 mt-0">•</span>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="h-4 w-4 text-purple-600" />
                  <span className="text-base font-semibold text-gray-800">Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-white text-gray-700 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCards; 