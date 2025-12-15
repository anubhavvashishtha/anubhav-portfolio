import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Changes for responsiveness:
        1. w-[95vw]: Takes up 95% of screen width on mobile
        2. sm:max-w-3xl: Caps width on tablet/desktop
        3. max-h-[85vh] & overflow-y-auto: Ensures scrolling if content is taller than phone screen
        4. p-4 sm:p-6: Tighter padding on mobile
      */}
      <DialogContent className="w-[95vw] sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-primary">
            About Me
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 sm:space-y-8 py-2 sm:py-4">
          {/* Header Section: Stacks vertically on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            {/* Avatar placeholder (Uncomment if needed, styled for mobile) */}
            {/* <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl bg-secondary flex items-center justify-center text-2xl sm:text-4xl shrink-0">
              🤖
            </div> */}

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Anubhav Vashishtha
                </h3>
                <p className="text-sm sm:text-base text-terminal-info text-primary/80">
                  AI Engineer · ML Researcher · Full-Stack Developer
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I’m a 4th-year Undergraduate at{" "}
                <span className="text-foreground font-medium">IIT Delhi</span>{" "}
                who loves building real-world AI systems end-to-end — from model
                training and architecture optimization to scalable backend APIs.
                My work spans{" "}
                <span className="text-foreground font-medium">
                  multi-agent systems
                </span>
                ,{" "}
                <span className="text-foreground font-medium">
                  LLM-based text-to-SQL
                </span>
                ,{" "}
                <span className="text-foreground font-medium">
                  on-device AI
                </span>
                , and{" "}
                <span className="text-foreground font-medium">
                  computer vision
                </span>
                , with a strong focus on system design, performance, and
                practical impact.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
              Core Skills
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Python",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "FastAPI",
                "PostgreSQL",
                "MongoDB",
                "Machine Learning Algorithms",
                "LLMs (Llama, Gemma)",
                "Multi-Agent Systems",
                "LoRA / PEFT",
                "TensorFlow & PyTorch",
                "TFLite & On-device ML",
                "Computer Vision",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-md border border-border transition-colors hover:bg-secondary/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
              Experience & Highlights
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                •{" "}
                <span className="text-foreground font-medium">
                  AI Intern @ Data Design Oy (Finland)
                </span>{" "}
                — Build Custom A2A systems from scratch and got PPO offer
                (Placement Offer)
              </p>
              <p>
                •{" "}
                <span className="text-foreground font-medium">
                  AI Engineer @ Data Design Oy (Finland)
                </span>{" "}
                — Led development of a production-grade text-to-SQL system and
                achieved 69% on the BIRD benchmark.
              </p>
              <p>
                •{" "}
                <span className="text-foreground font-medium">
                  ML Intern @ Innogical
                </span>{" "}
                — Built AI-powered student analytics adopted at the government
                level.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};