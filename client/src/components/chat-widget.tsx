import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "ai";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      content:
        "Hey! I'm SilentWolf's AI assistant. Ask me anything — about the projects, tech, or whatever you're curious about.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://wolfmusicapi-al6b.onrender.com/api/ai/gpt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: trimmed,
            system:
              "You are SilentWolf's AI assistant on a cyberpunk-themed portfolio site. Be helpful, concise, and friendly. You can answer questions about tech, programming, SilentWolf's projects (WhatsApp Bot, Pterodactyl Hosting, WolFlix, Wolf Music API, Code Obfuscator), or any general questions.",
          }),
        }
      );

      const data = await res.json();

      if (data.success && data.response) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content: "Something went wrong. Please try again.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Connection error. The server might be waking up — try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chat-widget">
      {isOpen && (
        <div
          className="mb-3 glass-card rounded-md w-80 sm:w-96 neon-border overflow-hidden flex flex-col"
          style={{ maxHeight: "min(500px, 70vh)" }}
          data-testid="chat-panel"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-[rgba(57,255,20,0.1)] flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] pulse-glow" />
              <span className="font-heading text-[10px] uppercase tracking-wider text-[#39FF14]">
                Wolf AI Terminal
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

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-md p-3 max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.2)]"
                      : "glass-card"
                  }`}
                  data-testid={`chat-message-${msg.role}-${i}`}
                >
                  {msg.role === "ai" && (
                    <span className="text-[9px] font-heading uppercase tracking-wider text-[#39FF14] block mb-1">
                      Wolf AI
                    </span>
                  )}
                  <p className="text-[11px] text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-card rounded-md p-3 max-w-[85%]">
                  <span className="text-[9px] font-heading uppercase tracking-wider text-[#39FF14] block mb-1">
                    Wolf AI
                  </span>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3 h-3 text-[#39FF14] animate-spin" />
                    <span className="text-[11px] text-muted-foreground">
                      Thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 px-4 py-3 border-t border-[rgba(57,255,20,0.1)] flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent text-[11px] text-muted-foreground outline-none placeholder:text-[rgba(57,255,20,0.2)]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              data-testid="input-chat-message"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`p-1 transition-colors ${
                isLoading || !input.trim()
                  ? "text-[#39FF14] opacity-30"
                  : "text-[#39FF14] opacity-100 hover:opacity-80"
              }`}
              data-testid="button-send-chat"
            >
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
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
