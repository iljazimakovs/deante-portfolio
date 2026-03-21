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
  Search,
  Antenna,
  MonitorSmartphone,
  ImageIcon,
  Zap,
  Activity,
  ThumbsUp,
  Link2,
  Check,
  Camera,
  Thermometer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const garbageSorterImg = "/images/image_1772512279505.jpg";
const smartAcImg1 = "/images/image_1772513484469.jpg";
const smartAcImg2 = "/images/image_1772513491486.jpg";
const smartAcImg3 = "/images/image_1772513498323.jpg";
const cm5IoImg1 = "/images/image_1772514654396.jpg";
const cm5IoImg2 = "/images/image_1772514659035.jpg";
const cm5IoImg3 = "/images/image_1772514663029.jpg";
const cm5IoImg4 = "/images/image_1772514687391.jpg";
const imx8Img1 = "/images/image_1772515235120.jpg";
const imx8Img2 = "/images/image_1772515239394.jpg";
const imx8Img3 = "/images/image_1772515243964.jpg";
const imx8Img4 = "/images/image_1772515247648.jpg";
const imx8Img5 = "/images/image_1772515254381.jpg";
const cm4_5gImg1 = "/images/image_1772515540147.jpg";
const cm4_5gImg2 = "/images/image_1772515544449.jpg";
const cm4_5gImg3 = "/images/image_1772515547834.jpg";
const cm4_5gImg4 = "/images/image_1772515551954.jpg";
const cm4_5gImg5 = "/images/image_1772515556146.jpg";
const nrf5340Img1 = "/images/image_1772515758669.jpg";
const nrf5340Img2 = "/images/image_1772515763033.jpg";
const nrf5340Img3 = "/images/image_1772515767252.jpg";
const nrf5340Img4 = "/images/image_1772515771234.jpg";
const nrf5340Img5 = "/images/image_1772515774949.jpg";
const jetsonImg1 = "/images/image_1772515895194.jpg";
const jetsonImg2 = "/images/image_1772515899432.jpg";
const jetsonImg3 = "/images/image_1772515903228.jpg";
const jetsonImg4 = "/images/image_1772515906659.jpg";
const jetsonImg5 = "/images/image_1772515910441.jpg";
const lorawanGwImg1 = "/images/image_1772516000947.jpg";
const lorawanGwImg2 = "/images/image_1772516005151.jpg";
const lorawanGwImg3 = "/images/image_1772516009642.jpg";
const lorawanGwImg4 = "/images/image_1772516014589.jpg";
const kbImg1 = "/images/image_1772516262337.jpg";
const kbImg2 = "/images/image_1772516265969.jpg";
const kbImg3 = "/images/image_1772516268993.jpg";
const kbImg4 = "/images/image_1772516272177.jpg";
const kbImg5 = "/images/image_1772516276487.jpg";
const tuneImg1 = "/images/image_1772516558647.jpg";
const tuneImg2 = "/images/image_1772516561953.jpg";
const tuneImg3 = "/images/image_1772516565558.jpg";
const tuneImg4 = "/images/image_1772516569652.jpg";
const tuneImg5 = "/images/image_1772516573546.jpg";
const modKbImg1 = "/images/image_1772516757241.jpg";
const modKbImg2 = "/images/image_1772516760657.jpg";
const modKbImg3 = "/images/image_1772516763910.jpg";
const modKbImg4 = "/images/image_1772516767056.jpg";
const modKbImg5 = "/images/image_1772516770470.jpg";
const gsmImg1 = "/images/image_1772517196510.jpg";
const gsmImg2 = "/images/image_1772517200677.jpg";
const gsmImg3 = "/images/image_1772517204181.jpg";
const gsmImg4 = "/images/image_1772517208053.jpg";
const doorLockImg1 = "/images/image_1772517469413.jpg";
const envImagingImg1 = "/images/image_1772517587413.jpg";
const laneImg1 = "/images/image_1772517778740.jpg";
const laneImg2 = "/images/image_1772517783099.jpg";
const laneImg3 = "/images/image_1772517788291.jpg";
const laneImg4 = "/images/image_1772517794283.jpg";
const laneImg5 = "/images/image_1772517801026.jpg";
const roboArmImg1 = "/images/image_1772517950140.jpg";
const roboArmImg2 = "/images/image_1772517954562.jpg";
const roboArmImg3 = "/images/image_1772517961091.jpg";
const predMaintImg1 = "/images/image_1772518205107.jpg";
const predMaintImg2 = "/images/image_1772518221506.jpg";
const predMaintImg3 = "/images/image_1772518228852.jpg";
const predMaintImg4 = "/images/image_1772518235099.jpg";
const clarecoImg1 = "/images/image_1772543017538.jpg";
const clarecoImg2 = "/images/image_1772543024387.jpg";
const clarecoClinicImg1 = "/images/image_1772543264738.jpg";
const usbcPcbVideo = "/images/project-usbc-pcb-panel.mp4";
const psuVideo = "/images/project-power-supply.mp4";
const psuImg1 = "/images/image_1772543835349.jpg";
const psuImg2 = "/images/image_1772543842115.jpg";
const psuImg3 = "/images/image_1772543847124.jpg";
const motorVideo = "/images/project-motor-controller.mp4";
const rpiHatVideo = "/images/project-rpi-motor-hat.mp4";
const sbcImg1 = "/images/1.jpg";
const sbcImg2 = "/images/2.jpg";
const sbcImg3 = "/images/3.jpg";
const lmrConsoleImg1 = "/images/812-2_1772603385611.jpg";
const cs74Img1 = "/images/CS-74_1772604563738.jpg";
const vg500Img1 = "/images/image_1772604751479.jpg";
const mosfetImg1 = "/images/image_1772545256057.jpg";
const mosfetImg2 = "/images/image_1772545261768.jpg";
const mosfetImg3 = "/images/image_1772545266834.jpg";
const netduino_cam_1 = "/images/netduino_cam1.jpg";
const netduino_cam_2 = "/images/netduino_cam3.jpg";
const netduino_cam_3 = "/images/netduino_cam4.jpg";
const netduino_cam_4 = "/images/netduino_cam2.jpg";
const ne101_mqtt_lte_iot_camera_1 = "/images/ne101_mqtt_lte_iot_camera_1.jpg";
const ne101_mqtt_lte_iot_camera_2 = "/images/ne101_mqtt_lte_iot_camera_2.jpg";
const ne101_mqtt_lte_iot_camera_3 = "/images/ne101_mqtt_lte_iot_camera_3.jpg";
const ne101_mqtt_lte_iot_camera_4 = "/images/ne101_mqtt_lte_iot_camera_4.jpg";
const ne101_mqtt_lte_iot_camera_5 = "/images/ne101_mqtt_lte_iot_camera_5.jpg";
const ne101_mqtt_lte_iot_camera_6 = "/images/ne101_mqtt_lte_iot_camera_6.jpg";
const ne101_mqtt_lte_iot_camera_7 = "/images/ne101_mqtt_lte_iot_camera_7.jpg";
const ne101_mqtt_lte_iot_camera_8 = "/images/ne101_mqtt_lte_iot_camera_8.jpg";
const pi_camera_doorbell_notifications_1 =
  "/images/pi_camera_doorbell_notifications_1.jpg";
const pi_camera_doorbell_notifications_2 =
  "/images/pi_camera_doorbell_notifications_2.jpg";
const pi_camera_doorbell_notifications_3 =
  "/images/pi_camera_doorbell_notifications_3.jpg";
const pi_camera_doorbell_notifications_4 =
  "/images/pi_camera_doorbell_notifications_4.jpg";
