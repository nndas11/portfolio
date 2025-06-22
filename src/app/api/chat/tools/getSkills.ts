import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool returns Mohammed Nihad\'s technical skills and expertise. Use this when users ask about skills, technologies, or technical background.',
  parameters: z.object({}),
  execute: async () => {
    return {
      skills: {
        programmingLanguages: ['Golang', 'Java', 'C++', 'Python', 'TypeScript', 'JavaScript'],
        frontend: ['ReactJS', 'NodeJS', 'Ant Design', 'Responsive UI Design'],
        backend: ['GraphQL', 'REST APIs', 'Microservices Architecture', 'Spring Boot'],
        databases: ['SQL', 'NoSQL', 'Database Design'],
        devops: ['AWS', 'Docker', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'CI/CD'],
        monitoring: ['Grafana', 'Prometheus', 'Loki', 'Fluent Bit'],
        ai_ml: ['OpenCV', 'Keras', 'CNN', 'Random Forest', 'Computer Vision', 'Data Mining'],
        tools: ['Git', 'Eclipse IDE', 'TestNG', 'Bitbucket Pipelines'],
        softSkills: [
          'Team Collaboration',
          'Problem Solving',
          'Scalable Architecture Design',
          'Performance Optimization',
          'Cross-functional Communication',
          'API Integration',
          'Infrastructure as Code'
        ],
        expertise: [
          'Full-stack Development',
          'Microservices Architecture',
          'DevOps & Cloud Infrastructure',
          'AI/ML Implementation',
          'System Optimization',
          'Mobile App Development',
          'API Gateway Management'
        ]
      }
    };
  },
});
