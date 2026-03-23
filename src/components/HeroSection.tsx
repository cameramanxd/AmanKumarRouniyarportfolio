import { ArrowRight, Download, Github, Linkedin, User } from "lucide-react";


const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">
      {/* Left */}
      <div className="space-y-6 animate-fade-in">
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium tracking-wider uppercase">
          Frontend Developer Intern
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
          Hello, I'm{" "}
          <span className="text-gradient">Aman Kumar</span>
          <br />
          Rouniyar
        </h1>

        <p className="text-muted-foreground max-w-md text-base leading-relaxed">
          A passionate and self-motivated fresher with strong interest in web development. 
          Currently pursuing BSc CSIT, eager to build beautiful, responsive user interfaces.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#contact" className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Hire Me <ArrowRight size={16} />
          </a>
          <a href="/CV.txt" download="Aman_Kumar_Rouniyar_CV.txt" className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 hover:text-primary transition-colors">
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Right — portrait */}
      <div className="flex justify-center lg:justify-end animate-scale-in">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-75" />
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-border bg-secondary flex items-center justify-center">
            <User className="text-muted-foreground" size={96} />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl px-5 py-2.5 flex items-center gap-3 shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-foreground">Available for internship</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
