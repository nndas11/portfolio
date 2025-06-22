'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Sports = () => {
  const techProjects = [
    {
      name: "Live ASL - Sign Language Translator",
      achievement: "96% accuracy in real-time translation",
      impact: "Making communication accessible for hearing-impaired individuals",
      technologies: ["Python", "OpenCV", "Keras", "CNN", "MLRF"],
      icon: "🤖"
    },
    {
      name: "ChopServe Platform",
      achievement: "Spot Award for scalable architecture",
      impact: "Streamlined retail operations for fresh food delivery",
      technologies: ["Golang", "GraphQL", "React", "AWS", "Kubernetes"],
      icon: "🛒"
    },
    {
      name: "Plastico - Waste Management App",
      achievement: "3rd prize in National Hackathon",
      impact: "Environmental impact through efficient waste procurement",
      technologies: ["ReactJS", "NodeJS", "Firebase"],
      icon: "♻️"
    },
    {
      name: "ADB Bookmark Feature",
      achievement: "70% efficiency improvement",
      impact: "Enhanced mobile device management workflows",
      technologies: ["Golang", "Android", "ADB", "Kafka"],
      icon: "📱"
    }
  ];

  return (
    <div className="mx-auto w-full space-y-6">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Tech Journey & Projects
        </h2>
        <p className="mt-4 text-muted-foreground">
          From AI-powered accessibility tools to scalable microservices, here are some highlights 
          from my technical journey and the impact these projects have made.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {techProjects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{project.icon}</span>
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="text-xs">
                    {project.achievement}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.impact}
                </p>
              </div>
              
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-lg font-medium">
              🚀 Building systems that scale, code that's maintainable, and solutions that make a difference!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sports;