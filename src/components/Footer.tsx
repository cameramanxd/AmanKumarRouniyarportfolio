import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Made with <Heart size={14} className="text-primary" /> by Aman Kumar Rouniyar
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
