import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import {
  Cpu,
  Wifi,
  CircuitBoard,
  Server,
  Battery,
  Radio,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  Antenna,
  MonitorSmartphone,
  ImageIcon,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const garbageSorterImg = "/images/image_1772512279505.png";
const smartAcImg1 = "/images/image_1772513484469.png";
const smartAcImg2 = "/images/image_1772513491486.png";
const smartAcImg3 = "/images/image_1772513498323.png";
const cm5IoImg1 = "/images/image_1772514654396.png";
const cm5IoImg2 = "/images/image_1772514659035.png";
const cm5IoImg3 = "/images/image_1772514663029.png";
const cm5IoImg4 = "/images/image_1772514687391.png";
const imx8Img1 = "/images/image_1772515235120.png";
const imx8Img2 = "/images/image_1772515239394.png";
const imx8Img3 = "/images/image_1772515243964.png";
const imx8Img4 = "/images/image_1772515247648.png";
const imx8Img5 = "/images/image_1772515254381.png";
const cm4_5gImg1 = "/images/image_1772515540147.png";
const cm4_5gImg2 = "/images/image_1772515544449.png";
const cm4_5gImg3 = "/images/image_1772515547834.png";
const cm4_5gImg4 = "/images/image_1772515551954.png";
const cm4_5gImg5 = "/images/image_1772515556146.png";
const nrf5340Img1 = "/images/image_1772515758669.png";
const nrf5340Img2 = "/images/image_1772515763033.png";
const nrf5340Img3 = "/images/image_1772515767252.png";
const nrf5340Img4 = "/images/image_1772515771234.png";
const nrf5340Img5 = "/images/image_1772515774949.png";
const jetsonImg1 = "/images/image_1772515895194.png";
const jetsonImg2 = "/images/image_1772515899432.png";
const jetsonImg3 = "/images/image_1772515903228.png";
const jetsonImg4 = "/images/image_1772515906659.png";
const jetsonImg5 = "/images/image_1772515910441.png";
const lorawanGwImg1 = "/images/image_1772516000947.png";
const lorawanGwImg2 = "/images/image_1772516005151.png";
const lorawanGwImg3 = "/images/image_1772516009642.png";
const lorawanGwImg4 = "/images/image_1772516014589.png";
const kbImg1 = "/images/image_1772516262337.png";
const kbImg2 = "/images/image_1772516265969.png";
const kbImg3 = "/images/image_1772516268993.png";
const kbImg4 = "/images/image_1772516272177.png";
const kbImg5 = "/images/image_1772516276487.png";
const tuneImg1 = "/images/image_1772516558647.png";
const tuneImg2 = "/images/image_1772516561953.png";
const tuneImg3 = "/images/image_1772516565558.png";
const tuneImg4 = "/images/image_1772516569652.png";
const tuneImg5 = "/images/image_1772516573546.png";
const modKbImg1 = "/images/image_1772516757241.png";
const modKbImg2 = "/images/image_1772516760657.png";
const modKbImg3 = "/images/image_1772516763910.png";
const modKbImg4 = "/images/image_1772516767056.png";
const modKbImg5 = "/images/image_1772516770470.png";
const gsmImg1 = "/images/image_1772517196510.png";
const gsmImg2 = "/images/image_1772517200677.png";
const gsmImg3 = "/images/image_1772517204181.png";
const gsmImg4 = "/images/image_1772517208053.png";
const doorLockImg1 = "/images/image_1772517469413.png";
const envImagingImg1 = "/images/image_1772517587413.png";
const laneImg1 = "/images/image_1772517778740.png";
const laneImg2 = "/images/image_1772517783099.png";
const laneImg3 = "/images/image_1772517788291.png";
const laneImg4 = "/images/image_1772517794283.png";
const laneImg5 = "/images/image_1772517801026.png";
const roboArmImg1 = "/images/image_1772517950140.png";
const roboArmImg2 = "/images/image_1772517954562.png";
const roboArmImg3 = "/images/image_1772517961091.png";
const predMaintImg1 = "/images/image_1772518205107.png";
const predMaintImg2 = "/images/image_1772518221506.png";
const predMaintImg3 = "/images/image_1772518228852.png";
const predMaintImg4 = "/images/image_1772518235099.png";
const clarecoImg1 = "/images/image_1772543017538.png";
const clarecoImg2 = "/images/image_1772543024387.png";
const clarecoClinicImg1 = "/images/image_1772543264738.png";
const usbcPcbVideo = "/images/project-usbc-pcb-panel.mp4";
const psuVideo = "/images/project-power-supply.mp4";
const psuImg1 = "/images/image_1772543835349.png";
const psuImg2 = "/images/image_1772543842115.png";
const psuImg3 = "/images/image_1772543847124.png";

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
    slug: "clareco-ai-medical-copilot",
    title: "Clareco AI Medical Co-Pilot",
    category: "AI / Mobile App",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "AI-powered Flutter mobile app that records doctor–patient conversations and converts them into structured email summaries. Supports 80+ languages with AI speech recognition and multilingual NLP processing.",
    longDescription:
      "Developed an AI-powered mobile application that records doctor–patient conversations and converts them into clear, structured email summaries. Built with Flutter, the app captures audio and delivers accurate transcriptions within minutes, supporting over 80 languages. Integrated AI-based speech recognition and multilingual processing to generate understandable medical summaries in Dutch or the patient's preferred language, improving comprehension, accessibility, and retention of critical healthcare information.",
    tags: ["Flutter", "Dart", "Speech-to-Text AI", "NLP", "Multilingual Translation", "Cloud APIs", "Mobile App"],
    icon: MonitorSmartphone,
    highlight: "80+ languages",
    media: [
      { type: "image", src: clarecoImg1 },
      { type: "image", src: clarecoImg2 },
    ],
    deliverables: ["Flutter App Source", "Cloud API Integration", "Speech Processing Pipeline", "Multilingual NLP Module"],
  },
  {
    slug: "miniature-regulated-power-supply",
    title: "Miniature Regulated Power Supply",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Compact regulated power supply PCB with adjustable output voltage and real-time monitoring. ADC/DAC feedback loop controlled by STM8 microcontroller with seven-segment display output.",
    longDescription:
      "Designed a compact regulated power supply PCB with adjustable output voltage and real-time monitoring. Integrated an ADC to measure input, output, and reference voltages for precise feedback control. Output regulation is achieved through a DAC-driven feedback loop, dynamically maintaining stability under varying loads. Controlled by an STM8 microcontroller, the system executes efficient voltage regulation algorithms. A three-digit seven-segment display provides clear operational feedback, demonstrating robust hardware architecture and precision PCB layout design.",
    tags: ["STM8", "ADC", "DAC", "Embedded C", "Power Electronics", "Signal Integrity", "PCB Design"],
    icon: Battery,
    highlight: "DAC feedback control",
    media: [
      { type: "video", src: psuVideo, poster: psuImg1 },
      { type: "image", src: psuImg1 },
      { type: "image", src: psuImg2 },
      { type: "image", src: psuImg3 },
    ],
    deliverables: ["PCB Layout + Schematic", "STM8 Firmware", "BOM & Gerber Files", "Test & Validation Report"],
  },
  {
    slug: "usb-c-pcb-panelization-design",
    title: "USB-C PCB Panelization Design",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware"],
    description:
      "Custom USB-C PCB with panelization for six male–female connector pairs, optimized for manufacturing. V-cut segmentation, fresering techniques, and specialized soldering windows for factory assembly.",
    longDescription:
      "Designed a custom USB-C PCB featuring panelization for six male–female connector pairs, optimized for efficient manufacturing and assembly. Implemented a distinctive V-cut segmentation strategy and advanced fresering techniques to improve structural stability and production throughput. Developed specialized soldering windows to ensure precise connector alignment and reliable factory soldering. The project covered full schematic and layout design in KiCad 8, along with detailed 3D visualization and animation in Blender 4.3 for technical presentation.",
    tags: ["KiCad 8", "USB-C", "PCB Panelization", "V-Cut", "DFM Optimization", "Blender 4.3", "3D Visualization"],
    icon: CircuitBoard,
    highlight: "DFM optimized",
    media: [
      { type: "video", src: usbcPcbVideo },
    ],
    deliverables: ["KiCad PCB + Schematic", "Panelization Layout", "Gerber & BOM Files", "3D Blender Visualization"],
  },
  {
    slug: "clareco-clinic-healthcare-platform",
    title: "Clareco Clinic Healthcare Platform",
    category: "AI / Mobile App",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "Digital healthcare platform enabling appointment scheduling, AI digital assistant conversations, and proactive patient–doctor communication. Built with Flutter for seamless mobile experience.",
    longDescription:
      "Developed Clareco Clinic, a digital healthcare platform designed to streamline doctor–patient interaction and appointment management. The mobile app enables patients to schedule and receive appointment notifications, communicate with a digital assistant, and discuss medical concerns directly from their smartphone. Doctors gain early access to patient inputs, medical insights, and assistant conversations, enabling proactive and personalized care. The platform enhances engagement, accessibility, and operational efficiency in modern healthcare environments.",
    tags: ["Flutter", "Dart", "REST APIs", "Push Notifications", "Secure Messaging", "AI Digital Assistant", "Cloud Backend"],
    icon: MonitorSmartphone,
    highlight: "Digital health assistant",
    media: [
      { type: "image", src: clarecoClinicImg1 },
    ],
    deliverables: ["Flutter App Source", "REST API Backend", "Push Notification System", "AI Assistant Integration"],
  },
  {
    slug: "ai-predictive-maintenance-digital-twin",
    title: "AI Predictive Maintenance Digital Twin",
    category: "Embedded Linux & BSP",
    filterSlugs: ["embedded-linux-bsp", "embedded-firmware"],
    description:
      "AI-driven predictive maintenance system combining edge AI inference with a Simulink-based digital twin. Hybrid LSTM-Autoencoder achieving 95% early fault detection, optimized C for ARM Linux with <20ms latency and 14-day advance failure warnings.",
    longDescription:
      "Developed an AI-driven predictive maintenance system combining edge AI inference with a Simulink-based digital twin. Implemented a hybrid LSTM-Autoencoder trained on NASA CMAPSS and vibration datasets, achieving 95% early fault detection precision. Converted the model to optimized C for ARM Linux gateways with <20ms latency. Built a Simscape Electrical motor model to simulate bearing degradation and validate repair strategies. Automated retraining and simulation workflows using Bash and TCL scripts, enabling 14-day advance failure warnings.",
    tags: [
      "MATLAB",
      "Simulink",
      "LSTM Autoencoder",
      "ONNX",
      "ARM Linux",
      "Edge AI",
      "Vibration Analysis",
      "Python",
    ],
    icon: Server,
    highlight: "95% fault detection",
    media: [
      { type: "image", src: predMaintImg1 },
      { type: "image", src: predMaintImg2 },
      { type: "image", src: predMaintImg3 },
      { type: "image", src: predMaintImg4 },
    ],
    deliverables: [
      "Simulink Digital Twin Model",
      "LSTM-Autoencoder ONNX",
      "ARM Linux Edge Firmware",
      "Retraining Pipeline Scripts",
    ],
  },
  {
    slug: "ai-robotic-arm-simulink",
    title: "AI Robotic Arm in Simulink",
    category: "Autonomous Systems",
    filterSlugs: ["embedded-firmware", "embedded-linux-bsp"],
    description:
      "AI-driven 6-DOF robotic arm simulation in MATLAB/Simulink for autonomous pick-and-place tasks. CNN-based object detection, ML policy for joint commands, and custom Embedded C S-Function for deterministic low-latency control.",
    longDescription:
      "Developed an AI-driven robotic arm simulation in MATLAB/Simulink for autonomous pick-and-place tasks. Integrated a CNN-based vision block for object detection, an ML policy for mapping object pose to joint commands, and a custom Embedded C S-Function for deterministic low-latency control. Modeled a 6-DOF manipulator in Simscape Multibody with realistic dynamics, torque limits, and collision detection. Delivered a full simulation-to-deployment package validated for real-time adaptive grasping.",
    tags: [
      "MATLAB",
      "Simulink",
      "Simscape Multibody",
      "Embedded C",
      "S-Function",
      "ONNX",
      "6-DOF Kinematics",
      "Python",
    ],
    icon: Server,
    highlight: "Adaptive grasping",
    media: [
      { type: "image", src: roboArmImg1 },
      { type: "image", src: roboArmImg2 },
      { type: "image", src: roboArmImg3 },
    ],
    deliverables: [
      "Simulink Model + S-Function",
      "CNN ONNX Model",
      "Simscape Multibody Config",
      "Deployment Package",
    ],
  },
  {
    slug: "ai-ml-lane-following-simulink",
    title: "AI/ML Lane Following in Simulink",
    category: "Autonomous Systems",
    filterSlugs: ["embedded-firmware", "embedded-linux-bsp"],
    description:
      "Production-grade AI/ML lane-following system in MATLAB/Simulink for a 1:10 scale autonomous vehicle. Fine-tuned YOLOv8n for real-time lane segmentation with ML-enhanced MPC controller. Achieved 22 FPS on Jetson Nano with 92% accuracy.",
    longDescription:
      "Developed a production-grade AI/ML lane-following system in MATLAB/Simulink for a 1:10 scale autonomous vehicle. Integrated a fine-tuned YOLOv8n model (trained on BDD100K and KITTI) for real-time lane segmentation and curvature estimation. Implemented an ML-enhanced MPC controller for smooth steering and reduced oscillations. Built a 2-DOF bicycle model in Simscape for realistic closed-loop simulation. Achieved 22 FPS on Jetson Nano with 92% lane-keeping accuracy under varied conditions.",
    tags: [
      "MATLAB",
      "Simulink",
      "YOLOv8n",
      "ONNX",
      "MPC",
      "Jetson Nano",
      "Deep Learning",
      "Python",
    ],
    icon: Cpu,
    highlight: "92% lane accuracy",
    media: [
      { type: "image", src: laneImg1 },
      { type: "image", src: laneImg2 },
      { type: "image", src: laneImg3 },
      { type: "image", src: laneImg4 },
      { type: "image", src: laneImg5 },
    ],
    deliverables: [
      "Simulink Model",
      "YOLOv8n ONNX Model",
      "MPC Controller Config",
      "Simulation Results & Report",
    ],
  },
  {
    slug: "iot-environmental-imaging-system",
    title: "IoT Environmental Imaging System",
    category: "IoT & Smart Systems",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "pcb-hardware"],
    description:
      "Self-contained IoT device using ESP32-CAM and BME680 for remote environmental monitoring and imaging. Scheduled image capture, sensor data logging to SD card, and secure cloud transmission via MQTT over TLS.",
    longDescription:
      "Developed a self-contained IoT device for remote environmental monitoring and imaging. The system uses ESP32-CAM to capture images at scheduled intervals and a BME680 sensor to measure temperature, humidity, pressure, and air quality. Data and images are stored locally on an SD card and securely transmitted to a cloud server using MQTT over TLS. Designed with reliable power management and secure connectivity, the device enables centralized monitoring of environmental conditions and visual inspection of remote sites.",
    tags: [
      "ESP32-CAM",
      "BME680",
      "MQTT over TLS",
      "Wi-Fi",
      "SD Card",
      "Embedded C",
      "PCB Design",
      "IoT Cloud",
    ],
    icon: Wifi,
    highlight: "Remote site imaging",
    media: [{ type: "image", src: envImagingImg1 }],
    deliverables: [
      "ESP32 Firmware",
      "PCB Layout + Schematic",
      "Enclosure CAD Files",
      "Cloud Integration Docs",
    ],
  },
  {
    slug: "android-digital-door-lock",
    title: "Android-Based Digital Door Lock",
    category: "IoT & Smart Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Android-controlled digital door lock using Arduino Uno and HC-06 Bluetooth for secure wireless access. Dual authentication via mobile app or 4x4 keypad with LCD status display and relay-based actuation.",
    longDescription:
      "Developed an Android-controlled digital door lock system using Arduino Uno and HC-06 Bluetooth module for secure wireless access. The system integrates a 4x4 keypad and 16x2 LCD for local password entry and status display, along with a 5V relay module to control the door locking mechanism. Users can authenticate via a mobile app or keypad, while the microcontroller manages password verification and access control. Designed with secure communication, user feedback display, and reliable relay-based actuation.",
    tags: [
      "Arduino Uno",
      "HC-06 Bluetooth",
      "Embedded C",
      "Android App",
      "UART",
      "GPIO",
      "Relay Module",
    ],
    icon: Cpu,
    highlight: "Bluetooth door control",
    media: [{ type: "image", src: doorLockImg1 }],
    deliverables: [
      "Arduino Firmware",
      "Android App Source",
      "Wiring Diagram",
      "System Documentation",
    ],
  },
  {
    slug: "gsm-smart-energy-meter",
    title: "GSM-Based Smart Energy Meter",
    category: "IoT & Smart Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "pcb-hardware"],
    description:
      "GSM-enabled single-phase energy meter using PIC18F4520 for remote energy monitoring. Measures voltage, current, and power factor with two-way SMS communication for real-time meter readings.",
    longDescription:
      "Developed a GSM-enabled single-phase energy meter using PIC18F4520 for remote energy monitoring. The system measures voltage, current, and power factor to calculate accurate energy consumption. A GSM module enables two-way communication, allowing the utility provider to request and receive real-time meter readings via SMS. The design includes a regulated power supply section and tamper detection circuitry for enhanced reliability and security. A complete functional prototype was built and validated.",
    tags: [
      "PIC18F4520",
      "GSM Module",
      "Embedded C",
      "UART",
      "Energy Metering",
      "Tamper Detection",
      "PCB Design",
    ],
    icon: Zap,
    highlight: "Remote SMS metering",
    media: [
      { type: "image", src: gsmImg1 },
      { type: "image", src: gsmImg2 },
      { type: "image", src: gsmImg3 },
      { type: "image", src: gsmImg4 },
    ],
    deliverables: [
      "Embedded C Firmware",
      "Schematic + PCB Layout",
      "Simulation Files",
      "Prototype Validation Report",
    ],
  },
  {
    slug: "modular-creator-rgb-keyboard",
    title: "Modular Creator RGB Keyboard",
    category: "Consumer Electronics",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Modular smart RGB keyboard with configurable independent modules, each functioning as a standalone keyboard. VIA firmware support for dynamic key remapping, inter-module communication, and mass-production-ready design.",
    longDescription:
      "Designed a modular smart RGB keyboard composed of configurable independent modules, each functioning as a standalone keyboard. The system supports dynamic layout customization through VIA firmware, enabling users to remap keys and adjust functionality based on workflow needs. Engineered with advanced PCB architecture, reliable inter-module communication, and optimized power management, the design ensures seamless expandability, premium RGB integration, and mass-production readiness for a highly customizable user experience.",
    tags: [
      "Autodesk Eagle",
      "VIA Firmware",
      "RGB LED Drivers",
      "Bluetooth",
      "Wi-Fi",
      "Power Management",
      "Mass Production",
    ],
    icon: CircuitBoard,
    highlight: "Modular expandable",
    media: [
      { type: "image", src: modKbImg1 },
      { type: "image", src: modKbImg2 },
      { type: "image", src: modKbImg3 },
      { type: "image", src: modKbImg4 },
      { type: "image", src: modKbImg5 },
    ],
    deliverables: [
      "Eagle PCB + Schematic",
      "VIA Firmware Config",
      "BOM & Gerber Files",
      "Module Interface Spec",
    ],
  },
  {
    slug: "tuneshine-album-art-display",
    title: "Tuneshine Album Art Display",
    category: "Consumer Electronics",
    filterSlugs: ["iot-connected-devices", "pcb-hardware", "embedded-firmware"],
    description:
      "Wi-Fi enabled live album art display that syncs with music streaming services. BLE provisioning, real-time artwork rendering on LED matrix, and CE-compliant PCB designed for production in Autodesk Eagle.",
    longDescription:
      "Designed and developed Tuneshine™, a Wi-Fi enabled live album art display that syncs with users' music streaming services. The device connects via Bluetooth for initial provisioning, allowing users to configure Wi-Fi and link streaming accounts through a mobile app. Once set up, it automatically displays real-time album artwork from music played on any device. The PCB was engineered for reliable wireless connectivity, optimized power management, and CE compliance, ensuring stable performance and production readiness.",
    tags: [
      "Autodesk Eagle",
      "Wi-Fi",
      "BLE",
      "LED Matrix",
      "Power Management",
      "CE Compliance",
      "Embedded Systems",
    ],
    icon: MonitorSmartphone,
    highlight: "Live music sync",
    media: [
      { type: "image", src: tuneImg1 },
      { type: "image", src: tuneImg2 },
      { type: "image", src: tuneImg3 },
      { type: "image", src: tuneImg4 },
      { type: "image", src: tuneImg5 },
    ],
    deliverables: [
      "Eagle PCB + Schematic",
      "BOM & Gerber Files",
      "Firmware Source",
      "CE Compliance Docs",
    ],
  },
  {
    slug: "nomad-rgb-mechanical-keyboard",
    title: "Nomad RGB Mechanical Keyboard",
    category: "Consumer Electronics",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      'Premium RGB mechanical keyboard with ANSI/ISO layouts, multi-device Bluetooth, hot-swappable switches, 1.9" display, rotary encoders, and integrated battery charging — designed for mass production in Autodesk Eagle.',
    longDescription:
      "Engineered a premium RGB mechanical keyboard supporting ANSI and ISO layouts with multi-device Bluetooth connectivity. Features include hot-swappable switches, a 1.9-inch display, rotary encoders, advanced power management, and integrated battery charging. Schematics and PCB were designed in Autodesk Eagle following high-speed and mass-production standards, ensuring signal integrity, reliability, and cost-effective manufacturing for large-scale deployment.",
    tags: [
      "Autodesk Eagle",
      "Bluetooth",
      "Wi-Fi",
      "RGB LED Drivers",
      "Power Management",
      "Li-ion Charging",
      "Keyboard Matrix",
      "Mass Production",
    ],
    icon: CircuitBoard,
    highlight: "ANSI + ISO layouts",
    media: [
      { type: "image", src: kbImg1 },
      { type: "image", src: kbImg2 },
      { type: "image", src: kbImg3 },
      { type: "image", src: kbImg4 },
      { type: "image", src: kbImg5 },
    ],
    deliverables: [
      "Eagle PCB + Schematic",
      "BOM & Gerber Files",
      "Firmware Source",
      "Production Assembly Guide",
    ],
  },
  {
    slug: "esp32-lorawan-gateway-v1",
    title: "ESP32 LoRaWAN Gateway V1",
    category: "IoT / Wireless Sensing",
    filterSlugs: ["iot-connected-devices", "pcb-hardware", "embedded-firmware"],
    description:
      "Single-channel LoRaWAN gateway based on ESP32 with SX1276/78 LoRa, Ethernet, isolated RS485, WiFi, BLE, NOR flash, SD card, and RTC — supporting 96–264VAC input and optional battery backup for industrial IoT.",
    longDescription:
      "Developed a single-channel LoRaWAN gateway based on ESP32 dual-core MCU for versatile IoT deployments. The system integrates SX1276/78 LoRa modules (433/925MHz), Ethernet, RS485 (isolated 1Mbps), WiFi, and BLE connectivity. It features onboard W25Q64 NOR flash, SD card storage, DS3231M high-accuracy RTC with backup battery, and USB debug interface. Designed with expandable I2C, LTE, and IO modules, wide 96–264VAC or DC input support, and optional battery backup, enabling reliable industrial and smart infrastructure applications.",
    tags: [
      "ESP32",
      "SX1276/SX1278",
      "LoRaWAN",
      "W25Q64 NOR Flash",
      "DS3231M RTC",
      "Ethernet",
      "RS485",
      "WiFi",
      "BLE",
      "4G-LTE",
    ],
    icon: Antenna,
    highlight: "Multi-protocol gateway",
    media: [
      { type: "image", src: lorawanGwImg1 },
      { type: "image", src: lorawanGwImg2 },
      { type: "image", src: lorawanGwImg3 },
      { type: "image", src: lorawanGwImg4 },
    ],
    deliverables: [
      "ESP32 Firmware",
      "PCB Design Files",
      "Network Architecture Docs",
      "Production Test Guide",
    ],
  },
  {
    slug: "jetson-tx2-nx-expansion-board",
    title: "Jetson TX2 NX Expansion Board",
    category: "AI & Edge Computing",
    filterSlugs: ["pcb-hardware", "embedded-linux-bsp"],
    description:
      "High-performance expansion board for NVIDIA Jetson TX2 NX with dual MIPI-CSI cameras, LVDS input, HDMI, Gigabit Ethernet, USB 3.0, CAN bus, and 60V/6S Li-ion power support for robotics and AI edge applications.",
    longDescription:
      "Designed a high-performance expansion board for the NVIDIA Jetson TX2 NX, extending its capabilities for robotics and AI edge applications. The board integrates dual MIPI-CSI camera connectors, LVDS camera input (Sony FCB 9500-L), HDMI, RJ45 Ethernet, USB 3.0 Type-C, USB 2.0, and Micro SD storage. It supports up to 60V power input with a 6S Li-ion battery interface and RTC backup. Additional interfaces include GPIO, UART, I2C, and CAN, with optimized layout for signal integrity and robust power management.",
    tags: [
      "Jetson TX2 NX",
      "MIPI-CSI",
      "LVDS",
      "HDMI",
      "Gigabit Ethernet",
      "USB 3.0",
      "CAN Bus",
      "Li-ion 6S BMS",
      "Altium",
    ],
    icon: Cpu,
    highlight: "60V AI edge platform",
    media: [
      { type: "image", src: jetsonImg1 },
      { type: "image", src: jetsonImg2 },
      { type: "image", src: jetsonImg3 },
      { type: "image", src: jetsonImg4 },
      { type: "image", src: jetsonImg5 },
    ],
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Power Management Docs",
    ],
  },
  {
    slug: "nrf5340-lora-gnss-iot-board",
    title: "nRF5340 LoRa GNSS IoT Board",
    category: "IoT / Wireless Sensing",
    filterSlugs: ["iot-connected-devices", "pcb-hardware", "embedded-firmware"],
    description:
      "Multi-communication IoT board with Nordic nRF5340 SoC, Semtech SX1302 LoRa, Quectel L96 GNSS, 256Mbit SPI flash, and multiple sensors — designed for asset tracking and environmental monitoring.",
    longDescription:
      "Designed a multi-communication IoT board based on Nordic nRF5340 dual-core SoC with BLE support. The system integrates a Semtech SX1302 LoRa module for long-range connectivity and a Quectel L96 GNSS module for precise positioning. It features 256Mbit external NOR flash via SPI and multiple sensors including DHT20, LSM6DSOX 6-axis IMU, and OPT3001 light sensor. The board supports JTAG, I2C, UART, and GPIO interfaces, enabling scalable applications in asset tracking and environmental monitoring.",
    tags: [
      "nRF5340",
      "SX1302 LoRa",
      "Quectel L96 GNSS",
      "BLE",
      "SPI Flash",
      "DHT20",
      "LSM6DSOX",
      "OPT3001",
      "High-Speed PCB",
    ],
    icon: Antenna,
    highlight: "BLE + LoRa + GNSS",
    media: [
      { type: "image", src: nrf5340Img1 },
      { type: "image", src: nrf5340Img2 },
      { type: "image", src: nrf5340Img3 },
      { type: "image", src: nrf5340Img4 },
      { type: "image", src: nrf5340Img5 },
    ],
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Sensor Integration Guide",
    ],
  },
  {
    slug: "cm4-5g-wifi6-embedded-board",
    title: "CM4 5G & WiFi 6 Embedded Board",
    category: "Embedded Linux / Hardware",
    filterSlugs: [
      "pcb-hardware",
      "embedded-linux-bsp",
      "iot-connected-devices",
    ],
    description:
      "Highly integrated CM4-based board with 5G RM520N module, Wi-Fi 6 AX200, Micro SD, USB hub, and PoE support — designed for IoT, smart infrastructure, and edge computing with high-bandwidth connectivity.",
    longDescription:
      "Developed a highly integrated custom circuit board based on Raspberry Pi CM4 for advanced embedded and edge applications. The design integrates a 5G RM520N module and Wi-Fi 6 AX200 card for high-speed connectivity, Micro SD storage expansion, and multiple USB interfaces controlled by a USB4056 hub. Optimized PCB layout ensures signal integrity and efficient power management. The board supports IoT, smart infrastructure, and edge computing deployments requiring reliable, high-bandwidth communication.",
    tags: [
      "Raspberry Pi CM4",
      "RM520N 5G",
      "Intel AX200 Wi-Fi 6",
      "USB4056 Hub",
      "High-Speed PCB",
      "Altium",
      "USB",
      "Micro SD",
    ],
    icon: Server,
    highlight: "5G + Wi-Fi 6",
    media: [
      { type: "image", src: cm4_5gImg1 },
      { type: "image", src: cm4_5gImg2 },
      { type: "image", src: cm4_5gImg3 },
      { type: "image", src: cm4_5gImg4 },
      { type: "image", src: cm4_5gImg5 },
    ],
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Signal Integrity Report",
    ],
  },
  {
    slug: "imx8-som-custom-base-board",
    title: "iMX8 SoM Custom Base Board",
    category: "Embedded Linux / Hardware",
    filterSlugs: ["pcb-hardware", "embedded-linux-bsp"],
    description:
      "Custom base PCB for Computelab UCM-iMX8M-Mini SoM with CSI camera, I2S audio codec, Class-D amplifier, Ha-Low Wi-Fi, waterproof USB-C, and 1S Li-Po BMS — optimized for low power and mass production.",
    longDescription:
      "Designed a custom base PCB for the Computelab UCM-iMX8M-Mini SoM, optimized for low power and compact embedded applications. The board integrates a 2-lane CSI camera interface, I2S audio codec (WM8904), Class-D amplifier with 1W speaker, Ha-Low Wi-Fi module, waterproof USB Type-C, UART debug port, and a 20-pin GPIO header. It includes a 1S Li-Po BMS power design for portable use, focusing on hardware architecture, EMI considerations, and mass production readiness.",
    tags: [
      "NXP iMX8M Mini",
      "Altium",
      "High-Speed PCB",
      "I2S",
      "USB Type-C",
      "Li-Po BMS",
      "Ha-Low Wi-Fi",
      "Mass Production",
    ],
    icon: CircuitBoard,
    highlight: "Compact low-power SoM",
    media: [
      { type: "image", src: imx8Img1 },
      { type: "image", src: imx8Img2 },
      { type: "image", src: imx8Img3 },
      { type: "image", src: imx8Img4 },
      { type: "image", src: imx8Img5 },
    ],
    deliverables: [
      "Altium PCB + Schematic",
      "BOM & Gerber Files",
      "Power Design Docs",
      "EMI Compliance Report",
    ],
  },
  {
    slug: "cm5-io-board-usb-otg",
    title: "CM5 IO Board with USB 2.0 OTG",
    category: "Embedded Linux / Hardware",
    filterSlugs: ["pcb-hardware", "embedded-linux-bsp"],
    description:
      "Custom Raspberry Pi CM5 IO board with dual USB 2.0 ports, USB hub IC, path switch, and Type-C interface. Compatible with CM4/CM5 via DNP resistors, with DPDT slide switch for BOOT and OTG_ID control.",
    longDescription:
      "Designed a custom Raspberry Pi CM5 IO board with dual USB 2.0 ports, integrating a USB hub IC and USB path switch for host functionality. The design ensures compatibility with both CM4 and CM5 by adding DNP resistors for optional 5.1K CC configuration. Implemented a USB Type-C interface using CM5 CC pins and a 5A-rated ideal diode for external power support. Replaced automatic OTG switching with a DPDT slide switch to manage BOOT and OTG_ID control, optimizing usability and reliability.",
    tags: [
      "Raspberry Pi CM4/CM5",
      "Altium",
      "USB 2.0 Hub IC",
      "USB Type-C",
      "High-Speed PCB",
      "Mass Production",
    ],
    icon: CircuitBoard,
    highlight: "CM4/CM5 compatible",
    media: [
      { type: "image", src: cm5IoImg1 },
      { type: "image", src: cm5IoImg2 },
      { type: "image", src: cm5IoImg3 },
      { type: "image", src: cm5IoImg4 },
    ],
    deliverables: [
      "Altium PCB + Schematic",
      "BOM & Gerber Files",
      "USB Architecture Docs",
      "Production Test Guide",
    ],
  },
  {
    slug: "iot-smart-ac-controller",
    title: "IoT-Based Smart AC Controller",
    category: "Smart Home / IoT",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "ESP32-based IR AC controller enabling remote control and monitoring via smartphone and web dashboard. Supports 100+ AC brands with remote cloning, BLE provisioning, and secure OTA updates.",
    longDescription:
      "Designed and developed an ESP32-based IR AC controller enabling remote control and monitoring via smartphone and web dashboard. The system interfaces with IR transmitters and receivers, supporting over 100 AC brands with a remote cloning feature for unsupported models. It monitors temperature and humidity and sends data to AWS IoT Core. Features include BLE-based provisioning for easy setup and secure firmware OTA updates for continuous improvement.",
    tags: [
      "ESP32",
      "C",
      "Arduino",
      "IR Communication",
      "AWS IoT Core",
      "Wi-Fi",
      "BLE",
      "I2C",
      "PCB Design",
      "IoT",
    ],
    icon: Wifi,
    highlight: "100+ AC brands",
    media: [
      { type: "image", src: smartAcImg1 },
      { type: "image", src: smartAcImg2 },
      { type: "image", src: smartAcImg3 },
      {
        type: "video",
        src: "/images/project-smart-ac-demo.mp4",
        poster: smartAcImg2,
      },
    ],
    deliverables: [
      "ESP32 Firmware",
      "Web Dashboard",
      "PCB Design Files",
      "AWS IoT Integration Guide",
    ],
  },
  {
    slug: "ai-smart-garbage-sorter",
    title: "AI-Based Smart Garbage Sorter",
    category: "IoT / AI & Automation",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "ESP32-based smart waste sorting system that automates garbage classification using cloud AI. Captures images via ESP32-CAM, processes them through AWS Rekognition, and directs waste to the correct bin using motors and a linear actuator.",
    longDescription:
      "Developed an ESP32-based smart waste sorting system that automates garbage classification to improve recycling efficiency. The system captures images using an ESP32-CAM and uploads them to AWS S3, where a Lambda function processes them via Rekognition for category detection. Based on the result, motors and a linear actuator direct waste to the correct bin, while LEDs indicate the identified type. The design integrates embedded control, cloud-based AI processing, and a stable 3D mechanical structure for reliable operation.",
    tags: [
      "ESP32",
      "ESP32-CAM",
      "AWS S3",
      "AWS Lambda",
      "AWS Rekognition",
      "C++",
      "Arduino",
      "Wi-Fi",
      "I2C",
      "GPIO",
      "Altium",
      "IoT",
    ],
    icon: Cpu,
    highlight: "Cloud AI sorting",
    media: [{ type: "image", src: garbageSorterImg }],
    deliverables: [
      "ESP32 Firmware",
      "AWS Lambda Functions",
      "3D Mechanical Design",
      "System Integration Guide",
    ],
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
    media: [{ type: "image", src: "/images/project-custom-sbc.png" }],
    deliverables: [
      "Yocto BSP Image",
      "6-Layer PCB Files",
      "Hardware Test Report",
      "FCC/CE Certification Docs",
    ],
  },
];

