import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  {
    name: "Email",
    icon: Mail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=anubhavvashishtha.iitd@gmail.com",
    color: "hover:text-terminal-warning",
    isExternal: true,
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/Anubhav2209",
    color: "hover:text-[hsl(195,85%,55%)]",
    isExternal: true,
  },
  {
    name: "GitHub (Second Account)",
    icon: Github,
    url: "https://github.com/anubhavvashishtha",
    color: "hover:text-foreground",
    isExternal: true,
  },
  {
    name: "GitHub (First Account)",
    icon: Github,
    url: "https://github.com/Anubhav-Vashishtha",
    color: "hover:text-foreground",
    isExternal: true,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/anubhav-vashishtha-319523256/",
    color: "hover:text-[hsl(210,80%,55%)]",
    isExternal: true,
  },
];

export const SocialButtons = () => {
  return (
    <div className="flex flex-wrap gap-3 animate-fade-in">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.isExternal ? "_blank" : undefined}
          rel={social.isExternal ? "noopener noreferrer" : undefined}
          className={`flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-md text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-secondary/80 ${social.color}`}
        >
          <social.icon className="w-4 h-4" />
          <span className="text-sm">{social.name}</span>
        </a>
      ))}
    </div>
  );
};