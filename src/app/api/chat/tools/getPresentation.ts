import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Mohammed Nihad. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Mohammed Nihad, a 25-year-old Software Engineering graduate student at San Jose State University. I have 3+ years of experience building scalable microservices and DevOps solutions. I'm passionate about AI/ML, backend development with Golang and Java, and creating systems that make a real impact.",
    };
  },
});
