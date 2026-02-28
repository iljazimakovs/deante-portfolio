import { useState } from "react";
import { Cpu, Wifi, CircuitBoard, Server, Battery, Radio, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Industrial IoT Gateway",
    category: "Embedded Linux / IoT",
    description:
      "Designed and developed a Yocto-based Linux gateway for industrial sensor aggregation. Features OTA firmware updates, MQTT-based telemetry, and secure TLS provisioning for 200+ field devices.",
    longDescription:
      "This project involved building a production-grade IoT gateway from the ground up. The gateway aggregates data from 200+ industrial sensors over Modbus and MQTT, processes it locally, and pushes telemetry to the cloud via secure TLS channels. Built on a custom Yocto Linux image with a tailored Device Tree for the i.MX8 SoC, it includes robust OTA firmware update capabilities, watchdog recovery, and remote diagnostics. The system has been deployed across multiple factory floors with zero unplanned downtime.",
    tags: ["Yocto", "MQTT", "TLS", "Device Tree", "Python", "C"],
    icon: Server,
    highlight: "200+ devices managed",
    image: "/images/project-iot-gateway.png",
    deliverables: ["Custom Yocto BSP Image", "OTA Update Server", "MQTT Broker Config", "Production Deployment Guide"],
  },
  {
    title: "BLE Wearable Fitness Tracker",
    category: "Consumer Electronics",
    description:
      "End-to-end firmware for an ARM Cortex-M4 wearable. Implemented BLE stack on Zephyr RTOS, low-power sensor fusion pipeline, and companion mobile app data sync with OTA update support.",
    longDescription:
      "Developed complete firmware for a consumer wearable fitness tracker powered by an nRF52840 (Cortex-M4). The Zephyr RTOS-based firmware handles BLE communication with a companion mobile app, real-time sensor fusion from an accelerometer/gyroscope/heart-rate sensor suite, and aggressive power management achieving 18-month battery life on a CR2032 coin cell. The PCB was designed in KiCad with DFM considerations for mass production. OTA DFU updates allow seamless field upgrades.",
    tags: ["Zephyr RTOS", "BLE", "Cortex-M4", "OTA", "KiCad"],
    icon: Radio,
    highlight: "18-month battery life",
    image: "/images/project-ble-wearable.png",
    deliverables: ["Zephyr Firmware", "BLE Profile Spec", "KiCad PCB Files", "Power Analysis Report"],
  },
  {
    title: "Smart Energy BMS Controller",
    category: "Power & Energy Systems",
    description:
      "Battery management system for a 48V LiFePO4 pack. Custom PCB with cell balancing, SoC estimation, CAN bus communication, and safety cutoff logic — designed for solar storage applications.",
    longDescription:
      "Engineered a complete battery management system for a 16S LiFePO4 battery pack rated at 48V / 100A. The custom 4-layer PCB includes precision cell voltage monitoring, passive cell balancing, coulomb counting for SoC estimation, temperature monitoring across all cells, and redundant safety cutoff circuits. Communication is handled via CAN bus for integration with solar inverters. The firmware runs on FreeRTOS with a state machine architecture ensuring safe operation under all fault conditions.",
    tags: ["Embedded C", "CAN Bus", "Altium", "BMS", "FreeRTOS"],
    icon: Battery,
    highlight: "48V / 100A rated",
    image: "/images/project-bms-controller.png",
    deliverables: ["Altium PCB + Schematic", "BMS Firmware", "Gerber/BOM/PnP Files", "Safety Test Report"],
  },
  {
    title: "Factory Test & Flash Station",
    category: "Manufacturing & Production",
    description:
      "Automated production test fixture with JTAG/SWD flash programming, boundary scan, and functional validation. Reduced manufacturing test time by 60% and eliminated manual flashing errors.",
    longDescription:
      "Built a fully automated production test and programming station for a high-volume electronics manufacturer. The system uses a custom bed-of-nails fixture with pogo pins for reliable contact, automated JTAG/SWD flash programming, boundary scan testing, and functional validation including power supply sequencing, communication bus checks, and sensor calibration. A Python-based test orchestrator manages the entire workflow with pass/fail reporting and traceability logging. Reduced per-unit test time from 5 minutes to under 2 minutes.",
    tags: ["JTAG", "SWD", "Python", "Test Automation", "Fixture Design"],
    icon: Cpu,
    highlight: "60% faster test cycle",
    image: "/images/project-test-station.png",
    deliverables: ["Test Fixture Design", "Flash Programming Scripts", "Test Orchestrator Software", "Validation Report"],
  },
  {
    title: "Wi-Fi Connected Thermostat",
    category: "Smart Home / IoT",
    description:
      "Production-ready smart thermostat running FreeRTOS on ESP32. Cloud-connected via MQTT with REST API integration, secure boot chain, and scheduled OTA update windows.",
    longDescription:
      "Developed a production-ready smart thermostat from concept to manufacturing. The device runs FreeRTOS on an ESP32-S3, connects to the cloud via MQTT for remote control and telemetry, and exposes a local REST API for direct integration with home automation systems. Security features include a full secure boot chain, encrypted flash storage, and TLS 1.3 for all communications. OTA updates are scheduled during low-usage windows to ensure uninterrupted operation. The enclosure and PCB were designed for injection molding and SMT assembly.",
    tags: ["ESP32", "FreeRTOS", "MQTT", "REST", "Secure Boot"],
    icon: Wifi,
    highlight: "Cloud-connected OTA",
    image: "/images/project-thermostat.png",
    deliverables: ["ESP32 Firmware", "Cloud Backend Config", "PCB Production Files", "UL Compliance Docs"],
  },
  {
    title: "Motor Control PCB for Robotics",
    category: "Industrial Automation",
    description:
      "High-performance BLDC motor controller board with FOC algorithm implementation. 4-layer PCB with current sensing, encoder feedback, and CAN-based command interface.",
    longDescription:
      "Designed a high-performance BLDC motor controller for an industrial robotics application. The 4-layer PCB features a Cortex-M7 MCU running Field-Oriented Control (FOC) algorithms at sub-millisecond loop rates, three-phase gate driver with bootstrap supply, inline current sensing using shunt resistors, and absolute encoder feedback via SSI interface. The CAN bus command interface allows integration with multi-axis motion controllers. The board handles up to 48V / 30A continuous with thermal management via copper pours and optional heatsink mounting.",
    tags: ["FOC", "BLDC", "Altium", "CAN Bus", "Cortex-M7", "C++"],
    icon: CircuitBoard,
    highlight: "Sub-ms control loop",
    image: "/images/project-motor-control.png",
    deliverables: ["Altium PCB Layout", "FOC Firmware", "CAN Protocol Spec", "Thermal Analysis Report"],
  },
];

