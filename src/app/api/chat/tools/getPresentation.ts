import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Devarshi Wadadkar. It is used to answer the question "Who are you?" or "Tell me about yourself". NOTE: When this tool is called, respond with ONLY "." to avoid duplicating the visual presentation.',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Devarshi Wadadkar, a 24-year-old Data Scientist & AI tinkerer based in the Bay Area, CA. I recently completed my MS in Data Science from UW-Madison and I'm passionate about building ML systems that solve real-world problems. I love simplifying complex things and I'm hungry for impact!",
    };
  },
});
