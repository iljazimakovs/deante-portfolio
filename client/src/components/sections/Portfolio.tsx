import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import { Cpu, Wifi, CircuitBoard, Server, Battery, Radio, ArrowRight, X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, ChevronDown, Antenna, MonitorSmartphone, ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
}

interface FilterCategory {
  name: string;
  slug: string;
}

export const filterCategories: FilterCategory[] = [
  { name: "All Projects", slug: "all" },
  { name: "Embedded Firmware Development", slug: "embedded-firmware" },
  { name: "Embedded Linux & BSP", slug: "embedded-linux-bsp" },
  { name: "IoT & Connected Devices", slug: "iot-connected-devices" },
  { name: "PCB & Hardware Engineering", slug: "pcb-hardware" },
  { name: "Hardware Bring-Up & Debugging", slug: "hardware-debugging" },
];

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: typeof Server;
  highlight: string;
  media: MediaItem[];
  deliverables: string[];
  filterSlugs: string[];
}

const projects: Project[] = [
  {
    slug: "industrial-iot-gateway",
    title: "Industrial IoT Gateway",
    category: "Embedded Linux / IoT",
    filterSlugs: ["embedded-linux-bsp", "iot-connected-devices"],
    description:
      "Designed and developed a Yocto-based Linux gateway for industrial sensor aggregation. Features OTA firmware updates, MQTT-based telemetry, and secure TLS provisioning for 200+ field devices.",
    longDescription:
      "This project involved building a production-grade IoT gateway from the ground up. The gateway aggregates data from 200+ industrial sensors over Modbus and MQTT, processes it locally, and pushes telemetry to the cloud via secure TLS channels. Built on a custom Yocto Linux image with a tailored Device Tree for the i.MX8 SoC, it includes robust OTA firmware update capabilities, watchdog recovery, and remote diagnostics. The system has been deployed across multiple factory floors with zero unplanned downtime.",
    tags: ["Yocto", "MQTT", "TLS", "Device Tree", "Python", "C"],
    icon: Server,
    highlight: "200+ devices managed",
    media: [
      { type: "image", src: "/images/project-iot-gateway.png" },
    ],
    deliverables: ["Custom Yocto BSP Image", "OTA Update Server", "MQTT Broker Config", "Production Deployment Guide"],
  },
  {
    slug: "ble-wearable-fitness-tracker",
    title: "BLE Wearable Fitness Tracker",
    category: "Consumer Electronics",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "End-to-end firmware for an ARM Cortex-M4 wearable. Implemented BLE stack on Zephyr RTOS, low-power sensor fusion pipeline, and companion mobile app data sync with OTA update support.",
    longDescription:
      "Developed complete firmware for a consumer wearable fitness tracker powered by an nRF52840 (Cortex-M4). The Zephyr RTOS-based firmware handles BLE communication with a companion mobile app, real-time sensor fusion from an accelerometer/gyroscope/heart-rate sensor suite, and aggressive power management achieving 18-month battery life on a CR2032 coin cell. The PCB was designed in KiCad with DFM considerations for mass production. OTA DFU updates allow seamless field upgrades.",
    tags: ["Zephyr RTOS", "BLE", "Cortex-M4", "OTA", "KiCad"],
    icon: Radio,
    highlight: "18-month battery life",
    media: [
      { type: "image", src: "/images/project-ble-wearable.png" },
    ],
    deliverables: ["Zephyr Firmware", "BLE Profile Spec", "KiCad PCB Files", "Power Analysis Report"],
  },
  {
    slug: "smart-energy-bms-controller",
    title: "Smart Energy BMS Controller",
    category: "Power & Energy Systems",
    filterSlugs: ["embedded-firmware", "pcb-hardware"],
    description:
      "Battery management system for a 48V LiFePO4 pack. Custom PCB with cell balancing, SoC estimation, CAN bus communication, and safety cutoff logic — designed for solar storage applications.",
    longDescription:
      "Engineered a complete battery management system for a 16S LiFePO4 battery pack rated at 48V / 100A. The custom 4-layer PCB includes precision cell voltage monitoring, passive cell balancing, coulomb counting for SoC estimation, temperature monitoring across all cells, and redundant safety cutoff circuits. Communication is handled via CAN bus for integration with solar inverters. The firmware runs on FreeRTOS with a state machine architecture ensuring safe operation under all fault conditions.",
    tags: ["Embedded C", "CAN Bus", "Altium", "BMS", "FreeRTOS"],
    icon: Battery,
    highlight: "48V / 100A rated",
    media: [
      { type: "image", src: "/images/project-bms-controller.png" },
    ],
    deliverables: ["Altium PCB + Schematic", "BMS Firmware", "Gerber/BOM/PnP Files", "Safety Test Report"],
  },
  {
    slug: "factory-test-flash-station",
    title: "Factory Test & Flash Station",
    category: "Manufacturing & Production",
    filterSlugs: ["hardware-debugging"],
    description:
      "Automated production test fixture with JTAG/SWD flash programming, boundary scan, and functional validation. Reduced manufacturing test time by 60% and eliminated manual flashing errors.",
    longDescription:
      "Built a fully automated production test and programming station for a high-volume electronics manufacturer. The system uses a custom bed-of-nails fixture with pogo pins for reliable contact, automated JTAG/SWD flash programming, boundary scan testing, and functional validation including power supply sequencing, communication bus checks, and sensor calibration. A Python-based test orchestrator manages the entire workflow with pass/fail reporting and traceability logging. Reduced per-unit test time from 5 minutes to under 2 minutes.",
    tags: ["JTAG", "SWD", "Python", "Test Automation", "Fixture Design"],
    icon: Cpu,
    highlight: "60% faster test cycle",
    media: [
      { type: "video", src: "/images/project-test-station.mp4", poster: "/images/project-test-station.png" },
      { type: "image", src: "/images/project-test-station.png" },
    ],
    deliverables: ["Test Fixture Design", "Flash Programming Scripts", "Test Orchestrator Software", "Validation Report"],
  },
  {
    slug: "wifi-connected-thermostat",
    title: "Wi-Fi Connected Thermostat",
    category: "Smart Home / IoT",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Production-ready smart thermostat running FreeRTOS on ESP32. Cloud-connected via MQTT with REST API integration, secure boot chain, and scheduled OTA update windows.",
    longDescription:
      "Developed a production-ready smart thermostat from concept to manufacturing. The device runs FreeRTOS on an ESP32-S3, connects to the cloud via MQTT for remote control and telemetry, and exposes a local REST API for direct integration with home automation systems. Security features include a full secure boot chain, encrypted flash storage, and TLS 1.3 for all communications. OTA updates are scheduled during low-usage windows to ensure uninterrupted operation. The enclosure and PCB were designed for injection molding and SMT assembly.",
    tags: ["ESP32", "FreeRTOS", "MQTT", "REST", "Secure Boot"],
    icon: Wifi,
    highlight: "Cloud-connected OTA",
    media: [
      { type: "image", src: "/images/project-thermostat.png" },
    ],
    deliverables: ["ESP32 Firmware", "Cloud Backend Config", "PCB Production Files", "UL Compliance Docs"],
  },
  {
    slug: "motor-control-pcb-robotics",
    title: "Motor Control PCB for Robotics",
    category: "Industrial Automation",
    filterSlugs: ["embedded-firmware", "pcb-hardware"],
    description:
      "High-performance BLDC motor controller board with FOC algorithm implementation. 4-layer PCB with current sensing, encoder feedback, and CAN-based command interface.",
    longDescription:
      "Designed a high-performance BLDC motor controller for an industrial robotics application. The 4-layer PCB features a Cortex-M7 MCU running Field-Oriented Control (FOC) algorithms at sub-millisecond loop rates, three-phase gate driver with bootstrap supply, inline current sensing using shunt resistors, and absolute encoder feedback via SSI interface. The CAN bus command interface allows integration with multi-axis motion controllers. The board handles up to 48V / 30A continuous with thermal management via copper pours and optional heatsink mounting.",
    tags: ["FOC", "BLDC", "Altium", "CAN Bus", "Cortex-M7", "C++"],
    icon: CircuitBoard,
    highlight: "Sub-ms control loop",
    media: [
      { type: "image", src: "/images/project-motor-control.png" },
    ],
    deliverables: ["Altium PCB Layout", "FOC Firmware", "CAN Protocol Spec", "Thermal Analysis Report"],
  },
  {
    slug: "lora-environmental-sensor-network",
    title: "LoRa Environmental Sensor Network",
    category: "IoT / Wireless Sensing",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "Solar-powered LoRa sensor nodes for long-range environmental monitoring. Custom low-power firmware with mesh networking, deployed across 5km agricultural sites.",
    longDescription:
      "Designed and deployed a network of solar-powered LoRa sensor nodes for precision agriculture environmental monitoring. Each node features a custom PCB with temperature, humidity, soil moisture, and light sensors, powered by a small solar panel with LiPo backup. The ultra-low-power firmware on an STM32L4 achieves years of operation with minimal maintenance. Nodes communicate over LoRaWAN to a central gateway with 5km+ range, and data is pushed to a cloud dashboard for real-time monitoring and alerting. The system supports over-the-air configuration updates and automatic mesh rerouting.",
    tags: ["LoRa", "STM32", "Low Power", "Solar", "Mesh Network", "C"],
    icon: Antenna,
    highlight: "5km+ range",
    media: [
      { type: "image", src: "/images/project-lora-sensor.png" },
    ],
    deliverables: ["Node Firmware", "Gateway Software", "PCB Design Files", "Deployment Guide"],
  },
  {
    slug: "automotive-can-bus-diagnostic-tool",
    title: "Automotive CAN Bus Diagnostic Tool",
    category: "Automotive / Diagnostics",
    filterSlugs: ["hardware-debugging", "embedded-firmware"],
    description:
      "Handheld CAN bus analyzer with OLED display, OBD-II interface, and real-time packet decoding. Supports standard and extended CAN frames with DBC file parsing.",
    longDescription:
      "Built a portable CAN bus diagnostic tool for automotive and industrial use. The handheld device features a Cortex-M4 MCU with dual CAN transceivers, an OLED display for real-time packet visualization, and USB connectivity for PC-based analysis. The firmware supports standard (11-bit) and extended (29-bit) CAN frames, OBD-II PID decoding, DBC file import for signal-level interpretation, and data logging to SD card. A companion desktop application provides advanced filtering, graphing, and export capabilities. Used by field engineers for vehicle ECU diagnostics and industrial CAN network troubleshooting.",
    tags: ["CAN Bus", "OBD-II", "Cortex-M4", "USB", "OLED", "Embedded C"],
    icon: MonitorSmartphone,
    highlight: "Dual CAN channels",
    media: [
      { type: "image", src: "/images/project-can-diagnostic.png" },
    ],
    deliverables: ["Device Firmware", "Desktop App", "PCB + Enclosure Files", "Protocol Documentation"],
  },
  {
    slug: "custom-embedded-linux-sbc",
    title: "Custom Embedded Linux SBC",
    category: "Embedded Linux / Hardware",
    filterSlugs: ["embedded-linux-bsp", "pcb-hardware"],
    description:
      "Custom single-board computer built around an i.MX6 SoC with Yocto Linux BSP. Designed for edge computing applications with industrial-grade reliability and extended temperature range.",
    longDescription:
      "Engineered a custom single-board computer for edge computing applications requiring industrial reliability. The board is built around an NXP i.MX6 SoC with 1GB DDR3 RAM, eMMC storage, Gigabit Ethernet, USB, and a 40-pin GPIO header for expansion. The custom Yocto Linux BSP includes a hardened kernel, secure boot via HABv4, and application containerization via Docker. Designed for -40 to +85C operation with conformal coating support. The 6-layer PCB was optimized for EMI compliance and passed FCC/CE certification. Used as the compute platform for multiple industrial IoT deployments.",
    tags: ["i.MX6", "Yocto", "DDR3", "Secure Boot", "PCB Design", "Linux"],
    icon: Cpu,
    highlight: "Industrial -40 to 85C",
    media: [
      { type: "image", src: "/images/project-custom-sbc.png" },
    ],
    deliverables: ["Yocto BSP Image", "6-Layer PCB Files", "Hardware Test Report", "FCC/CE Certification Docs"],
  },
];

