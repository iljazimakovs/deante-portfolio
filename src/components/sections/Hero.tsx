import { ArrowRight, Cpu, CircuitBoard, Server, Wifi, Shield, Zap, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start">
        <p className="text-lg sm:text-xl font-display font-semibold text-primary/80 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 tracking-wide" data-testid="text-engineer-name">
          Deante Cason
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          Senior Embedded <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-glow">Systems Engineer</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 font-sans animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Building stable, scalable, and manufacturable embedded systems - not prototypes that break in the field. Firmware, Embedded Linux, IoT, and PCB Engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Button
            size="lg"
            className="h-14 px-8 bg-primary text-primary-foreground font-medium text-base rounded-lg group shadow-[0_0_20px_-5px_hsla(var(--primary)/0.4)] transition-all"
            asChild
          >
            <a href="#portfolio">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 border-border font-medium text-base rounded-lg transition-all"
            asChild
          >
            <a href="#services">View Capabilities</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 border-border font-medium text-base rounded-lg transition-all"
            asChild
          >
            <a href="https://github.com/deantecason" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <SiGithub className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="mt-20 pt-10 border-t border-border/50 w-full flex flex-wrap gap-x-8 gap-y-4 items-center text-muted-foreground animate-in fade-in duration-1000 delay-700">
          <div className="flex items-center gap-2 font-mono text-sm">
            <Cpu className="w-5 h-5 text-primary/70" />
            <span>Firmware/RTOS</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm">
            <Server className="w-5 h-5 text-primary/70" />
            <span>Embedded Linux</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm">
            <Wifi className="w-5 h-5 text-primary/70" />
            <span>IoT & Edge AI</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm">
            <Car className="w-5 h-5 text-primary/70" />
            <span>Automotive/EV</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm">
            <CircuitBoard className="w-5 h-5 text-primary/70" />
            <span>PCB Design</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm">
            <Shield className="w-5 h-5 text-primary/70" />
            <span>Secure Boot/OTA</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-sm">
            <Zap className="w-5 h-5 text-primary/70" />
            <span>Power Electronics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
