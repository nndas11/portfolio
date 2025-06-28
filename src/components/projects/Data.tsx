import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'AI Portfolio | Interactive AI-Powered Resume',
    description:
      'Developed a dynamic AI-based portfolio enabling recruiters to interact with a chatbot and inquire about my projects, experience, skills, and resume in real time. Integrated LLM-based prompt engineering and deployed using Next.js, TypeScript, and Vercel for seamless performance and scalability. Enhanced candidate experience by enabling automated profile exploration, reducing manual review time for recruiters.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Vercel',
      'LLM Integration',
      'Prompt Engineering',
      'AI Chatbot',
      'Real-time Interaction',
      'Scalable Architecture'
    ],
    date: '2024',
    category: 'AI-Powered Web Application'
  },
  {
    title: 'TalkWithYourDB | Natural Language Database Query Tool',
    description:
      'Engineered a web application that allows users to connect to any database via connection string and query it using natural language. Implemented backend intelligence with AI-powered prompt engineering to convert user queries into SQL, enabling data access without technical expertise. Built with Next.js, TypeScript, and deployed on Vercel, supporting multiple database types and secure query execution.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Vercel',
      'AI Prompt Engineering',
      'SQL Generation',
      'Database Connectivity',
      'Natural Language Processing',
      'Secure Query Execution'
    ],
    date: '2024',
    category: 'AI-Powered Database Tool'
  },
  {
    title: 'Live ASL | Automatic Sign Language Translator',
    description:
      'Designed and implemented an ASL interpreter using a multi-layered random forest model trained on 10,000+ phrases, achieving 96% translation accuracy. The system provides real-time sign language translation, making communication accessible for hearing-impaired individuals.',
    techStack: [
      'Machine Learning',
      'Multi-layered Random Forest',
      'Computer Vision',
      'Python',
      'OpenCV',
      'Real-time Processing',
      'Accessibility Technology',
      'High Accuracy Model'
    ],
    date: '2023',
    category: 'Machine Learning Application'
  },
  {
    title: 'Plastico | Mobile Web Application',
    description:
      'Developed Plastico, a mobile web app streamlining plastic and bio-waste procurement with logistics, grading, and tracking using ReactJS, NodeJS, and Firebase. The application won 3rd prize at a National Hackathon, demonstrating innovation in environmental technology and waste management solutions.',
    techStack: [
      'ReactJS',
      'NodeJS',
      'Firebase',
      'Mobile Web App',
      'Logistics Integration',
      'Grading System',
      'Tracking Functionality',
      'Environmental Technology'
    ],
    date: '2023',
    category: 'Mobile Web Application'
  },
  {
    title: 'AutoTrack | Automatic Attendance System',
    description:
      'Built a CNN-based face recognition system with 95% accuracy using OpenCV, integrating it with a ReactJS and Flask interface for seamless attendance tracking. The system provides automated attendance management with high precision and user-friendly interface.',
    techStack: [
      'CNN (Convolutional Neural Networks)',
      'OpenCV',
      'ReactJS',
      'Flask',
      'Face Recognition',
      'Python',
      'High Accuracy System',
      'Automated Tracking'
    ],
    date: '2023',
    category: 'Computer Vision Application'
  },
  {
    title: 'ChopServe | Omnichannel Retail Platform',
    description:
      'Developed ChopServe, a Golang and GraphQL-powered platform enabling multi-channel retail sales of fish, seafood, and meat. The platform provides comprehensive retail management with omnichannel capabilities for seamless customer experience across different sales channels.',
    techStack: [
      'Golang',
      'GraphQL',
      'Omnichannel Retail',
      'Multi-channel Sales',
      'Retail Platform',
      'API Development',
      'Scalable Architecture',
      'E-commerce Integration'
    ],
    date: '2023',
    category: 'Retail Platform'
  }
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  category?: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-8">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span>{projectData.date}</span>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {projectData.category}
            </span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'AI-Powered Web Application',
    title: 'AI Portfolio | Interactive AI-Powered Resume',
    content: <ProjectContent project={{ title: 'AI Portfolio | Interactive AI-Powered Resume' }} />,
  },
  {
    category: 'AI-Powered Database Tool',
    title: 'TalkWithYourDB | Natural Language Database Query Tool',
    content: <ProjectContent project={{ title: 'TalkWithYourDB | Natural Language Database Query Tool' }} />,
  },
  {
    category: 'Machine Learning Application',
    title: 'Live ASL | Automatic Sign Language Translator',
    content: <ProjectContent project={{ title: 'Live ASL | Automatic Sign Language Translator' }} />,
  },
  {
    category: 'Mobile Web Application',
    title: 'Plastico | Mobile Web Application',
    content: <ProjectContent project={{ title: 'Plastico | Mobile Web Application' }} />,
  },
  {
    category: 'Computer Vision Application',
    title: 'AutoTrack | Automatic Attendance System',
    content: <ProjectContent project={{ title: 'AutoTrack | Automatic Attendance System' }} />,
  },
  {
    category: 'Retail Platform',
    title: 'ChopServe | Omnichannel Retail Platform',
    content: <ProjectContent project={{ title: 'ChopServe | Omnichannel Retail Platform' }} />,
  },
];

