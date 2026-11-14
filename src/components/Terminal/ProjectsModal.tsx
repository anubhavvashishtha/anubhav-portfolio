import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface ProjectLink {
  href: string;
  label: string;
  kind?: "code" | "live";
}

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  links?: ProjectLink[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aurif",
    description: "AI agents scrape websites with no say from the owner. I built AI sockets for websites so owners control exactly what data AI agents can read and what actions they can take: a site publishes structured pages and named actions, agents call them with a site key, and owners turn pages, fields, and actions on or off from a dashboard. Built at the Meta AI Developer Hackathon with Cerebral Valley.",
    techStack: ["AI agents", "Python", "TypeScript", "Hackathon"],
    links: [
      { href: "https://github.com/anubhavvashishtha/Aurif", label: "Backend" },
      { href: "https://github.com/anubhavvashishtha/Aurif-UI", label: "UI" },
      { href: "https://github.com/anubhavvashishtha/Demo-client", label: "Demo" },
    ],
  },
  {
    id: 2,
    title: "Biohub Cell Detection",
    description: "Volumetric cell images have to be located in 3D and linked across time, including when a cell divides. I built a detection and tracking pipeline that trains on Zarr volumes with GEFF graph labels and exports a node-and-edge tracking graph. A residual 3D U-Net predicts a cell-indicator heatmap and per-voxel movement vectors; 3D non-maximum suppression picks the peaks, and a division-aware Hungarian linker connects cells from one frame to the next.",
    techStack: ["Kaggle"],
    githubUrl: "https://github.com/anubhavvashishtha/Biohub-cell-detection",
  },
  {
    id: 3,
    title: "Orbit Wars",
    description: "Orbit Wars is a real-time strategy game where agents capture planets orbiting a sun by launching fleets. As team lead, we built an agent that reads the board as a spatial image and, in one pass, decides which planets should send ships where. A convolutional U-Net encodes planets, fleets, and the sun; a matrix head predicts dispatch fractions from imitation on recorded games; and a physics model turns those intents into launch angles that avoid the sun.",
    techStack: ["Kaggle"],
    githubUrl: "https://github.com/anubhavvashishtha/OrbitsWar",
  },
  {
    id: 4,
    title: "OpenAI Tool Hack",
    description: "Tool-using agents can be pushed from untrusted inputs into unsafe actions across several steps, which single-prompt checks miss. For the OpenAI, Google, and IEEE Kaggle competition on multi-step tool attacks, I built a search program that talks to a sandboxed agent and returns replayable prompt chains. It identifies the target model, probes a bank of multi-turn templates, and keeps sampling the templates that succeed most consistently.",
    techStack: ["Kaggle"],
    githubUrl: "https://github.com/anubhavvashishtha/OpenAI-tool-hack",
  },
  {
    id: 5,
    title: "TalkToExL",
    description: "Built a browser-based AI spreadsheet engine that lets enterprise users manipulate Excel data using plain English and @column references. Features a multi-column expression evaluator powered by new Function(), an operation pipeline with full preview before commit, show-scoping that narrows subsequent operations to filtered rows, and a complete undo history — all running 100% client-side with no data leaving the browser.",
    techStack: ["React", "TypeScript", "AI/LLM", "HuggingFace", "xlsx", "Tailwind CSS"],
    links: [{ href: "https://talktoexl.com/", label: "Live", kind: "live" }],
  },
  {
    id: 6,
    title: "Smart Council",
    description: "Architected a multi-agent orchestration framework with automated task decomposition, dependency-graph traversal, and parallel execution optimization using Llama-3.1-8B-Instruct and ThreadPoolExecutor.",
    techStack: ["Llama 3.1", "SQLite", "ThreadPoolExecutor", "HuggingFace API", "Multi-Agent Systems"],
    githubUrl: "https://github.com/anubhavvashishtha/SmartCouncil",
  },
  {
    id: 7,
    title: "Decoder Only Transformer Architecture",
    description: "Engineered a production-grade decoder-only transformer from scratch with KV-cache optimization, beam search inference, and memory-efficient training via gradient checkpointing and accumulation.",
    techStack: ["PyTorch", "Transformer Architecture", "KV Cache", "Gradient Checkpointing", "Beam Search"],
    githubUrl: "https://github.com/anubhavvashishtha/Decoder-Only-Transformer-LLM-From-scratch",
  },
  {
    id: 8,
    title: "Mixture of Experts for Edge Devices",
    description: "Deployed a fully offline multi-agent mental health chatbot with five LoRA-fine-tuned Gemma-3-1B models, orchestrated via TF-IDF vectorization and quantized to ~150MB per model using TensorFlow Lite and 4-bit quantization.",
    techStack: ["Gemma", "LoRA/PEFT", "TensorFlow Lite", "4-bit Quantization", "MediaPipe", "TF-IDF", "Logistic Regression"],
    githubUrl: "https://github.com/anubhavvashishtha/MOE2",
  },
  {
    id: 9,
    title: "RL Stock Market Bot",
    description: "Developed a deep reinforcement learning trading agent with custom environment simulation, neural network-based policy optimization, and automated model checkpointing for adaptive buy/sell decision-making.",
    techStack: ["Reinforcement Learning", "Deep Q-Network", "PyTorch", "NumPy", "Pandas", "Policy Optimization"],
    githubUrl: "https://github.com/Anubhav-Vashishtha/RL-Stock-Market-Bot",
  },
  {
    id: 10,
    title: "LLM-Based Hotel Search",
    description: "Built a natural language hotel search engine leveraging vector embeddings and cosine similarity for semantic retrieval, eliminating traditional filters with a scalable Node.js/Flask backend and MongoDB vector storage.",
    techStack: ["Vector Embeddings", "Cosine Similarity", "MongoDB", "Node.js", "Express", "Flask", "LLM", "Semantic Search"],
    githubUrl: "https://github.com/Anubhav-Vashishtha/AI-Search-Engine-For-Hotels",
  },
  {
    id: 11,
    title: "Visual Taxonomy Attribute Prediction",
    description: "Designed a multi-output ResNet50-based deep learning model with advanced data augmentation, handling large-scale visual taxonomy classification across multiple attributes using categorical cross-entropy and tf.data pipelines.",
    techStack: ["TensorFlow", "ResNet50", "Data Augmentation", "Multi-Output Classification", "Batch Normalization", "Dropout"],
    githubUrl: "https://github.com/Anubhav-Vashishtha/Meesho_Hackathon",
  },
  {
    id: 12,
    title: "T20 Match Winner Prediction",
    description: "Achieved top-20 nationally among 4200 teams by engineering advanced feature extraction pipelines and deploying XGBoost with comprehensive EDA, missing data imputation, and ground-level statistical modeling.",
    techStack: ["XGBoost", "Feature Engineering", "EDA", "Pandas", "NumPy", "scikit-learn", "Data Imputation"],
    githubUrl: "https://github.com/Anubhav-Vashishtha/AmericalExpress-Comp",
  },
  {
    id: 13,
    title: "Hand Gesture Cursor Control",
    description: "Implemented real-time gesture recognition system using custom-trained YOLO keypoint detection for fingertip tracking, enabling hands-free cursor control and pinch-to-click functionality via OpenCV and PyAutoGUI integration.",
    techStack: ["YOLO", "OpenCV", "PyAutoGUI", "Keypoint Detection", "Computer Vision", "Real-time Processing"],
    githubUrl: "https://github.com/Anubhav-Vashishtha/Hand-Gesture-Cursor-Control",
  },
];
interface ProjectsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectsModal = ({ open, onOpenChange }: ProjectsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-6xl bg-card border-border max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            My Projects
          </DialogTitle>
        </DialogHeader>
        
        {/* Added snap-x and snap-mandatory for smooth mobile scrolling */}
        <div className="overflow-x-auto py-4 -mx-2 px-2 snap-x snap-mandatory
          [&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-primary/50
          transition-colors"
        >
          <div className="flex gap-4 md:gap-6 w-max pb-2">
            {projects.map((project) => (
              <div
                key={project.id}
                // CHANGED: w-[85vw] for mobile, w-96 for desktop. Added snap-center.
                className="group w-[85vw] md:w-96 shrink-0 snap-center bg-secondary rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                
                <div className="p-5 space-y-3 relative flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
                  
                  <div className="pt-2 mt-auto flex flex-wrap gap-x-4 gap-y-2">
                    {(
                      project.links ??
                      (project.githubUrl
                        ? [{ href: project.githubUrl, label: "Code", kind: "code" as const }]
                        : [])
                    ).map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                      >
                        {link.kind === "live" ? (
                          <ExternalLink className="w-4 h-4" />
                        ) : (
                          <Github className="w-4 h-4" />
                        )}
                        {link.label}
                      </a>
                    ))}
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