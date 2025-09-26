import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

       <div className="relative">
        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex gap-8 w-max min-h-[600px]">
            {/* Panel 1: Description & Photo */}
            <div className="flex-shrink-0 w-screen max-w-5xl px-4 sm:ml-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                
                {/* Description */}
                <div className="space-y-6">
                  <div className="space-y-6">
                  <h3 className="text-2xl font-bold">
                    Passionate, Self Taught Web Developer 
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    As a self-taught web developer with hands-on project experience, 
                    I specialize in building responsive and scalable web applications 
                    using the MERN stack. I bring the enthusiasm of a fresher combined 
                    with practical skills gained through real-world projects.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I'm passionate about creating elegant solutions to complex
                    problems, and I'm constantly learning new technologies and
                    techniques to stay at the forefront of the ever-evolving web
                    landscape.
                  </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                    <a href="#contact" className="cosmic-button">
                      Get In Touch
                    </a>

                    <a
                      href="/Abel_Tomy_Resume.pdf"
                      download="/Abel_Tomy___Full_Stack_Developer.pdf"
                      className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                    >
                      Download CV
                    </a>
                  </div>
            
                </div>

                {/* Photo */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-90 h-90 rounded-full gradient-border">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                       
                        <img 
                          src="/Me1.jpg" 
                          alt="Abel Tomy" 
                          className="w-full ml-20 rounded-full object-cover object-center"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback content */}
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                          AT
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements around photo */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-100"></div>
                    <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary rounded-full animate-bounce delay-300"></div>
                    <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/60 rounded-full animate-pulse"></div>
                   </div>

                     <div className="flex items-center gap-2 text-muted-foreground pt-5">
                       <span className="text-sm">Scroll right to see more</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-100"></div>
                          <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-200"></div>
                        </div>
                       <span className="text-lg">→</span>
                     </div>
                  </div>
              </div>
            </div>
            {/* Panel 2: Skills */}
            <div className="flex-shrink-0 w-screen max-w-5xl px-4">
              <div className="h-full flex flex-col justify-center">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-xl mb-2">Web Development</h4>
                        <p className="text-muted-foreground">
                          Creating responsive websites and web applications with
                          modern frameworks like React, Node.js, and Express.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-xl mb-2">Version Control</h4>
                        <p className="text-muted-foreground">
                          Proficient in Git and GitHub for collaborative development
                          and project management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-xl mb-2">Database Management</h4>
                        <p className="text-muted-foreground">
                          Experience with MongoDB, Mongoose, MySQL, PostgreSQL, 
                          and ORMs like Prisma and Sequelize.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-xl mb-2">State Management</h4>
                        <p className="text-muted-foreground">
                          Expertise in Redux, Context API, and Zustand for 
                          managing complex application state.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back indicator */}
                <div className="flex items-center justify-center gap-2 text-muted-foreground pt-8">
                  <span className="text-lg">←</span>
                  <span className="text-sm">Scroll left to go back</span>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Right fade */}
          <div className="pointer-events-none absolute top-0 right-0 h-full sm:w-26 bg-gradient-to-l from-background to-transparent"></div>

            {/* Left fade */}
           <div className="pointer-events-none absolute top-0 left-0 h-full sm:w-26 bg-gradient-to-r from-background to-transparent"></div>
          </div> 
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
