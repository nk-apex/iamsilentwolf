import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen grid-bg flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading text-6xl sm:text-8xl neon-text mb-4" data-testid="text-404">
          404
        </h1>
        <p className="text-sm text-muted-foreground mb-6 font-mono" data-testid="text-404-message">
          <Terminal className="w-4 h-4 inline mr-2 text-[#39FF14]" />
          Error: Page not found in the system
        </p>
        <a
          href="/"
          className="neon-btn-filled rounded-md px-6 py-3 text-xs font-heading uppercase tracking-wider inline-block"
          data-testid="link-go-home"
        >
          Return to Base
        </a>
      </div>
    </div>
  );
}
