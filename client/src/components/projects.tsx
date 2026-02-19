import { ExternalLink, Github, Bot, Server, Film, Code, Shield, Rocket } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: typeof Bot;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "live" | "coming-soon";
}

const projects: Project[] = [
  {
    id: 1,
    title: "WhatsApp Bot",
    description: "A powerful WhatsApp automation bot with multi-device support. Pair your device instantly via the pairing site and unlock automated messaging capabilities.",
    icon: Bot,
    tags: ["Node.js", "WhatsApp API", "Automation"],
    liveUrl: "https://pair.xwolf.space",
    githubUrl: "https://github.com/7silent-wolf/silentwolf.git",
    status: "live",
  },
  {
    id: 2,
    title: "Pterodactyl Hosting",
    description: "A hosting platform where users get their own Pterodactyl panels to deploy and manage their applications with full control and flexibility.",
    icon: Server,
    tags: ["Pterodactyl", "Hosting", "DevOps"],
    liveUrl: "https://host.xwolf.space",
    status: "live",
  },
  {
    id: 3,
    title: "WolFlix",
    description: "A sleek movie streaming site with a curated library. Browse, search, and watch your favorite content in a clean, modern interface.",
    icon: Film,
    tags: ["Streaming", "Movies", "Frontend"],
    liveUrl: "https://wolflix.xwolf.space",
    status: "live",
  },
  {
    id: 4,
    title: "Wolf Music API",
    description: "A RESTful music API service providing endpoints for audio data, search, and streaming capabilities. Built for developers who need music integration.",
    icon: Code,
    tags: ["REST API", "Music", "Backend"],
    liveUrl: "https://wolfmusicapi-al6b.onrender.com/",
    status: "live",
  },
  {
    id: 5,
    title: "Code Obfuscator",
    description: "Protect your source code with advanced obfuscation techniques. Transform readable code into an unreadable mess while maintaining full functionality.",
    icon: Shield,
    tags: ["Security", "JavaScript", "Tool"],
    liveUrl: "https://obfuscator.xwolf.space/",
    status: "live",
  },
  {
    id: 6,
    title: "More Coming Soon",
    description: "New projects are currently in development. Stay tuned for more tools, bots, APIs, and platforms dropping soon from the wolf's den.",
    icon: Rocket,
    tags: ["In Progress", "Stay Tuned"],
    status: "coming-soon",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isComingSoon = project.status === "coming-soon";

  return (
    <div
      className={`glass-card glass-card-hover rounded-md p-6 flex flex-col h-full ${isComingSoon ? "opacity-60" : ""}`}
      data-testid={`card-project-${project.id}`}
    >
      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <div className="w-10 h-10 rounded-md border border-[rgba(57,255,20,0.2)] bg-[rgba(57,255,20,0.05)] flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-[#39FF14]" />
        </div>
        {isComingSoon && (
          <span className="text-[10px] font-heading uppercase tracking-wider text-[#39FF14] border border-[rgba(57,255,20,0.3)] rounded-md px-2 py-0.5">
            Soon
          </span>
        )}
      </div>

      <h3 className="font-heading text-sm uppercase tracking-wider text-[#e0e0e0] mb-2" data-testid={`text-project-title-${project.id}`}>
        {project.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow" data-testid={`text-project-desc-${project.id}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-[#39FF14] border border-[rgba(57,255,20,0.15)] rounded-md px-2 py-0.5 bg-[rgba(57,255,20,0.03)]"
            data-testid={`badge-tag-${project.id}-${tag.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {!isComingSoon && (
        <div className="flex items-center gap-3 pt-2 border-t border-[rgba(57,255,20,0.1)] flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-heading uppercase tracking-wider text-[#39FF14] transition-opacity hover:opacity-80"
              data-testid={`link-live-${project.id}`}
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-heading uppercase tracking-wider text-muted-foreground transition-opacity hover:opacity-80 hover:text-[#39FF14]"
              data-testid={`link-github-${project.id}`}
            >
              <Github className="w-3 h-3" />
              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] block mb-3" data-testid="text-projects-label">
            // my_projects
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider neon-text mb-4" data-testid="text-projects-heading">
            Project Arsenal
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto" data-testid="text-projects-subtitle">
            A collection of tools, platforms, and services built from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
