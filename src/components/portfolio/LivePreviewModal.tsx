"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/data";
import { 
  X, 
  ExternalLink, 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  ShieldCheck, 
  Maximize2 
} from "lucide-react";
import Image from "next/image";

interface LivePreviewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

type DeviceView = "desktop" | "tablet" | "mobile";

export default function LivePreviewModal({ project, isOpen, onClose }: LivePreviewModalProps) {
  const [device, setDevice] = useState<DeviceView>("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"live" | "snapshot">("live");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
      // Default to live if iframe is supported, otherwise snapshot
      if (project?.deployment?.allowIframe) {
        setViewMode("live");
      } else {
        setViewMode("snapshot");
      }
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  const getContainerWidth = () => {
    switch (device) {
      case "mobile":
        return "max-w-[400px]";
      case "tablet":
        return "max-w-[768px]";
      case "desktop":
      default:
        return "max-w-[1240px]";
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className={`w-full ${getContainerWidth()} h-[90vh] bg-neutral-950 rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}>
        
        {/* Top Control Bar */}
        <div className="h-14 bg-neutral-900 border-b border-white/10 px-4 flex items-center justify-between shrink-0 gap-3">
          
          {/* macOS window lights */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center group transition-colors"
              title="Close modal"
            >
              <X className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-black" />
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
          </div>

          {/* Device viewport switcher */}
          <div className="hidden sm:flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs font-mono">
            <button
              onClick={() => setDevice("desktop")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${device === "desktop" ? "bg-white/20 text-white font-bold" : "text-white/60 hover:text-white"}`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDevice("tablet")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${device === "tablet" ? "bg-white/20 text-white font-bold" : "text-white/60 hover:text-white"}`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${device === "mobile" ? "bg-white/20 text-white font-bold" : "text-white/60 hover:text-white"}`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Mode Switcher: Live Iframe vs HD Snapshot */}
          <div className="flex items-center gap-2">
            {project.deployment?.allowIframe && (
              <div className="flex items-center bg-black/50 p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
                <button
                  onClick={() => setViewMode("live")}
                  className={`px-2.5 py-1 rounded-md transition-all ${viewMode === "live" ? "bg-accent-lime text-black font-bold" : "text-foreground/60 hover:text-foreground"}`}
                >
                  Live Interactive
                </button>
                <button
                  onClick={() => setViewMode("snapshot")}
                  className={`px-2.5 py-1 rounded-md transition-all ${viewMode === "snapshot" ? "bg-white/20 text-white font-bold" : "text-foreground/60 hover:text-foreground"}`}
                >
                  HD Snapshot
                </button>
              </div>
            )}

            {/* External link */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent-lime/10 border border-accent-lime/30 text-accent-lime font-mono text-xs hover:bg-accent-lime hover:text-black transition-colors"
            >
              <span>Open Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-foreground/60 hover:text-foreground hover:bg-white/10 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Address Bar & Deployment HUD */}
        <div className="h-10 bg-neutral-950 border-b border-white/5 px-4 flex items-center justify-between text-xs font-mono text-foreground/60 shrink-0">
          <div className="flex items-center gap-2 flex-1 max-w-lg bg-neutral-900 px-3 py-1 rounded-md border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-lime shrink-0" />
            <span className="text-white/80 truncate">{project.url}</span>
            <button 
              onClick={reloadIframe}
              className="ml-auto text-foreground/40 hover:text-foreground transition-colors"
              title="Reload sandbox"
            >
              <RotateCw className="w-3 h-3" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              <span className="text-accent-lime font-semibold">{project.deployment?.status || "Ready"}</span>
            </div>
            <span>Env: {project.deployment?.environment || "Production"}</span>
            <span className="text-accent-orange">Latency: {project.deployment?.latency || "22ms"}</span>
          </div>
        </div>

        {/* Viewport Area */}
        <div className="relative flex-1 w-full bg-black flex items-center justify-center overflow-auto p-2 sm:p-4">
          
          <div className={`relative h-full w-full rounded-lg overflow-hidden bg-neutral-900 border border-white/10 shadow-inner flex items-center justify-center`}>
            
            {viewMode === "live" && project.deployment?.allowIframe ? (
              <>
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950/80 z-20 gap-3 font-mono text-xs text-foreground/70">
                    <div className="w-6 h-6 border-2 border-accent-lime border-t-transparent rounded-full animate-spin" />
                    <span>Connecting to {project.domain}...</span>
                  </div>
                )}
                <iframe
                  key={iframeKey}
                  src={project.url}
                  title={project.title}
                  onLoad={() => setIsLoading(false)}
                  className="w-full h-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-contain md:object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono text-accent-lime uppercase tracking-wider">// High Resolution Preview</span>
                    <h4 className="text-white font-bold font-display text-lg">{project.title}</h4>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-accent-lime text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <span>Launch Original Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
