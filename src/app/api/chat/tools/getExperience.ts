import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    "This tool will show a list of all work experience for Devarshi",
  parameters: z.object({}),
  execute: async () => {
    return `Here's my work experience:

**Reliance Jio (July 2025 – Present)**
- AI Intern in Frisco, Texas
- Designed hybrid AI Copilot for NOC engineers using CrewAI multi-agent architecture
- Reduced query latency from 200s to 30s using CPU-optimized llamafile models
- Built intelligent query routing and 1ms response caching for 7,000+ telecom sites
- Developed Python-driven dynamic code generation with voice commands and anomaly detection

**GE Healthcare (UW-Madison) (Jan 2025 – May 2025)**
- Data Science Research Assistant in Madison, Wisconsin
- Developed transformer-based anomaly detection achieving 94% F1-score on 2M+ HALT/HASS logs
- Built AutoML pipeline using Optuna, reducing hyperparameter selection time
- Deployed TensorFlow Serving API scaling to 10K+ predictions/sec

**EarnIn (June 2024 – Aug 2024)**
- Data Science Intern in Palo Alto, California
- Performed PySpark analysis on 1M+ users, improving risk precision by 28%
- Built rule-based payment prediction model with 87% date and 92% amount accuracy
- Created Bayesian A/B testing pipeline increasing product metrics by 8.5%

**USDA Lab (UW-Madison) (Jan 2024 – May 2024)**
- Data Science Research Assistant in Madison, Wisconsin
- Optimized computer vision pipelines reducing training time by 45%
- Developed machine learning models for agricultural data analysis
- Collaborated with research team on data preprocessing and model validation

**Mindbody (Jan 2023 – June 2023)**
- Data Scientist Intern in Pune, Maharashtra, India
- Built predictive models for customer behavior analysis
- Developed automated reporting systems using Python and SQL
- Implemented data visualization dashboards for business insights

**Atlas Copco (July 2021 – Dec 2021)**
- Data Scientist Intern in Pune, Maharashtra, India
- Developed machine learning models for predictive maintenance
- Created data pipelines for industrial IoT sensor data
- Built automated anomaly detection systems for manufacturing processes`;
  },
}); 