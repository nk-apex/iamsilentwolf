import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16" data-testid="hero-section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14] opacity-[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00FF41] opacity-[0.015] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase glass-card rounded-md px-3 py-1.5" data-testid="text-status">
            <span className="inline-block w-2 h-2 rounded-full bg-[#39FF14] mr-2 pulse-glow" />
            System Online
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider leading-tight mb-6" data-testid="text-hero-title">
          <span className="text-[#e0e0e0]">I Build</span>
          <br />
          <span className="neon-text flicker">Digital Weapons</span>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="text-hero-subtitle">
          I am just an explorer — tech is my hobby.
          Crafting bots, APIs, hosting platforms, and tools along the way.
          Welcome to my terminal — explore the projects below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="neon-btn-filled rounded-md px-6 py-3 text-xs font-heading uppercase tracking-wider"
            data-testid="link-explore-projects"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com/7silent-wolf"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn rounded-md px-6 py-3 text-xs font-heading uppercase tracking-wider"
            data-testid="link-hero-github"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-widest">Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-[#39FF14] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
