import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "🛒",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, team features, and progress tracking.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "✅",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather app with real-time forecasts, location search, and interactive maps.",
    techStack: ["React", "OpenWeather API", "Mapbox", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "🌤️",
  },
];

interface ProjectsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectsModal = ({ open, onOpenChange }: ProjectsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            My Projects
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-x-auto py-4 -mx-2 px-2">
          <div className="flex gap-6 min-w-max">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group w-72 shrink-0 bg-secondary rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="h-32 bg-muted flex items-center justify-center text-5xl">
                  {project.image}
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-background text-terminal-info rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">← Scroll horizontally to see more →</p>
      </DialogContent>
    </Dialog>
  );
};
