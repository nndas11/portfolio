import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with all projects
// const PROJECT_CONTENT = [
//   {
//     title: 'AI Portfolio | Interactive AI-Powered Resume',
//     description:
//       'Developed a dynamic AI-based portfolio enabling recruiters to interact with a chatbot and inquire about my projects, experience, skills, and resume in real time. Integrated LLM-based prompt engineering and deployed using Next.js, TypeScript, and Vercel for seamless performance and scalability. Enhanced candidate experience by enabling automated profile exploration, reducing manual review time for recruiters.',
//     techStack: [
//       'Next.js',
//       'TypeScript',
//       'Vercel',
//       'LLM Integration',
//       'Prompt Engineering',
//       'AI Chatbot',
//       'Real-time Interaction',
//       'Scalable Architecture'
//     ],
//     date: '2024',
//     category: 'AI-Powered Web Application'
//   },
//   {
//     title: 'TalkWithYourDB | Natural Language Database Query Tool',
//     description:
//       'Engineered a web application that allows users to connect to any database via connection string and query it using natural language. Implemented backend intelligence with AI-powered prompt engineering to convert user queries into SQL, enabling data access without technical expertise. Built with Next.js, TypeScript, and deployed on Vercel, supporting multiple database types and secure query execution.',
//     techStack: [
//       'Next.js',
//       'TypeScript',
//       'Vercel',
//       'AI Prompt Engineering',
//       'SQL Generation',
//       'Database Connectivity',
//       'Natural Language Processing',
//       'Secure Query Execution'
//     ],
//     date: '2024',
//     category: 'AI-Powered Database Tool'
//   },
//   {
//     title: 'Live ASL | Automatic Sign Language Translator',
//     description:
//       'Designed and implemented an ASL interpreter using a multi-layered random forest model trained on 10,000+ phrases, achieving 96% translation accuracy. The system provides real-time sign language translation, making communication accessible for hearing-impaired individuals.',
//     techStack: [
//       'Machine Learning',
//       'Multi-layered Random Forest',
//       'Computer Vision',
//       'Python',
//       'OpenCV',
//       'Real-time Processing',
//       'Accessibility Technology',
//       'High Accuracy Model'
//     ],
//     date: '2023',
//     category: 'Machine Learning Application'
//   },
//   {
//     title: 'Plastico | Mobile Web Application',
//     description:
//       'Developed Plastico, a mobile web app streamlining plastic and bio-waste procurement with logistics, grading, and tracking using ReactJS, NodeJS, and Firebase. The application won 3rd prize at a National Hackathon, demonstrating innovation in environmental technology and waste management solutions.',
//     techStack: [
//       'ReactJS',
//       'NodeJS',
//       'Firebase',
//       'Mobile Web App',
//       'Logistics Integration',
//       'Grading System',
//       'Tracking Functionality',
//       'Environmental Technology'
//     ],
//     date: '2023',
//     category: 'Mobile Web Application'
//   },
//   {
//     title: 'AutoTrack | Automatic Attendance System',
//     description:
//       'Built a CNN-based face recognition system with 95% accuracy using OpenCV, integrating it with a ReactJS and Flask interface for seamless attendance tracking. The system provides automated attendance management with high precision and user-friendly interface.',
//     techStack: [
//       'CNN (Convolutional Neural Networks)',
//       'OpenCV',
//       'ReactJS',
//       'Flask',
//       'Face Recognition',
//       'Python',
//       'High Accuracy System',
//       'Automated Tracking'
//     ],
//     date: '2023',
//     category: 'Computer Vision Application'
//   },
//   {
//     title: 'ChopServe | Omnichannel Retail Platform',
//     description:
//       'Developed ChopServe, a Golang and GraphQL-powered platform enabling multi-channel retail sales of fish, seafood, and meat. The platform provides comprehensive retail management with omnichannel capabilities for seamless customer experience across different sales channels.',
//     techStack: [
//       'Golang',
//       'GraphQL',
//       'Omnichannel Retail',
//       'Multi-channel Sales',
//       'Retail Platform',
//       'API Development',
//       'Scalable Architecture',
//       'E-commerce Integration'
//     ],
//     date: '2023',
//     category: 'Retail Platform'
//   }
// ];

