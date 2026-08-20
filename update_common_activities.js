const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const commonActivities = {
  "1": {
    "Software": [
      "Solve engineering calculation problems using C programs involving arithmetic operations, formulas, unit conversions, and numerical computations.",
      "Develop and debug C programs for engineering problem-solving using decision-making, loops, functions, and logical conditions.",
      "Implement array and pointer-based C programs to perform data storage, manipulation, searching, and processing using memory concepts."
    ],
    "Hardware": [
      "Design and develop a smart circuit application integrating battery level indication, variable-load control, energy optimization, and power management.",
      "Design and demonstrate transient, resonance, and diode-based circuits including RC delay, resonant frequency measurement, over-voltage/reverse-polarity protection, and voltage regulation.",
      "Design and implement transistor-based electronic applications including automatic switching and transistor amplifier circuits."
    ]
  },
  "2": {
    "Software": [
      "Implement object-oriented C++ classes, dynamic memory management, and vector data buffers.",
      "Construct linear data structures including Singly/Doubly Linked Lists, Stacks, and Priority Queues.",
      "Implement Non-Linear data structures (Binary Search Trees, Graphs) along with Searching & Sorting algorithms."
    ],
    "Hardware": [
      "BJT/FET Amplifier Design and Testing",
      "Oscillator Construction and Debugging",
      "Power Amplifier and 555 Waveform Generator Testing"
    ]
  },
  "3": {
    "Software": [
      "Generate discrete-time signals and implement linear convolution, Z-transform, and DTFT analysis in MATLAB/Python.",
      "Compute DFT and Radix-2 FFT algorithms for spectral decomposition of audio and biomedical signals.",
      "Design and simulate FIR and IIR digital filters (Butterworth, Chebyshev) for real-time noise reduction."
    ],
    "Hardware": [
      "Design, simulate, and verify combinational logic circuits (Adders, Multiplexers, Decoders) in Verilog HDL.",
      "Model sequential logic elements including Flip-Flops, Synchronous Up/Down Counters, and Shift Registers.",
      "Design Mealy/Moore Finite State Machines (FSMs) and synthesize digital controller modules onto FPGA."
    ]
  },
  "4": {
    "Software": [
      "Perform data cleaning, normalization, exploratory analysis, and feature engineering on engineering datasets.",
      "Train, optimize, and evaluate supervised learning models (Linear/Ridge Regression, Decision Trees, SVMs).",
      "Implement unsupervised clustering, PCA dimensionality reduction, and end-to-end competition pipelines."
    ],
    "Hardware": [
      "Configure microcontroller GPIO registers in Embedded C to interface push-buttons, LEDs, and LCDs.",
      "Generate hardware PWM signals for motor control and configure ADC for multi-channel sensor sampling.",
      "Implement interrupt-driven UART, I2C, and SPI serial drivers for real-time sensor communication and logging."
    ]
  },
  "5": {
    "Software": [
      "Perform image loading, color space transformations (RGB/HSV/Grayscale), and histogram equalization using OpenCV.",
      "Implement spatial and frequency-domain filtering (Gaussian, Median, Homomorphic) for industrial image enhancement.",
      "Apply edge detection (Canny, Sobel), morphological segmentation, and feature extraction (SIFT/ORB) for inspection."
    ],
    "Hardware": [
      "Simulate CMOS Inverter DC voltage transfer characteristics, noise margins, and propagation delays using SPICE tools.",
      "Write synthesizable SystemVerilog RTL for digital logic blocks (32-bit ALU, FIFO) with self-checking testbenches.",
      "Execute ASIC synthesis, static timing analysis (STA) constraint validation, and standard-cell physical design."
    ]
  },
  "6": {
    "Software": [
      "Build Multi-Layer Perceptrons from scratch and train Deep Feedforward Networks in PyTorch/TensorFlow.",
      "Design Convolutional Neural Networks (CNNs), apply transfer learning (ResNet), and visualize Grad-CAM maps.",
      "Implement sequence models (LSTM/GRU) and Transformer attention mechanisms for forecasting and edge deployment."
    ],
    "Hardware": [
      "Simulate wireless channel propagation, multipath fading distributions (Rayleigh/Rician), and Doppler spread.",
      "Implement digital modulation schemes (BPSK, QPSK, 16-QAM, OFDM) and plot BER vs. Eb/N0 performance curves.",
      "Design RF microstrip patch antennas on 2.4 GHz, measure S-parameters (S11/VSWR), and analyze fiber link budget."
    ]
  },
  "7": {
    "Software": [
      "Configure SDR hardware (RTL-SDR/HackRF) with GNU Radio for IQ signal processing and real-time spectrum visualization.",
      "Implement software-based analog (FM/AM) and digital (BPSK/QPSK/FSK) transceivers with pulse-shaping filters.",
      "Implement carrier frequency offset tracking (Costas Loop), symbol timing recovery, and protocol decoding (ADS-B/AIS)."
    ],
    "Hardware": [
      "Perform threat modeling, audit hardware attack vectors (JTAG/SWD), and configure Memory Protection Units (MPU).",
      "Implement cryptographic algorithms (AES-128/256, ECC, SHA-256) and hardware Secure Element authentication.",
      "Implement cryptographic Secure Boot, TLS 1.3 / mTLS secure MQTT communication, and side-channel testing."
    ]
  },
  "8": {
    "Software": [
      "Formulate industry problem specifications, system architecture design, and database schema documentation.",
      "Implement full-stack core modules using agile practices, CI/CD pipelines, and real-time backend services.",
      "Execute automated unit/integration testing, security audit, cloud containerized deployment, and final technical defense."
    ],
    "Hardware": [
      "Establish hardware specifications, power management architecture, component selection, and BOM optimization.",
      "Design complete electronic schematics and multi-layer PCB layout with high-speed signal integrity guidelines.",
      "Assemble prototype hardware, develop embedded C firmware, execute stress/compliance validation, and 3D casing defense."
    ]
  }
};

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');
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
    const data = commonActivities[sem];

    // Find all sections (section 0 is software/path 1, section 1 is hardware/path 2)
    const sections = $('section');
    sections.each((i, section) => {
      const pathType = i === 0 ? 'Software' : 'Hardware';
      const badgeBg = i === 0 ? 'bg-secondary' : 'bg-[#187f62]';
      const activities = data[pathType];

      // Find the Activity header
      const actHeader = $(section).find('h4:contains("Activity"), h4:contains("Activities")').first();
      if (actHeader.length) {
        actHeader.text('Activities');
        
        // Remove any old summary paragraph directly after the header
        const nextP = actHeader.next('p');
        if (nextP.length) {
          nextP.remove();
        }

        // Find or replace the container
        let container = $(section).find('.mt-sm.space-y-1, .mt-sm.space-y-2, .mt-sm.space-y-1\\.5');
        
        let activitiesHtml = `
          <div class="mt-sm space-y-2">
            <div class="flex items-start gap-2.5 bg-surface-container p-2.5 rounded-lg border border-surface-variant">
              <span class="w-5 h-5 rounded-full ${badgeBg} text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">1</span>
              <span class="font-body-sm text-on-surface leading-relaxed">${activities[0]}</span>
            </div>
            <div class="flex items-start gap-2.5 bg-surface-container p-2.5 rounded-lg border border-surface-variant">
              <span class="w-5 h-5 rounded-full ${badgeBg} text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">2</span>
              <span class="font-body-sm text-on-surface leading-relaxed">${activities[1]}</span>
            </div>
            <div class="flex items-start gap-2.5 bg-surface-container p-2.5 rounded-lg border border-surface-variant">
              <span class="w-5 h-5 rounded-full ${badgeBg} text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">3</span>
              <span class="font-body-sm text-on-surface leading-relaxed">${activities[2]}</span>
            </div>
          </div>
        `;

        if (container.length) {
          container.replaceWith(activitiesHtml);
        } else {
          actHeader.after(activitiesHtml);
        }
      }
    });

    fs.writeFileSync(filePath, $.html());
    console.log(`Updated 3 common activities in Sem ${sem} (${folder})`);
  }
});
