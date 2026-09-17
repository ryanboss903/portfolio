"use client";

import React from "react";
import { Code, Globe, Server, Smartphone, Layout, Database, Terminal, Cpu, Cloud, Palette } from "lucide-react";

const skillPairs = [
  { name: "React / Next.js", level: "95%", icon: <Code size={24} />, color: "#61DAFB" },
  { name: "TypeScript", level: "90%", icon: <Globe size={24} />, color: "#3178C6" },
  { name: "Node.js / Python", level: "85%", icon: <Server size={24} />, color: "#339933" },
  { name: "React Native", level: "85%", icon: <Smartphone size={24} />, color: "#61DAFB" },
  { name: "Tailwind CSS", level: "95%", icon: <Layout size={24} />, color: "#38B2AC" },
  { name: "PostgreSQL", level: "80%", icon: <Database size={24} />, color: "#336791" },
  { name: "Docker / DevOps", level: "75%", icon: <Terminal size={24} />, color: "#2496ED" },
  { name: "Supabase", level: "85%", icon: <Cpu size={24} />, color: "#3ECF8E" },
  { name: "Cloud (AWS/Vercel)", level: "75%", icon: <Cloud size={24} />, color: "#FF9900" },
  { name: "UI/UX Design", level: "80%", icon: <Palette size={24} />, color: "#F24E1E" },
];

export default function SkillsPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section-container">
        <p className="section-label">// skills</p>
        <h1 className="section-title">
          Technical <span className="chonky-underline-violet">Stack</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 48, maxWidth: 600 }}>
          Technologies and tools I work with on a daily basis.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {skillPairs.map((skill, i) => (
            <div key={i} className="expertise-card" style={{ padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>{skill.name}</h3>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--brand)" }}>{skill.level}</span>
              </div>
              <div style={{ width: "100%", height: 6, background: "var(--bg-card)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: skill.level, height: "100%", background: `linear-gradient(90deg, ${skill.color}, var(--brand))`, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