export { projects };

const INITIAL_COUNT = 6;

function MediaSlider({
  media,
  className,
  isModal,
}: {
  media: MediaItem[];
  className?: string;
  isModal?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setCurrentIndex(0);
  }, [media]);

  const safeIndex = currentIndex < media.length ? currentIndex : 0;
  const current = media[safeIndex];
  const hasMultiple = media.length > 1;

  const goTo = useCallback((index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setCurrentIndex(index);
  }, []);

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      goTo(safeIndex === 0 ? media.length - 1 : safeIndex - 1);
    },
    [safeIndex, media.length, goTo],
  );

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      goTo(safeIndex === media.length - 1 ? 0 : safeIndex + 1);
    },
    [safeIndex, media.length, goTo],
  );

  const togglePlay = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    },
    [isPlaying],
  );

  const toggleMute = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    },
    [isMuted],
  );

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      {media.map((item, i) => (
        <div
          key={i}
          className={`${i === safeIndex ? "block" : "hidden"}`}
        >
          {item.type === "video" ? (
            isModal ? (
              <>
                <video
                  ref={i === safeIndex ? videoRef : undefined}
                  poster={item.poster}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="auto"
                  data-testid="video-media-player"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                {i === safeIndex && !isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                    onClick={togglePlay}
                    data-testid="button-play-video"
                  >
                    <div className="rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm border border-primary/50 transition-transform hover:scale-110 w-16 h-16">
                      <Play className="text-primary-foreground ml-0.5 w-7 h-7" />
                    </div>
                  </div>
                )}
                {i === safeIndex && isPlaying && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 z-20">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-background/50 backdrop-blur-sm text-foreground"
                      onClick={toggleMute}
                      data-testid="button-toggle-mute"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
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
              <div className="relative w-full h-full">
                {(item.poster || media.find(m => m.type === "image")?.src) ? (
                  <img
                    src={item.poster || media.find(m => m.type === "image")?.src || ""}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="auto"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm border border-primary/50 w-10 h-10">
                    <Play className="text-primary-foreground ml-0.5 w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          ) : (
            <img
              src={item.src}
              alt=""
              className={`w-full ${isModal ? "object-contain" : "h-full object-cover"}`}
            />
          )}
        </div>
      ))}

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
                  i === safeIndex
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
              {safeIndex + 1}/{media.length}
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

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
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

      <button
        className="hidden md:flex fixed left-2 lg:left-5 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 items-center justify-center rounded-full bg-primary/15 border-2 border-primary/50 text-primary hover:bg-primary/30 hover:border-primary hover:scale-110 backdrop-blur-md transition-all duration-150 shadow-[0_0_15px_rgba(var(--primary-rgb,0,255,255),0.2)]"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        data-testid="button-prev-project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="hidden md:flex fixed right-2 lg:right-5 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 items-center justify-center rounded-full bg-primary/15 border-2 border-primary/50 text-primary hover:bg-primary/30 hover:border-primary hover:scale-110 backdrop-blur-md transition-all duration-150 shadow-[0_0_15px_rgba(var(--primary-rgb,0,255,255),0.2)]"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        data-testid="button-next-project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-card border border-border/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-t-xl">
          <MediaSlider
            key={project.title}
            media={project.media}
            className="w-full"
            isModal
          />

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
          <div>
            <p className="text-xs font-mono text-primary/70 mb-1 tracking-wider uppercase">
              {project.category}
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              {project.title}
            </h3>
          </div>

          <div className="flex md:hidden items-center justify-between mt-2">
            <Button
              size="sm"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/15 hover:border-primary gap-1"
              onClick={onPrev}
            >
              <ChevronLeft className="w-4 h-4" /> Prev Project
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/15 hover:border-primary gap-1"
              onClick={onNext}
            >
              Next Project <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>

          <div>
            <h4 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
              Tech Stack
            </h4>
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
            <h4 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
              Deliverables
            </h4>
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

export function Portfolio({
  initialSlug,
  initialCategory,
}: { initialSlug?: string; initialCategory?: string } = {}) {
  const [, setLocation] = useLocation();
  const [activeCategory, setActiveCategory] = useState(
    initialCategory || "all",
  );
  const [visibleCount, setVisibleCount] = useState(6);
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
        document
          .getElementById("portfolio")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialCategory]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.filterSlugs.includes(activeCategory));

  const categoryBaseUrl =
    activeCategory === "all" ? "/" : `/category/${activeCategory}`;

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setVisibleCount(6);
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
      const currentInFiltered = filteredProjects.findIndex(
        (p) => p === projects[selectedIndex],
      );
      const newFilteredIndex =
        currentInFiltered <= 0
          ? filteredProjects.length - 1
          : currentInFiltered - 1;
      const newProject = filteredProjects[newFilteredIndex];
      const newGlobalIndex = projects.indexOf(newProject);
      setSelectedIndex(newGlobalIndex);
      setLocation(`/project/${newProject.slug}`);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      const currentInFiltered = filteredProjects.findIndex(
        (p) => p === projects[selectedIndex],
      );
      const newFilteredIndex =
        currentInFiltered >= filteredProjects.length - 1
          ? 0
          : currentInFiltered + 1;
      const newProject = filteredProjects[newFilteredIndex];
      const newGlobalIndex = projects.indexOf(newProject);
      setSelectedIndex(newGlobalIndex);
      setLocation(`/project/${newProject.slug}`);
    }
  };

  const activeCategoryName =
    filterCategories.find((c) => c.slug === activeCategory)?.name ||
    "All Projects";

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
                A selection of production-grade embedded systems delivered
                end-to-end — from architecture through manufacturing.
              </p>
            </div>
            <p className="text-sm font-mono text-muted-foreground">
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
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
          {filteredProjects.slice(0, visibleCount).map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={project.slug}
                data-testid={`card-project-${idx}`}
                className="group cursor-pointer rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300 relative"
                onClick={() => openProject(idx)}
              >
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <MediaSlider
                    media={project.media}
                    className="w-full h-full"
                  />
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

        {filteredProjects.length > visibleCount && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="font-mono text-sm border-primary/40 text-primary gap-2 hover:bg-primary/10"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              data-testid="button-show-more"
            >
              <ChevronDown className="w-4 h-4" />
              Show More ({filteredProjects.length - visibleCount} remaining)
            </Button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-mono text-sm">
              No projects found in this category.
            </p>
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
