export interface ProjectDeployment {
    status: "Ready" | "Building" | "Queued";
    environment: "Production" | "Preview";
    branch: string;
    latency: string;
    region: string;
    allowIframe?: boolean;
}

export interface Project {
    title: string;
    category: string;
    role?: string;
    description: string;
    src: string;
    url: string;
    domain: string;
    tags: string[];
    deployment: ProjectDeployment;
}

export const personalInfo = {
    name: "Ryan Ochieng",
    role: "Full Stack Software Engineer & CTO",
    tagline: "Architecting Scalable Universes & Intelligent Platforms.",
    bio: "Full Stack Software Engineer and Startup CTO with a track record of architecting high-throughput SaaS platforms, AI-driven intelligence engines, and scalable digital marketplaces. Bridging deep technical rigor with sleek, high-end digital aesthetics.",
    email: "ryanochieng793@gmail.com",
    altEmail: "ryanochieng793@yahoo.com",
    phone: "+254710428432",
    whatsapp: "https://wa.me/254710428432",
    status: "Available for CTO Advisory & Engineering Contracts",
    location: "Nairobi, Kenya • Remote Global",
};

export const skills = [
    { name: "Frontend Architecture", description: "Crafting fluid, high-performance web applications using React, Next.js 16, TypeScript, and modern kinetic motion." },
    { name: "CTO & Systems Leadership", description: "End-to-end technical strategy, microservice decoupling, system reliability, and rapid prototype-to-scale engineering." },
    { name: "AI & Real-Time Engines", description: "Integrating intelligent LLM workflows, conversational agents, WebSockets, and low-latency distributed communication." },
    { name: "Cloud & Distributed Systems", description: "Architecting secure Edge deployments on Vercel, PostgreSQL clustering, Redis caching, and automated CI/CD pipelines." },
];

export const techStack = [
    "Next.js 16", "TypeScript", "React", "Node.js", "Python",
    "PostgreSQL", "Tailwind CSS", "Clerk Auth", "FastAPI", "WebSockets",
    "Redis", "Supabase", "Docker", "Framer Motion", "GSAP", "Vercel Edge"
];

export const projects: Project[] = [
    {
        title: "JobAi Technologies",
        category: "AI Career & Talent Platform",
        role: "Co-Founder & Chief Technology Officer (CTO)",
        description: "Intelligent career readiness platform delivering AI career coaching, automated course certifications, and neural job matching algorithms for ambitious professionals.",
        src: "/jobai_preview.png",
        url: "https://jobaitechnologies.com",
        domain: "jobaitechnologies.com",
        tags: ["Next.js 15", "TypeScript", "Clerk Auth", "FastAPI", "Tailwind CSS", "Vercel"],
        deployment: {
            status: "Ready",
            environment: "Production",
            branch: "main",
            latency: "22ms",
            region: "cpt1 (Edge)",
            allowIframe: true
        }
    },
    {
        title: "LoveInn Technologies",
        category: "Modern Dating & Social Discovery",
        role: "Co-Founder & Chief Technology Officer (CTO)",
        description: "High-concurrency social connection platform featuring radar geolocation discovery, encrypted real-time chat, and AI-assisted matchmaking algorithms.",
        src: "/loveinn_preview.png",
        url: "https://loveinntechnologies.com",
        domain: "loveinntechnologies.com",
        tags: ["React", "Next.js", "WebSockets", "Node.js", "PostgreSQL", "Redis"],
        deployment: {
            status: "Ready",
            environment: "Production",
            branch: "main",
            latency: "28ms",
            region: "cpt1 (Edge)",
            allowIframe: false
        }
    },
    {
        title: "Greenfield Sourcing",
        category: "Interior Design & Facilities Services",
        role: "Lead Full Stack Engineer",
        description: "Premier interior architecture, bespoke living room fit-outs, and professional cleaning services platform serving residential and commercial clients across Kenya.",
        src: "/greenfield_preview.png",
        url: "https://www.greenfieldsourcing.co.ke",
        domain: "greenfieldsourcing.co.ke",
        tags: ["React", "Vite", "Tailwind CSS", "REST API", "SEO Engine", "Vercel"],
        deployment: {
            status: "Ready",
            environment: "Production",
            branch: "main",
            latency: "19ms",
            region: "cpt1 (Edge)",
            allowIframe: true
        }
    },
    {
        title: "Sokoyote Marketplace",
        category: "E-Commerce & Retail Ecosystem",
        role: "Creator & Lead Architect",
        description: "High-traffic e-commerce marketplace and companion mobile app handling thousands of products with automated M-Pesa payments and real-time inventory tracking.",
        src: "/sokoyote_market_mockup.png",
        url: "https://sokoyote.com",
        domain: "sokoyote.com",
        tags: ["Next.js", "React Native", "Supabase", "M-Pesa API", "Tailwind"],
        deployment: {
            status: "Ready",
            environment: "Production",
            branch: "main",
            latency: "31ms",
            region: "cpt1 (Edge)",
            allowIframe: true
        }
    },
    {
        title: "Buyletlink Realty",
        category: "Luxury PropTech Platform",
        role: "Founder & Lead Developer",
        description: "Interactive real estate platform connecting buyers, sellers, and investors with high-end properties. Features dynamic Mapbox markers and live valuation filters.",
        src: "/buyletlink_realty_mockup.png",
        url: "https://buyletlink.com",
        domain: "buyletlink.com",
        tags: ["React", "Next.js", "Tailwind CSS", "Mapbox GL", "Prisma"],
        deployment: {
            status: "Ready",
            environment: "Production",
            branch: "main",
            latency: "25ms",
            region: "cpt1 (Edge)",
            allowIframe: false
        }
    }
];

