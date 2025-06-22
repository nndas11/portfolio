'use client';

import React from 'react';
import { ChevronRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { LeetCodeIcon } from './ui/leetcode-icon';

interface ContactInfo {
  email: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
  availability: string;
  preferredContact: string;
}

export function Contact({ contactInfo }: { contactInfo: ContactInfo }) {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const socials = [
    { name: 'LinkedIn', url: contactInfo.linkedin, icon: Linkedin },
    { name: 'Github', url: contactInfo.github, icon: Github },
    { name: 'LeetCode', url: contactInfo.leetcode, icon: LeetCodeIcon },
  ].filter(social => social.url && social.url !== 'YOUR_LEETCODE_URL');

  return (
    <div className="mx-auto mt-8 w-full font-sans">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 sm:px-10 md:px-16 md:py-12">
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mt-1">
              Let's connect and build something great together.
            </p>
          </div>
          <span className="mt-4 sm:mt-0 text-muted-foreground text-sm shrink-0">
            {contactInfo.location}
          </span>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Email and Socials */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold mb-2">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="group inline-flex items-center gap-2 text-base font-medium text-blue-500 hover:underline"
              >
                {contactInfo.email}
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3">Find me on</p>
              <div className="flex items-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title={social.name}
                  >
                    <social.icon className="h-7 w-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Availability */}
          <div className="space-y-6">
             <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 mt-1 text-muted-foreground shrink-0" />
              <div>
                <p className="text-sm font-semibold">Preferred Contact</p>
                <p className="text-sm text-muted-foreground">{contactInfo.preferredContact}</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 mt-1 text-muted-foreground shrink-0" />
              <div>
                <p className="text-sm font-semibold">Availability</p>
                <p className="text-sm text-muted-foreground">{contactInfo.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
