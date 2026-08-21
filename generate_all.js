const fs = require('fs');
const path = require('path');
const { getHead, getNav, getHeader, getCard, getFooter } = require('./generate_semesters');

const root = __dirname;

// ==========================================
// 1. GENERATE SEMESTER 2
// ==========================================
function buildSem2() {
  const head = getHead('ECE Semester II Roadmap');
  const nav = getNav('Sem II');
  const header = getHeader(
    'Semester II • 1st Year • Innovation & Problem Solving',
    'Semester II Industry Readiness Roadmap',
    'Build early innovation, user empathy and hackathon problem-solving skills for premier engineering competitions.',
    { href: 'semester-1.html', label: 'Sem I' },
    { href: 'semester-3.html', label: 'Sem III' }
  );

  const card1A = getCard({
    cardType: 'innovation',
    trackCode: 'Track 1A',
    trackName: 'Track 01A • Engineering Innovation & Hackathons',
    trackTitle: 'PATH 1 (ENGINEERING INNOVATION & HACKATHONS)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'lightbulb',
    priority: 'ORANGE',
    targetGoal: 'e-Yantra Innovation Challenge (eYIC) • Smart India Hackathon • Engineering Innovation Challenges',
    targetLinks: [
      { href: 'https://eyic.e-yantra.org', label: 'e-Yantra eYIC' },
      { href: 'https://www.sih.gov.in', label: 'Smart India Hackathon' }
    ],
    subjectCode: '2611GESJ201',
    subjectName: 'Introduction to Engineering-II',
    skillGap: 'Students need to learn how to convert a real-world problem into a contest-ready engineering problem: Problem identification, User understanding, Requirement definition, Solution comparison, Feasibility, Cost awareness, Prototyping, and Pitching.',
    activities: [
      { title: 'Campus Problem Hunt', desc: 'Identify a real engineering problem in the campus or local community through direct field observation.' },
      { title: 'User Problem Validation', desc: 'Interview and observe end-users to validate whether the identified pain-point is genuine, recurring, and quantifiable.' },
      { title: '10-Idea Solution Sprint', desc: 'Generate multiple diverse solution architectures and shortlist the single strongest, most viable engineering solution.' },
      { title: 'Constraint-Based Solution Challenge', desc: 'Refine and optimize the selected solution under strict constraints such as unit cost, fabrication time, energy consumption, and component availability.' },
      { title: '3-Minute Hackathon Pitch', desc: 'Structure and deliver a high-impact pitch deck following the proven format: Problem → Field Evidence → Proposed Solution → Technology Stack → Social/Market Impact.' }
    ],
    toolTitle: 'Canva, Figma & Rapid Prototyping Tools',
    toolDesc: 'Interactive user flow wireframing, requirement definition, cost feasibility matrix estimation, and contest pitch presentation.',
    toolIcon: 'design_services',
    preContestTitle: '🏆 S2 Innovation Challenge'
  });

  const footer = getFooter(
    { href: 'semester-1.html', label: 'Sem I' },
    { href: 'semester-3.html', label: 'Sem III' }
  );

  const content = `${head}
  ${nav}
  ${header}

    <!-- Single Main Track Grid -->
    <div class="max-w-4xl mx-auto flex flex-col gap-8 w-full">
      ${card1A}
    </div>

  ${footer}
  `;

  fs.writeFileSync(path.join(root, 'semester_ii_ece_roadmap', 'code.html'), content);
  console.log('✓ Generated Semester II');
}

