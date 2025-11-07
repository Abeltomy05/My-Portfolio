import { ArrowRight, ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "BookMyDesk",
    description: "A coworking space booking app where users can find nearby spaces, vendors manage listings, and payments and notifications are handled seamlessly via Stripe and push alerts.",
    image: "/projects/project1.jpg",
    tags: ["MERN", "TS", "Clean Architecture", "Firebase"],
    demoUrl: "https://bookmydesk.abeltomy.site/",
    githubUrl: "https://github.com/Abeltomy05/BookMyDesk-api",
    message: "",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project2.jpg",
    tags: ["MERN", "REST", "RazorPay", "MVC", "Tailwind"],
    demoUrl: "https://www.abeltomy.site/",
    githubUrl: "https://github.com/Abeltomy05/E-commerce-GreenMind-Backend",
    message: "Currently backend not deployed.",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Real-time chat application with instant messaging, user authentication, and seamless communication.",
    image: "/projects/project3.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket IO"],
    demoUrl: "https://chat-app-5j0m.onrender.com",
    githubUrl: "https://github.com/Abeltomy05/CHAT_APP",
    message: "Free Render hosting may take 1 min to wake.",
  },
  {
    id: 4,
    title: "Aadhar OCR System",
    description:
      "Web application that can read data from your aadhar card and can copy it for other purposes.",
    image: "/projects/project4.jpg",
    tags: ["MERN", "Google vision API", "Repository Pattern"],
    demoUrl: "https://chat-app-5j0m.onrender.com",
    githubUrl: "https://github.com/Abeltomy05/CHAT_APP",
    message: "Free Render hosting may take 1 min to wake.",
  },
];

export const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    const el = scrollContainerRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left:
          direction === "left"
            ? -scrollContainerRef.current.clientWidth * 0.8
            : scrollContainerRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className={`flex gap-8 overflow-x-auto scroll-smooth pb-4 ${
              projects.length > 3
                ? "snap-x snap-mandatory scrollbar-hide"
                : "flex-wrap justify-center"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, key) => (
              <div
                key={key}
                className="flex-none w-[320px] md:w-[360px] snap-start group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {project.message && (
                    <div className="mt-4 p-3 text-sm rounded-md bg-muted text-muted-foreground border border-white shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                      {project.message}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {projects.length > 3 && (
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md p-2 rounded-full shadow-md transition-opacity duration-700 ${
                canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              } hover:bg-primary hover:text-background`}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Right Arrow */}
          {projects.length > 3 && (
            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md p-2 rounded-full shadow-md transition-opacity duration-700 ${
                canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              } hover:bg-primary hover:text-background`}
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Abeltomy05"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
