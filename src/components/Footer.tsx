import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg text-foreground tracking-tight">Blynx</span>
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://github.com/updaown-hecker/Blynx-Browser"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Github size={16} />
            GitHub
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            License
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Support
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted border border-border">
            Built with Electron
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
