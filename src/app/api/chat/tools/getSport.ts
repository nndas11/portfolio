import { tool } from "ai";
import { z } from "zod";

export const getSport = tool({
  description:
    "This tool returns information about Mohammed Nihad's tech projects and achievements. Use this when users ask about projects, technical work, or achievements.",
  parameters: z.object({}),
  execute: async () => {
    return {
      techProjects: {
        title: "My Tech Journey & Projects",
        projects: [
          {
            name: "Live ASL - Sign Language Translator",
            achievement: "96% accuracy in real-time translation",
            impact: "Making communication accessible for hearing-impaired individuals"
          },
          {
            name: "ChopServe Platform",
            achievement: "Spot Award for scalable architecture",
            impact: "Streamlined retail operations for fresh food delivery"
          },
          {
            name: "Plastico - Waste Management App",
            achievement: "3rd prize in National Hackathon",
            impact: "Environmental impact through efficient waste procurement"
          },
          {
            name: "ADB Bookmark Feature",
            achievement: "70% efficiency improvement",
            impact: "Enhanced mobile device management workflows"
          }
        ],
        philosophy: "Building systems that scale, code that's maintainable, and solutions that make a difference! 🚀"
      }
    };
  },
});