// ==========================================
// 2. GENERATE SEMESTER 3
// ==========================================
function buildSem3() {
  const head = getHead('ECE Semester III Roadmap');
  const nav = getNav('Sem III');
  const header = getHeader(
    'Semester III • 2nd Year • Control & Analog Core',
    'Semester III Industry Readiness Roadmap',
    'Build Control, Analog IC and engineering problem-solving skills for robotics and semiconductor challenges.',
    { href: 'semester-2.html', label: 'Sem II' },
    { href: 'semester-4.html', label: 'Sem IV' }
  );

  const cardControl = getCard({
    cardType: 'software',
    trackCode: 'Track 1A',
    trackName: 'Track 01A • Control & Robotics Engineering',
    trackTitle: 'PATH 1 (CONTROL & ROBOTICS SYSTEMS)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'settings_input_component',
    priority: 'RED',
    targetGoal: 'e-Yantra Robotics Competition • Robotics Challenges • Smart India Hackathon Hardware • Embedded/Robotics Placement',
    targetLinks: [
      { href: 'https://portal.e-yantra.org', label: 'e-Yantra eYRC' },
      { href: 'https://www.sih.gov.in', label: 'SIH Hardware' }
    ],
    subjectCode: '2611ECPC302',
    subjectName: 'Control System Engineering',
    skillGap: 'Students need to move from control theory to selecting, tuning and evaluating controllers for unfamiliar systems under dynamic disturbances and saturation constraints.',
    activities: [
      { title: 'Controller Selection Challenge', desc: 'Analyze plant dynamics and select appropriate P/PI/PID or state-feedback control architectures based on transient and steady-state criteria.' },
      { title: 'Stability Diagnosis Challenge', desc: 'Diagnose closed-loop stability margins (Gain/Phase margin) and identify instability roots on Bode and Nyquist plots for unmodeled dynamics.' },
      { title: 'Disturbance Rejection Challenge', desc: 'Design feedforward/feedback compensators to reject high-frequency sensor noise and step load disturbances.' },
      { title: 'Controller Tuning Under Constraints', desc: 'Tune PID parameters under actuator saturation, slew-rate limits, and energy minimization constraints.' },
      { title: 'Robot/Plant Control Mini Challenge', desc: 'Implement and simulate closed-loop trajectory tracking for an autonomous 2-wheeled robot or inverted pendulum plant in MATLAB/Simulink.' }
    ],
    toolTitle: 'MATLAB & Simulink',
    toolDesc: 'Control system toolbox, Root Locus design, frequency response analysis, state-space modeling, and non-linear simulation.',
    toolIcon: 'precision_manufacturing',
    preContestTitle: '🏆 ECE Control Challenge'
  });

  const cardAnalog = getCard({
    cardType: 'hardware',
    trackCode: 'Track 2A',
    trackName: 'Track 02A • Analog IC & Semiconductor Design',
    trackTitle: 'PATH 2 (ANALOG INTEGRATED CIRCUITS)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'memory',
    priority: 'RED',
    targetGoal: 'C2S • Analog IC Design Challenges • Semiconductor Industry Challenges • Semiconductor Placement',
    targetLinks: [
      { href: 'https://c2s.gov.in', label: 'Chips to Startup (C2S)' },
      { href: 'https://www.cadence.com', label: 'Cadence Virtuoso' }
    ],
    subjectCode: '2611ECPC303',
    subjectName: 'Analog Integrated Circuits',
    skillGap: 'Students need to make analog IC design decisions under specifications and competing constraints (Gain vs. Bandwidth vs. Power vs. Noise vs. Voltage Headroom).',
    activities: [
      { title: 'Analog Architecture Selection Challenge', desc: 'Evaluate single-stage, cascode, folded-cascode, and two-stage op-amp topologies against target power and gain specifications.' },
      { title: 'Gain-Bandwidth-Power Trade-Off Challenge', desc: 'Size MOSFET W/L ratios and bias currents to maximize Unity Gain Frequency while maintaining phase margin > 60°.' },
      { title: 'Performance Bottleneck Investigation', desc: 'Identify circuit non-idealities limiting CMRR, PSRR, and slew rate using AC/Transient small-signal simulations.' },
      { title: 'PVT/Variation-Aware Design Decision', desc: 'Run Monte Carlo and Process-Voltage-Temperature (PVT) corner sweeps to verify circuit yield under fabrication variations.' },
      { title: 'Analog IC Specification-to-Design Challenge', desc: 'Design a complete CMOS operational transconductance amplifier (OTA) meeting strict noise, gain, and power limits from scratch in LTspice/Virtuoso.' }
    ],
    toolTitle: 'LTspice & Cadence Virtuoso',
    toolDesc: 'SPICE transistor-level schematic capture, AC/DC/Transient simulation, noise analysis, and layout design.',
    toolIcon: 'developer_board',
    preContestTitle: '🏆 Analog IC Design Challenge'
  });

  const cardProbability = getCard({
    cardType: 'innovation',
    trackCode: 'Track 1B',
    trackName: 'Track 01B • Mathematics, Data & GATE Foundation',
    trackTitle: 'PATH 3 (PROBABILITY & STOCHASTIC PROCESSES)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'functions',
    priority: 'YELLOW',
    targetGoal: 'GATE ECE • AI/ML/Data Challenges • Data-Driven ECE Applications',
    targetLinks: [
      { href: 'https://gate2026.iitk.ac.in', label: 'GATE ECE Syllabus' },
      { href: 'https://numpy.org', label: 'NumPy Docs' }
    ],
    subjectCode: '2611MASJ301',
    subjectName: 'Probability, Statistics and Stochastic Process',
    skillGap: 'Students need to apply probability and statistics concepts to uncertain, noisy real-world engineering data, random processes, and stochastic decision making.',
    activities: [
      { title: 'Uncertainty-Based Sensor Decision Challenge', desc: 'Formulate Bayesian decision rules to fuse multiple noisy sensor readings and minimize false alarm rates.' },
      { title: 'Noisy-Data Probability Challenge', desc: 'Fit empirical engineering data to Gaussian, Poisson, and Rayleigh distributions using maximum likelihood estimation.' },
      { title: 'Monte-Carlo Engineering Decision Challenge', desc: 'Simulate system failure probabilities and reliability metrics using 10,000+ Monte Carlo stochastic iterations in Python.' },
      { title: 'Statistical Anomaly Detection Challenge', desc: 'Compute rolling z-scores, confidence intervals, and hypothesis tests to flag anomalous sensor telemetry in real-time.' },
      { title: 'Timed Probability/Data Challenge', desc: 'Solve timed competitive problem sets on random variables, correlation, power spectral density, and Markov chains.' }
    ],
    toolTitle: 'Python, NumPy & MATLAB',
    toolDesc: 'Numerical computing, stochastic process modeling, probability distribution fitting, and statistical hypothesis testing.',
    toolIcon: 'code',
    preContestTitle: '🏆 ECE Probability Challenge'
  });

  const footer = getFooter(
    { href: 'semester-2.html', label: 'Sem II' },
    { href: 'semester-4.html', label: 'Sem IV' }
  );

  const content = `${head}
  ${nav}
  ${header}

    <!-- Dual Path Comparison Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
      <div class="flex flex-col gap-8 w-full">
        ${cardControl}
      </div>
      <div class="flex flex-col gap-8 w-full">
        ${cardAnalog}
      </div>
    </div>

    <!-- Foundation & GATE Path (Full Width) -->
    <div class="max-w-4xl mx-auto w-full">
      ${cardProbability}
    </div>

  ${footer}
  `;

  fs.writeFileSync(path.join(root, 'semester_iii_ece_roadmap', 'code.html'), content);
  console.log('✓ Generated Semester III');
}

