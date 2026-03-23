import { useState } from "react";
import { ArrowUpRight, Code, Globe, Layout, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    icon: Globe,
    title: "Personal Portfolio Website",
    description: "A clean, responsive portfolio website showcasing my work and skills. Built from scratch with semantic HTML and modern CSS techniques.",
    tags: ["HTML", "CSS"],
    details: "This portfolio website was designed to present my professional profile in a modern, clean layout. It features a hero section, about me, skills overview, project showcase, and a contact form — all built with semantic HTML5 and pure CSS3. The site is fully responsive and optimized for all screen sizes.",
    features: ["Semantic HTML5 structure", "Pure CSS3 styling", "Mobile-responsive layout", "Clean typography", "Contact form"],
  },
  {
    icon: Layout,
    title: "Responsive Landing Page",
    description: "A fully responsive landing page with mobile-first design approach, flexbox layouts, and smooth scrolling.",
    tags: ["HTML", "CSS", "Responsive"],
    details: "A pixel-perfect, mobile-first landing page built to demonstrate responsive design skills. Uses CSS Flexbox and Grid for layout, media queries for breakpoints, and smooth scroll behavior for a polished user experience.",
    features: ["Mobile-first approach", "CSS Flexbox & Grid", "Media queries", "Smooth scrolling", "Cross-browser compatible"],
  },
  {
    icon: Code,
    title: "Simple Blog UI",
    description: "A minimal blog user interface with clean typography, card-based layout, and responsive grid system.",
    tags: ["HTML", "CSS", "UI Design"],
    details: "A minimal yet elegant blog interface featuring card-based article previews, clean typography hierarchy, and a responsive grid system. The design focuses on readability and user experience with well-structured content areas.",
    features: ["Card-based layout", "Typography hierarchy", "Responsive CSS Grid", "Clean UI design", "Readable content structure"],
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
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
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
