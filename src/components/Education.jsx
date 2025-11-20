import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    year: "2025",
    degree: "MERN Stack",
    institution: "Packapeer Academy",
  },
  {
    year: "2024",
    degree: "Bachelor of Computer Application",
    institution: "MG University",
  },
  {
    year: "2021",
    degree: "High School Computer Science",
    institution: "MD SHSS",
  },
];

const Education = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="star w-1 h-1 top-[10%] left-[15%] animate-pulse-subtle" />
        <div className="star w-1.5 h-1.5 top-[30%] right-[20%] animate-pulse-subtle" />
        <div className="star w-1 h-1 bottom-[25%] left-[25%] animate-pulse-subtle" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>

          {/* Redesigned subheading */}
          <span className="inline-block mt-4 px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide border border-primary/20 backdrop-blur">
            My academic journey
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line — perfectly centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center opacity-0 ${
                  index === 0
                    ? "animate-fade-in-delay-1"
                    : index === 1
                    ? "animate-fade-in-delay-2"
                    : "animate-fade-in-delay-3"
                }`}
              >
                {/* Year badge - left or right depending on layout */}
                <div className="md:flex-1 md:text-right flex items-center md:justify-end gap-3">
                  <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-lg">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-bold text-lg text-primary">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.6)] animate-pulse-subtle" />
                </div>

                {/* Content card */}
              <div className="md:flex-1 ml-16 md:ml-0">
                <div className="bg-card border border-border rounded-lg p-6 card-hover gradient-border shadow-lg text-left">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.degree}
                    </h3>
                    <p className="text-foreground/70 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    {item.institution}
                    </p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