const pi_camera_doorbell_notifications_5 =
  "/images/pi_camera_doorbell_notifications_5.jpg";
const kria_kv260_petalinux_bsp_1 = "/images/kria_kv260_petalinux_bsp_1.jpg";
const kria_kv260_petalinux_bsp_2 = "/images/kria_kv260_petalinux_bsp_2.jpg";
const kria_kv260_petalinux_bsp_3 = "/images/kria_kv260_petalinux_bsp_3.jpg";
const k26_som_multi_boot_custom_carrier_1 =
  "/images/k26_som_multi_boot_custom_carrier_1.jpg";
const k26_som_multi_boot_custom_carrier_2 =
  "/images/k26_som_multi_boot_custom_carrier_2.jpg";
const zynq_mpsoc_vivado_ps_configuration_1 =
  "/images/zynq_mpsoc_vivado_ps_configuration_1.jpg";
const zynq_mpsoc_vivado_ps_configuration_2 =
  "/images/zynq_mpsoc_vivado_ps_configuration_2.jpg";
const zynq_mpsoc_vivado_ps_configuration_3 =
  "/images/zynq_mpsoc_vivado_ps_configuration_3.jpg";
const zynq_mpsoc_vivado_ps_configuration_4 =
  "/images/zynq_mpsoc_vivado_ps_configuration_4.jpg";
const versal_vitis_hardware_in_the_loop_1 =
  "/images/versal_vitis_hardware_in_the_loop_1.jpg";
const kria_kv260_fir_filter_acceleration_1 =
  "/images/kria_kv260_fir_filter_acceleration_1.jpg";
const kria_kv260_fir_filter_acceleration_3 =
  "/images/kria_kv260_fir_filter_acceleration_3.jpg";
const kria_kv260_fir_filter_acceleration_4 =
  "/images/kria_kv260_fir_filter_acceleration_4.jpg";
const kria_kv260_fir_filter_acceleration_5 =
  "/images/kria_kv260_fir_filter_acceleration_5.jpg";
const kria_kv260_fir_filter_acceleration_6 =
  "/images/kria_kv260_fir_filter_acceleration_6.jpg";
const pulseRateImg1 = "/images/pulseRateImg1.jpg";
const pulseRateImg2 = "/images/pulseRateImg2.jpg";
const pulseRateImg3 = "/images/pulseRateImg3.jpg";
const pulseRateImg4 = "/images/pulseRateImg4.jpg";
const pulseRateImg5 = "/images/pulseRateImg5.jpg";
const healthMonitorImg1 = "/images/healthMonitorImg1.jpg";
const healthMonitorImg2 = "/images/healthMonitorImg2.jpg";
const healthMonitorImg3 = "/images/healthMonitorImg3.jpg";
const healthMonitorImg4 = "/images/healthMonitorImg4.jpg";
const healthMonitorImg5 = "/images/healthMonitorImg5.jpg";
const rfidTrackingImg1 = "/images/rfidTrackingImg1.png";
const rfidTrackingImg2 = "/images/rfidTrackingImg2.png";
const rfidTrackingImg3 = "/images/rfidTrackingImg3.jpg";
const rfidTrackingImg4 = "/images/rfidTrackingImg4.png";
const rfidTrackingImg5 = "/images/rfidTrackingImg5.png";
const wifi_water_heater_1 = "/images/wifi_water_heater_1.jpg";
const wifi_water_heater_2 = "/images/wifi_water_heater_2.jpg";
const wifi_water_heater_3 = "/images/wifi_water_heater_3.jpg";
const wifi_water_heater_4 = "/images/wifi_water_heater_4.jpg";
const heatpumpImg1 = "/images/heatpumpImg1.jpg";
const heatpumpImg2 = "/images/heatpumpImg2.jpg";
const heatpumpImg3 = "/images/heatpumpImg3.jpg";
const heatpumpImg4 = "/images/heatpumpImg4.jpg";
const heatpumpImg5 = "/images/heatpumpImg5.jpg";

const ecgImg1 = "/images/ecgImg1.jpg";
const ecgImg2 = "/images/ecgImg2.jpg";

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
  hidden?: boolean;
}

