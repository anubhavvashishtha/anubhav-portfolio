import { useState, useRef, useEffect, KeyboardEvent } from "react";

import { TerminalLine } from "./TerminalLine";
import { TerminalOutput } from "./TerminalOutput";
import { AboutModal } from "./AboutModal";
import { ProjectsModal } from "./ProjectsModal";
import { SocialButtons } from "./SocialButtons";

interface HistoryItem {
  id: number;
  command: string;
  output: React.ReactNode;
  typing?: boolean;
}

const helpText = `Available commands:

  about     - Learn more about me
  projects  - View my projects
  contact   - Get my social links
  cv        - View my resume
  help      - Show commands
  clear     - Clear the terminal

Type a command and press Enter to execute.`;

const welcomeText = `Hello My name is Anubhav Vashishtha and Welcome to my portfolio! 👋

I'm an AI Enthusiast that build smart machines.

Type 'help' to see available commands.`;

export const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: 0, command: "", output: welcomeText, typing: true },
  ]);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(1);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Watch for DOM changes (typing) and scroll to bottom automatically
  useEffect(() => {
    const scrollElement = terminalRef.current;
    if (!scrollElement) return;

    const scrollToBottom = () => {
      scrollElement.scrollTop = scrollElement.scrollHeight;
    };

    const observer = new MutationObserver(scrollToBottom);

    observer.observe(scrollElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    scrollToBottom();

    return () => observer.disconnect();
  }, []);

  // UPDATED: Opens Drive link in new tab instead of downloading
  const handleOpenCV = () => {
    // 👇👇👇 PASTE YOUR GOOGLE DRIVE LINK HERE 👇👇👇
    const cvUrl = "https://docs.google.com/document/d/1QOF1hiHrN6mkp-5cHEKIZBy_NKG40lmJgZRYd51SA2Q/edit?usp=sharing";
    window.open(cvUrl, "_blank", "noopener,noreferrer");
  };

  const processCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let output: React.ReactNode = "";
    let typing = true;

    switch (command) {
      case "help":
        output = helpText;
        break;
      case "about":
        output = "Opening about section...";
        setTimeout(() => setAboutOpen(true), 300);
        break;
      case "projects":
        output = "Loading projects...";
        setTimeout(() => setProjectsOpen(true), 300);
        break;
      case "contact":
        output = <SocialButtons />;
        typing = false;
        break;
      case "cv":
        // UPDATED: Changed output message and function call
        output = "Opening CV in a new tab...";
        setTimeout(handleOpenCV, 300);
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: idCounter.current++,
        command: cmd,
        output,
        typing,
      },
    ]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-4">
        <div className="bg-terminal rounded-lg border border-border terminal-glow overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-terminal-header px-4 py-3 flex items-center border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-terminal-warning" />
              <div className="w-3 h-3 rounded-full bg-terminal-success" />
            </div>
            <span className="text-sm text-muted-foreground flex-1 text-center">
              portfolio@Anubhav
            </span>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            onClick={focusInput}
            className="p-4 h-[400px] overflow-y-auto cursor-text space-y-4
              [&::-webkit-scrollbar]:hidden 
              [-ms-overflow-style:'none'] 
              [scrollbar-width:'none']"
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-2">
                {item.command && <TerminalLine command={item.command} />}
                <div className="text-sm text-foreground whitespace-pre-wrap pl-0 sm:pl-4">
                  <TerminalOutput
                    content={item.output}
                    typing={item.typing}
                  />
                </div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-terminal-prompt">visitor@portfolio</span>
              <span className="text-muted-foreground">$</span>
              <div className="flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-terminal-command caret-primary"
                  autoFocus
                  spellCheck={false}
                />
                <span className="cursor-blink bg-foreground w-2 h-5 ml-0.5" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-4">
          Type <span className="text-terminal-command">help</span> to get
          started
        </p>
      </div>

      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
      <ProjectsModal open={projectsOpen} onOpenChange={setProjectsOpen} />
    </>
  );
};