function ProjectModal({ project, onClose, onPrev, onNext }: {
  project: typeof projects[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      data-testid="modal-project-detail"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-card border border-border/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm text-foreground"
            onClick={onClose}
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm text-foreground"
            onClick={onPrev}
            data-testid="button-prev-project"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm text-foreground"
            onClick={onNext}
            data-testid="button-next-project"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/30 rounded-md px-2.5 py-1 backdrop-blur-sm">
                {project.highlight}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <p className="text-xs font-mono text-primary/70 mb-1 tracking-wider uppercase">{project.category}</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

          <div>
            <h4 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-xs bg-muted/50 text-muted-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">Deliverables</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground/80 bg-muted/30 rounded-lg px-3 py-2 border border-border/30"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? projects.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === projects.length - 1 ? 0 : selectedIndex + 1);
    }
  };

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
              <div
                key={idx}
                data-testid={`card-project-${idx}`}
                className="group cursor-pointer rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300 relative"
                onClick={() => setSelectedIndex(idx)}
              >
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono text-primary bg-background/80 backdrop-blur-sm border border-primary/30 rounded-md px-2 py-1">
                      {project.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <p className="text-[10px] font-mono text-primary/60 uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-display font-semibold leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] font-mono bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="text-[10px] font-mono bg-muted/50 text-muted-foreground"
                      >
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-primary/70 pt-1 group-hover:text-primary transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl group-hover:bg-primary/15 transition-all duration-500 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
