const fs = require('fs');
const path = require('path');

const semesterMeta = {
  "1": {
    roman: "I",
    year: "1st Year • Foundations",
    prev: null,
    next: "2",
    swSubject: "Problem Solving Using C",
    swCode: "2611CSSJ101",
    swContest: "CodeChef Starters",
    swContestUrl: "https://www.codechef.com",
    swSkillGap: "Basic programming and logical problem-solving skills. Need practice applying C to engineering calculations and memory manipulation.",
    swPlatform: "iamneo",
    swPlatformDesc: "Structured coding practice, auto test cases, debugging and timed problem solving.",
    swPreContest: "Department-level Coding Challenge",
    swActivities: [
      "Develop C programs for arithmetic operations, expressions, and bitwise data manipulation.",
      "Implement decision control flow, iterative loops, and modular user-defined functions in C.",
      "Build structured data processing applications using arrays, pointers, structures, and file I/O."
    ],
    hwSubject: "Electric Circuits and Electronic Devices",
    hwCode: "2611ECSJ101",
    hwContest: "Smart India Hackathon – Beginner Track",
    hwContestUrl: "https://www.sih.gov.in",
    hwSkillGap: "Basic circuit analysis and electronic-device understanding. Need hands-on circuit building, breadboarding, and measurement practice.",
    hwPlatform: "Hardware Breadboard & DSO Lab",
    hwPlatformDesc: "Breadboard prototyping, multimeter verification, and digital storage oscilloscope waveform analysis.",
    hwPreContest: "Basic Hardware Prototype Challenge",
    hwActivities: [
      "Verify fundamental DC circuit laws, network theorems, and resistive voltage dividers on breadboard.",
      "Analyze AC circuit resonance, frequency response, and transient behavior using DSO.",
      "Construct and test diode rectifiers, wave-shaping clippers/clampers, and BJT/Op-Amp switching circuits."
    ]
  },
  "2": {
    roman: "II",
    year: "1st Year • Core Systems",
    prev: "1",
    next: "3",
    swSubject: "Data Structures using C++",
    swCode: "2611CSSJ204",
    swContest: "MATLAB Student Competition / Challenge",
    swContestUrl: "https://www.mathworks.com/academia/student-competitions.html",
    swSkillGap: "Limited knowledge of efficient data organization. Need stronger algorithmic thinking, OOP design, and competitive coding practice.",
    swPlatform: "LeetCode & MATLAB",
    swPlatformDesc: "Object-oriented modeling, algorithmic benchmarking, and interactive computational scripts.",
    swPreContest: "MATLAB Mini Challenge",
    swActivities: [
      "Implement object-oriented C++ classes, dynamic memory management, and vector data buffers.",
      "Construct linear data structures including Singly/Doubly Linked Lists, Stacks, and Priority Queues.",
      "Implement Non-Linear data structures (Binary Search Trees, Graphs) along with Searching & Sorting algorithms."
    ],
    hwSubject: "Electronic Circuits",
    hwCode: "2611ECCJ201",
    hwContest: "Smart India Hackathon – Internal Track",
    hwContestUrl: "https://www.sih.gov.in",
    hwSkillGap: "Limited practical understanding of active circuit behaviour. Need simulation, amplifier testing, and oscillator debugging practice.",
    hwPlatform: "NI Multisim / LTspice & Breadboard Lab",
    hwPlatformDesc: "SPICE transient analysis, frequency response plots, and discrete component hardware verification.",
    hwPreContest: "Arduino Prototype Challenge",
    hwActivities: [
      "Design and bias Common Emitter BJT and Common Source FET amplifiers and analyze frequency response.",
      "Construct negative feedback amplifiers and sinusoidal oscillators (RC Phase Shift, Wien Bridge, LC).",
      "Design power amplifiers (Class A/B push-pull) and IC 555 waveform generators (Astable/Monostable)."
    ]
  },
  "3": {
    roman: "III",
    year: "2nd Year • Signals & Logic",
    prev: "2",
    next: "4",
    swSubject: "Digital Signal Processing",
    swCode: "PC Core",
    swContest: "IEEEXtreme Programming Competition",
    swContestUrl: "https://ieeextreme.org",
    swSkillGap: "Limited signal analysis and computational mathematical skills. Need practical digital filtering, FFT, and spectral analysis experience.",
    swPlatform: "MATLAB / Python (NumPy, SciPy)",
    swPlatformDesc: "Time-frequency signal decomposition, filter synthesis, and biomedical signal processing.",
    swPreContest: "ECE Coding Challenge",
    swActivities: [
      "Generate discrete-time signals and implement linear convolution, Z-transform, and DTFT analysis in MATLAB/Python.",
      "Compute DFT and Radix-2 FFT algorithms for spectral decomposition of audio and biomedical signals.",
      "Design and simulate FIR and IIR digital filters (Butterworth, Chebyshev) for real-time noise reduction."
    ],
    hwSubject: "Digital System Design",
    hwCode: "PC Core",
    hwContest: "ChipForge – RTL",
    hwContestUrl: "https://chipforge.io",
    hwSkillGap: "Limited digital-system design experience. Need practice with Verilog HDL logic modeling, testbenches, and FPGA synthesis.",
    hwPlatform: "Xilinx Vivado & FPGA Kits",
    hwPlatformDesc: "RTL design, functional waveform simulation, timing closure, and hardware download on FPGA.",
    hwPreContest: "Circuit Design & Debugging Challenge",
    hwActivities: [
      "Design, simulate, and verify combinational logic circuits (Adders, Multiplexers, Decoders) in Verilog HDL.",
      "Model sequential logic elements including Flip-Flops, Synchronous Up/Down Counters, and Shift Registers.",
      "Design Mealy/Moore Finite State Machines (FSMs) and synthesize digital controller modules onto FPGA."
    ]
  },
  "4": {
    roman: "IV",
    year: "2nd Year • AI & Embedded",
    prev: "3",
    next: "5",
    swSubject: "Artificial Intelligence and Machine Learning",
    swCode: "ES Core",
    swContest: "Kaggle Competitions",
    swContestUrl: "https://www.kaggle.com/competitions",
    swSkillGap: "Limited exposure to AI/ML methods for engineering problems. Need hands-on experience with sensor datasets, models, and ML pipelines.",
    swPlatform: "Kaggle & Jupyter Notebooks",
    swPlatformDesc: "Scikit-learn model training, feature engineering, cross-validation, and competitive notebooks.",
    swPreContest: "Kaggle ML Challenge",
    swActivities: [
      "Perform data cleaning, normalization, exploratory analysis, and feature engineering on engineering datasets.",
      "Train, optimize, and evaluate supervised learning models (Linear/Ridge Regression, Decision Trees, SVMs).",
      "Implement unsupervised clustering, PCA dimensionality reduction, and end-to-end competition pipelines."
    ],
    hwSubject: "Embedded C Programming",
    hwCode: "PC Core",
    hwContest: "Texas Instruments Innovation Challenge (TIIC)",
    hwContestUrl: "https://www.ti.com",
    hwSkillGap: "Hardware–software integration gap. Need register-level embedded C programming, timer PWM, ADC, and peripheral interfacing skills.",
    hwPlatform: "Keil µVision / STM32CubeIDE",
    hwPlatformDesc: "Bare-metal driver development, interrupt service routines, and hardware protocol analyzers.",
    hwPreContest: "Embedded System Challenge",
    hwActivities: [
      "Configure microcontroller GPIO registers in Embedded C to interface push-buttons, LEDs, and LCDs.",
      "Generate hardware PWM signals for motor control and configure ADC for multi-channel sensor sampling.",
      "Implement interrupt-driven UART, I2C, and SPI serial drivers for real-time sensor communication and logging."
    ]
  },
  "5": {
    roman: "V",
    year: "3rd Year • Vision & Silicon",
    prev: "4",
    next: "6",
    swSubject: "Digital Image Processing",
    swCode: "PC Core",
    swContest: "MATLAB/Simulink Design Challenge",
    swContestUrl: "https://www.mathworks.com/academia/student-competitions.html",
    swSkillGap: "Limited computational image-analysis experience. Need practical implementation of computer vision and image enhancement algorithms.",
    swPlatform: "OpenCV (Python / C++) & MATLAB",
    swPlatformDesc: "Spatial filtering, morphological transforms, contour detection, and automated visual defect inspection.",
    swPreContest: "DSP & Vision Simulation Challenge",
    swActivities: [
      "Perform image loading, color space transformations (RGB/HSV/Grayscale), and histogram equalization using OpenCV.",
      "Implement spatial and frequency-domain filtering (Gaussian, Median, Homomorphic) for industrial image enhancement.",
      "Apply edge detection (Canny, Sobel), morphological segmentation, and feature extraction (SIFT/ORB) for inspection."
    ],
    hwSubject: "ASIC Design",
    hwCode: "PC Core",
    hwContest: "Cadence Design Contest",
    hwContestUrl: "https://www.cadence.com",
    hwSkillGap: "Limited industry-oriented chip-design experience. Need EDA-based synthesis, Static Timing Analysis (STA), and layout practice.",
    hwPlatform: "Cadence Genus / Innovus / EDA Cloud",
    hwPlatformDesc: "RTL-to-GDSII flow, cell placement, clock tree synthesis (CTS), and DRC/LVS physical verification.",
    hwPreContest: "VLSI & ASIC Design Challenge",
    hwActivities: [
      "Simulate CMOS Inverter DC voltage transfer characteristics, noise margins, and propagation delays using SPICE tools.",
      "Write synthesizable SystemVerilog RTL for digital logic blocks (32-bit ALU, FIFO) with self-checking testbenches.",
      "Execute ASIC synthesis, static timing analysis (STA) constraint validation, and standard-cell physical design."
    ]
  },
  "6": {
    roman: "VI",
    year: "3rd Year • Deep Learning & Wireless",
    prev: "5",
    next: "7",
    swSubject: "Deep Learning",
    swCode: "PC Core",
    swContest: "AIoT Design Challenge",
    swContestUrl: "https://www.hackerearth.com",
    swSkillGap: "Limited experience with deep neural architectures and edge AI deployment. Need hands-on PyTorch/TensorFlow modeling on real datasets.",
    swPlatform: "PyTorch & Google Colab",
    swPlatformDesc: "CNN vision models, transfer learning with ResNet, time-series sequence models, and TensorRT deployment.",
    swPreContest: "AIoT Mini Project Challenge",
    swActivities: [
      "Build Multi-Layer Perceptrons from scratch and train Deep Feedforward Networks in PyTorch/TensorFlow.",
      "Design Convolutional Neural Networks (CNNs), apply transfer learning (ResNet), and visualize Grad-CAM maps.",
      "Implement sequence models (LSTM/GRU) and Transformer attention mechanisms for forecasting and edge deployment."
    ],
    hwSubject: "Wireless and Optical Communication",
    hwCode: "PC Core",
    hwContest: "Techgium (LTTS)",
    hwContestUrl: "https://techgium.ltts.com",
    hwSkillGap: "Limited practical communication-system experience. Need simulation, antenna measurement, and analysis of wireless/optical links.",
    hwPlatform: "ANSYS HFSS & VNA Hardware",
    hwPlatformDesc: "Microstrip patch antenna design, return loss measurement, and fiber-optic link budget evaluation.",
    hwPreContest: "Techgium Innovation Challenge",
    hwActivities: [
      "Simulate wireless channel propagation, multipath fading distributions (Rayleigh/Rician), and Doppler spread.",
      "Implement digital modulation schemes (BPSK, QPSK, 16-QAM, OFDM) and plot BER vs. Eb/N0 performance curves.",
      "Design RF microstrip patch antennas on 2.4 GHz, measure S-parameters (S11/VSWR), and analyze fiber link budget."
    ]
  },
  "7": {
    roman: "VII",
    year: "4th Year • SDR & IoT Security",
    prev: "6",
    next: "8",
    swSubject: "Software Defined Radio",
    swCode: "PC Core",
    swContest: "Company Coding / Placement Tests",
    swContestUrl: "https://www.tcs.com/careers/tcs-codevita",
    swSkillGap: "Limited exposure to software-based RF communication systems. Need practical signal processing and SDR transceiver implementation skills.",
    swPlatform: "GNU Radio Companion & RTL-SDR",
    swPlatformDesc: "Real-time RF spectrum waterfall visualizer, software FM/QPSK demodulator, and ADS-B flight decoding.",
    swPreContest: "Mock Placement Drive – Coding + Aptitude",
    swActivities: [
      "Configure SDR hardware (RTL-SDR/HackRF) with GNU Radio for IQ signal processing and real-time spectrum visualization.",
      "Implement software-based analog (FM/AM) and digital (BPSK/QPSK/FSK) transceivers with pulse-shaping filters.",
      "Implement carrier frequency offset tracking (Costas Loop), symbol timing recovery, and protocol decoding (ADS-B/AIS)."
    ],
    hwSubject: "IOT Security",
    hwCode: "PC Core",
    hwContest: "Core Company Technical Assessment",
    hwContestUrl: "https://www.lntecc.com",
    hwSkillGap: "Limited understanding of security in connected embedded devices. Need practical IoT security, hardware crypto, and secure-boot skills.",
    hwPlatform: "MbedTLS & Hardware Crypto Accelerators",
    hwPlatformDesc: "AES/ECC hardware coprocessor configuration, TLS 1.3 mTLS secure MQTT, and side-channel audit.",
    hwPreContest: "Mock Technical Interview & Hardware Security Audit",
    hwActivities: [
      "Perform threat modeling, audit hardware attack vectors (JTAG/SWD), and configure Memory Protection Units (MPU).",
      "Implement cryptographic algorithms (AES-128/256, ECC, SHA-256) and hardware Secure Element authentication.",
      "Implement cryptographic Secure Boot, TLS 1.3 / mTLS secure MQTT communication, and side-channel testing."
    ]
  },
  "8": {
    roman: "VIII",
    year: "4th Year • Capstone & Industry Launch",
    prev: "7",
    next: null,
    swSubject: "Project Work",
    swCode: "12 Credits (SD)",
    swContest: "Final Industry Placement Drives",
    swContestUrl: "https://www.linkedin.com",
    swSkillGap: "Limited experience in full-scale software architecture. Need production-level engineering, automated testing, and cloud deployment.",
    swPlatform: "GitHub Actions & Cloud (AWS/GCP/Vercel)",
    swPlatformDesc: "Full-stack module integration, containerized Docker deployment, CI/CD pipeline, and public repo defense.",
    swPreContest: "Final Capstone Presentation & Technical Defense",
    swActivities: [
      "Formulate industry problem specifications, system architecture design, and database schema documentation.",
      "Implement full-stack core modules using agile practices, CI/CD pipelines, and real-time backend services.",
      "Execute automated unit/integration testing, security audit, cloud containerized deployment, and final technical defense."
    ],
    hwSubject: "Project Work",
    hwCode: "12 Credits (SD)",
    hwContest: "Core Placement Drives & Product Launch",
    hwContestUrl: "https://www.naukri.com",
    hwSkillGap: "Limited experience in commercial product realization. Need multi-layer PCB design, firmware integration, and product stress testing.",
    hwPlatform: "Altium / KiCad & 3D Prototyping",
    hwPlatformDesc: "Multi-layer PCB fabrication, SMD assembly, embedded firmware integration, and 3D printed rugged casing.",
    hwPreContest: "Working Product Demonstration & Viva Voce",
    hwActivities: [
      "Establish hardware specifications, power management architecture, component selection, and BOM optimization.",
      "Design complete electronic schematics and multi-layer PCB layout with high-speed signal integrity guidelines.",
      "Assemble prototype hardware, develop embedded C firmware, execute stress/compliance validation, and 3D casing defense."
    ]
  }
};

