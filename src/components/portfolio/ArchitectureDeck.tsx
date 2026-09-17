"use client";

import { useState } from "react";
import { 
  Server, 
  Cpu, 
  Database, 
  Activity, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  Radio, 
  Layers, 
  Code2, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

interface ArchNode {
  id: string;
  name: string;
  role: string;
  tech: string[];
  metrics: string;
  summary: string;
}

const architectureLayers: Record<string, ArchNode[]> = {
  edge: [
    {
      id: "edge-gateway",
      name: "Global Edge & Routing",
      role: "Distributed Ingress & Geo-Routing",
      tech: ["Vercel Edge Network", "Cloudflare DNS", "Next.js 16 Middleware"],
      metrics: "<25ms global latency",
      summary: "Edge middleware routes traffic to nearest point-of-presence, terminating SSL, evaluating session headers, and caching static SSR payloads.",
    },
    {
      id: "auth-security",
      name: "Identity & Trust Layer",
      role: "Multi-Tenant Authentication",
      tech: ["Clerk Auth", "JWT Verification", "Role-Based Access Control"],
      metrics: "Zero auth latency on edge",
      summary: "Stateless token verification executed directly at the edge layer, protecting sensitive user APIs across JobAi and LoveInn platforms.",
    },
  ],
  services: [
    {
      id: "ai-engines",
      name: "AI Career & Matching Core",
      role: "Intelligent Neural Inference",
      tech: ["FastAPI", "OpenAI LLMs", "Custom Scoring Algorithms"],
      metrics: "99.4% recommendation accuracy",
      summary: "Asynchronous Python services parsing resumes, matching job profiles, and powering conversational career guidance bots with streaming SSE responses.",
    },
    {
      id: "realtime-bus",
      name: "Real-Time WebSocket Bus",
      role: "Bi-directional Event Streaming",
      tech: ["WebSockets", "Node.js", "Redis Pub/Sub"],
      metrics: "Sub-15ms message dispatch",
      summary: "Low-latency message broker powering real-time chat, geolocation proximity alerts, and instant notifications on LoveInn Technologies.",
    },
  ],
  data: [
    {
      id: "primary-db",
      name: "Relational Persistence",
      role: "High-Integrity Data Layer",
      tech: ["PostgreSQL", "Prisma ORM", "Connection Pooling"],
      metrics: "P99 query time < 12ms",
      summary: "Normalized relational schemas with strict foreign keys, indexing strategies, and automated read-replica scaling for transactional reliability.",
    },
    {
      id: "cache-storage",
      name: "Fast Memory & Media Store",
      role: "Distributed In-Memory Caching",
      tech: ["Redis", "Vercel Blob", "CDN Assets"],
      metrics: "94% cache hit ratio",
      summary: "Hot data caching for frequent candidate queries, session tokens, and instant image asset transformation.",
    },
  ],
};

const telemetryLogs = [
  { time: "09:42:01", level: "INFO", text: "[JobAi Edge] GET /api/v1/career-match - 200 OK (18ms)" },
  { time: "09:42:04", level: "INFO", text: "[LoveInn WS] Client authenticated to radar channel: geo-lat:-1.286" },
  { time: "09:42:09", level: "SUCCESS", text: "[Greenfield] Sitemap & OpenGraph prerender cached at edge cpt1" },
  { time: "09:42:15", level: "INFO", text: "[Security] Automated rate limiting evaluated: 0 blocked anomalies" },
];

export default function ArchitectureDeck() {
  const [activeTab, setActiveTab] = useState<"edge" | "services" | "data">("edge");
  const [selectedNode, setSelectedNode] = useState<ArchNode>(architectureLayers.edge[0]);

  const handleTabChange = (tab: "edge" | "services" | "data") => {
    setActiveTab(tab);
    setSelectedNode(architectureLayers[tab][0]);
  };

  return (
    <section id="architecture" className="w-full relative bg-background border-t border-white/5 py-24 z-[3]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[30vw] h-[30vw] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-accent-lime font-mono text-xs md:text-sm tracking-widest uppercase">
                // SYSTEM ARCHITECTURE &amp; CTO LAB
              </span>
              <div className="h-[1px] w-20 bg-accent-lime/30" />
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-foreground">
              Engineering <span className="text-outline-accent">Core</span>
            </h2>
          </div>

          <p className="text-foreground/70 font-light text-sm md:text-base max-w-md leading-relaxed">
            How I architect scalable, fault-tolerant platforms from day zero. An interactive look at real system design decisions across Edge, AI microservices, and high-concurrency databases.
          </p>
        </div>

        {/* Top System Health Telemetry HUD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono text-foreground/60 mb-2">
              <span>UPTIME SLA</span>
              <Activity className="w-4 h-4 text-accent-lime" />
            </div>
            <div className="font-display font-bold text-2xl md:text-3xl text-foreground">99.98%</div>
            <div className="text-[11px] font-mono text-accent-lime mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono text-foreground/60 mb-2">
              <span>AVG EDGE LATENCY</span>
              <Zap className="w-4 h-4 text-accent-orange" />
            </div>
            <div className="font-display font-bold text-2xl md:text-3xl text-foreground">&lt; 24ms</div>
            <div className="text-[11px] font-mono text-foreground/50 mt-1">
              Global Vercel Edge PoPs
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono text-foreground/60 mb-2">
              <span>SECURITY POSTURE</span>
              <ShieldCheck className="w-4 h-4 text-accent-lime" />
            </div>
            <div className="font-display font-bold text-2xl md:text-3xl text-foreground">Grade A+</div>
            <div className="text-[11px] font-mono text-foreground/50 mt-1">
              Clerk RBAC &amp; Automated CORS
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono text-foreground/60 mb-2">
              <span>MICROSERVICES</span>
              <Layers className="w-4 h-4 text-accent-orange" />
            </div>
            <div className="font-display font-bold text-2xl md:text-3xl text-foreground">Distributed</div>
            <div className="text-[11px] font-mono text-foreground/50 mt-1">
              Next.js 16 + FastAPI + Redis
            </div>
          </div>

        </div>

        {/* Main Interactive Architecture Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Layer Navigation & Node Selection */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Layer Tabs */}
            <div className="flex rounded-xl bg-neutral-900/80 p-1.5 border border-white/10 text-xs font-mono">
              <button
                onClick={() => handleTabChange("edge")}
                className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeTab === "edge" 
                    ? "bg-accent-lime text-black font-bold shadow-md" 
                    : "text-foreground/70 hover:text-white"
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>1. Edge &amp; Auth</span>
              </button>

              <button
                onClick={() => handleTabChange("services")}
                className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeTab === "services" 
                    ? "bg-accent-lime text-black font-bold shadow-md" 
                    : "text-foreground/70 hover:text-white"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>2. AI &amp; Microservices</span>
              </button>

              <button
                onClick={() => handleTabChange("data")}
                className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  activeTab === "data" 
                    ? "bg-accent-lime text-black font-bold shadow-md" 
                    : "text-foreground/70 hover:text-white"
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>3. Data &amp; Caching</span>
              </button>
            </div>

            {/* Architecture Node Cards */}
            <div className="flex flex-col gap-4">
              {architectureLayers[activeTab].map((node) => {
                const isSelected = selectedNode.id === node.id;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-neutral-900/90 border-accent-lime shadow-lg shadow-accent-lime/10 translate-x-2"
                        : "bg-neutral-900/40 border-white/10 hover:border-white/20 hover:bg-neutral-900/60"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-accent-orange block">
                          {node.role}
                        </span>
                        <h3 className="font-display font-bold text-xl text-foreground mt-0.5">
                          {node.name}
                        </h3>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${
                        isSelected 
                          ? "bg-accent-lime/20 border-accent-lime/40 text-accent-lime font-bold" 
                          : "bg-white/5 border-white/10 text-foreground/60"
                      }`}>
                        {node.metrics}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/70 font-light line-clamp-2 mt-2 leading-relaxed">
                      {node.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {node.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-foreground/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right: Technical Blueprint & Live Telemetry Console */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Detailed Blueprint Inspector */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-accent-lime">
                  <Terminal className="w-4 h-4" />
                  <span className="font-bold tracking-wider uppercase">ARCHITECTURAL SPECIFICATION</span>
                </div>
                <span className="text-foreground/40">{selectedNode.id}.yaml</span>
              </div>

              <div className="mb-4">
                <h4 className="font-display font-bold text-2xl text-foreground mb-1">
                  {selectedNode.name}
                </h4>
                <span className="text-accent-orange font-mono text-xs uppercase tracking-wider">
                  Target: {selectedNode.metrics}
                </span>
              </div>

              <div className="code-editor-style mb-6">
                <p className="text-foreground/80 text-sm font-light leading-relaxed">
                  {selectedNode.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/5 mb-6">
                <span className="text-[11px] font-mono text-foreground/50 uppercase tracking-wider block mb-2">
                  // Technologies &amp; Protocols
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Terminal Telemetry Output */}
              <div className="rounded-xl bg-black border border-white/10 p-4 font-mono text-[11px] overflow-hidden">
                <div className="flex items-center justify-between text-foreground/40 pb-2 mb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                    LIVE TELEMETRY STREAM
                  </span>
                  <span>cpt1-edge</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  {telemetryLogs.map((log, lIdx) => (
                    <div key={lIdx} className="flex items-baseline gap-2 truncate">
                      <span className="text-foreground/40 shrink-0">{log.time}</span>
                      <span className={log.level === "SUCCESS" ? "text-accent-lime font-bold" : "text-accent-orange font-bold"}>
                        [{log.level}]
                      </span>
                      <span className="text-foreground/80 truncate">{log.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