// ==========================================
// 3. GENERATE SEMESTER 4
// ==========================================
function buildSem4() {
  const head = getHead('ECE Semester IV Roadmap');
  const nav = getNav('Sem IV');
  const header = getHeader(
    'Semester IV • 2nd Year • VLSI, Embedded & Edge AI',
    'Semester IV Industry Readiness Roadmap',
    'Build the core VLSI, Embedded and AI skills required for advanced ECE competitions and placements.',
    { href: 'semester-3.html', label: 'Sem III' },
    { href: 'semester-5.html', label: 'Sem V' }
  );

  const cardVLSI = getCard({
    cardType: 'hardware',
    trackCode: 'Track 2A',
    trackName: 'Track 02A • VLSI & RTL Semiconductor Design',
    trackTitle: 'PATH 1 (VLSI DESIGN)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'developer_board',
    priority: 'RED',
    targetGoal: 'C2S • FPGA Design Challenges • RTL Design Challenges • VLSI Design Challenges • Semiconductor Placement',
    targetLinks: [
      { href: 'https://c2s.gov.in', label: 'C2S India' },
      { href: 'https://www.xilinx.com/products/design-tools/vivado.html', label: 'Xilinx Vivado' }
    ],
    subjectCode: '2611ECPC401',
    subjectName: 'VLSI Design',
    skillGap: 'Students need to move from VLSI concepts to design decisions involving Architecture, RTL, Area, Power, Timing, Verification, and Optimization.',
    activities: [
      { title: 'RTL Architecture Selection Under Constraints', desc: 'Compare pipelined vs. iterative RTL architectures for arithmetic and signal processing blocks under strict clock latency budgets.' },
      { title: 'PPA Optimization Challenge', desc: 'Optimize Verilog/SystemVerilog RTL for Power-Performance-Area (PPA) trade-offs using clock gating and resource sharing.' },
      { title: 'Timing Violation Investigation', desc: 'Analyze Static Timing Analysis (STA) reports, identify setup/hold slack violations, and resolve critical path bottlenecks.' },
      { title: 'RTL Design Debug Challenge', desc: 'Identify and fix race conditions, unclocked latches, and metastability issues in complex multi-clock RTL designs using testbenches.' },
      { title: 'Mini RTL-to-Design Contest', desc: 'Synthesize, place, and route a high-speed DSP or crypto accelerator block on an FPGA target with timing closure in Xilinx Vivado.' }
    ],
    toolTitle: 'Cadence, Synopsys, Siemens EDA & Xilinx Vivado',
    toolDesc: 'RTL synthesis, simulation testbenches, static timing analysis (STA), FPGA bitstream generation, and hardware verification.',
    toolIcon: 'memory',
    preContestTitle: '🏆 ECE VLSI Design Challenge'
  });

  const cardEmbedded = getCard({
    cardType: 'software',
    trackCode: 'Track 1A',
    trackName: 'Track 01A • Embedded Systems & Firmware Engineering',
    trackTitle: 'PATH 2 (EMBEDDED C PROGRAMMING)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'terminal',
    priority: 'RED',
    targetGoal: 'e-Yantra Robotics Competition • Smart India Hackathon Hardware • Embedded Systems Challenges • Embedded Placement',
    targetLinks: [
      { href: 'https://www.st.com/en/development-tools/stm32cubeide.html', label: 'STM32CubeIDE' },
      { href: 'https://portal.e-yantra.org', label: 'e-Yantra eYRC' }
    ],
    subjectCode: '2611ECPC402',
    subjectName: 'Embedded C Programming',
    skillGap: 'Students need to move from C programming to reliable firmware under timing constraints, memory constraints, interrupts, peripheral integration, debugging, and hardware interaction.',
    activities: [
      { title: 'Interrupt-Driven System Challenge', desc: 'Develop low-latency bare-metal interrupt service routines (ISRs) for high-frequency timer and external pin events without blocking loops.' },
      { title: 'Resource-Constrained Firmware Challenge', desc: 'Optimize RAM and Flash memory footprint using static memory allocation, bitmasking, and compiler optimization flags (-Os).' },
      { title: 'Fault-Injection and Debug Challenge', desc: 'Diagnose and recover from hard faults, stack overflows, buffer overflows, and pointer corruption using GDB / OpenOCD debugging.' },
      { title: 'Peripheral-Integration Challenge', desc: 'Write robust drivers for I2C, SPI, and UART sensors with DMA support, timeout recovery, and packet checksum validation.' },
      { title: 'Time-Bound Embedded System Challenge', desc: 'Build a deterministic multitasking scheduler with FreeRTOS meeting strict hard-deadline sensor sampling in under 3 hours.' }
    ],
    toolTitle: 'STM32 / ESP32, GCC, VS Code & Git',
    toolDesc: 'Bare-metal C firmware development, register-level debugging, FreeRTOS kernel integration, logic analyzer inspection, and Git version control.',
    toolIcon: 'laptop_mac',
    preContestTitle: '🏆 ECE Embedded Challenge'
  });

  const cardAI = getCard({
    cardType: 'software',
    trackCode: 'Track 1B',
    trackName: 'Track 01B • Artificial Intelligence & Machine Learning',
    trackTitle: 'PATH 3 (ARTIFICIAL INTELLIGENCE & MACHINE LEARNING)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'psychology',
    priority: 'RED',
    targetGoal: 'Edge-AI Challenges • AI Hackathons • Smart India Hackathon • Embedded AI Challenges',
    targetLinks: [
      { href: 'https://scikit-learn.org', label: 'scikit-learn' },
      { href: 'https://colab.research.google.com', label: 'Google Colab' }
    ],
    subjectCode: '2611ECPC403',
    subjectName: 'Artificial Intelligence and Machine Learning',
    skillGap: 'Students need to select and apply ML models under realistic engineering constraints (accuracy, memory footprint, inference latency, and dataset noise).',
    activities: [
      { title: 'ECE Dataset Problem-Formulation Challenge', desc: 'Preprocess raw sensor and signal datasets (filtering, normalization, windowing) to frame a classification/regression task.' },
      { title: 'Feature-Selection Challenge', desc: 'Extract time/frequency-domain features (FFT, wavelets, statistical moments) and evaluate feature importance to prevent overfitting.' },
      { title: 'Model-Selection Under Resource Constraints', desc: 'Benchmark Decision Trees, Random Forests, SVMs, and TinyML architectures against accuracy and RAM/Flash constraints.' },
      { title: 'Misclassification Root-Cause Challenge', desc: 'Perform confusion matrix error analysis, diagnose class imbalance, and apply data augmentation to resolve edge-case failures.' },
      { title: 'Edge-AI Mini Challenge', desc: 'Deploy and evaluate a trained scikit-learn/TensorFlow Lite model on an embedded microcontroller to classify sensor gestures in real time.' }
    ],
    toolTitle: 'Python, Jupyter, scikit-learn & Google Colab',
    toolDesc: 'Machine learning pipeline development, data cleaning, feature engineering, model evaluation, and export to embedded runtime formats.',
    toolIcon: 'smart_toy',
    preContestTitle: '🏆 ECE Edge-AI Challenge'
  });

  const cardLinearAlgebra = getCard({
    cardType: 'innovation',
    trackCode: 'Track 2B',
    trackName: 'Track 02B • Mathematical Foundations & Modelling',
    trackTitle: 'PATH 4 (LINEAR ALGEBRA)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'calculate',
    priority: 'YELLOW',
    targetGoal: 'GATE ECE • AI/ML Foundation • DSP Foundation • Engineering Modelling',
    targetLinks: [
      { href: 'https://gate2026.iitk.ac.in', label: 'GATE Syllabus' },
      { href: 'https://numpy.org', label: 'NumPy Linear Algebra' }
    ],
    subjectCode: '2611MASJ401',
    subjectName: 'Linear Algebra',
    skillGap: 'Students need to apply matrix concepts (vector spaces, eigenvalues, SVD, projections) to solve real engineering and data problems.',
    activities: [
      { title: 'Matrix-Based ECE Modelling Challenge', desc: 'Formulate state-space circuit networks and multi-input multi-output communication channels as linear matrix equations.' },
      { title: 'Eigenvalue Application Challenge', desc: 'Compute modal frequencies and dominant modes of interconnected physical systems using eigenvalue/eigenvector decompositions.' },
      { title: 'PCA-Style Dimensionality Reduction Challenge', desc: 'Implement Principal Component Analysis from scratch using SVD and covariance matrices to compress multidimensional sensor signals.' },
      { title: 'Matrix Computation Optimization Challenge', desc: 'Optimize matrix multiplication and inversion routines for sparse and Toeplitz matrices using vectorized Python NumPy algorithms.' },
      { title: 'Timed GATE/Application Challenge', desc: 'Solve timed competitive problem sets on matrix rank, vector spaces, orthogonal projections, and quadratic forms under GATE exam conditions.' }
    ],
    toolTitle: 'Python, NumPy & MATLAB',
    toolDesc: 'Numerical linear algebra, matrix decomposition, geometric transformation visualization, and algorithm optimization.',
    toolIcon: 'functions',
    preContestTitle: '🏆 Linear Algebra GATE Sprint'
  });

  const footer = getFooter(
    { href: 'semester-3.html', label: 'Sem III' },
    { href: 'semester-5.html', label: 'Sem V' }
  );

  const content = `${head}
  ${nav}
  ${header}

    <!-- 2x2 Grid for 4 Core Subjects -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
      <div class="flex flex-col gap-8 w-full">
        ${cardVLSI}
        ${cardAI}
      </div>
      <div class="flex flex-col gap-8 w-full">
        ${cardEmbedded}
        ${cardLinearAlgebra}
      </div>
    </div>

  ${footer}
  `;

  fs.writeFileSync(path.join(root, 'semester_iv_ece_roadmap', 'code.html'), content);
  console.log('✓ Generated Semester IV');
}

