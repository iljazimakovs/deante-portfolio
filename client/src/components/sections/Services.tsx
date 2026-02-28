import { Terminal, Cpu, CircuitBoard, ShieldCheck, Settings2, Replace } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Embedded Firmware",
    description: "Robust bare-metal and RTOS firmware in C/C++. Reliable hardware drivers, memory management, and state machines.",
    icon: Terminal,
  },
  {
    title: "Embedded Linux",
    description: "Custom distributions via Yocto/Buildroot. Kernel driver development, U-Boot modification, and Device Tree configuration.",
    icon: Settings2,
  },
  {
    title: "IoT Connectivity",
    description: "Secure, low-power connected devices utilizing BLE, Wi-Fi, MQTT, TLS, and over-the-air (OTA) updates.",
    icon: Replace,
  },
  {
    title: "PCB Design",
    description: "End-to-end hardware engineering. Schematic capture, high-speed layout (Altium/KiCad), and BOM optimization.",
    icon: CircuitBoard,
  },
  {
    title: "Hardware Bring-Up",
    description: "Transforming raw PCBs into functional systems. Advanced debugging via JTAG/SWD, logic analyzers, and oscilloscopes.",
    icon: Cpu,
  },
  {
    title: "Secure & Production",
    description: "Secure boot implementation, factory flashing procedures, and preparing designs for scale manufacturing.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Core <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Comprehensive engineering across the entire embedded stack. From bare-metal bits to the cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card 
                key={idx} 
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors mb-4">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/20 transition-all duration-500 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