const projects: Project[] = [
  {
    slug: "usbc",
    title: "USB-C PCB Panelization Design",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware"],
    description:
      "Custom USB-C PCB with panelization for six male–female connector pairs, optimized for manufacturing. V-cut segmentation, fresering techniques, and specialized soldering windows for factory assembly.",
    longDescription:
      "Designed a custom USB-C PCB featuring panelization for six male–female connector pairs, optimized for efficient manufacturing and assembly. Implemented a distinctive V-cut segmentation strategy and advanced fresering techniques to improve structural stability and production throughput. Developed specialized soldering windows to ensure precise connector alignment and reliable factory soldering. The project covered full schematic and layout design in KiCad 8, along with detailed 3D visualization and animation in Blender 4.3 for technical presentation.",
    tags: [
      "KiCad 8",
      "USB-C",
      "PCB Panelization",
      "V-Cut",
      "DFM Optimization",
      "Blender 4.3",
      "3D Visualization",
    ],
    icon: CircuitBoard,
    highlight: "DFM optimized",
    media: [{ type: "video", src: usbcPcbVideo }],
    hidden: false,
    deliverables: [
      "KiCad PCB + Schematic",
      "Panelization Layout",
      "Gerber & BOM Files",
      "3D Blender Visualization",
    ],
  },
  {
    slug: "smdc",
    title: "Smart 12V DC Motor Controller",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "12V DC motor control PCB with integrated rotation counting using STM8S003. HALL sensor for real-time speed measurement and MOSFET-based driver for efficient motor operation.",
    longDescription:
      "Designed a reliable 12V DC motor control PCB with integrated rotation counting using an STM8S003 microcontroller. The system utilizes a HALL sensor for precise real-time speed and rotation measurement, while a MOSFET-based driver ensures efficient and smooth motor operation. The PCB layout was optimized for noise immunity, thermal management, and long-term durability. The solution supports customizable control logic, making it suitable for automation, robotics, and industrial motor control applications.",
    tags: [
      "STM8S003",
      "Embedded C",
      "HALL Sensor",
      "MOSFET Driver",
      "PWM",
      "Power Electronics",
      "PCB Design",
    ],
    icon: Battery,
    highlight: "HALL sensor feedback",
    media: [{ type: "video", src: motorVideo }],
    hidden: false,
    deliverables: [
      "PCB Layout + Schematic",
      "STM8 Firmware",
      "BOM & Gerber Files",
      "Motor Control Documentation",
    ],
  },
  {
    slug: "mpsu",
    title: "Miniature Regulated Power Supply",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Compact regulated power supply PCB with adjustable output voltage and real-time monitoring. ADC/DAC feedback loop controlled by STM8 microcontroller with seven-segment display output.",
    longDescription:
      "Designed a compact regulated power supply PCB with adjustable output voltage and real-time monitoring. Integrated an ADC to measure input, output, and reference voltages for precise feedback control. Output regulation is achieved through a DAC-driven feedback loop, dynamically maintaining stability under varying loads. Controlled by an STM8 microcontroller, the system executes efficient voltage regulation algorithms. A three-digit seven-segment display provides clear operational feedback, demonstrating robust hardware architecture and precision PCB layout design.",
    tags: [
      "STM8",
      "ADC",
      "DAC",
      "Embedded C",
      "Power Electronics",
      "Signal Integrity",
      "PCB Design",
    ],
    icon: Battery,
    highlight: "DAC feedback control",
    media: [
      { type: "video", src: psuVideo, poster: psuImg1 },
      { type: "image", src: psuImg1 },
      { type: "image", src: psuImg2 },
      { type: "image", src: psuImg3 },
    ],
    hidden: false,
    deliverables: [
      "PCB Layout + Schematic",
      "STM8 Firmware",
      "BOM & Gerber Files",
      "Test & Validation Report",
    ],
  },
  {
    slug: "c45g",
    title: "CM4 5G & WiFi 6 Embedded Board",
    category: "Embedded Linux / Hardware",
    filterSlugs: [
      "pcb-hardware",
      "embedded-linux-bsp",
      "iot-connected-devices",
      "hardware-debugging",
    ],
    description:
      "Highly integrated CM4-based board with 5G RM520N module, Wi-Fi 6 AX200, Micro SD, USB hub, and PoE support - designed for IoT, smart infrastructure, and edge computing with high-bandwidth connectivity.",
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
    hidden: false,
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Signal Integrity Report",
    ],
  },
  {
    slug: "jtx2",
    title: "Jetson TX2 NX Expansion Board",
    category: "AI & Edge Computing",
    filterSlugs: [
      "pcb-hardware",
      "embedded-linux-bsp",
      "embedded-firmware",
      "hardware-debugging",
    ],
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
    hidden: false,
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Power Management Docs",
    ],
  },
  {
    slug: "ndai",
    title: "Edge Vision Camera with Cloud Object Detection",
    category: "IoT & Connected Devices / Embedded Firmware",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Embedded smart camera built with Netduino and ArduCam OV2640 that captures images and sends them to a cloud server for AI-based object detection and automated alert notifications.",
    longDescription:
      "Developed a smart camera system integrating a Netduino microcontroller with an ArduCam OV2640 module to capture images and transmit them to a middleware server for AI-based object detection. Firmware ports Arduino camera libraries to the .NET Micro Framework using SPI and I2C communication. Captured frames are uploaded to a cloud processing service running YOLO detection models. The system enables event-based monitoring and can trigger notifications such as email or SMS alerts when specific objects are detected.",
    tags: [
      "Netduino",
      "ArduCam OV2640",
      "C#",
      ".NET Micro Framework",
      "SPI",
      "I2C",
      "Python Flask",
      "YOLO",
      "AWS EC2",
    ],
    icon: Camera,
    highlight: "AI Vision Alerts",
    media: [
      { type: "image", src: netduino_cam_1 },
      { type: "image", src: netduino_cam_2 },
      { type: "image", src: netduino_cam_3 },
      { type: "image", src: netduino_cam_4 },
    ],
    hidden: false,
    deliverables: [
      "Embedded Firmware",
      "Camera Interface Integration",
      "Middleware Upload API",
      "AI Detection Pipeline",
      "System Documentation",
    ],
  },
  {
    slug: "ne10",
    title: "NE101 MQTT LTE IoT Camera",
    category: "IoT & Connected Devices / Embedded Firmware",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Battery-powered IoT camera using OV5640 and Cat.1 LTE module to capture images and transmit them via MQTT/MQTTS with JSON payloads for remote monitoring, automation systems, and cloud-based image analytics.",
    longDescription:
      "Developed a low-power IoT sensing camera using the OV5640 image sensor with optional Cat.1 LTE connectivity via the EG912U module. The device supports Wi-Fi AP configuration, MQTT/MQTTS image reporting, scheduled and event-based captures, and remote firmware management. Captured images are encoded in Base64 and transmitted as JSON payloads to cloud platforms. The system supports PIR triggers, scheduled captures, and battery monitoring, making it suitable for remote monitoring and edge IoT deployments.",
    tags: [
      "OV5640 Camera",
      "EG912U LTE",
      "MQTT",
      "MQTTS",
      "Embedded Systems",
      "IoT Camera",
      "Wi-Fi AP",
      "JSON Telemetry",
      "Battery Powered",
    ],
    icon: Camera,
    highlight: "MQTT Image Streaming",
    media: [
      { type: "image", src: ne101_mqtt_lte_iot_camera_1 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_2 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_3 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_4 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_5 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_6 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_7 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_8 },
    ],
    hidden: false,
    deliverables: [
      "Embedded Camera Firmware",
      "MQTT/MQTTS Data Integration",
      "Device Configuration Web Interface",
      "IoT Cloud Communication Setup",
      "Hardware Integration Documentation",
    ],
  },
  {
    slug: "dbel",
    title: "RF Doorbell Camera Alert System",
    category: "IoT & Connected Devices / Embedded Firmware",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Built a low-cost smart doorbell using Raspberry Pi Zero W, Pi Camera, and 433MHz RF receiver to capture visitor images and send MQTT-based notifications through Home Assistant and Telegram.",
    longDescription:
      "Developed a DIY smart doorbell system using Raspberry Pi Zero W, a Pi Camera, and a 433MHz RF receiver to intercept wireless doorbell signals. When the button is pressed, the system captures an image, publishes it over MQTT, and forwards notifications through Home Assistant and Telegram. The solution combines RF event detection, camera control, MQTT messaging, and home automation integration to deliver an affordable connected doorbell with remote image alerts.",
    tags: [
      "Raspberry Pi Zero W",
      "Pi Camera",
      "433MHz RF Receiver",
      "MQTT",
      "Home Assistant",
      "Telegram",
      "Python",
      "GPIO",
      "Rpi-rf",
    ],
    icon: Camera,
    highlight: "RF Doorbell Camera Alerts",
    media: [
      { type: "image", src: pi_camera_doorbell_notifications_1 },
      { type: "image", src: pi_camera_doorbell_notifications_2 },
      { type: "image", src: pi_camera_doorbell_notifications_3 },
      { type: "image", src: pi_camera_doorbell_notifications_4 },
      { type: "image", src: pi_camera_doorbell_notifications_5 },
    ],
    hidden: true,
    deliverables: [
      "Python Doorbell Detection Script",
      "Pi Camera Capture Integration",
      "MQTT Notification Pipeline",
      "Home Assistant Automation Setup",
      "Telegram Alert Integration",
    ],
  },
  {
    slug: "nrf5",
    title: "nRF5340 LoRa GNSS IoT Board",
    category: "IoT / Wireless Sensing",
    filterSlugs: ["iot-connected-devices", "pcb-hardware", "embedded-firmware"],
    description:
      "Multi-communication IoT board with Nordic nRF5340 SoC, Semtech SX1302 LoRa, Quectel L96 GNSS, 256Mbit SPI flash, and multiple sensors - designed for asset tracking and environmental monitoring.",
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
    hidden: true,
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Sensor Integration Guide",
    ],
  },
  {
    slug: "lgw1",
    title: "ESP32 LoRaWAN Gateway V1",
    category: "IoT / Wireless Sensing",
    filterSlugs: ["iot-connected-devices", "pcb-hardware", "embedded-firmware"],
    description:
      "Single-channel LoRaWAN gateway based on ESP32 with SX1276/78 LoRa, Ethernet, isolated RS485, WiFi, BLE, NOR flash, SD card, and RTC - supporting 96–264VAC input and optional battery backup for industrial IoT.",
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
    hidden: false,
    deliverables: [
      "ESP32 Firmware",
      "PCB Design Files",
      "Network Architecture Docs",
      "Production Test Guide",
    ],
  },
  {
    slug: "apmd",
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
    hidden: true,
    deliverables: [
      "Simulink Digital Twin Model",
      "LSTM-Autoencoder ONNX",
      "ARM Linux Edge Firmware",
      "Retraining Pipeline Scripts",
    ],
  },
  {
    slug: "ecg1",
    title: "Embedded ECG Monitoring and HRV Analysis System",
    category: "IoT & Smart Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Single-lead ECG monitoring system using the MAX30003 AFE and Arduino Uno to capture cardiac signals and measure heart-rate variability through real-time R-R interval detection.",
    longDescription:
      "Developed a single-lead ECG monitoring system using the MAX30003 analog front-end with an Arduino Uno to acquire accurate cardiac electrical signals. The system uses two electrodes connected to the chest to capture ECG data, which is transmitted to the microcontroller via SPI. The MAX30003 integrates hardware-based R-R interval detection using the Pan-Tompkins algorithm, allowing precise heart-rate variability (HRV) analysis with minimal processing overhead. The Arduino firmware streams ECG waveform data and R-R interval measurements over USB-UART, while a Processing-based GUI visualizes the signal in real time and displays instantaneous heart-rate values.",
    tags: [
      "MAX30003",
      "Arduino Uno",
      "Embedded C",
      "SPI",
      "ECG Monitoring",
      "Heart Rate Variability",
      "Biomedical Signal Processing",
      "Processing GUI",
    ],
    icon: Activity,
    highlight: "Real-time ECG monitoring",
    media: [
      { type: "image", src: ecgImg1 },
      { type: "image", src: ecgImg2 },
    ],
    hidden: false,
    deliverables: [
      "Embedded Firmware",
      "ECG Signal Acquisition System",
      "SPI Sensor Interface",
      "Real-time Visualization GUI",
      "Prototype Validation",
    ],
  },
  {
    slug: "pulse-rate-monitor-arduino",
    title: "Real-Time Pulse Tracking System with Arduino",
    category: "IoT & Smart Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Arduino-based pulse monitoring system that reads real-time heart rate from a PPG pulse sensor and displays BPM values on a 16x2 LCD for simple, low-cost health tracking.",
    longDescription:
      "Developed a real-time pulse rate monitoring system using an Arduino Uno, a Pulse Sensor, and a 16x2 LCD display. The sensor uses photoplethysmography (PPG) to detect blood flow changes and generate an analog heartbeat waveform. The Arduino processes the signal, applies noise filtering, calculates beats per minute, and displays live BPM readings on the LCD. The project provides a simple and affordable solution for basic health monitoring, education, and biomedical prototyping.",
    tags: [
      "Arduino Uno",
      "Pulse Sensor",
      "PPG",
      "Heart Rate Monitoring",
      "Embedded C",
      "16x2 LCD",
      "Analog Signal Processing",
    ],
    icon: Activity,
    highlight: "Live BPM display",
    media: [
      { type: "image", src: pulseRateImg1 },
      { type: "image", src: pulseRateImg2 },
      { type: "image", src: pulseRateImg3 },
      { type: "image", src: pulseRateImg4 },
      { type: "image", src: pulseRateImg5 },
    ],
    hidden: false,
    deliverables: [
      "Arduino Firmware",
      "Sensor Interface Circuit",
      "LCD Display Integration",
      "Signal Filtering Logic",
      "Prototype Demonstration",
    ],
  },
  {
    slug: "ai-vital-signs-monitor",
    title: "AI-Enabled Remote Vital Signs Monitoring Platform",
    category: "IoT & Smart Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "pcb-hardware"],
    description:
      "Wearable multi-sensor health monitoring device using BLE and cloud connectivity to track ECG, SpO2, temperature, respiration, and activity with AI-assisted analysis.",
    longDescription:
      "Developed a wearable IoT-based vital signs monitoring system designed for remote patient monitoring during large-scale healthcare scenarios. The device integrates multiple biomedical sensors including ECG (ADS1292R), SpO2 and heart rate (MAX30102), temperature (TMP117), accelerometer for activity and fall detection (IIS2DLPC), and MEMS microphones for respiratory sound monitoring. Powered by the nRF52840 BLE SoC, the system streams patient data to a mobile gateway via Bluetooth 5 and securely uploads it to a cloud platform for real-time visualization and AI-assisted health analysis. The modular hardware architecture separates ECG, oximeter, and core processing boards connected through flex cables, enabling flexible wearable configurations and easier enclosure design.",
    tags: [
      "nRF52840",
      "BLE 5",
      "ECG Monitoring",
      "SpO2",
      "Embedded C++",
      "Biomedical Sensors",
      "AWS Cloud",
      "IoT Healthcare",
      "PCB Design",
    ],
    icon: Activity,
    highlight: "AI remote health monitoring",
    media: [
      { type: "image", src: healthMonitorImg1 },
      { type: "image", src: healthMonitorImg2 },
      { type: "image", src: healthMonitorImg3 },
      { type: "image", src: healthMonitorImg4 },
      { type: "image", src: healthMonitorImg5 },
    ],
    hidden: false,
    deliverables: [
      "Embedded Firmware",
      "Multi-Sensor Hardware Design",
      "BLE Communication Stack",
      "Cloud Data Streaming Integration",
      "System Architecture Documentation",
    ],
  },
  {
    slug: "gsm1",
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
    hidden: true,
    deliverables: [
      "Embedded C Firmware",
      "Schematic + PCB Layout",
      "Simulation Files",
      "Prototype Validation Report",
    ],
  },
  {
    slug: "csbc",
    title: "Custom Embedded Linux SBC",
    category: "Embedded Linux / Hardware",
    filterSlugs: ["embedded-linux-bsp", "pcb-hardware", "hardware-debugging"],
    description:
      "Custom single-board computer built around an i.MX6 SoC with Yocto Linux BSP. Designed for edge computing applications with industrial-grade reliability and extended temperature range.",
    longDescription:
      "Engineered a custom single-board computer for edge computing applications requiring industrial reliability. The board is built around an NXP i.MX6 SoC with 1GB DDR3 RAM, eMMC storage, Gigabit Ethernet, USB, and a 40-pin GPIO header for expansion. The custom Yocto Linux BSP includes a hardened kernel, secure boot via HABv4, and application containerization via Docker. Designed for -40 to +85C operation with conformal coating support. The 6-layer PCB was optimized for EMI compliance and passed FCC/CE certification. Used as the compute platform for multiple industrial IoT deployments.",
    tags: ["i.MX6", "Yocto", "DDR3", "Secure Boot", "PCB Design", "Linux"],
    icon: Cpu,
    highlight: "Industrial -40 to 85C",
    media: [
      { type: "image", src: sbcImg1 },
      { type: "image", src: sbcImg2 },
      { type: "image", src: sbcImg3 },
    ],
    hidden: true,
    deliverables: [
      "Yocto BSP Image",
      "6-Layer PCB Files",
      "Hardware Test Report",
      "FCC/CE Certification Docs",
    ],
  },
  {
    slug: "isac",
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
    ],
    hidden: true,
    deliverables: [
      "ESP32 Firmware",
      "Web Dashboard",
      "PCB Design Files",
      "AWS IoT Integration Guide",
    ],
  },
  {
    slug: "alfs",
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
    hidden: true,
    deliverables: [
      "Simulink Model",
      "YOLOv8n ONNX Model",
      "MPC Controller Config",
      "Simulation Results & Report",
    ],
  },
  {
    slug: "kfir",
    title: "High-Throughput FIR DSP Accelerator on KV260",
    category: "Embedded Firmware Development / Hardware Bring-Up & Debugging",
    filterSlugs: ["embedded-firmware", "hardware-debugging"],
    description:
      "Designed and accelerated a fully pipelined FIR filter on the AMD Kria KV260 using Vitis HLS and PYNQ, comparing floating-point and fixed-point implementations for high-throughput FPGA DSP processing.",
    longDescription:
      "Developed a high-performance FIR filter accelerator on the AMD Kria KV260 using Vitis HLS, Vivado, and PYNQ. The design implemented a fully pipelined and parallel filter architecture with both floating-point and fixed-point data types, optimizing latency and throughput for DSP workloads. Python was used to generate coefficients and validation data, while the FPGA design was integrated with PYNQ for runtime control and benchmarking, achieving major speedups over Python and SciPy software filtering.",
    tags: [
      "AMD Kria KV260",
      "Vitis HLS",
      "Vivado",
      "PYNQ",
      "FIR Filter",
      "FPGA DSP",
      "Fixed-Point Design",
      "Floating-Point Design",
      "Python",
      "Hardware Acceleration",
    ],
    icon: Activity,
    highlight: "Pipelined DSP Acceleration",
    media: [
      { type: "image", src: kria_kv260_fir_filter_acceleration_1 },
      { type: "image", src: kria_kv260_fir_filter_acceleration_3 },
      { type: "image", src: kria_kv260_fir_filter_acceleration_4 },
      { type: "image", src: kria_kv260_fir_filter_acceleration_5 },
      { type: "image", src: kria_kv260_fir_filter_acceleration_6 },
    ],
    hidden: false,
    deliverables: [
      "Vitis HLS FIR Filter Design",
      "Vivado Hardware Platform",
      "PYNQ Integration Notebook",
      "Python Coefficient Generation Scripts",
      "Performance Benchmark Report",
    ],
  },
  {
    slug: "ccop",
    title: "Clareco AI Medical Co-Pilot",
    category: "AI / Mobile App",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "AI-powered Flutter mobile app that records doctor–patient conversations and converts them into structured email summaries. Supports 80+ languages with AI speech recognition and multilingual NLP processing.",
    longDescription:
      "Developed an AI-powered mobile application that records doctor–patient conversations and converts them into clear, structured email summaries. Built with Flutter, the app captures audio and delivers accurate transcriptions within minutes, supporting over 80 languages. Integrated AI-based speech recognition and multilingual processing to generate understandable medical summaries in Dutch or the patient's preferred language, improving comprehension, accessibility, and retention of critical healthcare information.",
    tags: [
      "Flutter",
      "Dart",
      "Speech-to-Text AI",
      "NLP",
      "Multilingual Translation",
      "Cloud APIs",
      "Mobile App",
    ],
    icon: MonitorSmartphone,
    highlight: "80+ languages",
    media: [
      { type: "image", src: clarecoImg1 },
      { type: "image", src: clarecoImg2 },
    ],
    hidden: true,
    deliverables: [
      "Flutter App Source",
      "Cloud API Integration",
      "Speech Processing Pipeline",
      "Multilingual NLP Module",
    ],
  },
  {
    slug: "imx8",
    title: "iMX8 SoM Custom Base Board",
    category: "Embedded Linux / Hardware",
    filterSlugs: ["pcb-hardware", "embedded-linux-bsp", "hardware-debugging"],
    description:
      "Custom base PCB for Computelab UCM-iMX8M-Mini SoM with CSI camera, I2S audio codec, Class-D amplifier, Ha-Low Wi-Fi, waterproof USB-C, and 1S Li-Po BMS - optimized for low power and mass production.",
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
    hidden: false,
    deliverables: [
      "Altium PCB + Schematic",
      "BOM & Gerber Files",
      "Power Design Docs",
      "EMI Compliance Report",
    ],
  },
  {
    slug: "kv26",
    title: "Embedded Vision Linux Platform for Kria KV260",
    category: "Embedded Linux & BSP",
    filterSlugs: ["embedded-linux-bsp", "iot-connected-devices"],
    description:
      "Configured and customized the PetaLinux 2021.1 BSP for the AMD Kria KV260 Vision AI kit, enabling Linux boot, camera support, and development workflows for embedded vision applications.",
    longDescription:
      "Implemented a PetaLinux 2021.1 Board Support Package setup for the AMD Kria KV260 Vision AI Starter Kit to enable Linux-based development and camera workflows. The project demonstrates BSP customization, SD image generation, boot firmware updates, and root filesystem configuration. Additional setup included SSH/SCP access, GStreamer camera pipeline testing with a USB webcam, and installing system utilities through dnf. The environment provides a foundation for embedded vision, AI acceleration, and FPGA-based Linux development.",
    tags: [
      "AMD Kria KV260",
      "PetaLinux",
      "Embedded Linux",
      "GStreamer",
      "Yocto",
      "Linux BSP",
      "Vision AI",
      "USB Camera",
      "FPGA SoC",
    ],
    icon: MonitorSmartphone,
    highlight: "Embedded Vision BSP",
    media: [
      { type: "image", src: kria_kv260_petalinux_bsp_1 },
      { type: "image", src: kria_kv260_petalinux_bsp_2 },
      { type: "image", src: kria_kv260_petalinux_bsp_3 },
    ],
    hidden: false,
    deliverables: [
      "Customized PetaLinux BSP",
      "Bootable SD Card Image",
      "Embedded Linux Configuration",
      "GStreamer Camera Test Pipeline",
      "System Setup Documentation",
    ],
  },
  {
    slug: "k26b",
    title: "Multi-Storage Boot Architecture for Embedded Linux Systems",
    category: "Embedded Linux & BSP / Hardware Bring-Up & Debugging",
    filterSlugs: ["embedded-linux-bsp", "hardware-debugging"],
    description:
      "Configured multi-boot support for AMD Kria K26 SoM on a custom carrier, enabling boot from eMMC, SD card, and USB storage using PetaLinux and U-Boot configuration.",
    longDescription:
      "Implemented a flexible boot workflow for AMD Kria K26 SoM on a custom carrier board, enabling system startup from eMMC, SD card, and USB storage. The project demonstrates modifying PetaLinux boot arguments, generating BOOT.BIN, updating QSPI boot firmware, and configuring U-Boot parameters for different storage devices. It also includes expanding the eMMC root filesystem and verifying active boot partitions through Linux commands, providing a practical workflow for embedded Linux bring-up on custom FPGA carrier designs.",
    tags: [
      "AMD Kria K26",
      "Embedded Linux",
      "PetaLinux",
      "U-Boot",
      "eMMC",
      "SD Card Boot",
      "USB Boot",
      "FPGA SoC",
      "Linux BSP",
    ],
    icon: Cpu,
    highlight: "Multi-Device Boot",
    media: [
      { type: "image", src: k26_som_multi_boot_custom_carrier_1 },
      { type: "image", src: k26_som_multi_boot_custom_carrier_2 },
    ],
    hidden: true,
    deliverables: [
      "Multi-Boot PetaLinux Configuration",
      "BOOT.BIN Generation and QSPI Update",
      "U-Boot Bootargs Setup",
      "eMMC Filesystem Expansion Guide",
      "Custom Carrier Boot Documentation",
    ],
  },
  {
    slug: "rhat",
    title: "Raspberry Pi Motor Control HAT",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Custom Raspberry Pi HAT for motor control and sensor integration. KiCad 9 design with motor drivers, regulated power supply, and GPIO/I2C/SPI interfaces in a stackable form factor.",
    longDescription:
      "Designed and developed a custom Raspberry Pi expansion board (HAT) for motor control and sensor integration in robotics and automation systems. Created in KiCad 9, the PCB integrates motor driver circuits, regulated power supply, and multiple GPIO, I2C, and SPI interfaces for analog and digital sensors. The compact stackable form factor ensures seamless integration with Raspberry Pi. Delivered complete design files, Gerbers, BOM, and 3D visualizations with Blender animations for technical presentation.",
    tags: [
      "KiCad 9",
      "Raspberry Pi",
      "GPIO",
      "I2C",
      "SPI",
      "DC Motor Drivers",
      "Power Regulation",
      "Blender 3D",
    ],
    icon: CircuitBoard,
    highlight: "Stackable HAT design",
    media: [{ type: "video", src: rpiHatVideo }],
    hidden: true,
    deliverables: [
      "KiCad PCB + Schematic",
      "Gerber & BOM Files",
      "3D Blender Visualization",
      "Integration Guide",
    ],
  },
  {
    slug: "nmkb",
    title: "Nomad RGB Mechanical Keyboard",
    category: "Consumer Electronics",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      'Premium RGB mechanical keyboard with ANSI/ISO layouts, multi-device Bluetooth, hot-swappable switches, 1.9" display, rotary encoders, and integrated battery charging - designed for mass production in Autodesk Eagle.',
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
    hidden: false,
    deliverables: [
      "Eagle PCB + Schematic",
      "BOM & Gerber Files",
      "Firmware Source",
      "Production Assembly Guide",
    ],
  },
  {
    slug: "aira",
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
    hidden: true,
    deliverables: [
      "Simulink Model + S-Function",
      "CNN ONNX Model",
      "Simscape Multibody Config",
      "Deployment Package",
    ],
  },
  {
    slug: "mosf",
    title: "MOSFET Amplifier Design & Analysis",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware"],
    description:
      "MOSFET-based amplifier with biasing network, coupling capacitors, and load configuration. AC frequency response, transient, and gain simulations validate stability and bandwidth.",
    longDescription:
      "Designed and analyzed a MOSFET-based amplifier according to specified device parameters and performance targets. Developed the complete schematic including biasing network, coupling capacitors, and load configuration. Performed AC frequency response, transient, and gain simulations to validate stability, bandwidth, and signal amplification characteristics. Evaluated cutoff frequency, voltage gain, and operating point to ensure optimal linear performance. The project demonstrates strong expertise in analog circuit design, simulation, and performance optimization.",
    tags: [
      "Analog Design",
      "MOSFET",
      "AC Analysis",
      "Transient Analysis",
      "LTspice",
      "Signal Integrity",
      "Frequency Response",
    ],
    icon: Activity,
    highlight: "Simulation-validated",
    media: [
      { type: "image", src: mosfetImg1 },
      { type: "image", src: mosfetImg2 },
      { type: "image", src: mosfetImg3 },
    ],
    hidden: true,
    deliverables: [
      "Circuit Schematic",
      "Simulation Results",
      "Frequency Response Analysis",
      "Design Report",
    ],
  },
  {
    slug: "mckb",
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
    hidden: false,
    deliverables: [
      "Eagle PCB + Schematic",
      "VIA Firmware Config",
      "BOM & Gerber Files",
      "Module Interface Spec",
    ],
  },
  {
    slug: "ieis",
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
    hidden: true,
    deliverables: [
      "ESP32 Firmware",
      "PCB Layout + Schematic",
      "Enclosure CAD Files",
      "Cloud Integration Docs",
    ],
  },
  {
    slug: "zpsc",
    title:
      "Foundational Vivado Platform for Zynq UltraScale+ Processing System",
    category: "Hardware Bring-Up & Debugging / Embedded Firmware Development",
    filterSlugs: ["hardware-debugging", "embedded-firmware"],
    description:
      "Created a base Vivado project to configure the Processing System of a Zynq UltraScale+ MPSoC on the MYD-CZU3EG board, enabling camera-ready Linux and software development workflows.",
    longDescription:
      "Built a base Vivado design for the MYIR MYD-CZU3EG Zynq UltraScale+ MPSoC board focusing on Processing System configuration. The project demonstrates configuring MIO banks, DDR4 memory, Ethernet, USB, UART, PCIe, DisplayPort, and storage interfaces in the PS block design. The setup generates a reusable PS configuration and exports the hardware platform as an XSA file, forming a foundation for embedded Linux, camera, and software development using Vitis or PetaLinux.",
    tags: [
      "Zynq UltraScale+ MPSoC",
      "AMD Vivado",
      "FPGA SoC",
      "Embedded Linux",
      "Processing System",
      "DDR4 Configuration",
      "Hardware Platform",
      "XSA Export",
      "Linux Development",
    ],
    icon: CircuitBoard,
    highlight: "Vivado PS Platform",
    media: [
      { type: "image", src: zynq_mpsoc_vivado_ps_configuration_1 },
      { type: "image", src: zynq_mpsoc_vivado_ps_configuration_2 },
      { type: "image", src: zynq_mpsoc_vivado_ps_configuration_3 },
      { type: "image", src: zynq_mpsoc_vivado_ps_configuration_4 },
    ],
    hidden: false,
    deliverables: [
      "Vivado Block Design Project",
      "PS Configuration TCL Preset",
      "Generated Bitstream",
      "Exported XSA Hardware Platform",
      "Base FPGA Development Setup",
    ],
  },
  {
    slug: "tune",
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
    hidden: true,
    deliverables: [
      "Eagle PCB + Schematic",
      "BOM & Gerber Files",
      "Firmware Source",
      "CE Compliance Docs",
    ],
  },
  {
    slug: "uhf-rfid-item-tracking",
    title: "Long-Range RFID Asset Location System",
    category: "IoT & Smart Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "pcb-hardware"],
    description:
      "Long-range UHF RFID tracking system using Raspberry Pi and cloud-connected readers to monitor tagged tools and assets across rooms, providing last-known location data through a web dashboard.",
    longDescription:
      "Developed a low-cost UHF RFID asset tracking system for makerspaces and shared work areas using Raspberry Pi-based monitor nodes, a Cottonwood long-range RFID reader, and passive EPC Gen2 tags. Each monitor captures timestamped tag reads over UART and sends the data to a cloud-hosted Azure Web API for centralized tracking. A web dashboard allows users to register readers and tags, then view the latest known location and read time for each item. The system combines embedded scanning, cloud integration, and inventory visibility for scalable item tracking.",
    tags: [
      "Raspberry Pi 2",
      "UHF RFID",
      "EPC Gen2",
      "UART",
      "Microsoft Azure",
      "Windows 10 IoT Core",
      "ASP.NET MVC",
      "Web API",
      "Asset Tracking",
    ],
    icon: Antenna,
    highlight: "Long-range asset tracking",
    media: [
      { type: "image", src: rfidTrackingImg1 },
      { type: "image", src: rfidTrackingImg2 },
      { type: "image", src: rfidTrackingImg3 },
      { type: "image", src: rfidTrackingImg4 },
      { type: "image", src: rfidTrackingImg5 },
    ],
    hidden: false,
    deliverables: [
      "RFID Scanner Background App",
      "Cloud Web API Integration",
      "Asset Management Web Dashboard",
      "SQL Database Schema",
      "Monitor Node Setup Documentation",
    ],
  },
  {
    slug: "vhil",
    title: "Ethernet-Driven FPGA Hardware Validation for Versal Subsystems",
    category: "Embedded Linux & BSP / Hardware Bring-Up & Debugging",
    filterSlugs: ["embedded-linux-bsp", "hardware-debugging"],
    description:
      "Implemented a Vitis Hardware-in-the-Loop flow for Versal VSS designs, enabling Ethernet-based validation of AI Engine, HLS, and RTL subsystems on real hardware before full system integration.",
    longDescription:
      "Built a Hardware-in-the-Loop verification flow for AMD Versal Vitis Sub Systems using Vitis 2025.2. The project covers generating an HIL server SD image, booting the VCK190 target, and validating AI Engine, HLS, and RTL subsystems on hardware over Ethernet. Python host scripts generated test vectors, streamed data to the target, buffered returned channel data, and visualized spectra, enabling pre-integration verification of subsystem behavior on real hardware.",
    tags: [
      "AMD Vitis",
      "Versal",
      "Vitis Sub System",
      "Hardware-in-the-Loop",
      "Python",
      "AI Engine",
      "HLS",
      "RTL Verification",
      "VCK190",
      "Ethernet",
    ],
    icon: Activity,
    highlight: "Real Hardware Verification",
    media: [{ type: "image", src: versal_vitis_hardware_in_the_loop_1 }],
    hidden: false,
    deliverables: [
      "Vitis HIL Build Flow",
      "Bootable SD Card Image",
      "Python Host Verification Scripts",
      "HIL Interface Configuration",
      "Hardware Validation Documentation",
    ],
  },
  {
    slug: "cm5i",
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
    hidden: false,
    deliverables: [
      "Altium PCB + Schematic",
      "BOM & Gerber Files",
      "USB Architecture Docs",
      "Production Test Guide",
    ],
  },
  {
    slug: "heatpump1",
    title: "Heat Pump Automation Controller",
    category: "IoT & Smart Systems",
    filterSlugs: ["embedded-firmware", "pcb-hardware", "hardware-debugging"],
    description:
      "Embedded firmware-driven heat pump controller with real-time sensor monitoring, relay-based actuation, and advanced protection logic for HVAC automation and system reliability.",
    longDescription:
      "Developed a heat pump automation controller with a strong focus on embedded firmware design and real-time system control. Built around an Arduino Pro Mini and a custom PCB, the system manages compressors, pumps, fans, crankcase heaters, and pressure sensors while continuously monitoring up to 12 DS18B20 temperature sensors and current signals.\n\nThe embedded firmware implements state-machine-based control logic, handling system startup, shutdown, and dynamic operation based on sensor feedback. Advanced protection mechanisms are integrated, including overheat protection, pressure fault detection, power failure recovery, and compressor safety control. The firmware also supports Electronic Expansion Valve (EEV) operation, self-test routines, and real-time diagnostics via serial communication.\n\nAdditional features include RS485/UART communication for remote display and service tools, enabling monitoring, debugging, and system tuning. The solution is designed for both new installations and legacy system retrofits, providing a reliable and flexible platform for HVAC automation and experimentation.",
    tags: [
      "Arduino Pro Mini",
      "Embedded Firmware",
      "Embedded C",
      "State Machine",
      "DS18B20",
      "Heat Pump Control",
      "Electronic Expansion Valve",
      "RS485",
      "Relay Control",
      "PCB Design",
      "HVAC Automation"
    ],
    icon: Thermometer,
    highlight: "Firmware-driven HVAC control",
    media: [
      { type: "image", src: heatpumpImg1 },
      { type: "image", src: heatpumpImg2 },
      { type: "image", src: heatpumpImg3 },
      { type: "image", src: heatpumpImg4 },
      { type: "image", src: heatpumpImg5 }
    ],
    hidden: false,
    deliverables: [
      "Embedded Firmware Development",
      "State Machine Control Implementation",
      "Sensor & Actuator Integration",
      "Schematic + PCB Layout",
      "Serial Diagnostics & Debug Interface",
      "System Testing & Validation"
    ]
  },
  {
    slug: "adlk",
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
    hidden: true,
    deliverables: [
      "Arduino Firmware",
      "Android App Source",
      "Wiring Diagram",
      "System Documentation",
    ],
  },
  {
    slug: "wifi-smart-water-heater-controller",
    title: "Smart IR-Controlled Wi-Fi Water Heater Upgrade",
    category: "IoT & Smart Systems",
    filterSlugs: [
      "embedded-firmware",
      "iot-connected-devices",
      "hardware-debugging",
    ],
    description:
      "Wi-Fi-enabled smart water heater retrofit with embedded firmware, IR-based control, temperature monitoring, and web interface for remote operation and automation.",
    longDescription:
      "Developed a smart retrofit solution to add Wi-Fi connectivity to a traditional electric water heater using the Ai-M61-32S module. The project includes embedded firmware development for handling Wi-Fi connectivity, IR signal transmission, sensor data acquisition, and system control logic. Instead of replacing the original MCU, the system uses IR protocol capture and replay to control the heater. It integrates a DS18B20 temperature sensor for monitoring, an optocoupler for heating status detection, and a DS1302 RTC for timekeeping. The firmware implements a web server for remote control, OTA updates for maintainability, FlashDB for configuration storage, and LittleFS for data logging, providing a complete IoT-enabled smart home solution.",
    tags: [
      "Ai-M61-32S",
      "Wi-Fi IoT",
      "Embedded Firmware",
      "IR Communication",
      "DS18B20",
      "OTA Update",
      "FlashDB",
      "LittleFS",
      "Smart Home",
    ],
    icon: Wifi,
    highlight: "IR-based smart retrofit",
    media: [
      { type: "image", src: wifi_water_heater_1 },
      { type: "image", src: wifi_water_heater_2 },
      { type: "image", src: wifi_water_heater_3 },
      { type: "image", src: wifi_water_heater_4 },
    ],
    hidden: false,
    deliverables: [
      "Embedded Firmware Development",
      "IR Protocol Capture & Replay",
      "Web Server Control Interface",
      "Temperature Monitoring System",
      "OTA Update Implementation",
    ],
  },
  {
    slug: "ags2",
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
    hidden: true,
    deliverables: [
      "ESP32 Firmware",
      "AWS Lambda Functions",
      "3D Mechanical Design",
      "System Integration Guide",
    ],
  },
];

