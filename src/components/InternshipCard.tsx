'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, Calendar, Users } from 'lucide-react';

interface InternshipCardProps {
  tool: {
    result: {
      lookingFor: string;
      role: string;
      availability: string;
    }
  }
}

const InternshipCard = ({ tool }: InternshipCardProps) => {
  const { result } = tool;
  const openMail = () => {
    window.open('mailto:mohammednihadkp7@gmail.com', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12 relative z-20"
    >
      {/* Header */}
      <div className="mb-10 flex flex-col items-center gap-y-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <img
            src="/avatar_nihad.jpeg"
            alt="Mohammed Nihad's avatar"
            className="bg-muted h-16 w-16 rounded-full object-cover object-top shadow-md"
          />
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Yes, I'm Looking!
            </h2>
            <p className="text-muted-foreground text-sm">
              Open to new opportunities
            </p>
          </div>
        </div>
        <div className="shrink-0">
          <span className="flex items-center gap-1.5 rounded-full border border-green-400 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available
          </span>
        </div>
      </div>
      
      {/* Opportunity Details Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <InfoCard
          icon={BriefcaseBusiness}
          title="Looking for"
          value={result.lookingFor}
        />
        <InfoCard
          icon={Users}
          title="Role"
          value={result.role}
        />
        <InfoCard
          icon={Calendar}
          title="Availability"
          value={result.availability}
        />
      </div>
      
      {/* Call to action */}
      <div className="mt-10 text-center">
         <p className="text-foreground text-base mb-4 max-w-xl mx-auto">
          I'm excited to bring my experience in AI and backend development to a forward-thinking team.
        </p>
        <button
          onClick={openMail}
          className="rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

// Helper component for the info cards
const InfoCard = ({ icon: Icon, title, value }: { icon: React.ElementType, title: string, value: string }) => (
  <div className="p-5 rounded-xl bg-background/50 flex-grow flex flex-col h-full">
    <div className="flex items-center gap-2 text-muted-foreground">
      <Icon className="h-4 w-4" />
      <p className="text-sm font-medium">{title}</p>
    </div>
    <div className="mt-auto pt-2">
      <p className="text-lg font-semibold text-foreground break-words">{value}</p>
    </div>
  </div>
);

export default InternshipCard;
