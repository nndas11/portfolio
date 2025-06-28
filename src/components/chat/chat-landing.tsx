'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BriefcaseBusiness,
  Code,
  FileText,
  GraduationCap,
  Mail,
  MessageSquare,
  Layers,
  UserRoundSearch,
  Laugh,
} from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Resume: "Can I see your resume? I'd like to review your experience.",
  Contact:
    'How can I reach you? What kind of project would make you say "yes" immediately?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Resume', color: '#B95F9D', icon: FileText },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Welcome message */}
      <motion.div className="mb-8 text-center" variants={itemVariants as any}>
        <h2 className="mb-3 text-2xl font-semibold">
            I'm here to answer your query...
        </h2>
        <p className="text-muted-foreground mx-auto max-w-md">
          The first portfolio that fit YOU needs.
        </p>
      </motion.div>

      {/* Suggested questions */}
      <motion.div
        className="w-full max-w-md space-y-3"
        variants={containerVariants}
      >
        {questionConfig.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.key}
              className="bg-accent hover:bg-accent/80 flex w-full items-center rounded-lg p-4 text-left transition-colors"
              onClick={() => submitQuery(questions[item.key])}
              // variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="mr-4 rounded-full p-2"
                style={{ backgroundColor: `${item.color}33` }} // 33 for 20% opacity
              >
                <Icon className="h-5 w-5" style={{ color: item.color }} />
              </span>
              <div>
                <p className="font-semibold">{item.key}</p>
                <p className="text-sm text-muted-foreground">
                  {questions[item.key].length > 40
                    ? `${questions[item.key].substring(0, 40)}...`
                    : questions[item.key]}
                </p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ChatLanding;
