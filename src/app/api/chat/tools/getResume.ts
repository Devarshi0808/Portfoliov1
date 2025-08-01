import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool shows Devarshi\'s resume.',
  parameters: z.object({}),
  execute: async () => {
    return "You can download my resume by clicking on the link above. It includes my experience at GE Healthcare, EarnIn, USDA, Mindbody, Atlas Copco, and my current AI internship at Reliance Jio.";
  },
});