// ==========================================
// 4. GENERATE SEMESTER 5 (WITH ELECTIVES)
// ==========================================
function buildSem5() {
  const head = getHead('ECE Semester V Roadmap');
  const nav = getNav('Sem V');
  const header = getHeader(
    'Semester V • 3rd Year • ASIC, VLSI Testing & Processors',
    'Semester V Industry Readiness Roadmap',
    'Advance from RTL design into complete ASIC physical implementation, automated test pattern generation, embedded processors, and computer vision applications.',
    { href: 'semester-4.html', label: 'Sem IV' },
    { href: 'semester-6.html', label: 'Sem VI' }
  );

  const cardASIC = getCard({
    cardType: 'hardware',
    trackCode: 'Track 1A',
    trackName: 'Track 01A • ASIC Design & Semiconductor Implementation',
    trackTitle: 'PATH 1 (ASIC DESIGN)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'memory',
    priority: 'RED',
    targetGoal: 'C2S • RISC-V Design Challenges • VSD/Open-Source VLSI Challenges • SEMICON India • Semiconductor Placement',
    targetLinks: [
      { href: 'https://c2s.gov.in', label: 'C2S National Program' },
      { href: 'https://theopenroadproject.org', label: 'OpenROAD Project' }
    ],
    subjectCode: '2611ECPC501',
    subjectName: 'ASIC Design',
    skillGap: 'Students need to move from RTL knowledge toward an ASIC implementation mindset: RTL → Verification → Synthesis → PPA → Timing → Physical implementation awareness.',
    activities: [
      { title: 'RTL Architecture Challenge Under PPA Constraints', desc: 'Design parameterizable Verilog RTL modules and optimize logic depth to minimize silicon area and dynamic power dissipation.' },
      { title: 'Synthesis/PPA Optimization Challenge', desc: 'Run logic synthesis with target cell libraries, evaluate area/power trade-offs, and insert scan chains for Design for Testability (DFT).' },
      { title: 'Timing Closure Challenge', desc: 'Perform multi-corner static timing analysis, identify setup/hold slack violations, and resolve clock skew issues in post-synthesis netlists.' },
      { title: 'RTL Bug and Verification Challenge', desc: 'Write self-checking SystemVerilog testbenches with assertions (SVA) and functional coverage metrics to catch corner-case design bugs.' },
      { title: 'End-to-End Mini ASIC Design Challenge', desc: 'Execute an end-to-end RTL-to-GDSII physical design flow (Floorplanning, Power Grid, Placement, CTS, Routing, DRC/LVS) using OpenROAD / Cadence Innovus.' }
    ],
    toolTitle: 'Cadence, Synopsys, Siemens EDA, OpenROAD, Verilog & SystemVerilog',
    toolDesc: 'ASIC digital design flow, logic synthesis, static timing analysis (STA), clock tree synthesis (CTS), and physical layout verification.',
    toolIcon: 'developer_board',
    preContestTitle: '🏆 S5 ASIC Design Challenge'
  });

  const cardVLSITesting = getCard({
    cardType: 'hardware',
    trackCode: 'Track 1B',
    courseType: 'Professional Elective I',
    trackName: 'Track 01B • VLSI Testing, Verification & ATPG',
    trackTitle: 'PATH 2 (TESTING OF VLSI CIRCUITS)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'fact_check',
    priority: 'RED',
    targetGoal: 'C2S • VLSI Design Challenges • ASIC Design Challenges • RISC-V Design Challenges • Semiconductor Industry Challenges • VLSI/ASIC Placement',
    targetLinks: [
      { href: 'https://c2s.gov.in', label: 'C2S Testing' },
      { href: 'https://www.synopsys.com', label: 'Synopsys TetraMAX' }
    ],
    subjectCode: '2611ECPE501',
    subjectName: 'Testing of VLSI Circuits',
    skillGap: 'The curriculum provides VLSI testing concepts. The contest/industry gap is the ability to apply testing concepts to unfamiliar digital circuits and reason about faults, coverage and test efficiency.',
    activities: [
      { title: 'Fault Detection Challenge', desc: 'Provide an unfamiliar digital circuit with injected faults. Students must identify which faults can be detected using given test patterns.' },
      { title: 'Test Pattern Generation Challenge', desc: 'Given a circuit and a set of possible faults, students develop test patterns that maximize fault detection.' },
      { title: 'Fault Coverage Optimization Challenge', desc: 'Given multiple test patterns, students reduce the number of patterns while maintaining acceptable fault coverage.' },
      { title: 'ATPG Debugging Challenge', desc: 'Provide a test-generation scenario with incomplete/ineffective test patterns. Students identify why faults are not detected and improve the test strategy.' },
      { title: 'Mini VLSI Testing Challenge', desc: 'Teams receive an unfamiliar digital block and must: identify possible faults, propose test patterns, estimate fault coverage, and explain the test strategy.' }
    ],
    toolTitle: 'Cadence, Synopsys, Siemens EDA, Open-source ATPG tools & Verilog',
    toolDesc: 'Automatic Test Pattern Generation (ATPG), stuck-at/transition fault grading, scan chain insertion, and test compression.',
    toolIcon: 'rule',
    preContestTitle: '🏆 ECE VLSI Testing Challenge'
  });

  const cardProcessor = getCard({
    cardType: 'software',
    trackCode: 'Track 2A',
    courseType: 'Professional Elective II',
    trackName: 'Track 02A • Embedded Processor & Computer Architecture',
    trackTitle: 'PATH 3 (EMBEDDED PROCESSOR)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'developer_board',
    priority: 'RED',
    targetGoal: 'e-Yantra Robotics Competition • Smart India Hackathon Hardware • Embedded Systems Challenges • RISC-V Challenges • Processor Design Challenges • Embedded Placement',
    targetLinks: [
      { href: 'https://riscv.org', label: 'RISC-V International' },
      { href: 'https://github.com/mortbopet/Ripes', label: 'Ripes Simulator' }
    ],
    subjectCode: '2611ECPE502',
    subjectName: 'Embedded Processor',
    skillGap: 'Students need to understand how to make processor-level design decisions under constraints such as performance, memory, power, instruction execution, peripheral integration, and hardware-software co-design.',
    activities: [
      { title: 'Processor Architecture Selection Challenge', desc: 'Given an embedded application, compare possible processor architectures and select the most appropriate one based on performance, power, memory and application requirements.' },
      { title: 'Instruction-Level Optimization Challenge', desc: 'Given an embedded task, optimize the instruction sequence to improve execution efficiency.' },
      { title: 'Memory Constraint Challenge', desc: 'Implement an embedded application under strict memory constraints and optimize code/data usage.' },
      { title: 'Processor-Peripheral Integration Challenge', desc: 'Integrate processor functionality with peripherals to solve an unfamiliar embedded system problem.' },
      { title: 'Mini Embedded Processor Challenge', desc: 'Teams receive a system specification and must design a small processor-based embedded solution, demonstrate the system behavior and explain their architectural decisions.' }
    ],
    toolTitle: 'RISC-V, RARS / Ripes, Verilog/SystemVerilog, STM32/ESP32, GCC & VS Code',
    toolDesc: 'Processor pipeline simulation, custom instruction decoding, memory hierarchy profiling, and bare-metal firmware optimization.',
    toolIcon: 'precision_manufacturing',
    preContestTitle: '🏆 Embedded Processor Design Challenge'
  });

  const cardDIP = getCard({
    cardType: 'software',
    trackCode: 'Track 2B',
    trackName: 'Track 02B • Computer Vision & Signal Processing',
    trackTitle: 'PATH 4 (DIGITAL IMAGE PROCESSING)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'image',
    priority: 'ORANGE',
    targetGoal: 'Computer Vision Challenges • AI/Edge-AI Challenges • Smart India Hackathon • Robotics Vision Challenges • Image Processing Challenges',
    targetLinks: [
      { href: 'https://opencv.org', label: 'OpenCV Official' },
      { href: 'https://www.sih.gov.in', label: 'SIH Vision Tracks' }
    ],
    subjectCode: '2611ECPC502',
    subjectName: 'Digital Image Processing',
    skillGap: 'Students need to move from image-processing algorithms to solving real vision problems under accuracy, illumination changes, and computation constraints.',
    activities: [
      { title: 'Image Quality Recovery Challenge', desc: 'Restore heavily degraded, low-light, or motion-blurred images using adaptive histogram equalization, Wiener deconvolution, and bilateral filtering.' },
      { title: 'Object/Feature Detection Challenge', desc: 'Extract robust keypoints and descriptors (ORB, SIFT, Canny-Hough transforms) to detect and count objects in complex background clutter.' },
      { title: 'Image Segmentation Challenge', desc: 'Segment target regions and defects in medical/industrial images using watershed algorithms, Otsu thresholding, and morphological operations.' },
      { title: 'Vision Algorithm Optimization Challenge', desc: 'Optimize image processing pipelines for 60 FPS real-time execution using vectorized NumPy and OpenCV multi-threading.' },
      { title: 'Embedded Vision Mini Challenge', desc: 'Develop a lightweight vision inspection prototype for automated defect detection on an embedded Raspberry Pi or STM32 platform.' }
    ],
    toolTitle: 'Python, OpenCV, NumPy, MATLAB & Google Colab',
    toolDesc: 'Image filtering, morphological analysis, feature extraction, object segmentation, and real-time video stream processing.',
    toolIcon: 'visibility',
    preContestTitle: '🏆 ECE Computer Vision Challenge'
  });

  const footer = getFooter(
    { href: 'semester-4.html', label: 'Sem IV' },
    { href: 'semester-6.html', label: 'Sem VI' }
  );

  const content = `${head}
  ${nav}
  ${header}

    <!-- 2x2 Grid for Semester V (ASIC, VLSI Testing, Processor, DIP) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
      <div class="flex flex-col gap-8 w-full">
        ${cardASIC}
        ${cardVLSITesting}
      </div>
      <div class="flex flex-col gap-8 w-full">
        ${cardProcessor}
        ${cardDIP}
      </div>
    </div>

  ${footer}
  `;

  fs.writeFileSync(path.join(root, 'semester_v_ece_roadmap', 'code.html'), content);
  console.log('✓ Generated Semester V');
}

