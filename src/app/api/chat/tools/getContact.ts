import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool show a my contact informations.',
  parameters: z.object({}),
  execute: async () => {
    return {
      contact: {
        email: 'mohammednihadkp7@gmail.com', // Replace with actual email
        linkedin: 'https://linkedin.com/in/mohammed-nihad', // Replace with actual LinkedIn
        github: 'https://github.com/nndas11', // Replace with actual GitHub
        leetcode: 'YOUR_LEETCODE_URL', // Add your LeetCode URL here
        location: 'San Jose, California',
        availability: 'Open to Interships and Colloborations',
        preferredContact: 'Email or LinkedIn for professional inquiries'
      }
    };
  },
});
