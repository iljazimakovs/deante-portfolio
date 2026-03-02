import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg tracking-tight">
              D<span className="text-primary">.</span>CASON
            </span>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            <a href="#services" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#skills" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#portfolio" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#industries" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Industries</a>
          </nav>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <p>&copy; {currentYear} Deante Cason. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Available on Upwork
          </div>
        </div>
      </div>
    </footer>
  );
}