const commonHeadStyles = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            },
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background: radial-gradient(circle at 10% 20%, rgba(239, 246, 255, 0.7) 0%, rgba(248, 250, 252, 1) 90%);
      color: #0f172a;
    }
    .font-heading {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .glass-nav {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(226, 232, 240, 0.85);
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(226, 232, 240, 0.85);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .software-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248, 250, 255, 0.95) 100%);
      border: 1.5px solid rgba(219, 234, 254, 0.95);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .software-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 35px -10px rgba(37, 99, 235, 0.16), 0 0 0 1.5px rgba(59, 130, 246, 0.35);
    }
    .hardware-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(246, 254, 250, 0.95) 100%);
      border: 1.5px solid rgba(209, 250, 229, 0.95);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .hardware-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 35px -10px rgba(16, 185, 129, 0.16), 0 0 0 1.5px rgba(16, 185, 129, 0.35);
    }
    .activity-item {
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .activity-item:hover {
      transform: translateX(4px);
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-up {
      animation: fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  </style>
`;

function renderTopNav(currentSem) {
  const semesters = [
    { name: 'Home', link: 'index.html', key: 'home' },
    { name: 'Sem I', link: 'semester-1.html', key: '1' },
    { name: 'Sem II', link: 'semester-2.html', key: '2' },
    { name: 'Sem III', link: 'semester-3.html', key: '3' },
    { name: 'Sem IV', link: 'semester-4.html', key: '4' },
    { name: 'Sem V', link: 'semester-5.html', key: '5' },
    { name: 'Sem VI', link: 'semester-6.html', key: '6' },
    { name: 'Sem VII', link: 'semester-7.html', key: '7' },
    { name: 'Sem VIII', link: 'semester-8.html', key: '8' },
  ];

  const linksHtml = semesters.map(s => {
    const isActive = s.key === currentSem;
    if (isActive) {
      return `<a href="${s.link}" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm text-xs tracking-wide transition-all">${s.name}</a>`;
    }
    return `<a href="${s.link}" class="text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 font-medium px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all">${s.name}</a>`;
  }).join('\n');

  return `
  <nav class="sticky top-0 w-full z-50 glass-nav border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-3 group">
        <img src="srm_logo.jpeg" alt="SRM Logo" class="h-10 w-auto object-contain rounded-md shadow-xs group-hover:scale-105 transition-transform">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-heading font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">ECE Roadmap</span>
            <span class="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">R2026</span>
          </div>
          <p class="text-[11px] text-slate-500 font-medium hidden md:block">Contest → Career Industry Readiness</p>
        </div>
      </a>

      <!-- Nav links desktop -->
      <div class="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-xl border border-slate-200/60">
        ${linksHtml}
      </div>
    </div>

    <!-- Mobile Nav Bar (scrollable) -->
    <div class="lg:hidden flex overflow-x-auto py-2 px-4 gap-1.5 bg-white/95 border-t border-slate-100 scrollbar-none">
      ${linksHtml}
    </div>
  </nav>
  `;
}