// ==========================================
// 5. GENERATE SEMESTER 6 (WITH ELECTIVES)
// ==========================================
function buildSem6() {
  const head = getHead('ECE Semester VI Roadmap');
  const nav = getNav('Sem VI');
  const header = getHeader(
    'Semester VI • 3rd Year • Deep Learning, Robotics & Communications',
    'Semester VI Industry Readiness Roadmap',
    'Connect Deep Learning, Robotics Automation, 5G/Optical Communications, and Embedded Systems to real-world national competitions and industry deployments.',
    { href: 'semester-5.html', label: 'Sem V' },
    { href: 'semester-7.html', label: 'Sem VII' }
  );

  const cardDL = getCard({
    cardType: 'software',
    trackCode: 'Track 1A',
    trackName: 'Track 01A • Deep Learning & Edge AI Engineering',
    trackTitle: 'PATH 1 (DEEP LEARNING)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'psychology',
    priority: 'RED',
    targetGoal: 'Edge-AI Challenges • AI Hackathons • Smart India Hackathon • Embedded AI Challenges • Industry AI Challenges',
    targetLinks: [
      { href: 'https://pytorch.org', label: 'PyTorch Ecosystem' },
      { href: 'https://www.tensorflow.org/lite', label: 'TensorFlow Lite' }
    ],
    subjectCode: '2611ECPC601',
    subjectName: 'Deep Learning',
    skillGap: 'Students need to move beyond model training toward real-world deployment trade-offs: Accuracy, Latency, Memory, Compute, Model Optimization, and Edge Deployment.',
    activities: [
      { title: 'ECE Dataset-to-Model Challenge', desc: 'Design, train, and validate a Convolutional Neural Network (CNN) or Transformer on high-dimensional ECE sensory and acoustic data.' },
      { title: 'Model Selection Under Accuracy/Resource Constraints', desc: 'Benchmark MobileNetV3, ResNet, and EfficientNet architectures to maximize Top-1 accuracy within strict RAM (<16MB) limits.' },
      { title: 'Deep Learning Error-Analysis Challenge', desc: 'Conduct systematic error-analysis, confusion matrix diagnosis, and feature map visualizations (Grad-CAM) to explain model failures.' },
      { title: 'Model Compression / Inference Optimization Challenge', desc: 'Apply Post-Training Quantization (FP32 to INT8), structured weight pruning, and knowledge distillation to achieve 3x inference acceleration.' },
      { title: 'Edge-AI Mini Hackathon', desc: 'Deploy an optimized PyTorch/TFLite model on an edge embedded processor (e.g. Raspberry Pi, Jetson Nano, ESP32) with live video benchmarking.' }
    ],
    toolTitle: 'Python, PyTorch, TensorFlow, Google Colab & ONNX / TFLite',
    toolDesc: 'Deep neural network architecture design, GPU training, quantization, model conversion (ONNX/TFLite), and edge inference profiling.',
    toolIcon: 'smart_toy',
    preContestTitle: '🏆 S6 Edge-AI Challenge'
  });

  const cardRobotics = getCard({
    cardType: 'hardware',
    trackCode: 'Track 1B',
    courseType: 'Professional Elective III',
    trackName: 'Track 01B • Robotics, Mechatronics & Industrial Automation',
    trackTitle: 'PATH 2 (ROBOTICS AND INDUSTRIAL AUTOMATION)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'precision_manufacturing',
    priority: 'RED',
    targetGoal: 'e-Yantra Robotics Competition • Robotics Challenges • Smart India Hackathon Hardware • Industrial Automation Challenges • Embedded Robotics Challenges',
    targetLinks: [
      { href: 'https://portal.e-yantra.org', label: 'e-Yantra eYRC' },
      { href: 'https://www.ros.org', label: 'ROS / ROS2' }
    ],
    subjectCode: '2611ECPE601',
    subjectName: 'Robotics and Industrial Automation',
    skillGap: 'Students need to move beyond individual robot/control concepts and integrate multiple subsystems into a working robotic/automation solution: Control + Embedded Systems + Sensors + Actuators + Robotics + Automation.',
    activities: [
      { title: 'Sensor-to-Decision Challenge', desc: 'Given sensor inputs from a robotic/industrial system, design the logic required to make an appropriate system decision.' },
      { title: 'Robot Navigation Strategy Challenge', desc: 'Develop a strategy for a robot to navigate an unfamiliar environment under constraints.' },
      { title: 'Pick-and-Place Optimization Challenge', desc: 'Optimize a robotic pick-and-place sequence for time, accuracy or energy.' },
      { title: 'Industrial Fault-Diagnosis Challenge', desc: 'Given abnormal sensor/actuator behavior, identify the likely cause and propose a corrective action.' },
      { title: 'Mini Industrial Automation Challenge', desc: 'Teams solve a complete automation problem involving: Sensors → Controller → Actuator → Decision → System Response.' }
    ],
    toolTitle: 'MATLAB / Simulink, ROS / ROS2, STM32 / Arduino, Python & Gazebo',
    toolDesc: 'Kinematic modeling, path planning algorithms, ROS node communication, sensor-actuator feedback control, and digital-twin simulation.',
    toolIcon: 'smart_toy',
    preContestTitle: '🏆 ECE Robotics and Automation Challenge'
  });

  const cardWOC = getCard({
    cardType: 'hardware',
    trackCode: 'Track 2A',
    trackName: 'Track 02A • Wireless & Optical Systems Engineering',
    trackTitle: 'PATH 3 (WIRELESS AND OPTICAL COMMUNICATION)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'cell_tower',
    priority: 'ORANGE',
    targetGoal: 'Wireless Communication Challenges • 5G/6G Challenges • Software Defined Radio Challenges • Optical Communication Challenges • Industry Challenges',
    targetLinks: [
      { href: 'https://www.gnuradio.org', label: 'GNU Radio' },
      { href: 'https://www.mathworks.com/products/communications.html', label: 'MATLAB Comm Toolbox' }
    ],
    subjectCode: '2611ECPC602',
    subjectName: 'Wireless and Optical Communication',
    skillGap: 'Students need to move from communication theory to practical system-level communication design, link budget calculations, channel impairment compensation, and SDR evaluation.',
    activities: [
      { title: 'Modulation Scheme Selection Challenge', desc: 'Select and simulate optimal digital modulation schemes (QPSK, 16-QAM, 64-QAM, OFDM) under AWGN and multipath fading constraints.' },
      { title: 'Link Budget / Communication Range Challenge', desc: 'Calculate comprehensive free-space and optical link budgets accounting for transmitter power, antenna gains, path loss, and receiver sensitivity.' },
      { title: 'Channel Impairment Investigation', desc: 'Diagnose and compensate for Doppler shifts, phase jitter, inter-symbol interference (ISI), and chromatic dispersion using adaptive equalizers.' },
      { title: 'Wireless System Performance Optimization', desc: 'Optimize bit-error-rate (BER) vs. Signal-to-Noise Ratio (Eb/N0) performance using forward error correction (FEC) and channel coding.' },
      { title: 'SDR Communication Mini Challenge', desc: 'Implement an end-to-end transmitter/receiver link in GNU Radio or MATLAB with an RTL-SDR / HackRF hardware interface.' }
    ],
    toolTitle: 'MATLAB / Simulink, GNU Radio, Python & SDR Hardware',
    toolDesc: 'Digital modulation simulation, channel modeling, link budget calculations, constellation analysis, and Software Defined Radio (SDR) prototyping.',
    toolIcon: 'settings_input_antenna',
    preContestTitle: '🏆 ECE Wireless Communication Challenge'
  });

  const cardBasicEmbedded = getCard({
    cardType: 'software',
    trackCode: 'Track 2B',
    courseType: 'Open Elective II',
    trackName: 'Track 02B • Embedded Systems Foundation & Prototyping',
    trackTitle: 'PATH 4 (BASIC EMBEDDED SYSTEMS)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'terminal',
    priority: 'ORANGE',
    targetGoal: 'e-Yantra • Smart India Hackathon Hardware • IoT Hackathons • Embedded Systems Challenges • Beginner Hardware Challenges',
    targetLinks: [
      { href: 'https://platformio.org', label: 'PlatformIO' },
      { href: 'https://www.arduino.cc', label: 'Arduino IDE' }
    ],
    subjectCode: '2611ECOE601',
    subjectName: 'Basic Embedded Systems',
    skillGap: 'Students need to move from knowing individual embedded components to building a complete working embedded system: Microcontroller + Sensors + Actuators + Firmware + Communication.',
    activities: [
      { title: 'Sensor Integration Challenge', desc: 'Integrate multiple sensor inputs into a single embedded application.' },
      { title: 'Embedded Decision-Making Challenge', desc: 'Convert sensor data into real-time system decisions.' },
      { title: 'Communication Integration Challenge', desc: 'Integrate a communication interface into an embedded system and use it to exchange meaningful data.' },
      { title: 'Fault-Injection Debug Challenge', desc: 'Diagnose and correct intentionally introduced hardware/firmware faults.' },
      { title: 'Mini Embedded System Challenge', desc: 'Build a complete small embedded solution from: Sensor → Controller → Decision → Actuator/Output.' }
    ],
    toolTitle: 'Arduino, ESP32, STM32, PlatformIO, VS Code & Git',
    toolDesc: 'Multi-sensor firmware integration, serial communication protocols, real-time control logic, and hardware debugging.',
    toolIcon: 'laptop_mac',
    preContestTitle: '🏆 Basic Embedded Systems Challenge'
  });

  const footer = getFooter(
    { href: 'semester-5.html', label: 'Sem V' },
    { href: 'semester-7.html', label: 'Sem VII' }
  );

  const content = `${head}
  ${nav}
  ${header}

    <!-- 2x2 Grid for Semester VI (Deep Learning, Robotics, Wireless, Basic Embedded) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
      <div class="flex flex-col gap-8 w-full">
        ${cardDL}
        ${cardRobotics}
      </div>
      <div class="flex flex-col gap-8 w-full">
        ${cardWOC}
        ${cardBasicEmbedded}
      </div>
    </div>

  ${footer}
  `;

  fs.writeFileSync(path.join(root, 'semester_vi_ece_roadmap', 'code.html'), content);
  console.log('✓ Generated Semester VI');
}

