const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = path.join(__dirname, 'stitch_ece_industry_readiness_roadmap');

const hardwareUpdates = {
  'semester_iii_ece_roadmap': {
    units: ["Unit 1 – Combinational Logic", "Unit 2 – Sequential Logic", "Unit 3 – Counters & Registers", "Unit 4 – UART & Digital Interfaces", "Unit 5 – RTL Integration"],
    activities: [
      "Implement the RTL Design on an FPGA Development Board",
      "FPGA Implementation of a Traffic/Access Control FSM",
      "FPGA-Based Digital Counter and Display System",
      "FPGA-Based UART Communication with an External Device",
      "FPGA Prototype, Demonstration and Performance Testing"
    ]
  },
  'semester_iv_ece_roadmap': {
    units: ["Unit 1 – Design Verification", "Unit 2 – Assertions", "Unit 3 – Testbench & UVM", "Unit 4 – DFT & ATPG", "Unit 5 – Verification Closure"],
    activities: [
      "Validate the RTL Design Using FPGA-Based Functional Testing",
      "Hardware-Based Verification of Interface Timing and Functional Behaviour",
      "FPGA-Based Verification of the Designed Module Under Multiple Test Conditions",
      "Implement Scan/Test Access for a Small Digital Hardware Prototype",
      "Final FPGA Validation and Hardware Fault Demonstration"
    ]
  },
  'semester_v_ece_roadmap': {
    units: ["Unit 1 – Synthesis", "Unit 2 – Floorplanning", "Unit 3 – Timing Analysis", "Unit 4 – RTL-to-GDSII", "Unit 5 – Silicon Optimization"],
    activities: [
      "Implement the Synthesized Design on an FPGA for Functional Validation",
      "Analyse Placement Constraints for a Prototype Digital System",
      "Hardware Timing Validation of High-Speed Digital Interfaces",
      "Physical Prototype Validation of the Designed Digital Module",
      "Final Design Demonstration with Performance and Resource Analysis"
    ]
  }
};

Object.entries(hardwareUpdates).forEach(([folder, data]) => {
  const filePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content, { decodeEntities: false });

    // Iterate through the two sections (Path 1 and Path 2)
    const sections = $('section');
    sections.each((i, section) => {
      // Hardware is section index 1
      if (i === 1) {
        const container = $(section).find('.mt-sm.space-y-1');

        if (container.length) {
          let html = '';
          data.units.forEach((unitTitle, index) => {
            const description = data.activities[index];
            html += `
              <div class="flex flex-col bg-surface-container p-2 rounded border border-surface-variant">
                <span class="font-label-caps text-[10px] text-outline">${unitTitle}</span>
                <span class="font-body-sm text-on-surface">${description}</span>
              </div>
            `;
          });
          container.html(html);
          console.log(`Updated Hardware activities in ${folder}`);
        }
      }
    });

    fs.writeFileSync(filePath, $.html());
  }
});