function renderSemesterPage(semNum) {
  const meta = semesterMeta[semNum];
  const prevBtn = meta.prev 
    ? `<a href="semester-${meta.prev}.html" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-2xs">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span> Sem ${semesterMeta[meta.prev].roman}
       </a>`
    : `<span class="opacity-30 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-400 cursor-not-allowed">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span> Prev
       </span>`;

  const nextBtn = meta.next 
    ? `<a href="semester-${meta.next}.html" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 border border-blue-600 text-xs font-semibold text-white hover:bg-blue-700 transition-all shadow-sm">
        Sem ${semesterMeta[meta.next].roman} <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
       </a>`
    : `<span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-xs font-semibold text-white shadow-sm">
        Final Semester <span class="material-symbols-outlined text-[16px]">verified</span>
       </span>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ECE Semester ${meta.roman} Roadmap | Industry Readiness Framework</title>
  ${commonHeadStyles}
</head>
<body class="min-h-screen flex flex-col antialiased">
  ${renderTopNav(semNum)}

  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-up">
    
    <!-- Semester Breadcrumb & Header Hero -->
    <header class="mb-8 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 p-6 shadow-sm">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Semester ${meta.roman} • ${meta.year}
            </span>
            <span class="text-xs text-slate-400">•</span>
            <span class="text-xs font-medium text-slate-500">Autonomous R2026</span>
          </div>
          <h1 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Semester ${meta.roman} Industry Readiness Roadmap
          </h1>
          <p class="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Integrated dual-path framework: Software Engineering &amp; Core Hardware tracks aligned with university subjects and global challenges.
          </p>
        </div>

        <!-- Quick Switcher Buttons -->
        <div class="flex items-center gap-2 shrink-0">
          ${prevBtn}
          ${nextBtn}
        </div>
      </div>
    </header>

    <!-- Dual Path Comparison Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      <!-- PATH 1: SOFTWARE FOCUS -->
      <section class="flex flex-col software-card rounded-2xl p-6 sm:p-7 shadow-xs">
        
        <!-- Header Banner -->
        <div class="rounded-xl overflow-hidden mb-6 border border-blue-200/70 shadow-xs">
          <div class="h-40 w-full overflow-hidden relative bg-blue-900">
            <img src="path1_software.png" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500" alt="Software Path">
            <div class="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
            <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-blue-700 shadow-xs flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">code</span> Track 1
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 py-3.5 px-5 text-white flex items-center justify-between">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-blue-200">Track 01</span>
              <h2 class="font-heading font-extrabold text-lg text-white tracking-wide">PATH 1 (SOFTWARE)</h2>
            </div>
            <span class="material-symbols-outlined text-2xl text-blue-200">terminal</span>
          </div>
        </div>

        <!-- Target Contest Card -->
        <div class="bg-white rounded-xl border border-blue-100 p-4 mb-5 shadow-2xs">
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <span class="text-[11px] font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px]">emoji_events</span> Target Contest / Goal
            </span>
            <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold">Software Track</span>
          </div>
          <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">${meta.swContest}</h3>
          <a href="${meta.swContestUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100 transition-colors w-max group">
            <span class="material-symbols-outlined text-[14px]">link</span> Visit Website 
            <span class="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
          </a>
        </div>

        <!-- Subject Mapped & Skill Gap -->
        <div class="space-y-3.5 mb-5">
          <div class="p-4 bg-slate-50/90 rounded-xl border border-slate-200/80">
            <div class="flex items-center justify-between mb-1">
              <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <span class="material-symbols-outlined text-[15px] text-blue-600">book</span> Subject Mapped
              </h4>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">${meta.swCode}</span>
            </div>
            <!-- Increased Content Font Size -->
            <p class="font-heading font-extrabold text-lg sm:text-xl text-slate-900">${meta.swSubject}</p>
          </div>

          <div class="p-4 bg-amber-50/70 rounded-xl border-l-4 border-amber-500 border-t border-r border-b border-amber-200/70">
            <h4 class="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px] text-amber-600">psychology_alt</span> Skill Gap Identified
            </h4>
            <!-- Increased Content Font Size -->
            <p class="text-base text-slate-800 leading-relaxed font-normal">${meta.swSkillGap}</p>
          </div>
        </div>

        <!-- 3 Common Activities (Enlarged Content) -->
        <div class="mb-5">
          <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] text-blue-600">task_alt</span> Core Hands-on Activities (3 Common)
          </h4>
          <div class="space-y-3">
            <div class="activity-item flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">1</span>
              <span class="text-base text-slate-900 font-medium leading-relaxed">${meta.swActivities[0]}</span>
            </div>
            <div class="activity-item flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">2</span>
              <span class="text-base text-slate-900 font-medium leading-relaxed">${meta.swActivities[1]}</span>
            </div>
            <div class="activity-item flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">3</span>
              <span class="text-base text-slate-900 font-medium leading-relaxed">${meta.swActivities[2]}</span>
            </div>
          </div>
        </div>

        <!-- Platform & Pre-Contest Challenge (Enlarged Content) -->
        <div class="mt-auto pt-4 border-t border-slate-200/80 space-y-3">
          <div class="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
            <span class="material-symbols-outlined text-xl text-blue-600 mt-0.5">laptop_mac</span>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Recommended Platform</span>
              <span class="text-base font-bold text-slate-900">${meta.swPlatform}</span>
              <p class="text-sm text-slate-600 mt-0.5 leading-relaxed">${meta.swPlatformDesc}</p>
            </div>
          </div>

          <div class="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl border border-blue-200/80 flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <span class="material-symbols-outlined text-base">military_tech</span>
            </span>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-blue-700 block">Pre-Contest / Department Challenge</span>
              <span class="text-base font-bold text-slate-900">${meta.swPreContest}</span>
            </div>
          </div>
        </div>

      </section>

      <!-- PATH 2: HARDWARE / ECE CORE FOCUS -->
      <section class="flex flex-col hardware-card rounded-2xl p-6 sm:p-7 shadow-xs">
        
        <!-- Header Banner -->
        <div class="rounded-xl overflow-hidden mb-6 border border-emerald-200/70 shadow-xs">
          <div class="h-40 w-full overflow-hidden relative bg-emerald-950">
            <img src="path2_hardware.png" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500" alt="Hardware Path">
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
            <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-emerald-700 shadow-xs flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">memory</span> Track 2
            </div>
          </div>
          <div class="bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-800 py-3.5 px-5 text-white flex items-center justify-between">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-200">Track 02</span>
              <h2 class="font-heading font-extrabold text-lg text-white tracking-wide">PATH 2 (ECE CORE)</h2>
            </div>
            <span class="material-symbols-outlined text-2xl text-emerald-200">developer_board</span>
          </div>
        </div>

        <!-- Target Contest Card -->
        <div class="bg-white rounded-xl border border-emerald-100 p-4 mb-5 shadow-2xs">
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px]">emoji_events</span> Target Contest / Goal
            </span>
            <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">Hardware Track</span>
          </div>
          <h3 class="font-heading font-bold text-lg text-slate-900 mb-2">${meta.hwContest}</h3>
          <a href="${meta.hwContestUrl}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-800 hover:underline bg-emerald-50/80 px-2.5 py-1 rounded-md border border-emerald-100 transition-colors w-max group">
            <span class="material-symbols-outlined text-[14px]">link</span> Visit Website 
            <span class="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
          </a>
        </div>

        <!-- Subject Mapped & Skill Gap -->
        <div class="space-y-3.5 mb-5">
          <div class="p-4 bg-slate-50/90 rounded-xl border border-slate-200/80">
            <div class="flex items-center justify-between mb-1">
              <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <span class="material-symbols-outlined text-[15px] text-emerald-600">developer_board</span> Subject Mapped
              </h4>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">${meta.hwCode}</span>
            </div>
            <!-- Increased Content Font Size -->
            <p class="font-heading font-extrabold text-lg sm:text-xl text-slate-900">${meta.hwSubject}</p>
          </div>

          <div class="p-4 bg-emerald-50/60 rounded-xl border-l-4 border-emerald-500 border-t border-r border-b border-emerald-200/70">
            <h4 class="text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px] text-emerald-600">construction</span> Skill Gap Identified
            </h4>
            <!-- Increased Content Font Size -->
            <p class="text-base text-slate-800 leading-relaxed font-normal">${meta.hwSkillGap}</p>
          </div>
        </div>

        <!-- 3 Common Activities (Enlarged Content) -->
        <div class="mb-5">
          <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] text-emerald-600">task_alt</span> Core Hands-on Activities (3 Common)
          </h4>
          <div class="space-y-3">
            <div class="activity-item flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">1</span>
              <span class="text-base text-slate-900 font-medium leading-relaxed">${meta.hwActivities[0]}</span>
            </div>
            <div class="activity-item flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">2</span>
              <span class="text-base text-slate-900 font-medium leading-relaxed">${meta.hwActivities[1]}</span>
            </div>
            <div class="activity-item flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">3</span>
              <span class="text-base text-slate-900 font-medium leading-relaxed">${meta.hwActivities[2]}</span>
            </div>
          </div>
        </div>

        <!-- Platform & Pre-Contest Challenge (Enlarged Content) -->
        <div class="mt-auto pt-4 border-t border-slate-200/80 space-y-3">
          <div class="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
            <span class="material-symbols-outlined text-xl text-emerald-600 mt-0.5">precision_manufacturing</span>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Recommended Tools &amp; Lab</span>
              <span class="text-base font-bold text-slate-900">${meta.hwPlatform}</span>
              <p class="text-sm text-slate-600 mt-0.5 leading-relaxed">${meta.hwPlatformDesc}</p>
            </div>
          </div>

          <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50/50 rounded-xl border border-emerald-200/80 flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <span class="material-symbols-outlined text-base">military_tech</span>
            </span>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-emerald-700 block">Pre-Contest / Hardware Challenge</span>
              <span class="text-base font-bold text-slate-900">${meta.hwPreContest}</span>
            </div>
          </div>
        </div>

      </section>

    </div>

    <!-- Bottom Navigation Footer Bar -->
    <nav class="mt-12 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
      <div>
        ${prevBtn}
      </div>
      <div>
        ${nextBtn}
      </div>
    </nav>

  </main>

  <!-- Footer -->
  <footer class="w-full py-6 px-4 bg-white border-t border-slate-200 text-center text-xs text-slate-500 mt-auto">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
      <p class="font-medium">© 2026 SRM TRP Engineering College • Department of Electronics &amp; Communication Engineering</p>
      <p class="text-slate-400">R2026 Autonomous Curriculum &amp; Syllabi Framework</p>
    </div>
  </footer>
</body>
</html>
`;
}

