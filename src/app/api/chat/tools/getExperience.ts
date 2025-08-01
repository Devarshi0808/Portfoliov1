import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    "This tool will show a list of all work experience for Devarshi",
  parameters: z.object({}),
  execute: async () => {
    return "Here are all the work experiences for Devarshi (above)! Don't hesitate to ask me more about them!";
  },
}); 