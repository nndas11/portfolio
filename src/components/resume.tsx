'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Download, Eye, File } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Resume() {
  // TODO: Replace this with your actual resume details
  const resumeDetails = {
    title: "Nihad's Resume",
    description: '[YOUR_ROLE] • [YOUR_SPECIALIZATION]',
    fileType: 'PDF',
    lastUpdated: '[LAST_UPDATED_DATE]',
    fileSize: '[FILE_SIZE]',
    previewImageSrc: '/[YOUR_RESUME_PREVIEW_IMAGE].png',
    downloadUrl: '/[YOUR_RESUME_FILE].pdf',
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = resumeDetails.downloadUrl.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Education Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎓 Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">San Jose State University</h3>
              <Badge variant="secondary">Fall 2025 - Present</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Masters in Software Engineering</p>
            <p className="text-sm text-muted-foreground">San Jose, California</p>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {['Data Mining', 'Advanced Data Structures & Algorithms', 'Computer Netwrok', 'Machine Learning', 'Enterpiose Distributed Systems'].map((course) => (
                  <Badge key={course} variant="outline" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">APJ Abdul Kalam Kerala Technological University</h3>
              <Badge variant="secondary">Aug 2018 - Jun 2022</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Bachelor of Technology in Computer Science</p>
            <p className="text-sm text-muted-foreground mb-2">GPA: 9.13/10</p>
            <p className="text-sm text-muted-foreground">Kerala, India</p>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {['Operating Systems', 'Data Structures & Algorithms', 'Database Design', 'Machine Learning', 'Cloud Computing', 'Distributed Computing', 'Computer Networks'].map((course) => (
                  <Badge key={course} variant="outline" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🛠️ Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1 text-sm">Programming Languages</h4>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Java', 'Python', 'Go', 'SQL', 'C++', 'JavaScript', 'TypeScript'].map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-sm">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Spring Boot', 'Gin Framework', 'Next.js', 'Flask', 'GraphQL', 'Redux'].map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-sm">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Vercel', 'Firebase', 'AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'ArgoCD', 'Prometheus', 'Grafana'].map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-sm">AI & Data</h4>
            <div className="flex flex-wrap gap-1 mb-2">
              {['LLM Prompt Engineering', 'Machine Learning', 'OpenCV', 'CNN', 'Random Forest', 'Data Visualization', 'SQL Generation'].map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-sm">Soft Skills</h4>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Team Collaboration', 'Problem Solving', 'Communication', 'Agile', 'Mentoring'].map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Work Experience Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💼 Work Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* CaptainFresh */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">CaptainFresh</h3>
                <p className="text-sm text-muted-foreground">Associate Software Developer</p>
              </div>
              <Badge variant="secondary">Mar 2023 - Jun 2025</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Bangalore, India</p>
            <ul className="space-y-1 text-sm">
              <li>• Built ChopServe omnichannel retail platform using Golang and GraphQL</li>
              <li>• Developed cash-management microservice for payment tracking</li>
              <li>• Migrated deployments to ArgoCD and implemented CI/CD pipelines</li>
              <li>• Worked on AWS infrastructure and Kubernetes clusters</li>
              <li>• Awarded Spot Award for outstanding contributions</li>
            </ul>
          </div>

          {/* Esper */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Esper</h3>
                <p className="text-sm text-muted-foreground">Software Development Engineer 1</p>
              </div>
              <Badge variant="secondary">Aug 2022 - Feb 2023</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Bangalore, India</p>
            <ul className="space-y-1 text-sm">
              <li>• Implemented Grafana, Prometheus, and Loki for observability</li>
              <li>• Engineered bookmark feature for ADB commands (70% efficiency improvement)</li>
              <li>• Collaborated on iOS device management backend</li>
            </ul>
          </div>

          {/* Ansys */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Ansys</h3>
                <p className="text-sm text-muted-foreground">R&D Engineering Intern</p>
              </div>
              <Badge variant="secondary">Mar 2022 - Jul 2022</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Remote</p>
            <ul className="space-y-1 text-sm">
              <li>• Worked on physical layout modeling in Ansys Totem</li>
              <li>• Optimized code leading to 24% performance increase</li>
              <li>• Resolved critical bugs improving efficiency by 20%</li>
            </ul>
          </div>

          {/* Progress Software */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Progress Software</h3>
                <p className="text-sm text-muted-foreground">Software Engineer Intern</p>
              </div>
              <Badge variant="secondary">Aug 2021 - Dec 2021</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Remote</p>
            <ul className="space-y-1 text-sm">
              <li>• Contributed to Autonomous REST Connector Recipes project</li>
              <li>• Reduced integration issues by 31%</li>
              <li>• Developed comprehensive test cases using TestNG</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Key Projects Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚀 Key Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* AI Portfolio */}
          <div>
            <h3 className="font-semibold mb-1">AI Portfolio | Interactive AI-Powered Resume</h3>
            <p className="text-sm text-muted-foreground mb-2">Dynamic AI-based portfolio with chatbot for real-time recruiter interaction</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Next.js', 'TypeScript', 'Vercel', 'LLM Integration', 'Prompt Engineering', 'AI Chatbot'].map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Enables recruiters to interactively explore projects, experience, and skills</li>
              <li>• Uses LLM-based prompt engineering for automated profile exploration</li>
              <li>• Deployed on Vercel for seamless performance and scalability</li>
            </ul>
          </div>

          {/* TalkWithYourDB */}
          <div>
            <h3 className="font-semibold mb-1">TalkWithYourDB | Natural Language Database Query Tool</h3>
            <p className="text-sm text-muted-foreground mb-2">Web app for querying any database using natural language</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Next.js', 'TypeScript', 'Vercel', 'AI Prompt Engineering', 'SQL Generation', 'Database Connectivity'].map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Converts user questions into SQL queries using AI</li>
              <li>• Supports multiple database types and secure query execution</li>
              <li>• Empowers non-technical users to access data easily</li>
            </ul>
          </div>

          {/* Live ASL */}
          <div>
            <h3 className="font-semibold mb-1">Live ASL | Automatic Sign Language Translator</h3>
            <p className="text-sm text-muted-foreground mb-2">ASL interpreter using multi-layered random forest model</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Machine Learning', 'Multi-layered Random Forest', 'Computer Vision', 'Python', 'OpenCV'].map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Achieved 96% translation accuracy on 10,000+ phrases</li>
              <li>• Real-time sign language to text/audio translation</li>
              <li>• Improves accessibility for hearing-impaired users</li>
            </ul>
          </div>

          {/* Plastico */}
          <div>
            <h3 className="font-semibold mb-1">Plastico | Mobile Web Application</h3>
            <p className="text-sm text-muted-foreground mb-2">Mobile app for plastic and bio-waste procurement with logistics</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {['ReactJS', 'NodeJS', 'Firebase', 'Mobile Web App', 'Logistics Integration'].map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Won 3rd prize at a National Hackathon</li>
              <li>• Integrated logistics, grading, and tracking for waste management</li>
              <li>• Demonstrated innovation in environmental technology</li>
            </ul>
          </div>

          {/* AutoTrack */}
          <div>
            <h3 className="font-semibold mb-1">AutoTrack | Automatic Attendance System</h3>
            <p className="text-sm text-muted-foreground mb-2">CNN-based face recognition system for attendance</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {['CNN', 'OpenCV', 'ReactJS', 'Flask', 'Face Recognition'].map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Achieved 95% accuracy in automated attendance tracking</li>
              <li>• Integrated ReactJS and Flask for a user-friendly interface</li>
              <li>• Real-time face detection and recognition</li>
            </ul>
          </div>

          {/* ChopServe */}
          <div>
            <h3 className="font-semibold mb-1">ChopServe | Omnichannel Retail Platform</h3>
            <p className="text-sm text-muted-foreground mb-2">Golang and GraphQL-powered platform for multi-channel retail</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {['Golang', 'GraphQL', 'Omnichannel Retail', 'Multi-channel Sales', 'API Development'].map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Enabled seamless retail sales of fish, seafood, and meat</li>
              <li>• Built scalable APIs for omnichannel management</li>
              <li>• Improved customer experience across sales channels</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Resume;