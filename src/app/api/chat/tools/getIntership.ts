import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of Devarshi's current internship and experience. Use this tool when the user asks about his internship or work experience.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's my current experience 👇

- 🏢 **Current**: AI Intern at **Reliance Jio** in Frisco, Texas
- 📅 **Recent**: Research Assistantship at **GE Healthcare** (94% F1 score on 2M+ HALT/HASS logs)
- 🏢 **Previous**: Internships at **EarnIn**, **USDA**, **Mindbody**, **Atlas Copco**
- 🧑‍💻 **Focus**: AI/ML, Data Science, Transformer models, RAG pipelines
- 🛠️ **Stack**: Python, PySpark, XGBoost, TensorFlow, PyTorch, AWS, GCP
- ✅ **What I bring**: Real experience with anomaly detection, risk modeling, predictive maintenance, and real-time dashboards
- 🔥 I blend deep tech with strong product thinking and I'm hungry for impact!

📬 **Contact me** via:
- Email: [your-email@example.com]
- LinkedIn: [linkedin.com/in/devarshi-wadadkar]
- GitHub: [github.com/Devarshi0808](https://github.com/Devarshi0808)

Let's build amazing AI solutions together! 🚀
    `;
  },
});
