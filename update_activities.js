const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const unitData = {
  "1": {
    "units": ["Unit 1 – Programming & Circuit Basics", "Unit 2 – Problem Solving & Network Analysis", "Unit 3 – Functions & Transient Analysis", "Unit 4 – Arrays & Semiconductor Devices", "Unit 5 – Functions/Structures & Transistors"],
    "Software": [
      "C-Based Analysis of Voltage, Current, Resistance and Power in Basic ECE Circuits",
      "C-Based Verification of Kirchhoff’s Voltage and Current Laws Using Circuit Data",
      "C-Based Calculation and Plotting of RL/RC Transient Response for Step Inputs",
      "C-Based Analysis of Diode V–I Characteristics and Breakdown Parameters",
      "C-Based Analysis of BJT and MOSFET Device Parameters"
    ],
    "Hardware": [
      "Design and Test a Battery-Level Indicator for Different Voltage Levels",
      "Design a Variable-Load Circuit for Energy-Saving Applications",
      "Design an RC Delay Circuit and Observe LED Switching Delay",
      "Design a Reverse-Polarity and Over-Voltage Protection Module",
      "Design a Transistor-Based Automatic Switching System"
    ]
  },
  "2": {
    "units": ["Unit 1 – Data Structures", "Unit 2 – Linked Lists & Circuit Analysis", "Unit 3 – Stacks, Queues & Signal Data", "Unit 4 – Trees & Device Data", "Unit 5 – Searching & Sorting"],
    "Software": [
      "Sensor Data Storage, Matrix Operations and Statistical Analysis Using C++",
      "Linked-List-Based Real-Time Sensor Data Management Using C++",
      "Queue-Based Sensor Data Buffering and Real-Time Data Processing Using C++",
      "Tree-Based Hierarchical Representation of Electronic Devices Using C++",
      "Searching, Sorting and Performance Analysis of Sensor Measurements Using C++"
    ],
    "Hardware": [
      "Design and Test a Common-Emitter Transistor Amplifier",
      "Design and Analyse a Feedback Amplifier for Gain Stabilization",
      "Design and Test a Transistor-Based Oscillator Circuit",
      "Design and Analyse a Class-B Power Amplifier",
      "Design and Test a Multistage Transistor Amplifier"
    ]
  },
  "3": {
    "units": ["Unit 1 – Discrete Signals", "Unit 2 – Sampling & Reconstruction", "Unit 3 – DFT & FFT", "Unit 4 – Digital Filters", "Unit 5 – Signal Applications"],
    "Software": [
      "Generation and Analysis of Discrete-Time Signals Using MATLAB",
      "Sampling and Reconstruction of Analog Signals Using MATLAB",
      "Frequency-Spectrum Analysis of ECE Signals Using DFT and FFT",
      "FIR and IIR Digital Filter Design and Frequency-Response Analysis Using MATLAB",
      "Noise Removal and Signal Enhancement Using Digital Filtering"
    ],
    "Hardware": [
      "Truth-Table Verification of Basic Logic Gates",
      "Design and Verification of Half-Adder and Full-Adder Circuits",
      "Multiplexer, Demultiplexer and Decoder-Based Digital Circuit Design",
      "Design and Verification of Flip-Flop-Based Sequential Circuits",
      "Design and Implementation of a Digital Counter and Register System"
    ]
  },
  "4": {
    "units": ["Unit 1 – AI/ML Fundamentals", "Unit 2 – Regression", "Unit 3 – Classification", "Unit 4 – Clustering & Data Analysis", "Unit 5 – Model Evaluation"],
    "Software": [
      "Preprocessing and Normalization of ECE Sensor Data Using Python",
      "Prediction of Electronic System Parameters Using Linear Regression",
      "Classification of Sensor Conditions Using Machine-Learning Algorithms",
      "Clustering of Electronic Device Operating Conditions Using ML",
      "Performance Evaluation and Accuracy Comparison of ECE ML Models"
    ],
    "Hardware": [
      "GPIO-Based LED and Push-Button Interfacing Using Embedded C",
      "Timer-Based LED Control and Event Generation Using a Microcontroller",
      "ADC-Based Temperature or Light Sensor Data Acquisition",
      "UART-Based Sensor Data Transmission Using Embedded C",
      "DC Motor Speed Control Using Embedded C and PWM"
    ]
  },
  "5": {
    "units": ["Unit 1 – Image Fundamentals & CMOS", "Unit 2 – Image Enhancement & CMOS Logic", "Unit 3 – Image Filtering & RTL", "Unit 4 – Edge Detection & Verification", "Unit 5 – Image Classification & ASIC Flow"],
    "Software": [
      "Image Acquisition, Pixel Representation and Histogram Analysis Using MATLAB/Python",
      "Image Contrast Enhancement Using Histogram Equalization",
      "Spatial Filtering for Noise Removal in Digital Images",
      "Edge Detection Using Sobel and Canny Operators",
      "Basic Image Classification Using Machine-Learning Techniques"
    ],
    "Hardware": [
      "CMOS Inverter Design and Voltage-Transfer Characteristic Analysis",
      "CMOS NAND and NOR Gate Design and Simulation",
      "RTL Design of a Digital Logic Module Using Verilog",
      "Functional Simulation and Verification of a Verilog Digital Circuit",
      "ASIC Synthesis and Analysis of Area, Power and Timing Parameters"
    ]
  },
  "6": {
    "units": ["Unit 1 – Deep Learning Fundamentals", "Unit 2 – Deep Learning Classification", "Unit 3 – CNN Applications", "Unit 4 – Time-Series Prediction", "Unit 5 – Intelligent Systems"],
    "Software": [
      "Neural-Network-Based Classification of ECE Sensor Data",
      "Deep-Learning-Based Classification of Sensor Operating Conditions",
      "CNN-Based Classification of Electronic or Industrial Images",
      "Deep-Learning-Based Prediction of Sensor and Communication Signals",
      "AI-Based Fault Detection and Condition Monitoring of an Electronic System"
    ],
    "Hardware": [
      "Design and Test a Basic Wireless Communication Link",
      "Implementation and Analysis of Digital Modulation and Demodulation",
      "Antenna Parameter Measurement and Performance Analysis",
      "Simulation and Analysis of an Optical-Fiber Communication Link",
      "BER, SNR and Communication-Link Performance Analysis"
    ]
  },
  "7": {
    "units": ["Unit 1 – SDR Fundamentals", "Unit 2 – Digital Communication", "Unit 3 – Signal Processing", "Unit 4 – Wireless Applications", "Unit 5 – Industry Readiness"],
    "Software": [
      "SDR-Based Signal Generation, Reception and Real-Time Visualization",
      "Implementation of Digital Modulation and Demodulation Using SDR",
      "Real-Time Filtering and Spectrum Analysis Using SDR",
      "Spectrum Monitoring and Identification of Wireless Signals Using SDR",
      "Development of a Simple Software-Defined Communication System"
    ],
    "Hardware": [
      "Design a Secure IoT Sensor Node with Authentication",
      "Implement Secure Sensor-Data Transmission Using Encryption",
      "Secure Communication Between an IoT Node and Gateway",
      "IoT Device Access-Control and Authentication System",
      "Security Testing and Vulnerability Assessment of an IoT Prototype"
    ]
  },
  "8": {
    "units": ["Unit 1 – Problem Definition", "Unit 2 – System Design", "Unit 3 – Implementation", "Unit 4 – Testing & Validation", "Unit 5 – Professional Presentation"],
    "Software": [
      "Industry-Oriented Problem Identification and Software Requirement Analysis",
      "Software Architecture and Module Design for the Major Project",
      "Implementation and Integration of Project Software Modules",
      "Software Testing, Debugging and Performance Evaluation",
      "Technical Documentation, GitHub Repository and Project Presentation"
    ],
    "Hardware": [
      "Major Project Hardware Requirement and System Architecture Design",
      "Circuit, Sensor and Controller Selection for the Major Project",
      "PCB/Prototype Development and Hardware–Software Integration",
      "Prototype Testing, Debugging and Performance Validation",
      "Final Prototype Demonstration, Technical Report and Viva"
    ]
  }
};

