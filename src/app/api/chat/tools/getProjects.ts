import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool returns Mohammed Nihad's key projects and achievements. Use this when users ask about projects, portfolio work, or technical achievements.",
  parameters: z.object({}),
  execute: async () => {
    return {
      projects: [
        {
          name: 'Live ASL - Automatic Sign Language Translator',
          description: 'American Sign Language interpreter for meeting platforms like Zoom and Google Meet',
          technologies: ['Python', 'OpenCV', 'Keras', 'CNN', 'Multi-layered Random Forest'],
          achievements: [
            'Trained MLRF model on dataset of 10,000+ phrases',
            'Achieved 96% accuracy in sign language to text/audio translation',
            'Real-time processing for video conferencing platforms'
          ],
          impact: 'Enables accessibility for hearing-impaired individuals in digital communication'
        },
        {
          name: 'Plastico - Mobile Web Application',
          description: 'Revolutionary mobile web app for plastic and bio-waste procurement',
          technologies: ['ReactJS', 'NodeJS', 'Firebase', 'Logistics Integration'],
          achievements: [
            'Integrated logistics services and grading systems',
            'Implemented tracking functionalities',
            'Secured 3rd prize in National-level Hackathon'
          ],
          impact: 'Environmental impact through efficient waste management and procurement'
        },
        {
          name: 'AutoTrack - Automatic Attendance System',
          description: 'Face recognition system for automated attendance tracking',
          technologies: ['Python', 'OpenCV', 'CNN', 'ReactJS', 'Flask'],
          achievements: [
            '95% accuracy across diverse lighting and condition variations',
            'User-friendly interface for streamlined attendance management',
            'Real-time face detection and recognition'
          ],
          impact: 'Automated attendance tracking reducing manual work and improving accuracy'
        },
        {
          name: 'ChopServe Platform (CaptainFresh)',
          description: 'Omnichannel retail platform for fresh fish, seafood, and meat',
          technologies: ['Golang', 'GraphQL', 'React', 'AWS', 'Kubernetes', 'ArgoCD'],
          achievements: [
            'Multi-channel sales support (retail, WhatsApp, ONDC)',
            'End-to-end order management and inventory tracking',
            'Cash-management microservice for payment transparency',
            'Awarded Spot Award for outstanding contributions'
          ],
          impact: 'Streamlined retail operations and improved customer experience'
        }
      ]
    };
  },
});