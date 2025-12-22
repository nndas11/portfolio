'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Go (Golang)', 'Java', 'C++', 'Python', 'TypeScript', 'JavaScript', 'SQL']
    },
    {
      title: 'CS Fundamentals',
      icon: '🧠',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Design',
        'System Design',
        'Distributed Systems',
        'Concurrency',
        'Networking Basics',
        'Security Basics'
      ]
    },
    {
      title: 'Backend & APIs',
      icon: '🔧',
      skills: [
        'Microservices Architecture',
        'REST APIs',
        'GraphQL',
        'gRPC',
        'Spring Boot',
        'Django REST Framework',
        'Node.js'
      ]
    },
    {
      title: 'Databases & Caching',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Distributed Systems & Messaging',
      icon: '📨',
      skills: ['Apache Kafka', 'Event-Driven Architecture', 'High-Throughput Pipelines']
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        'AWS (EKS, EC2, RDS, S3, VPC)',
        'Docker',
        'Kubernetes',
        'CI/CD (GitHub Actions, Jenkins)',
        'ArgoCD',
        'API Gateways (Kong, Ambassador)'
      ]
    },
    {
      title: 'Reliability & Observability',
      icon: '📊',
      skills: ['Grafana', 'Prometheus', 'Loki', 'Fluent Bit', 'Monitoring & Alerting', 'Logging']
    },
    {
      title: 'Applied AI Systems',
      icon: '🤖',
      skills: [
        'Large Language Models (LLMs)',
        'Prompt Engineering',
        'RAG Pipelines',
        'Natural Language → SQL',
        'Hugging Face',
        'Pinecone',
        'Model Routing & Evaluation',
        'Random Forest',
        'Computer Vision (OpenCV)'
      ]
    },
    {
      title: 'AI-Assisted Development',
      icon: '⚡',
      skills: ['Claude Code', 'Cursor', 'ChatGPT', 'Google Gemini', 'AI-assisted Debugging', 'AI-assisted Code Review']
    },
    {
      title: 'Developer Tools',
      icon: '🛠️',
      skills: ['Git', 'Linux', 'Bash', 'Maven', 'IntelliJ IDEA', 'VS Code', 'Bitbucket']
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'Next.js', 'Responsive UI Design', 'Ant Design', 'WebSockets']
    }
  ];

  // For Google team-matching, "Engineering Strengths" reads better than generic "Soft Skills".
  const engineeringStrengths = [
    'Production Backend Engineering',
    'Scalable Architecture Design',
    'Performance Optimization',
    'Debugging & Root Cause Analysis',
    'Cross-functional Collaboration'
  ];

  // Keep achievements only if you can verify them (resume/LinkedIn/certificate).
  const achievements = [
    // If Spot Award is real, keep it. If not verifiable, remove it to avoid mismatch.
    {
      title: 'Spot Award — CaptainFresh',
      desc: 'For outstanding individual contribution and scalable designs'
    },
    {
      title: '3rd Prize — National Hackathon',
      desc: 'Plastico: waste procurement & tracking platform'
    },
    {
      title: 'Microsoft Sponsor Award — Stanford GREEN AI Hackathon',
      desc: 'Echo AI Router: model routing to optimize latency, cost, and carbon footprint'
    },
    {
      title: '96% Accuracy — Live ASL Translator',
      desc: 'Real-time sign language to text/audio translation'
    },
    {
      title: '70% Workflow Improvement — Esper',
      desc: 'ADB bookmark feature for faster developer workflows'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🚀 Skills</CardTitle>
          <CardDescription>
            Backend, systems, and applied AI skills with a production engineering focus.
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

      {/* Engineering Strengths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🎯 Engineering Strengths</CardTitle>
          <CardDescription>How I approach building and operating systems.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {engineeringStrengths.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🏆 Highlights</CardTitle>
          <CardDescription>Impact-driven wins and recognition.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((a) => (
            <div key={a.title} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
