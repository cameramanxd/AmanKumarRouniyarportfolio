import { GraduationCap, MapPin, Target } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">
          
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Career Objective */}
        <div className="bg-card border border-border rounded-2xl p-8 card-hover">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <Target className="text-primary" size={22} />
          </div>
          <h3 className="font-display font-semibold text-lg mb-3">Career Objective</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Seeking a Frontend Developer Internship where I can apply my HTML & CSS skills, 
            learn modern frameworks, and contribute to building user-friendly web applications.
          </p>
        </div>

        {/* Education */}
        <div className="bg-card border border-border rounded-2xl p-8 card-hover">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <GraduationCap className="text-primary" size={22} />
          </div>
          <h3 className="font-display font-semibold text-lg mb-3">Education</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><span className="text-foreground font-medium">BSc CSIT</span> — Himalaya Darshan College (Running)</li>
            <li><span className="text-foreground font-medium">+2 with Cs (2081)</span> — Shikshadeep College,Brt, GPA: 2.88</li>
            <li><span className="text-foreground font-medium">SEE (2079)</span> — Sri Sri Ravishankar Vidya Mandir,Brt, GPA: 3.15</li>
          </ul>
        </div>

        {/* Location */}
        <div className="bg-card border border-border rounded-2xl p-8 card-hover">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <MapPin className="text-primary" size={22} />
          </div>
          <h3 className="font-display font-semibold text-lg mb-3">Location</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Duhabi-3, Nepal
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-muted-foreground"></p>
            <p className="text-muted-foreground"></p>
            <p className="text-muted-foreground"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
