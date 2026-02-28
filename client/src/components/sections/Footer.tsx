import { Terminal, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          <div className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg tracking-tight">
              SYS_ENG<span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

        </div>
        
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground font-mono">
          <p>© {currentYear} Senior Embedded Engineer. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            System nominal
          </div>
        </div>
      </div>
    </footer>
  );
}
