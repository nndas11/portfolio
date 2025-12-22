import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    "Returns Mohammed Nihad's technical skills with a focus on computer science fundamentals, backend systems, and production engineering experience.",
  parameters: z.object({}),
  execute: async () => {
    return {
      skills: {
        coreLanguages: [
          'Go (Golang)',
          'Java',
          'C++',
          'Python',
          'TypeScript',
          'SQL'
        ],

        computerScienceFundamentals: [
          'Data Structures & Algorithms',
          'Object-Oriented Design',
          'System Design',
          'Distributed Systems',
          'Concurrency & Multithreading',
          'Networking Basics',
          'Operating Systems Concepts'
        ],

        backendAndSystems: [
          'Microservices Architecture',
          'REST APIs',
          'GraphQL',
          'gRPC',
          'Event-Driven Systems',
          'High-Throughput & Low-Latency Systems'
        ],

        dataAndMessaging: [
          'PostgreSQL',
          'MySQL',
          'Redis',
          'Apache Kafka',
          'Database Design & Query Optimization'
        ],

        cloudAndInfrastructure: [
          'AWS (EKS, EC2, RDS, S3)',
          'Docker',
          'Kubernetes',
          'CI/CD Pipelines',
          'API Gateways (Kong, Ambassador)'
        ],

        reliabilityAndObservability: [
          'Monitoring & Alerting',
          'Grafana',
          'Prometheus',
          'Centralized Logging (Loki, Fluent Bit)',
          'High Availability & Fault Tolerance'
        ],

        aiAndAppliedML: [
          'Large Language Models (LLMs)',
          'Prompt Engineering',
          'Retrieval-Augmented Generation (RAG)',
          'Natural Language to SQL Systems',
          'Classical Machine Learning (Random Forest)',
          'Computer Vision (OpenCV)'
        ],

        developerTools: [
          'Git',
          'Linux',
          'Bash',
          'IntelliJ IDEA',
          'VS Code',
          'Maven'
        ],

        engineeringStrengths: [
          'Production-Grade Backend Development',
          'Scalable System Design',
          'Performance Optimization',
          'Debugging & Root Cause Analysis',
          'Cross-Team Collaboration'
        ]
      }
    };
  },
});