export { projects };

const INITIAL_COUNT = 6;

function MediaSlider({ media, className, isModal }: { media: MediaItem[]; className?: string; isModal?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const current = media[currentIndex];
  const hasMultiple = media.length > 1;

  const goTo = useCallback((index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setCurrentIndex(index);
  }, []);

  const goPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    goTo(currentIndex === 0 ? media.length - 1 : currentIndex - 1);
  }, [currentIndex, media.length, goTo]);

  const goNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    goTo(currentIndex === media.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, media.length, goTo]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      {current.type === "video" ? (
        <>
          <video
            ref={videoRef}
            poster={current.poster}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="auto"
            data-testid="video-media-player"
          >
            <source src={current.src} type="video/mp4" />
          </video>
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
              onClick={togglePlay}
              data-testid="button-play-video"
            >
              <div className={`rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm border border-primary/50 transition-transform hover:scale-110 ${isModal ? "w-16 h-16" : "w-12 h-12"}`}>
                <Play className={`text-primary-foreground ml-0.5 ${isModal ? "w-7 h-7" : "w-5 h-5"}`} />
              </div>
            </div>
          )}
          {isPlaying && isModal && (
            <div className="absolute top-4 right-4 flex items-center gap-1 z-20">
              <Button
                size="icon"
                variant="ghost"
                className="bg-background/50 backdrop-blur-sm text-foreground"
                onClick={toggleMute}
                data-testid="button-toggle-mute"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="bg-background/50 backdrop-blur-sm text-foreground"
                onClick={togglePlay}
                data-testid="button-toggle-play"
              >
                <Pause className="w-5 h-5" />
              </Button>
            </div>
          )}
        </>
      ) : (
        <img
          src={current.src}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {hasMultiple && (
        <>
          <button
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground transition-all hover:bg-background/90 ${isModal ? "w-9 h-9" : "w-7 h-7"}`}
            onClick={goPrev}
            data-testid="button-media-prev"
          >
            <ChevronLeft className={isModal ? "w-5 h-5" : "w-4 h-4"} />
          </button>
          <button
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground transition-all hover:bg-background/90 ${isModal ? "w-9 h-9" : "w-7 h-7"}`}
            onClick={goNext}
            data-testid="button-media-next"
          >
            <ChevronRight className={isModal ? "w-5 h-5" : "w-4 h-4"} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {media.map((item, i) => (
              <button
                key={i}
                className={`rounded-full transition-all ${
                  i === currentIndex
                    ? "w-5 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-foreground/40 hover:bg-foreground/70"
                }`}
                onClick={(e) => goTo(i, e)}
                data-testid={`button-media-dot-${i}`}
              />
            ))}
          </div>

          <div className="absolute top-2 left-2 z-20">
            <span className="flex items-center gap-1 text-[10px] font-mono text-foreground/80 bg-background/60 backdrop-blur-sm border border-border/40 rounded-md px-1.5 py-0.5">
              <ImageIcon className="w-3 h-3" />
              {currentIndex + 1}/{media.length}
            </span>
          </div>
        </>
      )}

      {current.type === "video" && !hasMultiple && (
        <div className="absolute top-2 right-2 z-10">
          <span className="flex items-center gap-1 text-[10px] font-mono text-foreground bg-background/80 backdrop-blur-sm border border-border/50 rounded-md px-2 py-1">
            <Play className="w-3 h-3 fill-current" />
            VIDEO
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose, onPrev, onNext }: {
  project: Project;
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
        <div className="relative h-56 md:h-80 overflow-hidden rounded-t-xl">
          <MediaSlider key={project.title} media={project.media} className="w-full h-full" isModal />

          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />

          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm text-foreground z-30"
            onClick={onClose}
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </Button>

          <div className="absolute bottom-4 left-6 right-6 z-20 pointer-events-none">
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
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-primary/70 mb-1 tracking-wider uppercase">{project.category}</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
            </div>
            <div className="flex items-center gap-1 shrink-0 mt-1">
              <Button
                size="icon"
                variant="outline"
                className="w-8 h-8 border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50"
                onClick={onPrev}
                data-testid="button-prev-project"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-8 h-8 border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50"
                onClick={onNext}
                data-testid="button-next-project"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
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

export function Portfolio({ initialSlug, initialCategory }: { initialSlug?: string; initialCategory?: string } = {}) {
  const [, setLocation] = useLocation();
  const [activeCategory, setActiveCategory] = useState(initialCategory || "all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(() => {
    if (initialSlug) {
      const idx = projects.findIndex((p) => p.slug === initialSlug);
      return idx >= 0 ? idx : null;
    }
    return null;
  });

  useEffect(() => {
    if (initialSlug) {
      const idx = projects.findIndex((p) => p.slug === initialSlug);
      if (idx >= 0) {
        setSelectedIndex(idx);
      }
    }
  }, [initialSlug]);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
      setTimeout(() => {
        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialCategory]);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.filterSlugs.includes(activeCategory));

  const categoryBaseUrl = activeCategory === "all" ? "/" : `/category/${activeCategory}`;

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    if (slug === "all") {
      setLocation("/");
    } else {
      setLocation(`/category/${slug}`);
    }
  };

  const openProject = (projectIndex: number) => {
    const project = filteredProjects[projectIndex];
    const globalIndex = projects.indexOf(project);
    setSelectedIndex(globalIndex);
    setLocation(`/project/${project.slug}`);
  };

  const closeProject = () => {
    setSelectedIndex(null);
    setLocation(categoryBaseUrl);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      const currentInFiltered = filteredProjects.findIndex((p) => p === projects[selectedIndex]);
      const newFilteredIndex = currentInFiltered <= 0 ? filteredProjects.length - 1 : currentInFiltered - 1;
      const newProject = filteredProjects[newFilteredIndex];
      const newGlobalIndex = projects.indexOf(newProject);
      setSelectedIndex(newGlobalIndex);
      setLocation(`/project/${newProject.slug}`);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      const currentInFiltered = filteredProjects.findIndex((p) => p === projects[selectedIndex]);
      const newFilteredIndex = currentInFiltered >= filteredProjects.length - 1 ? 0 : currentInFiltered + 1;
      const newProject = filteredProjects[newFilteredIndex];
      const newGlobalIndex = projects.indexOf(newProject);
      setSelectedIndex(newGlobalIndex);
      setLocation(`/project/${newProject.slug}`);
    }
  };

  const activeCategoryName = filterCategories.find((c) => c.slug === activeCategory)?.name || "All Projects";

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                A selection of production-grade embedded systems delivered end-to-end — from architecture through manufacturing.
              </p>
            </div>
            <p className="text-sm font-mono text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex flex-wrap gap-2" data-testid="category-filters">
            {filterCategories.map((cat) => (
              <button
                key={cat.slug}
                data-testid={`filter-${cat.slug}`}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all border ${
                  activeCategory === cat.slug
                    ? "bg-primary/15 text-primary border-primary/40"
                    : "bg-card/60 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                data-testid={`card-project-${idx}`}
                className="group cursor-pointer rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300 relative"
                onClick={() => openProject(idx)}
              >
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <MediaSlider media={project.media} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    <span className="text-[10px] font-mono text-primary bg-background/80 backdrop-blur-sm border border-primary/30 rounded-md px-2 py-1">
                      {project.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10">
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-mono text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          onClose={closeProject}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
