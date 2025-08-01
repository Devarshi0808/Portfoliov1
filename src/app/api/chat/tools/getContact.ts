import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows Devarshi\'s contact information.',
  parameters: z.object({}),
  execute: async () => {
    return "Here is my contact information above. Feel free to reach out - I'm always happy to connect and discuss opportunities! 😊";
  },
});
