import { cv } from "./cv";

const projects = [
  {
    number: "01",
    type: "Embedded measurement system",
    title: "Digital Plumb Meter",
    description:
      "A production-oriented ESP32 device for plumb, level, and rotation measurement on construction panels, with a Nextion HMI and field-ready configuration flow.",
    result: "Modular firmware with calibration, battery health, Wi-Fi provisioning, MQTT telemetry, and local logging.",
    tags: ["ESP32", "Inclinometers", "Nextion", "MQTT"],
  },
  {
    number: "02",
    type: "Edge data platform",
    title: "Telemetry that stays useful offline",
    description:
      "A local-first pipeline that receives device data over MQTT, stores it on Raspberry Pi, and exposes clean operational views through Flask and PostgreSQL.",
    result: "Store-and-forward, reconnect handling, typed measurement records, and live device health visibility.",
    tags: ["Python", "Flask", "PostgreSQL", "Mosquitto"],
  },
  {
    number: "03",
    type: "Optical instrumentation",
    title: "Rotary laser receiver",
    description:
      "Reverse engineering and prototyping of a multi-channel photodiode receiver for laser position detection, including analog front-end analysis and ESP32 acquisition.",
    result: "Coherent sampling, multiplexed ADC scanning, calibration, noise gating, confidence scoring, and position estimation.",
    tags: ["Photodiode", "OP Amps", "ADC", "Signal processing"],
  },
  {
    number: "04",
    type: "Environmental IoT",
    title: "Air quality in the field",
    description:
      "Device engineering and deployment support for environmental monitoring systems, spanning sensor integration, connectivity, data transfer, and QA.",
    result: "Supported deployments across 50+ rural locations with improved connectivity diagnostics and device reliability.",
    tags: ["Sensors", "HTTP", "HTTPS", "EC200 UN"],
  },
];

const capabilities = [
  ["01", "Firmware", "C/C++, ESP32, FreeRTOS concepts, state machines, watchdogs, OTA-ready architecture"],
  ["02", "Hardware integration", "Sensor interfaces, I2C, SPI, UART, RS-232, Modbus RTU, analog front ends"],
  ["03", "IoT systems", "MQTT/MQTTS, Node-RED, Raspberry Pi edge gateways, store-and-forward, device health"],
  ["04", "Data and dashboards", "Python, Flask, PostgreSQL, REST APIs, Chart.js, Linux services, Docker"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="KoolKaxx home">
          <span className="brand-mark">KK</span>
          <span>KoolKaxx</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#cv">CV</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Embedded systems / IoT / Pune, India</p>
          <h1>Engineering the quiet layer between <em>data</em> and the real world.</h1>
          <p className="hero-intro">
            I&apos;m Akash Kulkarni, an embedded and IoT engineer building dependable systems from sensor hardware to edge dashboards.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contact">Open to the right problem <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta">
            <span>3+ years building IoT systems</span>
            <span>PG-DIoT, C-DAC Pune</span>
          </div>
        </div>
        <div className="hero-console" aria-label="Current engineering focus">
          <div className="console-top"><span>field-notes.log</span><span>v2026.08</span></div>
          <div className="console-body">
            <p><span className="console-prompt">$</span> system.current_focus</p>
            <p className="console-value">reliable_edge_devices</p>
            <div className="console-rule" />
            <p><span className="console-prompt">$</span> stack.status</p>
            <div className="stack-status"><span>firmware</span><b>online</b></div>
            <div className="stack-status"><span>telemetry</span><b>online</b></div>
            <div className="stack-status"><span>hardware</span><b>iterating</b></div>
            <div className="console-footer">sensor → signal → decision</div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Technologies">
        <div className="ticker-track"><span>ESP32</span><i /> <span>MQTT</span><i /> <span>Raspberry Pi</span><i /> <span>PostgreSQL</span><i /> <span>Flask</span><i /> <span>Modbus RTU</span><i /> <span>ESP32</span><i /> <span>MQTT</span></div>
      </div>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2022—now</p>
          <h2>Built for the part<br /><em>nobody sees.</em></h2>
          <p className="section-lead">The visible product is only the last layer. My work lives in the systems underneath: acquisition, reliability, communication, and the decisions made from data.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top"><span>{project.number}</span><span>{project.type}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-result"><strong>Outcome</strong>{project.result}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Capability map</p>
          <h2>From first voltage<br />to final <em>view.</em></h2>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, description]) => (
            <div className="capability-row" key={number}>
              <span className="capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cv section-shell" id="cv">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Curriculum vitae</p>
          <h2>The work,<br /><em>in context.</em></h2>
          <p className="section-lead">{cv.summary}</p>
        </div>
        <div className="cv-grid">
          <div className="experience-list">
            {cv.experience.map((item) => (
              <article className="experience-item" key={`${item.company}-${item.period}`}>
                <div className="experience-meta"><span>{item.period}</span><span>{item.company}</span></div>
                <h3>{item.role}</h3>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
          <aside className="cv-aside">
            <div><span className="cv-label">Education</span>{cv.education.map((item) => <p key={item.title}><strong>{item.title}</strong>{item.detail}</p>)}</div>
            <div><span className="cv-label">Technical stack</span><div className="tag-row">{cv.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
          </aside>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-note"><span>Signal / 01</span><span>Make it measurable.</span></div>
        <div className="about-content">
          <p className="eyebrow">A little context</p>
          <h2>Curious about how things work, serious about making them <em>hold up.</em></h2>
          <p>I work across the boundary where electronics, firmware, and software meet. That means reading a sensor datasheet, debugging a noisy signal, writing a recovery path for a disconnected device, and still caring about the clarity of the dashboard a customer uses.</p>
          <p>Currently at Knest Construction Tech, I focus on measurement systems and edge-connected devices. Previously at Respirer Living Sciences, I worked on environmental monitoring systems and field deployments.</p>
          <div className="about-facts"><span><b>Based in</b>Pune, India</span><span><b>Education</b>M.Sc. Electronics<br />PG-DIoT, C-DAC</span><span><b>Working style</b>Calm, modular, test-led</span></div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Have a system to build?</p>
          <h2>Let&apos;s make the<br /><em>signal useful.</em></h2>
          <p>If the work sits somewhere between hardware, firmware, and a reliable view of what is happening, I&apos;d like to hear about it.</p>
        </div>
        <div className="contact-card">
          <span className="contact-label">Best next step</span>
          <a className="contact-email" href="https://github.com/Kool26kaxx" target="_blank" rel="noreferrer">Open my GitHub profile <span aria-hidden="true">↗</span></a>
          <div className="contact-links"><a href="https://github.com/Kool26kaxx" target="_blank" rel="noreferrer">GitHub / KoolKaxx</a><span>Contact details on request</span></div>
        </div>
      </section>

      <footer className="site-footer section-shell"><span>© 2026 Akash Kulkarni</span><span>Designed around the work.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
