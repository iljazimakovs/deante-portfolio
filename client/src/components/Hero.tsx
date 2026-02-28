import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 border border-primary/30">
              <Terminal className="w-4 h-4 text-primary" />
            </span>
            <span className="font-mono text-primary font-medium tracking-widest uppercase text-sm">
              System.init()
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 text-glow"
          >
            Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Hardware Reality
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pl-4 border-l-2 border-primary/50 mb-12 max-w-2xl"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Senior Embedded Systems Engineer building stable, scalable, and manufacturable embedded systems.
              <br className="mb-2" />
              <span className="text-foreground font-medium">Not prototypes that break in the field.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-mono font-bold uppercase tracking-wider hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]"
            >
              Start Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#skills"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-foreground font-mono font-bold uppercase tracking-wider hover:bg-white/5 transition-all"
            >
              View Specifications
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
