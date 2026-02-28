import { ArrowRight, Cpu, CircuitBoard, Server, Wifi, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[hsl(220,15%,8%)] via-[hsl(225,12%,6%)] to-background">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground font-mono text-xs tracking-wider mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="status-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.08] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150" data-testid="text-hero-title">
            Senior Embedded{" "}
            <br className="hidden sm:block" />
            Systems Engineer
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300" data-testid="text-hero-description">
            Building stable, scalable, and manufacturable embedded systems — not prototypes that break in the field.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button
              size="lg"
              className="h-12 px-7 font-medium text-sm rounded-lg"
              asChild
              data-testid="button-hero-contact"
            >
              <a href="#contact">
                Discuss a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 font-medium text-sm rounded-lg border-border/60"
              asChild
              data-testid="button-hero-services"
            >
              <a href="#portfolio">View Projects</a>
            </Button>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/30 w-full animate-in fade-in duration-1000 delay-700">
          <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest mb-5">Core Disciplines</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Cpu className="w-4 h-4 text-muted-foreground/60" />
              <span className="text-sm">Firmware / RTOS</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Server className="w-4 h-4 text-muted-foreground/60" />
              <span className="text-sm">Embedded Linux</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Wifi className="w-4 h-4 text-muted-foreground/60" />
              <span className="text-sm">IoT / Connectivity</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <CircuitBoard className="w-4 h-4 text-muted-foreground/60" />
              <span className="text-sm">PCB Design</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Shield className="w-4 h-4 text-muted-foreground/60" />
              <span className="text-sm">Secure Boot / OTA</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Wrench className="w-4 h-4 text-muted-foreground/60" />
              <span className="text-sm">Production Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
