import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Embedded Software",
    skills: ["C/C++", "FreeRTOS", "Zephyr", "Low-level Drivers", "Bootloaders", "OTA Updates", "Memory Management"]
  },
  {
    category: "Embedded Linux",
    skills: ["Yocto", "Buildroot", "Device Tree", "Kernel Modules", "U-Boot", "Systemd", "Bash/Python Scripts"]
  },
  {
    category: "Connectivity & IoT",
    skills: ["BLE", "Wi-Fi", "LoRa", "MQTT", "CoAP", "TLS/SSL", "Protobuf/CBOR", "REST APIs"]
  },
  {
    category: "Hardware Engineering",
    skills: ["MCU/SoC Integration", "Altium Designer", "KiCad", "High-Speed Layout", "Gerbers", "BOM Sourcing"]
  },
  {
    category: "Debugging & Test",
    skills: ["JTAG/SWD", "Oscilloscopes", "Logic Analyzers", "Hardware Bring-Up", "Factory Flashing", "Python PyTest"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative border-y border-border/50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              The tools, frameworks, and protocols utilized to build robust systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground/90 border-b border-border/50 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="font-mono text-sm py-1.5 px-3 bg-background/50 border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
