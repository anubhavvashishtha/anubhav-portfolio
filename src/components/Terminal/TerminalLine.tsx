interface TerminalLineProps {
  command: string;
  prompt?: string;
}

export const TerminalLine = ({ command, prompt = "visitor@portfolio" }: TerminalLineProps) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-terminal-prompt">{prompt}</span>
      <span className="text-muted-foreground">$</span>
      <span className="text-terminal-command">{command}</span>
    </div>
  );
};
