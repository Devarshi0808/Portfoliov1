'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, Building2, MapPin, Award } from 'lucide-react';

const ExperienceCard = () => {
  const experiences = [
    {
      id: 1,
      title: "AI Intern",
      company: "Reliance Jio",
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
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      title: "Data Science Research Assistant",
      company: "GE Healthcare (UW-Madison)",
      period: "Jan 2025 – May 2025",
      location: "Madison, Wisconsin, United States",
      type: "Research",
      achievements: [
        "Developed transformer-based anomaly detection achieving 94% F1-score on 2M+ HALT/HASS logs",
        "Built AutoML pipeline using Optuna, reducing hyperparameter selection time",
        "Deployed TensorFlow Serving API scaling to 10K+ predictions/sec"
      ],
      technologies: ["Transformers", "TensorFlow", "LogAI", "Optuna", "Anomaly Detection", "AutoML"],
      color: "bg-green-50 border-green-200"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "EarnIn",
      period: "June 2024 – Aug 2024",
      location: "Palo Alto, California, United States",
      type: "Internship",
      achievements: [
        "Performed PySpark analysis on 1M+ users, improving risk precision by 28%",
        "Built rule-based payment prediction model with 87% date and 92% amount accuracy",
        "Created Bayesian A/B testing pipeline increasing product metrics by 8.5%"
      ],
      technologies: ["PySpark", "Bayesian Inference", "Rule-Based Models", "A/B Testing", "SQL"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: 4,
      title: "Data Science Research Assistant",
      company: "USDA Lab (UW-Madison)",
      period: "Jan 2024 – May 2024",
      location: "Madison, Wisconsin, United States",
      type: "Research",
      achievements: [
        "Optimized computer vision pipelines reducing training time by 45%",
        "Fused ResNet-EfficientNet models achieving 95% crop quality classification accuracy",
        "Applied ANOVA and regression improving crop yield forecasting by 18%"
      ],
      technologies: ["Computer Vision", "OpenCV", "ResNet", "EfficientNet", "EXIF Metadata", "ANOVA", "Regression"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      id: 5,
      title: "Data Scientist Intern",
      company: "Mindbody",
      period: "Jan 2023 – June 2023",
      location: "Pune, Maharashtra, India",
      type: "Internship",
      achievements: [
        "Trained XGBoost lead scoring model boosting conversion rates by 80%",
        "Designed collaborative filtering recommendation engine with 1M+ suggestions",
        "Built Redis-based real-time feature store handling 100K+ events/min"
      ],
      technologies: ["XGBoost", "Collaborative Filtering", "Redis", "Meta Ads Manager", "Recommendation Systems"],
      color: "bg-pink-50 border-pink-200"
    },
    {
      id: 6,
      title: "Data Scientist Intern",
      company: "Atlas Copco",
      period: "July 2021 – Dec 2021",
      location: "Pune, Maharashtra, India",
      type: "Internship",
      achievements: [
        "Developed predictive maintenance system reducing downtime by 58%",
        "Built time-series Isolation Forest model preventing 23 major equipment failures",
        "Created interactive Plotly dashboards for real-time production monitoring"
      ],
      technologies: ["Random Forest", "Time Series", "Isolation Forest", "Plotly", "Predictive Maintenance"],
      color: "bg-gray-50 border-gray-200"
    }
  ];

  return (
    <div className="mx-auto mt-8 w-full max-w-6xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Work Experience</h2>
        <p className="text-gray-600">My professional journey in Data Science & AI</p>
      </motion.div>

      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${exp.color} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              {/* Left side - Company info */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-1">{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Key Achievements</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right side - Technologies */}
              <div className="lg:w-64">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-white text-gray-700 border border-gray-200 rounded-md"
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

      {/* Contact section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Let's Connect!</h3>
        <p className="text-gray-600 mb-4">
          Interested in working together? I'm always open to new opportunities and collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="mailto:devarshi.wadadkar@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📧 Email
          </a>
          <a
            href="https://linkedin.com/in/devarshi-wadadkar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Devarshi0808"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
          >
            🐙 GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