export const projects = [
  {
    title: 'AI Portfolio | Interactive AI-Powered Resume',
    category: 'AI-Powered Web Application',
    description: 'Developed a dynamic AI-based portfolio enabling recruiters to interact with a chatbot and inquire about my projects, experience, skills, and resume in real time.',
    tools: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Vercel' },
      { name: 'LLM Integration' },
      { name: 'AI Chatbot' }
    ],
  },
  {
    title: 'TalkWithYourDB | Natural Language Database Query Tool',
    category: 'AI-Powered Database Tool',
    description: 'Engineered a web application that allows users to connect to any database via connection string and query it using natural language.',
    tools: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'AI Prompt Engineering' },
      { name: 'SQL Generation' },
      { name: 'Database Connectivity' }
    ],
  },
  {
    title: 'Live ASL | Automatic Sign Language Translator',
    category: 'Machine Learning Application',
    description: 'Designed and implemented an ASL interpreter using a multi-layered random forest model trained on 10,000+ phrases, achieving 96% translation accuracy.',
    tools: [
      { name: 'Machine Learning' },
      { name: 'Multi-layered Random Forest' },
      { name: 'Computer Vision' },
      { name: 'Python' },
      { name: 'OpenCV' }
    ],
  },
  {
    title: 'Plastico | Mobile Web Application',
    category: 'Mobile Web Application',
    description: 'Developed Plastico, a mobile web app streamlining plastic and bio-waste procurement with logistics, grading, and tracking using ReactJS, NodeJS, and Firebase.',
    tools: [
      { name: 'ReactJS' },
      { name: 'NodeJS' },
      { name: 'Firebase' },
      { name: 'Mobile Web App' },
      { name: 'Logistics Integration' }
    ],
  },
  {
    title: 'AutoTrack | Automatic Attendance System',
    category: 'Computer Vision Application',
    description: 'Built a CNN-based face recognition system with 95% accuracy using OpenCV, integrating it with a ReactJS and Flask interface for seamless attendance tracking.',
    tools: [
      { name: 'CNN' },
      { name: 'OpenCV' },
      { name: 'ReactJS' },
      { name: 'Flask' },
      { name: 'Face Recognition' }
    ],
  },
  {
    title: 'ChopServe | Omnichannel Retail Platform',
    category: 'Retail Platform',
    description: 'Developed ChopServe, a Golang and GraphQL-powered platform enabling multi-channel retail sales of fish, seafood, and meat.',
    tools: [
      { name: 'Golang' },
      { name: 'GraphQL' },
      { name: 'Omnichannel Retail' },
      { name: 'Multi-channel Sales' },
      { name: 'API Development' }
    ],
  },
];
