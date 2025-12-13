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
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            About Me
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-lg bg-secondary flex items-center justify-center text-4xl shrink-0">
              👨‍💻
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">John Doe</h3>
                <p className="text-terminal-info">Full Stack Developer</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer who loves building beautiful and functional web applications. 
                With expertise in modern technologies, I create seamless user experiences that make a difference.
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Experience</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• 5+ years of professional development experience</p>
              <p>• Built and scaled applications for startups and enterprises</p>
              <p>• Open source contributor and community member</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
