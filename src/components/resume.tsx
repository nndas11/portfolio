'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Resume() {
  /**
   * ✅ Google-optimized resume section
   * - No placeholders
   * - Consistent + high-signal bullets (impact, scale, systems)
   * - Typos fixed
   * - Skills aligned with backend/systems + applied AI
   *
   * NOTE: Put your PDF in /public as: /MohammedNihad_Resume.pdf
   * Optional: add preview image in /public as: /resume-preview.png
   */
  const resumeDetails = {
    title: "Mohammed Nihad K P — Resume",
    description: 'Backend & Distributed Systems • Go/Java • Cloud-Native • Applied LLM Systems',
    fileType: 'PDF',
    lastUpdated: 'Dec 2025',
    fileSize: '—',
    previewImageSrc: '/resume-preview.png', // optional
    downloadUrl: '/MohammedNihad_Resume.pdf',
    externalLinks: {
      linkedin: 'https://linkedin.com/in/mohammed-nihad',
      portfolio: 'https://mohammednihadkp.vercel.app', // change if different
      github: 'https://github.com/', // add your exact profile
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = resumeDetails.downloadUrl.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    window.open(resumeDetails.downloadUrl, '_blank', 'noopener,noreferrer');
  };

  const skillGroups = [
    {
      title: 'Languages',
      skills: ['Go (Golang)', 'Java', 'C++', 'Python', 'TypeScript', 'SQL']
    },
    {
      title: 'CS / Systems',
      skills: ['Data Structures & Algorithms', 'OOP', 'System Design', 'Distributed Systems', 'Concurrency']
    },
    {
      title: 'Backend',
      skills: ['Microservices', 'REST', 'GraphQL', 'gRPC', 'Kafka', 'Redis', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Cloud / DevOps',
      skills: ['AWS (EKS/EC2/RDS/S3)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions, Jenkins)', 'ArgoCD']
    },
    {
      title: 'Observability',
      skills: ['Grafana', 'Prometheus', 'Loki', 'Fluent Bit', 'Monitoring & Alerting']
    },
    {
      title: 'Applied AI',
      skills: ['LLMs', 'RAG', 'NL → SQL', 'Hugging Face', 'Pinecone', 'Model Routing', 'OpenCV', 'Random Forest']
    },
    {
      title: 'AI Dev Tools',
      skills: ['Claude Code', 'Cursor', 'ChatGPT', 'Google Gemini']
    }
  ];

  const keyProjects = [
    {
      name: 'Echo AI Router',
      oneLiner:
        'Model-routing gateway selecting the lightest viable model per request to optimize latency, cost, and carbon footprint while preserving quality.',
      tech: ['FastAPI', 'Python', 'Hugging Face', 'Telemetry', 'Evaluation']
    },
    {
      name: 'VIGIL',
      oneLiner:
        'Human-on-the-loop incident triage + safe remediation workflow with sandboxed execution, approval gates, and post-fix verification.',
      tech: ['Node.js', 'Redis State', 'Docker', 'Kubernetes', 'LLM (Claude)']
    },
    {
      name: 'Realtime Chat Service',
      oneLiner:
        'Low-latency chat backend using WebSockets + Redis Pub/Sub; containerized and deployed with scalability in mind.',
      tech: ['Go', 'WebSockets', 'Redis', 'Docker', 'Kubernetes']
    },
    {
      name: 'TalkWithDB',
      oneLiner:
        'Natural language → SQL tool with guardrails for safe database querying and strong UX.',
      tech: ['Next.js', 'TypeScript', 'Pinecone', 'Prompting', 'PostgreSQL']
    }
  ];

  const achievements = [
    {
      title: 'Microsoft Sponsor Award — Stanford GREEN AI Hackathon',
      desc: 'Echo AI Router (sustainable model routing)'
    },
    {
      title: '3rd Prize — National Hackathon',
      desc: 'Plastico (waste procurement & tracking platform)'
    }
    // Add other awards ONLY if verifiable (resume/LinkedIn/cert).
  ];

  return (
    <div className="space-y-6">
      {/* Resume Download / Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Resume
          </CardTitle>
          <CardDescription>{resumeDetails.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{resumeDetails.fileType}</Badge>
            <Badge variant="outline">Updated: {resumeDetails.lastUpdated}</Badge>
            {resumeDetails.fileSize !== '—' && <Badge variant="outline">Size: {resumeDetails.fileSize}</Badge>}
          </div>

          <div className="flex flex-wrap gap-2">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handlePreview}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
            >
              <Eye className="h-4 w-4" /> Preview
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Download PDF
            </motion.button>

            <a
              href={resumeDetails.externalLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
            >
              <ExternalLink className="h-4 w-4" /> LinkedIn
            </a>

            <a
              href={resumeDetails.externalLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
            >
              <ExternalLink className="h-4 w-4" /> Portfolio
            </a>
          </div>

          {/* Optional preview image */}
          <div className="pt-2">
            <div className="relative w-full overflow-hidden rounded-lg border bg-muted">
              <div className="aspect-[16/10] w-full">
                <Image
                  src={resumeDetails.previewImageSrc}
                  alt="Resume preview"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // hide broken image (no console noise)
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Tip: Add <code>/public/resume-preview.png</code> for a visual preview (optional).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🎓 Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <div className="flex justify-between items-start gap-3 mb-1">
              <h3 className="font-semibold">San José State University</h3>
              <Badge variant="secondary">Aug 2025 – May 2027 (Expected)</Badge>
            </div>
            <p className="text-sm text-muted-foreground">M.S. in Software Engineering • San Jose, CA</p>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {['Object-Oriented Design', 'Distributed Systems', 'Data Mining', 'Enterprise Software Systems'].map(
                  (course) => (
                    <Badge key={course} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start gap-3 mb-1">
              <h3 className="font-semibold">APJ Abdul Kalam Kerala Technological University</h3>
              <Badge variant="secondary">Aug 2018 – Jun 2022</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              B.Tech in Computer Science • GPA: 9.13/10 • Kerala, India
            </p>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {['Operating Systems', 'Data Structures & Algorithms', 'Database Systems', 'Computer Networks'].map(
                  (course) => (
                    <Badge key={course} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills (Google scan-friendly) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🛠️ Skills</CardTitle>
          <CardDescription>Backend + systems first, with applied AI and modern developer tooling.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-2 text-sm">{group.title}</h4>
              <div className="flex flex-wrap gap-1">
                {group.skills.map((s) => (
                  <Badge key={s} variant="outline" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Work Experience (impact + scale) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">💼 Experience</CardTitle>
          <CardDescription>Selected highlights focused on scalable systems and production impact.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* CaptainFresh */}
          <div>
            <div className="flex justify-between items-start gap-3 mb-1">
              <div>
                <h3 className="font-semibold">CaptainFresh</h3>
                <p className="text-sm text-muted-foreground">Software Developer • Bangalore, India</p>
              </div>
              <Badge variant="secondary">Mar 2023 – Jul 2025</Badge>
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Built a Java microservice for cash management, cutting financial discrepancies by 95%.</li>
              <li>
                • Architected an omnichannel e-commerce platform (Go, GraphQL, PostgreSQL, Redis) serving 5+ countries,
                100+ stores, and 20+ warehouses.
              </li>
              <li>• Developed a Java ERP system (MySQL, Redis, Kafka) streamlining 1K+ daily transactions.</li>
              <li>• Automated migrations to AWS EKS with CI/CD, reducing deployment cycles by 60%.</li>
              <li>• Built React dashboards for POS and customer modules with responsive, accessible UX.</li>
            </ul>
          </div>

          {/* Esper */}
          <div>
            <div className="flex justify-between items-start gap-3 mb-1">
              <div>
                <h3 className="font-semibold">Esper</h3>
                <p className="text-sm text-muted-foreground">Software Development Engineer 1 • Bangalore, India</p>
              </div>
              <Badge variant="secondary">Aug 2022 – Feb 2023</Badge>
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Engineered Kafka pipelines streaming data from 100K+ devices, cutting incident response time by 40%.</li>
              <li>• Developed SQL-driven BI dashboards for fleet and device performance insights.</li>
              <li>• Integrated Grafana, Prometheus, and Loki with Kafka metrics to improve monitoring and reliability.</li>
            </ul>
          </div>

          {/* Ansys */}
          <div>
            <div className="flex justify-between items-start gap-3 mb-1">
              <div>
                <h3 className="font-semibold">Ansys</h3>
                <p className="text-sm text-muted-foreground">R&D Engineering Intern • Remote</p>
              </div>
              <Badge variant="secondary">Mar 2022 – Jul 2022</Badge>
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Refactored legacy C++ modules with multithreading, achieving 24% faster runtime and 20% efficiency gains.</li>
              <li>• Resolved 15+ critical production bugs, increasing stability of EDA tools used by global clients.</li>
            </ul>
          </div>

          {/* Progress Software */}
          <div>
            <div className="flex justify-between items-start gap-3 mb-1">
              <div>
                <h3 className="font-semibold">Progress Software</h3>
                <p className="text-sm text-muted-foreground">Software Engineer Intern • Remote</p>
              </div>
              <Badge variant="secondary">Aug 2021 – Dec 2021</Badge>
            </div>
            <ul className="space-y-1 text-sm">
              <li>• Built CI/CD pipelines with ArgoCD and Jenkins, enabling automated rollbacks and deployments.</li>
              <li>• Automated deployments and workflows with Python/Bash, cutting manual ops effort by 60%.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Key Projects (Google ordering) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🚀 Key Projects</CardTitle>
          <CardDescription>Projects that best reflect my engineering strengths for backend/systems roles.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {keyProjects.map((p) => (
            <div key={p.name}>
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{p.oneLiner}</p>
              <div className="flex flex-wrap gap-1">
                {p.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🏆 Highlights</CardTitle>
          <CardDescription>Recognition and measurable outcomes.</CardDescription>
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

export default Resume;
