"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section-container">
        <p className="section-label">// contact</p>
        <h1 className="section-title">
          Get in <span className="chonky-underline-brand">Touch</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 600, marginBottom: 48, fontSize: 18 }}>
          I&apos;m currently available for freelance work or full-time opportunities.
          If you have a project that needs some creative touch, feel free to reach out.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          <div>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>EMAIL</p>
              <a href="mailto:ryanochieng793@gmail.com" style={{ fontSize: 24, fontWeight: 600, color: "var(--text-primary)", textDecoration: "none", transition: "color 0.2s" }}>
                ryanochieng793@gmail.com
              </a>
            </div>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>PHONE / WHATSAPP</p>
              <a href="https://wa.me/254710428432" style={{ fontSize: 24, fontWeight: 600, color: "var(--text-primary)", textDecoration: "none" }}>
                +254 710 428 432
              </a>
            </div>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>LOCATION</p>
              <p style={{ fontSize: 18, color: "var(--text-secondary)" }}>Nairobi, Kenya</p>
            </div>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginBottom: 8, display: "block" }}>NAME</label>
                <input type="text" placeholder="John Doe" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--border)", padding: "12px 0", color: "var(--text-primary)", fontSize: 16, outline: "none" }} />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginBottom: 8, display: "block" }}>EMAIL</label>
                <input type="email" placeholder="john@example.com" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--border)", padding: "12px 0", color: "var(--text-primary)", fontSize: 16, outline: "none" }} />
              </div>
            </div>
            <div>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginBottom: 8, display: "block" }}>MESSAGE</label>
              <textarea rows={4} placeholder="Tell me about your project..." style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--border)", padding: "12px 0", color: "var(--text-primary)", fontSize: 16, outline: "none", resize: "none" }} />
            </div>
            <button type="submit" style={{
              alignSelf: "flex-start",
              padding: "14px 32px",
              background: "var(--brand)",
              color: "#000",
              fontWeight: 600,
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
              fontFamily: "var(--font-mono)",
            }}>
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
