import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";


export const NotFound = () => {
   return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ThemeToggle />
      <StarBackground />
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tight" style={{ color: "#6a48cd" }}>
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Page Not Found</h2>
            <p className="text-lg text-white/80 max-w-md mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="/"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#6a48cd",
                color: "white",
              }}
            >
              Go Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-lg font-medium border-2 text-white hover:bg-white/10 transition-all duration-200"
              style={{ borderColor: "#6a48cd" }}
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    </div>
  )
};