// ==========================================
// 6. GENERATE SEMESTER 7
// ==========================================
function buildSem7() {
  const head = getHead('ECE Semester VII Roadmap');
  const nav = getNav('Sem VII');
  const header = getHeader(
    'Semester VII • 4th Year • Secure IoT Systems',
    'Semester VII Industry Readiness Roadmap',
    'Build secure IoT systems for industry and national-level hackathons.',
    { href: 'semester-6.html', label: 'Sem VI' },
    { href: 'semester-8.html', label: 'Sem VIII' }
  );

  const cardIoTSec = getCard({
    cardType: 'software',
    trackCode: 'Track 1A',
    trackName: 'Track 01A • Secure Embedded IoT & Cloud Architecture',
    trackTitle: 'PATH 1 (IOT SECURITY)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'security',
    priority: 'RED',
    targetGoal: 'Smart India Hackathon • IoT Hackathons • Secure IoT Challenges • Industry IoT Challenges • Embedded/IoT Placement',
    targetLinks: [
      { href: 'https://www.sih.gov.in', label: 'Smart India Hackathon' },
      { href: 'https://nodered.org', label: 'Node-RED IoT' }
    ],
    subjectCode: '2611ECPC701',
    subjectName: 'IoT Security',
    skillGap: 'Students need to move beyond connecting IoT devices to designing secure IoT systems: Secure architecture, device security, communication security, authentication, attack detection, secure data flow, and edge/cloud security.',
    activities: [
      { title: 'Secure IoT Architecture Selection Challenge', desc: 'Architect an end-to-end IoT system topology with zero-trust device enrollment, secure boot verification, and hardware root of trust.' },
      { title: 'Sensor-to-Cloud Secure Data Pipeline Challenge', desc: 'Implement mutual TLS (mTLS) authentication and AES-256 encrypted MQTT packet transmission between an ESP32 node and cloud broker.' },
      { title: 'Edge-vs-Cloud Security Decision Challenge', desc: 'Formulate security partitioning strategies deciding what telemetry is processed and sanitized at the edge node vs. in cloud storage.' },
      { title: 'IoT Attack/Fault Scenario Investigation', desc: 'Simulate and mitigate man-in-the-middle (MITM), replay attacks, firmware tampering, and denial-of-service (DoS) scenarios using Wireshark.' },
      { title: 'Secure IoT Mini-Hackathon', desc: 'Build and demonstrate a tamper-proof IoT prototype with real-time anomaly alerting and cryptographic token authentication in under 4 hours.' }
    ],
    toolTitle: 'ESP32 / STM32, MQTT, Node-RED, ThingsBoard & AWS / Azure',
    toolDesc: 'Hardware cryptography, TLS/SSL configuration, secure MQTT broker deployment, penetration testing with Wireshark, and cloud dashboard monitoring.',
    toolIcon: 'shield',
    preContestTitle: '🏆 S7 Secure IoT Challenge'
  });

  const footer = getFooter(
    { href: 'semester-6.html', label: 'Sem VI' },
    { href: 'semester-8.html', label: 'Sem VIII' }
  );

  const content = `${head}
  ${nav}
  ${header}

    <!-- Single Main Track Grid for Semester 7 (ONLY IoT Security) -->
    <div class="max-w-4xl mx-auto flex flex-col gap-8 w-full">
      ${cardIoTSec}
    </div>

  ${footer}
  `;

  fs.writeFileSync(path.join(root, 'semester_vii_ece_roadmap', 'code.html'), content);
  console.log('✓ Generated Semester VII');
}

