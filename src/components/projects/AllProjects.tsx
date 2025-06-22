"use client";

import React from 'react';
import { projects } from './Data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Github, Link } from 'lucide-react';

const AllProjects = () => {
  return (
    <div className="mx-auto w-full py-8">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={`/${project.src}`}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <Badge key={i} variant="secondary">{tool.name}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:underline">
                  <Github size={16} />
                  GitHub
                </a>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:underline">
                  <Link size={16} />
                  Live Demo
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
