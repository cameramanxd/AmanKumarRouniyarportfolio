import { useState } from "react";
import { ArrowUpRight, Code, Globe, Layout, Database, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    category: "Frontend",
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
    category: "Frontend",
    icon: Layout,
    title: "Responsive Landing Page",
    description: "A fully responsive landing page with mobile-first design, modern CSS techniques, and smooth user interactions.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    details: "A pixel-perfect landing page demonstrating advanced CSS skills including Flexbox, Grid, animations, and media queries. Features mobile-first responsive design and cross-browser compatibility.",
    features: ["Mobile-first approach", "CSS Flexbox & Grid", "CSS animations", "Media queries", "Cross-browser compatible", "Performance optimized"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    category: "Frontend",
    icon: Code,
    title: "Interactive UI Components",
    description: "A collection of reusable UI components built with modern CSS and vanilla JavaScript, featuring accessibility and performance.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    details: "Custom-built UI components including modals, accordions, tabs, and form elements. Focuses on accessibility (WCAG 2.1), performance, and modern JavaScript practices without external dependencies.",
    features: ["Accessible components", "Vanilla JavaScript", "CSS custom properties", "Keyboard navigation", "Screen reader support", "Lightweight & fast"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    category: "Backend",
    icon: Database,
    title: "REST API Server",
    description: "A robust REST API built with Node.js and Express, featuring authentication, database integration, and comprehensive documentation.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    details: "Production-ready REST API with user authentication, role-based access control, and comprehensive error handling. Includes API documentation, rate limiting, and security best practices.",
    features: ["JWT authentication", "Database integration", "Error handling", "Rate limiting", "API documentation", "Security best practices"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    category: "Backend",
    icon: Zap,
    title: "Real-Time Chat Application",
    description: "A real-time chat platform with WebSocket support, user management, and instant message delivery.",
    tags: ["Node.js", "Socket.io", "React", "PostgreSQL"],
    details: "Real-time communication platform featuring instant messaging, user presence detection, and chat history management. Implements WebSocket technology for seamless user experience.",
    features: ["WebSocket communication", "Real-time notifications", "User authentication", "Chat history", "Presence detection", "Message persistence"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    category: "Frontend",
    icon: Zap,
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    details: "Comprehensive admin dashboard featuring product management, order tracking, and analytics visualization. Built with React for optimal performance and user experience.",
    features: ["Product management", "Order tracking", "Analytics dashboard", "Real-time updates", "Export functionality", "User management"],
    liveUrl: "",
    githubUrl: "",
  },
];

const categories = ["All", "Frontend", "Backend"];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">My Projects</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-4">
            Recent <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing expertise in frontend, backend, and full-stack development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(p)}
              className="group bg-card border border-border rounded-2xl p-8 cursor-pointer relative overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <p.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={22} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
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
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        title="View Source Code"
                      >
                        <Code size={16} />
                      </a>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(p);
                      }}
                      className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      title="View Details"
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
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
              <div>
                <p>{selected?.title}</p>
                <p className="text-sm font-normal text-primary mt-1">{selected?.category}</p>
              </div>
            </DialogTitle>
            <DialogDescription className="pt-2">{selected?.details}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-2">
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

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Links</h4>
              <div className="flex gap-2">
                {selected?.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Globe size={16} />
                    Live Demo
                  </a>
                )}
                {selected?.githubUrl && (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Code size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