// ==========================================
// 7. GENERATE SEMESTER 8
// ==========================================
function buildSem8() {
  const head = getHead('ECE Semester VIII Roadmap');
  const nav = getNav('Sem VIII');
  const header = getHeader(
    'Semester VIII • 4th Year • Capstone & Industry Launch',
    'Semester VIII Industry Readiness Roadmap',
    'Final Year Capstone: Transition comprehensive project work and engineering research into national hackathon victories, patent filings, and Tier-1 core semiconductor/embedded placements.',
    { href: 'semester-7.html', label: 'Sem VII' },
    { href: 'index.html', label: 'Home' }
  );

  const card1A = getCard({
    cardType: 'software',
    trackCode: 'Track 1A',
    trackName: 'Track 01A • Software Systems & Full-Stack ECE',
    trackTitle: 'PATH 1 (SOFTWARE & AI CAPSTONE)',
    bannerImg: 'path1_software.png',
    bannerIcon: 'code',
    priority: 'RED',
    targetGoal: 'Final Placement Technical Assessments • Product Hackathons • Tech Placement',
    targetLinks: [
      { href: 'https://leetcode.com', label: 'LeetCode Enterprise' },
      { href: 'https://github.com', label: 'GitHub Showcase' }
    ],
    subjectCode: '2611ECPW801',
    subjectName: 'Project Work',
    skillGap: 'Transitioning from standalone academic assignments to production-ready software architectures, automated CI/CD deployment, code review rigor, and live client-facing demos.',
    activities: [
      { title: 'Full-Stack System Architecture Challenge', desc: 'Architect a production-grade software stack with modular RESTful/gRPC microservices and robust database schema design.' },
      { title: 'Code Quality & Security Audit Sprint', desc: 'Run automated static analysis (SonarQube/Coverity), resolve memory leaks, eliminate vulnerabilities, and enforce code coverage >90%.' },
      { title: 'Production Cloud Deployment Challenge', desc: 'Containerize applications with Docker, configure scalable cloud infrastructure, and automate CI/CD pipeline deployments.' },
      { title: 'System Performance & Load Testing', desc: 'Execute stress and load testing to profile latency, throughput bottlenecks, and concurrency contention under peak traffic.' },
      { title: 'Live Industry Capstone Defense', desc: 'Defend architectural decisions, technical trade-offs, scalability limits, and user experience to an external industry panel.' }
    ],
    toolTitle: 'GitHub, Docker, AWS / GCP & CI/CD Pipelines',
    toolDesc: 'Automated unit testing, containerized microservices orchestration, cloud monitoring, and production deployment.',
    toolIcon: 'terminal',
    preContestTitle: '🏆 Capstone Software Pitch & Demo'
  });

  const card2A = getCard({
    cardType: 'hardware',
    trackCode: 'Track 2A',
    trackName: 'Track 02A • Semiconductor, Embedded & Hardware Capstone',
    trackTitle: 'PATH 2 (CORE HARDWARE & EMBEDDED CAPSTONE)',
    bannerImg: 'path2_hardware.png',
    bannerIcon: 'developer_board',
    priority: 'RED',
    targetGoal: 'Tier-1 Semiconductor & Core Hardware Placements • SIH • Innovation Awards',
    targetLinks: [
      { href: 'https://www.sih.gov.in', label: 'SIH Capstone' },
      { href: 'https://c2s.gov.in', label: 'C2S Advanced' }
    ],
    subjectCode: '2611ECPW801',
    subjectName: 'Project Work',
    skillGap: 'Bridging prototype breadboards and lab simulators to manufacture industrial-grade custom PCBs, reliable embedded firmware, and physical hardware prototypes validated under thermal and environmental limits.',
    activities: [
      { title: 'Hardware Specification & BoM Optimization', desc: 'Formulate a rigorous component bill-of-materials balancing lead times, automotive/industrial grades, power budgets, and unit costs.' },
      { title: 'Multi-Layer High-Speed PCB Layout Challenge', desc: 'Design a 4-to-6 layer PCB in KiCad/Altium incorporating controlled impedance routing, ground planes, and EMI/EMC compliance.' },
      { title: 'Hardware-in-the-Loop Validation Sprint', desc: 'Validate physical hardware under real-time sensor stimuli, thermal cycling, and supply voltage transients using oscilloscopes and logic analyzers.' },
      { title: 'Firmware Reliability & Fault-Tolerant Design', desc: 'Implement watchdog timers, brown-out detection, non-volatile crash logging, and robust fail-safe states.' },
      { title: 'Hardware Product Expo & Prototype Defense', desc: 'Present an enclosed, field-tested working hardware product and defend technical performance metrics before industry experts.' }
    ],
    toolTitle: 'KiCad / Altium, Logic Analyzers & Embedded Testbenches',
    toolDesc: 'High-speed PCB routing, hardware-in-the-loop debugging, signal integrity analysis, and automated test instrumentation.',
    toolIcon: 'precision_manufacturing',
    preContestTitle: '🏆 Capstone Hardware Expo & Defense'
  });

  const footer = getFooter(
    { href: 'semester-7.html', label: 'Sem VII' },
    { href: 'index.html', label: 'Home' }
  );

  const content = `${head}
  ${nav}
  ${header}

    <!-- Dual Path Comparison Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div class="flex flex-col gap-8 w-full">
        ${card1A}
      </div>
      <div class="flex flex-col gap-8 w-full">
        ${card2A}
      </div>
    </div>

  ${footer}
  `;

  fs.writeFileSync(path.join(root, 'semester_viii_ece_roadmap', 'code.html'), content);
  console.log('✓ Generated Semester VIII');
}