const baseDir = 'C:\\Users\\yogesh\\Downloads\\stitch_ece_industry_readiness_roadmap\\stitch_ece_industry_readiness_roadmap';
const map = {
  'semester_i_ece_roadmap': '1',
  'semester_ii_ece_roadmap': '2',
  'semester_iii_ece_roadmap': '3',
  'semester_iv_ece_roadmap': '4',
  'semester_v_ece_roadmap': '5',
  'semester_vi_ece_roadmap': '6',
  'semester_vii_ece_roadmap': '7',
  'semester_viii_ece_roadmap': '8'
};

Object.entries(map).forEach(([folder, sem]) => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });
    const data = unitData[sem];

    // Find all sections
    const sections = $('section');
    sections.each((i, section) => {
      // 0 for software, 1 for hardware
      const pathType = i === 0 ? 'Software' : 'Hardware';
      const container = $(section).find('.mt-sm.space-y-1');

      if (container.length) {
        let html = '';
        data.units.forEach((unitTitle, index) => {
          const description = data[pathType][index];
          html += `
              <div class="flex flex-col bg-surface-container p-2 rounded border border-surface-variant">
                <span class="font-label-caps text-[10px] text-outline">${unitTitle}</span>
                <span class="font-body-sm text-on-surface">${description}</span>
              </div>
            `;
        });
        container.html(html);
      }
    });

    fs.writeFileSync(filePath, $.html());
    console.log(`Updated activities in ${folder}`);
  }
});
