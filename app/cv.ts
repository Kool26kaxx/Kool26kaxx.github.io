// Edit this file to update the CV section without changing the page layout.
// Keep bullet points concise and outcome-focused.

export const cv = {
  summary:
    "Embedded and IoT engineer with 3+ years of experience building ESP32 firmware, sensor-integrated devices, Raspberry Pi edge systems, MQTT/MQTTS pipelines, and operational dashboards.",
  experience: [
    {
      period: "April 2025 — Present",
      company: "Knest Construction Tech Pvt. Ltd.",
      role: "Embedded / IoT Engineer",
      bullets: [
        "Developed ESP32 firmware for high-precision construction measurement devices using inclinometer, fuel-gauge, ToF, and encoder inputs.",
        "Built MQTT/MQTTS and PostgreSQL data pipelines on Raspberry Pi edge gateways with local buffering, reconnect handling, and device health monitoring.",
        "Integrated Nextion HMI, AutoConnect Wi-Fi provisioning, battery management, calibration, and modular configuration flows.",
        "Reduced calibration drift by approximately 40% through firmware and validation improvements.",
      ],
    },
    {
      period: "June 2022 — August 2024",
      company: "Respirer Living Sciences Pvt. Ltd.",
      role: "IoT / Device Engineer",
      bullets: [
        "Led firmware, hardware integration, testing, QA, and debugging for environmental monitoring devices.",
        "Supported Airview and Amrit deployments across 50+ rural locations in Uttar Pradesh and Bihar.",
        "Added signal-strength monitoring and intelligent SIM detection, reducing connectivity issues by approximately 35%.",
        "Improved device scalability through virtualization and software optimization, reducing hardware cost by approximately 15%.",
      ],
    },
    {
      period: "Earlier experience",
      company: "SISAI Technologies",
      role: "IoT Intern",
      bullets: ["Worked on embedded systems, sensor interfacing for smart energy meter, device testing, and practical IoT integration workflows."],
    },
  ],
  education: [
    { title: "PG-DIoT", detail: "C-DAC ACTS, Pune" },
    { title: "M.Sc. Electronics from Fergusson College", detail: "Electronics and embedded systems foundation" },
  ],
  skills: [
    "C / C++", "ESP32", "Raspberry Pi", "Python", "MQTT / MQTTS", "PostgreSQL", "STM32",
    "Flask", "Node-RED", "Modbus RTU / TCP", "I2C", "SPI", "UART", "Linux", "Docker", "AWS EC2",
  ],
};