export { projects };

const INITIAL_COUNT = 6;

function CardVideo({
  item,
  fallbackSrc,
}: {
  item: MediaItem;
  fallbackSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const posterSrc = item.poster || fallbackSrc;

  const handleMouseEnter = useCallback(() => {
    setHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {posterSrc && (
        <img
          src={posterSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${hovering ? "opacity-0" : "opacity-100"
            }`}
        />
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        loop
        preload="metadata"
      >
        <source src={item.src} type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-200 ${hovering ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 w-10 h-10">
          <Play className="text-white ml-0.5 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

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
        <div key={i} className={`${i === safeIndex ? "block" : "hidden"}`}>
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
              <CardVideo
                item={item}
                fallbackSrc={media.find((m) => m.type === "image")?.src}
              />
            )
          ) : (
            <img
              src={item.src}
              alt=""
              className={`w-full ${isModal ? "object-contain" : "h-full object-cover"
                }`}
            />
          )}
        </div>
      ))}

      {hasMultiple && (
        <>
          <button
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground transition-all hover:bg-background/90 ${isModal ? "w-9 h-9" : "w-7 h-7"
              }`}
            onClick={goPrev}
            data-testid="button-media-prev"
          >
            <ChevronLeft className={isModal ? "w-5 h-5" : "w-4 h-4"} />
          </button>
          <button
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground transition-all hover:bg-background/90 ${isModal ? "w-9 h-9" : "w-7 h-7"
              }`}
            onClick={goNext}
            data-testid="button-media-next"
          >
            <ChevronRight className={isModal ? "w-5 h-5" : "w-4 h-4"} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {media.map((item, i) => (
              <button
                key={i}
                className={`rounded-full transition-all ${i === safeIndex
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
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        data-testid="button-prev-project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="hidden md:flex fixed right-2 lg:right-5 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 items-center justify-center rounded-full bg-primary/15 border-2 border-primary/50 text-primary hover:bg-primary/30 hover:border-primary hover:scale-110 backdrop-blur-md transition-all duration-150 shadow-[0_0_15px_rgba(var(--primary-rgb,0,255,255),0.2)]"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
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
  initialRecommendedIds,
}: {
  initialSlug?: string;
  initialCategory?: string;
  initialRecommendedIds?: string;
} = {}) {
  const [, setLocation] = useLocation();

  const parseRecommendedSlugs = (ids?: string): Set<string> => {
    if (!ids) return new Set();
    const parts = ids.split("~");
    const isLegacy =
      (parts.length === 1 && ids.includes("-")) ||
      parts.every((p) => /^\d+$/.test(p));

    if (isLegacy) {
      const slugs = ids
        .split("-")
        .map(Number)
        .filter((n) => !isNaN(n) && n >= 0 && n < projects.length)
        .map((n) => projects[n].slug);

      if (slugs.length > 0) return new Set(slugs);
    }

    const validSlugs = parts.filter((s) => projects.some((p) => p.slug === s));
    return new Set(validSlugs);
  };

  const [recommended, setRecommended] = useState<Set<string>>(() =>
    parseRecommendedSlugs(initialRecommendedIds),
  );

  const [activeCategory, setActiveCategory] = useState(() => {
    if (initialRecommendedIds) {
      const decoded = parseRecommendedSlugs(initialRecommendedIds);
      return decoded.size > 0 ? "recommended" : "all";
    }
    return initialCategory || "all";
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const closingRef = useRef(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(() => {
    if (initialSlug) {
      const idx = projects.findIndex((p) => p.slug === initialSlug);
      return idx >= 0 ? idx : null;
    }
    return null;
  });

  useEffect(() => {
    if (initialRecommendedIds && !closingRef.current) {
      const decoded = parseRecommendedSlugs(initialRecommendedIds);
      if (decoded.size > 0) {
        setRecommended(decoded);
        setActiveCategory("recommended");
      }
      setTimeout(() => {
        document
          .getElementById("portfolio")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialRecommendedIds]);

  useEffect(() => {
    if (initialSlug) {
      const idx = projects.findIndex((p) => p.slug === initialSlug);
      if (idx >= 0) {
        setSelectedIndex(idx);
      }
    }
  }, [initialSlug]);

  useEffect(() => {
    if (initialCategory && !closingRef.current) {
      setActiveCategory(initialCategory);
      setTimeout(() => {
        document
          .getElementById("portfolio")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialCategory]);

  const toggleRecommended = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRecommended((prev) => {
      const next = new Set(prev);

      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }

      if (activeCategory === "recommended") {
        if (next.size > 0) {
          setLocation(`/recommended/${Array.from(next).join("~")}`);
        } else {
          setActiveCategory("all");
          setLocation("/");
        }
      }

      return next;
    });
  };

  const getRecommendedUrl = () => {
    if (recommended.size === 0) return "";
    const ids = Array.from(recommended).join("~");
    const base = typeof window !== "undefined" ? window.location.origin : "";
    return `${base}/recommended/${ids}`;
  };

  const copyRecommendedLink = () => {
    const url = getRecommendedUrl();
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      });
    }
  };

  const categoryFiltered =
    activeCategory === "recommended"
      ? Array.from(recommended)
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is Project => p !== undefined)
      : activeCategory === "all"
        ? projects.filter((p) => !p.hidden || recommended.has(p.slug))
        : projects.filter(
          (p) => p.filterSlugs.includes(activeCategory) && (!p.hidden || recommended.has(p.slug)),
        );

  const filteredProjects = searchQuery.trim()
    ? projects.filter((p) => {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.longDescription.toLowerCase().includes(q) ||
        p.highlight.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.deliverables.some((d) => d.toLowerCase().includes(q))
      );
    })
    : categoryFiltered;

  const categoryBaseUrl =
    activeCategory === "recommended"
      ? recommended.size > 0
        ? `/recommended/${Array.from(recommended).join("~")}`
        : "/"
      : activeCategory === "all"
        ? "/"
        : `/category/${activeCategory}`;

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setVisibleCount(6);

    if (slug === "recommended") {
      if (recommended.size > 0) {
        setLocation(`/recommended/${Array.from(recommended).join("~")}`);
      } else {
        setLocation("/");
      }
    } else if (slug === "all") {
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
    closingRef.current = true;
    setSelectedIndex(null);
    setLocation(categoryBaseUrl);
    setTimeout(() => {
      closingRef.current = false;
    }, 200);
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
    activeCategory === "recommended"
      ? "Suggested"
      : filterCategories.find((c) => c.slug === activeCategory)?.name ||
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
            </div>
            <div className="text-right">
              <p className="text-sm font-mono text-muted-foreground">
                {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2" data-testid="category-filters">
            {filterCategories.map((cat) => (
              <button
                key={cat.slug}
                data-testid={`filter-${cat.slug}`}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all border ${activeCategory === cat.slug
                    ? "bg-primary/15 text-primary border-primary/40"
                    : "bg-card/60 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
                  }`}
              >
                {cat.name}
              </button>
            ))}

            {recommended.size > 0 && (
              <>
                <button
                  data-testid="filter-recommended"
                  onClick={() => handleCategoryChange("recommended")}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition-all border flex items-center gap-1.5 ${activeCategory === "recommended"
                      ? "bg-amber-500/15 text-amber-400 border-amber-500/40"
                      : "bg-card/60 text-muted-foreground border-border/40 hover:border-amber-500/30 hover:text-foreground"
                    }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  Suggested ({recommended.size})
                </button>

                <button
                  data-testid="button-copy-recommended-link"
                  onClick={copyRecommendedLink}
                  className="px-3 py-2 rounded-lg text-sm font-mono transition-all border bg-card/60 border-border/40 hover:border-primary/30 hover:text-foreground text-muted-foreground flex items-center gap-1.5"
                >
                  {copiedLink ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Link2 className="w-3.5 h-3.5" />
                  )}
                  {copiedLink ? "Copied!" : "Copy Link"}
                </button>
              </>
            )}
          </div>

          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              data-testid="input-search-projects"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search all projects including hidden..."
              className="w-full md:w-80 pl-10 pr-9 py-2 rounded-lg text-sm font-mono bg-card/60 border border-border/40 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
            />

            {searchQuery && (
              <button
                data-testid="button-clear-search"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project, idx) => {
            const Icon = project.icon;
            const isRecommended = recommended.has(project.slug);

            return (
              <div
                key={project.slug}
                data-testid={`card-project-${idx}`}
                className="group cursor-pointer rounded-xl border border-border/50 hover:border-primary/40 bg-card transition-all duration-300 relative"
                onClick={() => openProject(idx)}
              >
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <MediaSlider
                    media={project.media}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent dark:from-card dark:via-card/20 dark:to-transparent pointer-events-none" />

                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    <span className="text-[10px] font-mono text-primary bg-background/80 backdrop-blur-sm border border-primary/30 rounded-md px-2 py-1">
                      {project.highlight}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10" onClick={(e) => toggleRecommended(project.slug, e)}>
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

                  <div className="flex items-center pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-primary/70 group-hover:text-primary transition-colors">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
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
              {searchQuery.trim()
                ? `No projects match "${searchQuery}". Try a different search term.`
                : activeCategory === "recommended"
                  ? "No suggested projects yet. Click the thumbs-up icon on any project card to add it."
                  : "No projects found in this category."}
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
