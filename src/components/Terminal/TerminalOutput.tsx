import { useEffect, useState } from "react";

interface TerminalOutputProps {
  content: React.ReactNode;
  typing?: boolean;
  onComplete?: () => void;
}

export const TerminalOutput = ({ content, typing = false, onComplete }: TerminalOutputProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(!typing);

  useEffect(() => {
    if (!typing || typeof content !== "string") {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    let index = 0;
    const text = content as string;
    setDisplayedText("");
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, 15);

    return () => clearInterval(interval);
  }, [content, typing, onComplete]);

  if (typeof content === "string" && typing) {
    return (
      <div className="animate-fade-in">
        <span>{displayedText}</span>
        {!isComplete && <span className="cursor-blink ml-0.5 bg-foreground w-2 h-4 inline-block" />}
      </div>
    );
  }

  return <div className="animate-fade-in">{content}</div>;
};
