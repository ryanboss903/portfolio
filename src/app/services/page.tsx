"use client";

import React from "react";
import { Code, Smartphone, Layout, Server, Database, Cloud, ShieldCheck, Cpu, Palette } from "lucide-react";

const services = [
  {
    icon: <Layout size={28} />,
    title: "Frontend Development",
    desc: "High-performance, interactive UIs with React, Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps for iOS and Android using React Native and Expo.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend APIs",
    desc: "Scalable RESTful and GraphQL APIs with Node.js, FastAPI, and PostgreSQL.",
  },
  {
    icon: <Database size={28} />,
    title: "Database Design",
    desc: "Schema design, indexing strategies, and high-availability database management.",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, Docker containers, and deployment on AWS, Vercel, and Railway.",
  },
  {
    icon: <Cpu size={28} />,
    title: "AI Integration",
    desc: "Leveraging LLMs and machine learning APIs to build intelligent applications.",
  },
  {
    icon: <Palette size={28} />,
    title: "UI/UX Design",
    desc: "User-centric design systems that balance aesthetics with functional simplicity.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Security",
    desc: "Implementing security best practices to protect data and systems.",
  },
  {
    icon: <Code size={28} />,
    title: "Full Stack Architecture",
    desc: "End-to-end system design from frontend to infrastructure.",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section-container">
        <p className="section-label">// expertise</p>
        <h1 className="section-title">
          My <span className="chonky-underline-violet">Services</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 600, marginBottom: 48 }}>
          Comprehensive digital solutions from concept to deployment.
          Each service is delivered with attention to detail and technical excellence.
        </p>

        <div className="expertise-grid">
          {services.map((s, i) => (
            <div key={i} className="expertise-card">
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
