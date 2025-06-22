'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Golang', 'Java', 'C++', 'Python', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['ReactJS', 'NodeJS', 'Ant Design', 'Responsive UI Design']
    },
    {
      title: 'Backend & APIs',
      icon: '🔧',
      skills: ['GraphQL', 'REST APIs', 'Microservices', 'Spring Boot']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['SQL', 'NoSQL', 'Database Design']
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'CI/CD']
    },
    {
      title: 'Monitoring & Observability',
      icon: '📊',
      skills: ['Grafana', 'Prometheus', 'Loki', 'Fluent Bit']
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['OpenCV', 'Keras', 'CNN', 'Random Forest', 'Computer Vision', 'Data Mining']
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'Eclipse IDE', 'TestNG', 'Bitbucket Pipelines']
    }
  ];

  const softSkills = [
    'Team Collaboration',
    'Problem Solving',
    'Scalable Architecture Design',
    'Performance Optimization',
    'Cross-functional Communication',
    'API Integration',
    'Infrastructure as Code'
  ];

  const expertise = [
    'Full-stack Development',
    'Microservices Architecture',
    'DevOps & Cloud Infrastructure',
    'AI/ML Implementation',
    'System Optimization',
    'Mobile App Development',
    'API Gateway Management'
  ];

  return (
    <div className="space-y-6">
      {/* Technical Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚀 Technical Skills
          </CardTitle>
          <CardDescription>
            Technologies and tools I work with
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                {category.icon} {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="default" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Soft Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🤝 Soft Skills
          </CardTitle>
          <CardDescription>
            Professional competencies and interpersonal skills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Areas of Expertise */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎯 Areas of Expertise
          </CardTitle>
          <CardDescription>
            Specialized domains and technical focus areas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {expertise.map((area) => (
              <Badge key={area} variant="secondary" className="text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🏆 Key Achievements
          </CardTitle>
          <CardDescription>
            Notable accomplishments and recognitions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">Spot Award at CaptainFresh</p>
              <p className="text-sm text-muted-foreground">For outstanding individual contribution and scalable designs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">3rd Prize in National Hackathon</p>
              <p className="text-sm text-muted-foreground">For Plastico project - environmental impact through waste management</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">96% Accuracy in AI Model</p>
              <p className="text-sm text-muted-foreground">Live ASL sign language translator with real-time processing</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">70% Efficiency Improvement</p>
              <p className="text-sm text-muted-foreground">ADB bookmark feature at Esper for mobile device management</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
