import { useState } from "react";
import { ArrowUpRight, Code, Globe, Layout, X, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    icon: Globe,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark theme, and optimized performance.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    details: "This portfolio website showcases modern web development practices with React 18, TypeScript for type safety, and Tailwind CSS for responsive design. Includes GitHub Actions CI/CD, SEO optimization, and deployed on GitHub Pages.",
    features: ["React 18 with hooks", "TypeScript integration", "Tailwind CSS styling", "Responsive design", "GitHub Actions deployment", "SEO optimized"],
    liveUrl: "https://cameramanxd.github.io/AmanKumarRouniyarportfolio/",
    githubUrl: "https://github.com/cameramanxd/AmanKumarRouniyarportfolio",
  },
  {
    icon: Layout,
    title: "Responsive Landing Page",
    description: "A fully responsive landing page with mobile-first design, modern CSS techniques, and smooth user interactions.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    details: "A pixel-perfect landing page demonstrating advanced CSS skills including Flexbox, Grid, animations, and media queries. Features mobile-first responsive design and cross-browser compatibility.",
    features: ["Mobile-first approach", "CSS Flexbox & Grid", "CSS animations", "Media queries", "Cross-browser compatible", "Performance optimized"],
  },
  {
    icon: Code,
    title: "Interactive UI Components",
    description: "A collection of reusable UI components built with modern CSS and vanilla JavaScript, featuring accessibility and performance.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    details: "Custom-built UI components including modals, accordions, tabs, and form elements. Focuses on accessibility (WCAG 2.1), performance, and modern JavaScript practices without external dependencies.",
    features: ["Accessible components", "Vanilla JavaScript", "CSS custom properties", "Keyboard navigation", "Screen reader support", "Lightweight & fast"],
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">My Projects</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">
            Recent <span className="text-gradient">Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(p)}
              className="group bg-card border border-border rounded-2xl p-8 card-hover cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <p.icon className="text-primary" size={22} />
                  </div>
                  <div className="flex gap-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                        title="View Live Demo"
                      >
                        <Globe size={16} />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                        title="View Source Code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(p);
                      }}
                      className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      title="View Details"
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-lg mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 font-display text-xl">
              {selected && (
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  {selected && <selected.icon className="text-primary" size={20} />}
                </div>
              )}
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="pt-2">{selected?.details}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
              <ul className="space-y-1.5">
                {selected?.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selected?.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
