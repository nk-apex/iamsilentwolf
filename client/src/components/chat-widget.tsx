import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chat-widget">
      {isOpen && (
        <div className="mb-3 glass-card rounded-md w-80 neon-border overflow-hidden" data-testid="chat-panel">
          <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-[rgba(57,255,20,0.1)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] pulse-glow" />
              <span className="font-heading text-[10px] uppercase tracking-wider text-[#39FF14]">
                Wolf Terminal
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground transition-colors hover:text-[#39FF14] p-1"
              aria-label="Close chat"
              data-testid="button-close-chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 h-64 flex flex-col justify-end">
            <div className="space-y-3">
              <div className="glass-card rounded-md p-3 max-w-[85%]">
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Hey! Thanks for stopping by. Feel free to check out my projects or reach me on GitHub.
                </p>
              </div>
              <div className="glass-card rounded-md p-3 max-w-[85%]">
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  <span className="text-[#39FF14]">$</span> Want to collaborate? Find me at{" "}
                  <a
                    href="https://github.com/7silent-wolf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#39FF14] underline"
                    data-testid="link-chat-github"
                  >
                    @7silent-wolf
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 border-t border-[rgba(57,255,20,0.1)]">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-[11px] text-muted-foreground outline-none placeholder:text-[rgba(57,255,20,0.2)]"
              data-testid="input-chat-message"
              disabled
            />
            <button className="text-[#39FF14] opacity-30 p-1" disabled data-testid="button-send-chat">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="w-12 h-12 rounded-full neon-btn-filled flex items-center justify-center pulse-glow"
        data-testid="button-toggle-chat"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
}
