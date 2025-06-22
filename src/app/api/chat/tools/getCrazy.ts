import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool returns something interesting or unique about Mohammed Nihad. Use this when users ask about something crazy, interesting, or unique.",
  parameters: z.object({}),
  execute: async () => {
    return {
      crazy: {
        title: "The 96% Accuracy AI Model That Almost Didn't Happen",
        story: "During my Live ASL project, I was working with a dataset of 10,000+ sign language phrases. The crazy part? I initially thought the 96% accuracy was a bug! I spent an entire weekend debugging what I thought was an error, only to realize the model was actually performing that well. Sometimes the best results are the ones you least expect! 🎯"
      }
    };
  },
});