function renderHomePage() {
  const semesterCards = Object.entries(semesterMeta).map(([semNum, meta]) => {
    return `
      <a href="semester-${semNum}.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">
            Sem ${meta.roman}
          </span>
          <span class="text-[11px] font-semibold text-slate-400">${meta.year.split('•')[0].trim()}</span>
        </div>

        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester ${meta.roman}</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>

        <!-- Mapped subject chips (Enlarged readable content) -->
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate">
            <span class="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
            <span class="truncate font-medium">${meta.swSubject}</span>
          </div>
          <div class="flex items-center gap-2 text-slate-800 truncate">
            <span class="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
            <span class="truncate font-medium">${meta.hwSubject}</span>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">${meta.swContest}</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ECE Contest → Career Roadmap | SRM TRP Engineering College</title>
  ${commonHeadStyles}
</head>
<body class="min-h-screen flex flex-col antialiased">
  ${renderTopNav('home')}

  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-up">
    
    <!-- Hero Section -->
    <header class="mb-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
      <div class="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-16 -bottom-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-blue-200 mb-4">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          SRM TRP Engineering College • Autonomous Regulations 2026
        </div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight mb-4">
          ECE Contest <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">→ Career</span> Roadmap
        </h1>
        <p class="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
          A comprehensive, outcome-driven industry readiness framework bridging the R2026 B.E. ECE academic curriculum with global student hackathons, core hardware competitions, structured hands-on activities, and high-impact placement preparation.
        </p>

        <!-- Metrics chips -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <span class="block font-heading font-extrabold text-xl sm:text-2xl text-blue-400">8</span>
            <span class="text-[11px] text-slate-300 font-medium">Semesters Mapped</span>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <span class="block font-heading font-extrabold text-xl sm:text-2xl text-emerald-400">2</span>
            <span class="text-[11px] text-slate-300 font-medium">Specialized Tracks</span>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <span class="block font-heading font-extrabold text-xl sm:text-2xl text-indigo-400">12+</span>
            <span class="text-[11px] text-slate-300 font-medium">Global Contests</span>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
            <span class="block font-heading font-extrabold text-xl sm:text-2xl text-teal-400">100%</span>
            <span class="text-[11px] text-slate-300 font-medium">Industry Aligned</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Semester Grid Section -->
    <section class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-widest text-blue-600 block">Semester Milestones</span>
          <h2 class="font-heading font-extrabold text-2xl text-slate-900">Choose a Semester to Explore</h2>
        </div>
        <span class="text-xs font-semibold text-slate-500 hidden sm:block">SEM I → SEM VIII</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${semesterCards}
      </div>
    </section>

    <!-- 6-Stage Methodology Framework -->
    <section class="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
      <div class="max-w-2xl mb-8">
        <span class="text-[11px] font-bold uppercase tracking-widest text-blue-600 block mb-1">01 • Continuous Learning Cycle</span>
        <h2 class="font-heading font-extrabold text-2xl text-slate-900">The 6-Stage Contest-to-Career Methodology</h2>
        <p class="text-sm text-slate-600 mt-1 leading-relaxed">
          Every semester follows a structured six-step progression to transform syllabus topics into demonstrable engineering competencies.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        
        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center hover:bg-blue-50/50 hover:border-blue-300 transition-all group">
          <div class="w-10 h-10 mx-auto rounded-xl bg-blue-600 text-white font-heading font-bold text-sm flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">1</div>
          <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Target Contest</h4>
          <p class="text-xs text-slate-600 leading-normal">Identify premier contest and key problem statements.</p>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center hover:bg-blue-50/50 hover:border-blue-300 transition-all group">
          <div class="w-10 h-10 mx-auto rounded-xl bg-blue-700 text-white font-heading font-bold text-sm flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">2</div>
          <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Curriculum Link</h4>
          <p class="text-xs text-slate-600 leading-normal">Map specific R2026 theory and laboratory subjects.</p>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center hover:bg-amber-50/50 hover:border-amber-300 transition-all group">
          <div class="w-10 h-10 mx-auto rounded-xl bg-amber-600 text-white font-heading font-bold text-sm flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">3</div>
          <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Skill Gap</h4>
          <p class="text-xs text-slate-600 leading-normal">Pinpoint practical and computational gaps.</p>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center hover:bg-emerald-50/50 hover:border-emerald-300 transition-all group">
          <div class="w-10 h-10 mx-auto rounded-xl bg-emerald-600 text-white font-heading font-bold text-sm flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">4</div>
          <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">3 Core Activities</h4>
          <p class="text-xs text-slate-600 leading-normal">Execute structured hands-on laboratory exercises.</p>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center hover:bg-indigo-50/50 hover:border-indigo-300 transition-all group">
          <div class="w-10 h-10 mx-auto rounded-xl bg-indigo-600 text-white font-heading font-bold text-sm flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">5</div>
          <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Pre-Contest</h4>
          <p class="text-xs text-slate-600 leading-normal">Compete in internal department mock challenges.</p>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center hover:bg-teal-50/50 hover:border-teal-300 transition-all group">
          <div class="w-10 h-10 mx-auto rounded-xl bg-teal-600 text-white font-heading font-bold text-sm flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">6</div>
          <h4 class="font-heading font-bold text-sm text-slate-900 mb-1">Portfolio &amp; Career</h4>
          <p class="text-xs text-slate-600 leading-normal">Record proof on GitHub &amp; excel in core placements.</p>
        </div>

      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="w-full py-6 px-4 bg-white border-t border-slate-200 text-center text-xs text-slate-500 mt-auto">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
      <p class="font-medium">© 2026 SRM TRP Engineering College • Department of Electronics &amp; Communication Engineering</p>
      <p class="text-slate-400">R2026 Autonomous Curriculum &amp; Syllabi Framework</p>
    </div>
  </footer>
</body>
</html>
`;
}

// Generate all code.html files in source folders
const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');

// Home page
fs.writeFileSync(path.join(baseDir, 'home_ece_roadmap', 'code.html'), renderHomePage());
console.log('Generated enhanced home page code.html');

// Semester pages 1-8
const semMap = {
  '1': 'semester_i_ece_roadmap',
  '2': 'semester_ii_ece_roadmap',
  '3': 'semester_iii_ece_roadmap',
  '4': 'semester_iv_ece_roadmap',
  '5': 'semester_v_ece_roadmap',
  '6': 'semester_vi_ece_roadmap',
  '7': 'semester_vii_ece_roadmap',
  '8': 'semester_viii_ece_roadmap',
};

Object.entries(semMap).forEach(([semNum, folder]) => {
  const html = renderSemesterPage(semNum);
  fs.writeFileSync(path.join(baseDir, folder, 'code.html'), html);
  console.log(`Generated enhanced Semester ${semNum} code.html (${folder})`);
});
