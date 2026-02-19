import { Terminal, Github } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[rgba(57,255,20,0.1)] py-12 px-4 sm:px-6 lg:px-8" data-testid="footer-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2" data-testid="footer-logo">
            <Terminal className="w-4 h-4 text-[#39FF14]" />
            <span className="font-heading text-xs uppercase tracking-wider text-[#39FF14]">
              SilentWolf
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://github.com/7silent-wolf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-[#39FF14]"
              data-testid="footer-link-github"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <span className="text-[rgba(57,255,20,0.2)]">|</span>
            <a
              href="https://pair.xwolf.space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-[#39FF14]"
              data-testid="footer-link-pair"
            >
              pair.xwolf.space
            </a>
            <span className="text-[rgba(57,255,20,0.2)]">|</span>
            <a
              href="https://host.xwolf.space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-[#39FF14]"
              data-testid="footer-link-host"
            >
              host.xwolf.space
            </a>
          </div>

          <p className="text-[10px] text-muted-foreground tracking-wider" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} SilentWolf. All rights reserved.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] font-mono text-[rgba(57,255,20,0.3)] tracking-widest uppercase">
            [ end_of_transmission ]
          </p>
        </div>
      </div>
    </footer>
  );
}
