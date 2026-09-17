"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to build performant and scalable web applications using Next.js and React.",
    date: "January 2026",
    category: "Development",
  },
  {
    title: "Introduction to React Native for Web Developers",
    excerpt: "A comprehensive guide to getting started with mobile app development using React Native.",
    date: "December 2025",
    category: "Mobile",
  },
  {
    title: "Modern CSS Techniques for Stunning Designs",
    excerpt: "Explore modern CSS features and techniques to create beautiful user interfaces.",
    date: "November 2025",
    category: "Design",
  },
];

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section-container">
        <p className="section-label">// blog</p>
        <h1 className="section-title">
          Latest <span className="chonky-underline-blue">Articles</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 48 }}>
          Thoughts, tutorials, and insights on web development.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {posts.map((post, i) => (
            <article
              key={i}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 32,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              className="expertise-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                <span style={{ color: "var(--brand)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{post.category}</span>
                <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                  <Calendar size={12} />
                  {post.date}
                </span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{post.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
              <span style={{ color: "var(--brand)", fontFamily: "var(--font-mono)", fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}>
                Read More <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