// // Define interface for project prop
// interface ProjectProps {
//   title: string;
//   description?: string;
//   techStack?: string[];
//   date?: string;
//   category?: string;
// }

// const ProjectContent = ({ project }: { project: ProjectProps }) => {
//   // Find the matching project data
//   const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

//   if (!projectData) {
//     return <div>Project details not available</div>;
//   }

//   return (
//     <div className="space-y-8">
//       {/* Header section with description */}
//       <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
//               <span>{projectData.date}</span>
//             </div>
//             <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
//               {projectData.category}
//             </span>
//           </div>

//           <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
//             {projectData.description}
//           </p>

//           {/* Tech stack */}
//           <div className="pt-4">
//             <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
//               Technologies Used
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {projectData.techStack.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Main data export with updated content
// export const data = [
//   {
//     category: 'AI-Powered Web Application',
//     title: 'AI Portfolio | Interactive AI-Powered Resume',
//     content: <ProjectContent project={{ title: 'AI Portfolio | Interactive AI-Powered Resume' }} />,
//   },
//   {
//     category: 'AI-Powered Database Tool',
//     title: 'TalkWithYourDB | Natural Language Database Query Tool',
//     content: <ProjectContent project={{ title: 'TalkWithYourDB | Natural Language Database Query Tool' }} />,
//   },
//   {
//     category: 'Machine Learning Application',
//     title: 'Live ASL | Automatic Sign Language Translator',
//     content: <ProjectContent project={{ title: 'Live ASL | Automatic Sign Language Translator' }} />,
//   },
//   {
//     category: 'Mobile Web Application',
//     title: 'Plastico | Mobile Web Application',
//     content: <ProjectContent project={{ title: 'Plastico | Mobile Web Application' }} />,
//   },
//   {
//     category: 'Computer Vision Application',
//     title: 'AutoTrack | Automatic Attendance System',
//     content: <ProjectContent project={{ title: 'AutoTrack | Automatic Attendance System' }} />,
//   },
//   {
//     category: 'Retail Platform',
//     title: 'ChopServe | Omnichannel Retail Platform',
//     content: <ProjectContent project={{ title: 'ChopServe | Omnichannel Retail Platform' }} />,
//   },
// ];
export const projects = [
  // {
  //   title: 'Echo AI Router | Sustainable LLM Model Routing',
  //   category: 'AI Systems / Infrastructure',
  //   description:
  //     'Built a model-routing gateway that selects the lightest viable LLM per request based on prompt complexity, latency, cost, and carbon footprint, while preserving response quality with evaluation + telemetry.',
  //   tools: [
  //     { name: 'FastAPI' },
  //     { name: 'Python' },
  //     { name: 'Model Routing' },
  //     { name: 'LLM Evaluation' },
  //     { name: 'Hugging Face' },
  //     { name: 'Local Inference' },
  //     { name: 'Telemetry / Dashboards' }
  //   ]
  // },
  {
    title: 'VIGIL | Incident Triage & Safe Remediation Engine',
    category: 'Reliability / Distributed Systems',
    description:
      'Designed a human-on-the-loop incident workflow (trigger → investigate → remediate → verify) using a state machine with safety gates: PII redaction, sandboxed execution, approval for high-risk actions, and post-fix synthetic verification.',
    tools: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Redis (State)' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Slack Approvals' },
      { name: 'LLM (Claude)' }
    ]
  },
  {
    title: 'TalkWithYourDB | Natural Language → SQL Query Tool',
    category: 'Applied LLM Systems',
    description:
      'Built an LLM-based tool that converts natural language questions into SQL queries with guardrails, enabling users to query databases via connection strings with a focus on safe execution and clean UX.',
    tools: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Prompt Engineering' },
      { name: 'NL → SQL' },
      { name: 'PostgreSQL' },
      { name: 'Vector Search (Pinecone)' }
    ]
  },
  {
    title: 'Realtime Chat Service | WebSockets + Redis Pub/Sub',
    category: 'Backend / Distributed Systems',
    description:
      'Implemented a low-latency chat backend using WebSockets and Redis Pub/Sub for distributed messaging; containerized and deployed with Docker/Kubernetes and load-tested for high concurrency.',
    tools: [
      { name: 'Go (Golang)' },
      { name: 'WebSockets' },
      { name: 'Redis Pub/Sub' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Load Testing' }
    ]
  },
  {
    title: 'Weather–Complaint Analytics Data Pipeline',
    category: 'Data Engineering',
    description:
      'Built an end-to-end analytics pipeline combining complaint data with weather signals using Airflow orchestration, PostgreSQL storage, ML tasks, and Metabase dashboards in a Dockerized deployment.',
    tools: [
      { name: 'Python' },
      { name: 'Apache Airflow' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
      { name: 'Metabase' },
      { name: 'ETL / Data Modeling' }
    ]
  },
  {
    title: 'Log Aggregator CLI | Extensible Log Processing',
    category: 'Software Design / Java',
    description:
      'Built a Java-based log aggregation CLI to normalize and analyze logs from multiple sources; designed for extensibility using Strategy, Chain of Responsibility, and Registry patterns.',
    tools: [
      { name: 'Java' },
      { name: 'OOP' },
      { name: 'Design Patterns' },
      { name: 'Maven' }
    ]
  },
  {
    title: 'Campus Marketplace | Campus-Only E-Commerce Platform',
    category: 'Full-Stack / Distributed Components',
    description:
      'Developed a campus marketplace with Django REST APIs and scalable workflows using PostgreSQL + Redis + Kafka; deployed on AWS with Auto Scaling and integrated AI-powered search for discovery.',
    tools: [
      { name: 'Django REST Framework' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Kafka' },
      { name: 'AWS' },
      { name: 'Search (Gemini)' }
    ]
  },
  {
    title: 'Live ASL | Real-Time Sign Language Translator',
    category: 'Applied ML',
    description:
      'Built an ASL interpreter using a multi-layered Random Forest model trained on 10,000+ phrases, achieving 96% accuracy for sign-to-text/audio translation.',
    tools: [
      { name: 'Python' },
      { name: 'Machine Learning' },
      { name: 'Random Forest' },
      { name: 'Computer Vision' },
      { name: 'OpenCV' }
    ]
  },
  {
    title: 'Plastico | Waste Procurement & Tracking App',
    category: 'Full-Stack',
    description:
      'Built a mobile-first app for plastic and bio-waste procurement, integrating logistics, grading, and tracking workflows; won 3rd prize at a national hackathon.',
    tools: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Firebase' },
      { name: 'TypeScript' }
    ]
  },
  {
    title: 'ChopServe | Omnichannel Retail Platform (Production)',
    category: 'Industry / Backend Systems',
    description:
      'Architected and developed an omnichannel retail platform enabling multi-channel ordering, order management, and inventory tracking using Go + GraphQL with production-grade deployment practices.',
    tools: [
      { name: 'Go (Golang)' },
      { name: 'GraphQL' },
      { name: 'Microservices' },
      { name: 'PostgreSQL' },
      { name: 'Redis' }
    ]
  },
  {
    title: 'AI Portfolio | Interactive AI-Powered Resume',
    category: 'Developer Experience',
    description:
      'Built an interactive portfolio where recruiters can query my experience and projects via a chatbot, using structured prompt design and fast deployment for a smooth browsing experience.',
    tools: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Vercel' },
      { name: 'LLM Integration' }
    ]
  }
];
