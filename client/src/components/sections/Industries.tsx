import { Factory, HeartPulse, Car, Home, Cpu } from "lucide-react";

const industries = [
  { name: "Industrial Automation", icon: Factory },
  { name: "Medical Devices", icon: HeartPulse },
  { name: "Automotive/EV", icon: Car },
  { name: "Smart Home & Consumer IoT", icon: Home },
  { name: "Custom Silicon Evaluation", icon: Cpu },
];

export function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Industries <span className="text-primary">Served</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Applying rigorous engineering standards across diverse operational environments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 bg-card border border-border/50 px-6 py-4 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
