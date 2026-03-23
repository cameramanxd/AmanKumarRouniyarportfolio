const skills = [
  "HTML",
  "CSS",
  "VS Code",
  "GitHub",
  "Blockchain (Basic)",
  "Responsive Design",
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-wider uppercase">My Skills</span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">
          Technologies & <span className="text-gradient">Tools</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
          Continuously expanding my skillset in frontend development and modern web technologies.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
