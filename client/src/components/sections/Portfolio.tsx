import { Cpu, Wifi, CircuitBoard, Server, Battery, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Industrial IoT Gateway",
    category: "Embedded Linux / IoT",
    description:
      "Designed and developed a Yocto-based Linux gateway for industrial sensor aggregation. Features OTA firmware updates, MQTT-based telemetry, and secure TLS provisioning for 200+ field devices.",
    tags: ["Yocto", "MQTT", "TLS", "Device Tree", "Python", "C"],
    icon: Server,
    highlight: "200+ devices managed",
  },
  {
    title: "BLE Wearable Fitness Tracker",
    category: "Consumer Electronics",
    description:
      "End-to-end firmware for an ARM Cortex-M4 wearable. Implemented BLE stack on Zephyr RTOS, low-power sensor fusion pipeline, and companion mobile app data sync with OTA update support.",
    tags: ["Zephyr RTOS", "BLE", "Cortex-M4", "OTA", "KiCad"],
    icon: Radio,
    highlight: "18-month battery life",
  },
  {
    title: "Smart Energy BMS Controller",
    category: "Power & Energy Systems",
    description:
      "Battery management system for a 48V LiFePO4 pack. Custom PCB with cell balancing, SoC estimation, CAN bus communication, and safety cutoff logic — designed for solar storage applications.",
    tags: ["Embedded C", "CAN Bus", "Altium", "BMS", "FreeRTOS"],
    icon: Battery,
    highlight: "48V / 100A rated",
  },
  {
    title: "Factory Test & Flash Station",
    category: "Manufacturing & Production",
    description:
      "Automated production test fixture with JTAG/SWD flash programming, boundary scan, and functional validation. Reduced manufacturing test time by 60% and eliminated manual flashing errors.",
    tags: ["JTAG", "SWD", "Python", "Test Automation", "Fixture Design"],
    icon: Cpu,
    highlight: "60% faster test cycle",
  },
  {
    title: "Wi-Fi Connected Thermostat",
    category: "Smart Home / IoT",
    description:
      "Production-ready smart thermostat running FreeRTOS on ESP32. Cloud-connected via MQTT with REST API integration, secure boot chain, and scheduled OTA update windows.",
    tags: ["ESP32", "FreeRTOS", "MQTT", "REST", "Secure Boot"],
    icon: Wifi,
    highlight: "Cloud-connected OTA",
  },
  {
    title: "Motor Control PCB for Robotics",
    category: "Industrial Automation",
    description:
      "High-performance BLDC motor controller board with FOC algorithm implementation. 4-layer PCB with current sensing, encoder feedback, and CAN-based command interface.",
    tags: ["FOC", "BLDC", "Altium", "CAN Bus", "Cortex-M7", "C++"],
    icon: CircuitBoard,
    highlight: "Sub-ms control loop",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A selection of production-grade embedded systems delivered end-to-end — from architecture through manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card
                key={idx}
                data-testid={`card-project-${idx}`}
                className="bg-card border-border/50 hover:border-primary/40 transition-all duration-300 group relative"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-primary/70 bg-primary/5 border border-primary/20 rounded-md px-2 py-1">
                      {project.highlight}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    {project.category}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[11px] font-mono bg-muted/50 text-muted-foreground border-border/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl group-hover:bg-primary/15 transition-all duration-500 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
