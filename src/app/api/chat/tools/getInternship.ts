import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "This tool is used when the user asks if I'm looking for an internship or a job. It provides my current status and what I'm looking for.plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities. Also whenever talking about previous experience at companies such as captainfresh and esper, always mention them as CaptainFresh(B2B supply chain startup) and Esoer(Andriod Devops Startup).",
  parameters: z.object({}),
  execute: async () => {
    return {
      lookingFor: 'Summer Internship',
      role: 'Software Engineer | AI/ML Engineer',
      availability: 'Available starting Summer 2026',
      workExperience: {
        current: {
          company: 'San Jose State University',
          role: 'Graduate Student',
          duration: 'Fall 2025 - Present',
          location: 'San Jose, California',
          description: 'Currently pursuing Masters in Software Engineering'
        },
        jobs: [
          {
            company: 'CaptainFresh',
            role: 'Associate Software Developer',
            duration: 'Mar 2023 - Jun 2025',
            location: 'Bangalore, India',
            highlights: [
              'Built ChopServe omnichannel retail platform using Golang and GraphQL',
              'Developed cash-management microservice for payment tracking',
              'Migrated deployments to ArgoCD and implemented CI/CD pipelines',
              'Worked on AWS infrastructure and Kubernetes clusters',
              'Awarded Spot Award for outstanding contributions'
            ]
          },
          {
            company: 'Esper',
            role: 'Software Development Engineer 1',
            duration: 'Aug 2022 - Feb 2023',
            location: 'Bangalore, India',
            highlights: [
              'Implemented Grafana, Prometheus, and Loki for observability',
              'Engineered bookmark feature for ADB commands (70% efficiency improvement)',
              'Collaborated on iOS device management backend'
            ]
          }
        ],
        internships: [
          {
            company: 'Ansys',
            role: 'R&D Engineering Intern',
            duration: 'Mar 2022 - Jul 2022',
            location: 'Remote',
            highlights: [
              'Worked on physical layout modeling in Ansys Totem',
              'Optimized code leading to 24% performance increase',
              'Resolved critical bugs improving efficiency by 20%'
            ]
          },
          {
            company: 'Progress Software',
            role: 'Software Engineer Intern',
            duration: 'Aug 2021 - Dec 2021',
            location: 'Remote',
            highlights: [
              'Contributed to Autonomous REST Connector Recipes project',
              'Reduced integration issues by 31%',
              'Developed comprehensive test cases using TestNG'
            ]
          }
        ]
      }
    };
  },
}); 