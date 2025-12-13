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
      <DialogContent className="max-w-3xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            About Me
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* <div className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center text-4xl shrink-0">
              🤖
            </div> */}

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Anubhav Vashishtha
                </h3>
                <p className="text-terminal-info">
                  AI Engineer · ML Researcher · Full-Stack Developer
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I’m a 4th-year Undergraduate at <span className="text-foreground font-medium">IIT Delhi</span> who
                loves building real-world AI systems end-to-end — from model
                training and architecture optimization to scalable backend APIs .
                My work spans <span className="text-foreground font-medium">multi-agent systems</span>, 
                <span className="text-foreground font-medium"> LLM-based text-to-SQL</span>, 
                <span className="text-foreground font-medium"> on-device AI</span>, and 
                <span className="text-foreground font-medium"> computer vision</span>, with a strong focus on
                system design, performance, and practical impact.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Core Skills
            </h4>
            <div className="flex flex-wrap gap-2">
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
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Experience & Highlights
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>
                • <span className="text-foreground font-medium">AI Intern @ Data Design Oy (Finland)</span> — Build Custom A2A systems from scratch and got PPO offer (Placement Offer)
              </p>
              <p>
                • <span className="text-foreground font-medium">AI Engineer @ Data Design Oy (Finland)</span> — Led
                development of a production-grade text-to-SQL system and achieved
                69% on the BIRD benchmark.
              </p>
              <p>
                • <span className="text-foreground font-medium">ML Intern @ Innogical</span> — Built AI-powered
                student analytics adopted at the government level.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
