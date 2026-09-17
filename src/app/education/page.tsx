"use client";

import React from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Computer Science",
    institution: "University",
    period: "Ongoing",
    description: "Pursuing a degree in Computer Science with a focus on software engineering, algorithms, and data structures.",
  },
  {
    degree: "Full Stack Software Engineering",
    institution: "Online Bootcamps & Self-Learning",
    period: "2020 - Present",
    description: "Continuous learning through platforms like Udemy, freeCodeCamp, and official documentation.",
  },
];

const certifications = [
  { name: "React Developer", issuer: "Meta", year: "2023" },
  { name: "Full Stack Development", issuer: "Udemy", year: "2022" },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2021" },
  { name: "Node.js Backend", issuer: "LinkedIn Learning", year: "2022" },
  { name: "Python for Data Science", issuer: "freeCodeCamp", year: "2023" },
];

export default function EducationPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section-container">
        <p className="section-label">// education</p>
        <h1 className="section-title">
          Learning &amp; <span className="chonky-underline-blue">Certifications</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <GraduationCap size={24} style={{ color: "var(--brand)" }} />
              <h3 style={{ fontSize: 20, fontWeight: 600 }}>Education</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {education.map((item, i) => (
                <div key={i} style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                  <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{item.degree}</h4>
                  <p style={{ color: "var(--brand)", fontFamily: "var(--font-mono)", fontSize: 13, marginBottom: 4 }}>{item.institution}</p>
                  <p style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 12, marginBottom: 12 }}>{item.period}</p>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <Award size={24} style={{ color: "var(--brand)" }} />
              <h3 style={{ fontSize: 20, fontWeight: 600 }}>Certifications</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certifications.map((cert, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "16px 20px",
                }}>
                  <div>
                    <p style={{ fontWeight: 500 }}>{cert.name}</p>
                    <p style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{cert.issuer}</p>
                  </div>
                  <span style={{ color: "var(--brand)", fontFamily: "var(--font-mono)", fontSize: 13 }}>{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
