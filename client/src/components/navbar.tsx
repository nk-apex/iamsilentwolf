import { useState } from "react";
import { Terminal, Menu, X, Users, Radio } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[rgba(57,255,20,0.1)]" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a href="/" className="flex items-center gap-2 flex-shrink-0" data-testid="link-logo">
            <Terminal className="w-5 h-5 text-[#39FF14]" />
            <span className="font-heading text-sm uppercase tracking-wider text-[#39FF14] flicker">
              SilentWolf
            </span>
          </a>

          <div className="hidden md:flex items-center gap-3 flex-wrap">
            <a
              href="#projects"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider"
              data-testid="link-projects"
            >
              Projects
            </a>
            <a
              href="https://github.com/7silent-wolf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider"
              data-testid="link-github"
            >
              GitHub
            </a>
            <a
              href="https://chat.whatsapp.com/HjFc3pud3IA0R0WGr1V2Xu"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider flex items-center gap-1.5"
              data-testid="link-whatsapp-group"
            >
              <Users className="w-3.5 h-3.5" />
              Group
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb6dn9nEQIaqEMNclK3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider flex items-center gap-1.5"
              data-testid="link-whatsapp-channel"
            >
              <Radio className="w-3.5 h-3.5" />
              Channel
            </a>
            <a
              href="https://wa.me/254713046497"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider flex items-center gap-1.5"
              data-testid="link-whatsapp"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="neon-btn-filled rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider"
              data-testid="link-contact"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden text-[#39FF14] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2" data-testid="mobile-menu">
            <a
              href="#projects"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider text-center"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-link-projects"
            >
              Projects
            </a>
            <a
              href="https://github.com/7silent-wolf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider text-center"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-link-github"
            >
              GitHub
            </a>
            <a
              href="https://chat.whatsapp.com/HjFc3pud3IA0R0WGr1V2Xu"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-link-whatsapp-group"
            >
              <Users className="w-3.5 h-3.5" />
              WhatsApp Group
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb6dn9nEQIaqEMNclK3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-link-whatsapp-channel"
            >
              <Radio className="w-3.5 h-3.5" />
              WhatsApp Channel
            </a>
            <a
              href="https://wa.me/254713046497"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-link-whatsapp"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="neon-btn-filled rounded-md px-4 py-2 text-xs font-heading uppercase tracking-wider text-center"
              onClick={() => setMobileOpen(false)}
              data-testid="mobile-link-contact"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