// ==========================================
// 8. UPDATE HOME OVERVIEW PAGE
// ==========================================
function updateHome() {
  const homePath = path.join(root, 'home_ece_roadmap', 'code.html');
  if (!fs.existsSync(homePath)) return;

  let content = fs.readFileSync(homePath, 'utf-8');

  // Replace milestone cards 1 to 8 with exact curriculum subjects
  const cardsBlock = `      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
      <!-- Semester 1 -->
      <a href="semester-1.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem I</span>
          <span class="text-[11px] font-semibold text-slate-400">1st Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester I</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Problem Solving Using C</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Electric Circuits and Electronic Devices</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Introduction to Engineering-I</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span><span class="truncate font-medium">Matrices and Applications of Calculus</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">e-Yantra • SIH • Matrices</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 2 -->
      <a href="semester-2.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem II</span>
          <span class="text-[11px] font-semibold text-slate-400">1st Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester II</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Introduction to Engineering-II</span></div>
          <div class="flex items-center gap-2 text-slate-500 italic text-xs"><span class="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span><span>Problem Identification &amp; Ideation</span></div>
          <div class="flex items-center gap-2 text-slate-500 italic text-xs"><span class="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span><span>User Validation &amp; Constraint Pitch</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">e-Yantra eYIC • SIH Innovation</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 3 -->
      <a href="semester-3.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem III</span>
          <span class="text-[11px] font-semibold text-slate-400">2nd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester III</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Control System Engineering</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Analog Integrated Circuits</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span><span class="truncate font-medium">Probability, Statistics and Stochastic Process</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">e-YRC • C2S Analog • GATE</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 4 -->
      <a href="semester-4.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem IV</span>
          <span class="text-[11px] font-semibold text-slate-400">2nd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester IV</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">VLSI Design</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Embedded C Programming</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Artificial Intelligence and Machine Learning</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span><span class="truncate font-medium">Linear Algebra</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">C2S • e-YRC • Edge-AI</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 5 -->
      <a href="semester-5.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem V</span>
          <span class="text-[11px] font-semibold text-slate-400">3rd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester V</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">ASIC Design</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Testing of VLSI Circuits</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Embedded Processor</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Digital Image Processing</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">C2S • RISC-V • ATPG • Vision</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 6 -->
      <a href="semester-6.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem VI</span>
          <span class="text-[11px] font-semibold text-slate-400">3rd Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester VI</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Deep Learning</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Robotics and Industrial Automation</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Wireless and Optical Communication</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span><span class="truncate font-medium">Basic Embedded Systems</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">Edge-AI • Robotics • SDR • Embedded</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 7 -->
      <a href="semester-7.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem VII</span>
          <span class="text-[11px] font-semibold text-slate-400">4th Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester VII</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">IoT Security</span></div>
          <div class="flex items-center gap-2 text-slate-500 italic text-xs"><span class="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span><span>Hardware Cryptography &amp; Root-of-Trust</span></div>
          <div class="flex items-center gap-2 text-slate-500 italic text-xs"><span class="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span><span>mTLS &amp; Secure Cloud Data Pipeline</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">Secure IoT • SIH IoT</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      <!-- Semester 8 -->
      <a href="semester-8.html" class="glass-card rounded-2xl p-5 block group relative overflow-hidden border border-slate-200/90 hover:border-blue-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-heading font-extrabold text-xs">Sem VIII</span>
          <span class="text-[11px] font-semibold text-slate-400">4th Year</span>
        </div>
        <h3 class="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>Semester VIII</span>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">arrow_forward</span>
        </h3>
        <div class="space-y-1.5 text-sm">
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Project Work (Software Capstone)</span></div>
          <div class="flex items-center gap-2 text-slate-800 truncate"><span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span class="truncate font-medium">Project Work (Hardware Capstone)</span></div>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium truncate max-w-[170px]">External Contests • Placements</span>
          <span class="font-bold text-blue-600 group-hover:underline">Explore →</span>
        </div>
      </a>

      </div>`;

  content = content.replace(/<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">[\s\S]*?<\/div>\s*<\/section>/, `${cardsBlock}\n    </section>`);
  
  fs.writeFileSync(homePath, content);
  console.log('✓ Updated Home Overview Page');
}

// RUN GENERATORS
buildSem2();
buildSem3();
buildSem4();
buildSem5();
buildSem6();
buildSem7();
buildSem8();
updateHome();

console.log('All Semester Roadmaps & Home Page successfully generated!');
