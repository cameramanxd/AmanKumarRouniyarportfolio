const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "VS Code",
  "GitHub",
  "Responsive Design",
  "Tailwind CSS",
];

const learningSkills = [
  "Django/Flask",
  "REST APIs",
  "GraphQL",
  "PostgreSQL",
  "Docker",
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-wider uppercase"></span>
        <h3 className="text-3xl sm:text-4xl font-display font-bold mt-2">
          Technologies & <span className="text-gradient">Tools</span>
        </h3>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
          Continuously expanding my skillset in frontend development and modern web technologies.
        </p>
      </div>

      {/* Frontend Skills */}
      <div className="max-w-2xl mx-auto mb-12">
        <h3 className="text-center text-lg font-semibold mb-6 text-foreground"></h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Learning Phase */}
      <div className="max-w-2xl mx-auto">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
          <h3 className="text-center text-lg font-semibold mb-3 text-foreground">Learning Phase</h3>
          <p className="text-center text-sm italic text-muted-foreground mb-6">
            "The expert in anything was once a beginner." - Helen Hayes
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {learningSkills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary border border-primary/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
