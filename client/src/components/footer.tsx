import { Terminal, Github, Users, Radio } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

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

        <div className="mt-8 border-t border-[rgba(57,255,20,0.08)] pt-6">
          <p className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground text-center mb-4">Quick Links</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://chat.whatsapp.com/HjFc3pud3IA0R0WGr1V2Xu"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-[11px] font-mono flex items-center gap-2"
              data-testid="footer-link-whatsapp-group"
            >
              <Users className="w-3.5 h-3.5" />
              WhatsApp Group
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb6dn9nEQIaqEMNclK3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-[11px] font-mono flex items-center gap-2"
              data-testid="footer-link-whatsapp-channel"
            >
              <Radio className="w-3.5 h-3.5" />
              WhatsApp Channel
            </a>
            <a
              href="https://wa.me/254713046497"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-[11px] font-mono flex items-center gap-2"
              data-testid="footer-link-whatsapp-1"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              +254 713 046 497
            </a>
            <a
              href="https://wa.me/254703397679"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-[11px] font-mono flex items-center gap-2"
              data-testid="footer-link-whatsapp-2"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              +254 703 397 679
            </a>
          </div>
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