export const experiences = [
    {
        role: "Chief Technology Officer (CTO) & Co-Founder",
        company: "JobAi Technologies",
        period: "2024 - Present",
        location: "Remote",
        desc: "Architecting the technical foundation, edge deployment pipelines, and AI coaching infrastructure at jobaitechnologies.com. Spearheading Next.js App Router architecture, secure Clerk authentication, and automated job matching engines.",
        tags: ["Next.js", "TypeScript", "Clerk Auth", "FastAPI", "Tailwind", "Vercel"],
    },
    {
        role: "Chief Technology Officer (CTO) & Co-Founder",
        company: "LoveInn Technologies",
        period: "2024 - Present",
        location: "Remote",
        desc: "Leading platform engineering for loveinntechnologies.com. Engineered real-time geolocation matching radar, low-latency WebSocket messaging infrastructure, and resilient microservice topology.",
        tags: ["React", "Next.js", "WebSockets", "Node.js", "PostgreSQL", "Redis"],
    },
    {
        role: "Lead Full Stack Engineer",
        company: "Greenfield Sourcing",
        period: "2024 - Present",
        location: "Nairobi, Kenya",
        desc: "Architected and deployed greenfieldsourcing.co.ke for Kenya's top interior design and professional cleaning firm. Delivered 99+ Lighthouse scores, responsive fit-out showcases, and automated service booking pipelines.",
        tags: ["React", "Tailwind CSS", "Node.js", "SEO Engine", "Vercel"],
    },
    {
        role: "Founder & Lead Architect",
        company: "Buyletlink Realty",
        period: "2023 - Present",
        location: "Remote",
        desc: "Engineered buyletlink.com connecting luxury property investors with prime real estate, featuring interactive Mapbox geospatial mapping, floating valuation calculators, and Prisma ORM data pipelines.",
        tags: ["React", "Next.js", "Tailwind CSS", "Mapbox", "Prisma"],
    },
    {
        role: "Creator & Mobile Architect",
        company: "Sokoyote Marketplace & App",
        period: "2023 - Present",
        location: "Remote",
        desc: "Built and scaled a major multi-vendor marketplace and companion mobile app (on Google Play), featuring automated Kenyan M-Pesa payments, real-time inventory tracking, and futuristic dark-mode UI.",
        tags: ["Next.js", "React Native", "Supabase", "M-Pesa API"],
    }
];

export const socials = [
    { name: "GitHub", url: "https://github.com/ryanboss903" },
    { name: "WhatsApp", url: "https://wa.me/254710428432" },
    { name: "LinkedIn", url: "https://linkedin.com/in/ryanochieng" },
    { name: "Twitter/X", url: "https://x.com/Ryan56404732" },
    { name: "Instagram", url: "https://instagram.com/th.eonly.ryan" },
];
