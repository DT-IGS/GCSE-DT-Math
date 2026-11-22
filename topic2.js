/*
  TOPIC FILE. Topic files are numbered topic1.js, topic2.js, topic3.js with no gaps.
  Field rules: knowledge cards go simplest first, each with an example.
  quiz answer is the position of the right option, counting from 0.
  see is the exact title of a knowledge card. look lists short words or word
  stems that a correct answer would contain. Levels run from 1 mark up to full
  marks with no gaps. exam questions go from smallest to biggest marks.
*/
SITE.topics.push(
  {
    n: 2,
    name: "Area, volume, density and unit conversion",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can find the area of a rectangle by multiplying length by width", key: true },
      { text: "I can find the volume of a cuboid by multiplying length, width and depth", key: true },
      { text: "I can change mm to cm, and mm³ to cm³", key: true },
      { text: "I can work out how many whole slabs or tiles cover an area, and round up", key: true },
      { text: "I can find internal dimensions when the walls have thickness", key: true },
      { text: "I can find the volume of material in a part with a hole through it", key: true },
      { text: "I can use density to find a mass, and change grams into kilograms", key: true },
      { text: "I can use the π button on my calculator and only round at the end" },
      { text: "I can write the correct units with my answer" }
    ],
    warmup: [
      { when: "Last month", q: "How many millimetres are there in one centimetre?", a: "10 mm." },
      { when: "Last week", q: "How do you work out a percentage waste?", a: "Waste ÷ total × 100." },
      { when: "Last lesson", q: "You need 47.5 slabs. How many do you buy?", a: "48. Round up to a whole slab." }
    ],
    knowledge: [
      { title: "Start here: area and volume",
        text: "<b>Area</b> is the flat space inside a shape. <b>Volume</b> is the space inside a solid. For a rectangle, area = length × width. For a cuboid, volume = length × width × depth. Area is measured in square units such as mm². Volume is measured in cubic units such as mm³.",
        example: "A card tag is 150 mm by 90 mm. Area = 150 × 90 = 13 500 mm². A block is 40 mm by 60 mm by 90 mm. Volume = 40 × 60 × 90 = 216 000 mm³.",
        source: "AQA 8552/W June 2019 Question 10 and June 2024 Question 06" },
      { title: "Changing units",
        text: "Check the units in the question and the units you must give. A volume changes by a bigger number than a length does.",
        steps: [
          "Length: mm to cm, divide by 10. So 600 mm is 60 cm.",
          "Volume: mm³ to cm³, divide by 1000.",
          "Area: mm² to cm², divide by 100.",
          "Mass: g to kg, divide by 1000.",
          "You can change each length first and then multiply, or multiply first and then change the units. Both routes earn the marks."
        ],
        example: "A tray is 500 mm by 300 mm by 80 mm inside. Route 1: 50 × 30 × 8 = 12 000 cm³. Route 2: 500 × 300 × 80 = 12 000 000 mm³, then ÷ 1000 = 12 000 cm³. The answers match.",
        source: "AQA 8552/W November 2021 Question 20.1 mark scheme" },
      { title: "How many slabs or tiles?",
        text: "Slabs, tiles and boards come as whole pieces. Find the area one piece covers, then see how many pieces fit into the total area.",
        steps: [
          "Area of one piece = length × width.",
          "Divide the area to cover by the area of one piece.",
          "If the answer is not a whole number, round up.",
          "Show each step."
        ],
        example: "A patio is 15 m². Each slab is 0.45 m by 0.45 m. One slab = 0.45 × 0.45 = 0.2025 m². Then 15 ÷ 0.2025 = 74.07... so you need 75 slabs. Even 74.07 rounds up, because you cannot buy part of a slab.",
        source: "AQA 8552/W June 2024 Question 14 mark scheme and report" },
      { title: "Internal dimensions and wall thickness",
        text: "Boxes and bases have walls. The inside is smaller than the outside, because the wall takes up space on <b>both</b> sides.",
        steps: [
          "Double the wall thickness.",
          "Take it away from the overall length. Do the same for the overall width.",
          "Multiply the internal length by the internal width to get the internal area.",
          "Write the units with your answer, such as mm² or cm²."
        ],
        example: "A box base is 250 mm by 250 mm overall and its walls are 10 mm thick. Double the wall: 2 × 10 = 20 mm. Internal side = 250 − 20 = 230 mm. Internal area = 230 × 230 = 52 900 mm², which is 529 cm². Another route is to take the four wall strips away from the whole base.",
        source: "AQA 8552/W November 2021 Question 22.1 mark scheme" },
      { title: "Volume with a hole",
        text: "To find the volume of material in a part with a hole right through it, work out the volume as if it were solid, then take away the volume of the hole. The hole is a cylinder.",
        steps: [
          "Volume of the solid = length × width × thickness.",
          "Radius of the hole = half of its diameter.",
          "Volume of the hole = π × radius × radius × thickness. Use the π button.",
          "Material = solid volume − hole volume.",
          "Round at the end, as the question asks."
        ],
        example: "A plate is 80 mm by 60 mm and 5 mm thick, with a hole 20 mm across. Solid = 80 × 60 × 5 = 24 000 mm³. Radius = 10 mm. Hole = π × 10 × 10 × 5 = 1570.796... mm³. Material = 24 000 − 1570.796 = 22 429.2, so 22 429 mm³ to the nearest mm³.",
        source: "AQA 8552/W June 2019 Question 27 mark scheme and report" },
      { title: "Density and mass",
        text: "<b>Density</b> tells you how much mass fits in each cm³. Multiply the density by the volume to find the mass.",
        steps: [
          "Make sure the volume is in cm³.",
          "Mass in grams = volume × density, when density is in g per cm³.",
          "Divide by 1000 to change grams into kilograms.",
          "Round as the question asks."
        ],
        example: "A hollow base holds 18 000 cm³ of sand with a density of 1.6 g per cm³. 18 000 × 1.6 = 28 800 g. 28 800 ÷ 1000 = 28.8 kg. To the nearest kilogram, that is 29 kg.",
        source: "AQA 8552/W November 2021 Question 20.2 mark scheme" }
    ],
    images: [
      { title: "Internal base area", describe: "Draw a square for the overall base. Draw a smaller square inside it. Label the wall thickness on two opposite sides, the overall side and the internal side. Write: internal = overall − 2 × wall." },
      { title: "Volume with a hole", describe: "Draw a flat plate in 3D with a round hole through it. Label the length, width, thickness, diameter and radius. Next to it write: volume = solid − hole." }
    ],
    keywords: [
      { term: "Area", meaning: "The flat space inside a shape, measured in square units such as mm²." },
      { term: "Volume", meaning: "The space inside a solid, measured in cubic units such as mm³." },
      { term: "Density", meaning: "How much mass there is in each cm³ of a material." },
      { term: "Mass", meaning: "How much matter something contains, measured in grams or kilograms." },
      { term: "Internal dimensions", meaning: "The measurements inside a box, once the thickness of the walls is taken away." },
      { term: "Diameter and radius", meaning: "The diameter goes right across a circle. The radius is half of it." },
      { term: "Cuboid", meaning: "A solid with six rectangular faces, such as a block or a box." },
      { term: "Round up", meaning: "Move to the next whole number, so you have enough." }
    ],
    misconceptions: [
      { wrong: "To find the volume of material with a hole, work out the area of the hole.",
        right: "A hole has a volume. Multiply the area of the hole by the thickness of the part, then take it away from the solid volume.",
        source: "AQA 8552/W June 2019 report on the examination, Question 27" },
      { wrong: "I do not need to round the final answer if my working is right.",
        right: "Round as the question asks. If the answer to the nearest whole unit is not given, only the working can earn credit.",
        source: "AQA 8552/W June 2019 report on the examination, Question 27" },
      { wrong: "When counting slabs, I can leave the answer as a decimal.",
        right: "Round up to a whole slab. A mark is for showing the rounded up number.",
        source: "AQA 8552/W June 2024 report on the examination, Question 14" },
      { wrong: "If my last step is wrong, the whole question is lost.",
        right: "Good working earned method marks even when the final answer was wrong, so show every step.",
        source: "AQA 8552/W June 2024 report on the examination, Question 14" },
      { wrong: "An area answer does not need units.",
        right: "One mark in the internal base area question was kept for the correct units, such as mm² or cm².",
        source: "AQA 8552/W November 2021 Question 22.1 mark scheme" }
    ],
    quiz: [
      { q: "What is the volume of a block 20 mm by 30 mm by 40 mm?", options: ["2 400 mm³", "90 mm³", "24 000 mm³"], answer: 2, hint: "Multiply all three dimensions.", see: "Start here: area and volume" },
      { q: "What is 54 000 mm³ in cm³?", options: ["54 cm³", "540 cm³", "5 400 cm³"], answer: 0, hint: "A volume changes by dividing by 1000.", see: "Changing units" },
      { q: "A box is 200 mm across overall and its walls are 10 mm thick. How wide is the inside?", options: ["190 mm", "180 mm", "200 mm"], answer: 1, hint: "The wall takes space on both sides.", see: "Internal dimensions and wall thickness" },
      { q: "Sand has a density of 2 g per cm³. What is the mass of 3 000 cm³ of it?", options: ["6 g", "600 kg", "6 kg"], answer: 2, hint: "Multiply the density by the volume, then change grams into kilograms.", see: "Density and mass" },
      { q: "To find the volume of material removed by a round hole, what do you multiply the area of the hole by?", options: ["Its diameter", "The thickness of the part", "Its perimeter"], answer: 1, hint: "Area gives a flat shape. Volume needs a third dimension.", see: "Volume with a hole" }
    ],
    gaps: {
      text: "The volume of a cuboid is length × width × {depth}. To change mm³ into cm³, divide by {1000}. If a box has walls, take the thickness off {twice}. Mass = density × {volume}. To cover an area with slabs, divide by the area of one slab and round {up}.",
      extra: ["perimeter", "100", "once"]
    },
    exam: [
      {
        type: "Area or volume of a simple shape",
        command: "What is the volume",
        asks: "multiply the dimensions of a rectangle or cuboid to find its area or volume.",
        marks: 1, minutes: 2,
        gets: "<b>One mark</b> for the correct answer. In the exam this was a multiple choice question, with options close together, so work it out before you choose.",
        watch: "Multiply all three numbers for a volume, and two for an area. Check the number of digits and the units: mm² for area, mm³ for volume.",
        source: "AQA 8552/W June 2019 Question 10 (area of a sheet) and June 2024 Question 06 (volume of a shape). The question uses different numbers from the original.",
        question: "A wooden block measures 40 mm by 60 mm by 90 mm. What is its volume in mm³? (1 mark)",
        plan: [
          "Write down the three dimensions.",
          "Multiply them together.",
          "Write the units with a small 3."
        ],
        hint: "A volume needs all three dimensions.",
        find: "June 2024 Section A, Question 06 and June 2019 Section A, Question 10. The papers and mark schemes are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["block", "volume", "wooden", "mm"],
        answer: [
          { text: "40 × 60 × 90 = 216 000 mm³", look: ["216000", "216 000", "216,000", "40 × 60 × 90", "40x60x90", "40 x 60 x 90"], see: "Start here: area and volume" }
        ]
      },
      {
        type: "Internal volume in cm³",
        command: "Calculate",
        asks: "work out the volume of a hollow shape and give it in cm³.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for changing units. One correct conversion is enough. <b>One mark</b> for multiplying length × width × depth. There are two routes: change each length to cm first, then multiply, or multiply in mm and divide the volume by 1000.",
        watch: "The question asks for cm³, so a volume left in mm³ is not enough. Show your conversion line, because one correct conversion earned a mark.",
        source: "AQA 8552/W November 2021 Question 20.1 mark scheme. The question uses different numbers from the original.",
        question: "A tray has internal dimensions of 500 mm long, 300 mm wide and 80 mm deep. Calculate its internal volume in cm³. (2 marks)",
        plan: [
          "Change each length to cm, or plan to divide by 1000 at the end.",
          "Multiply length × width × depth.",
          "Write the answer in cm³."
        ],
        hint: "Which units does the question want in the answer?",
        find: "November 2021 series, Question 20.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["tray", "internal", "volume", "cm"],
        answer: [
          { text: "Change to cm: 50 cm, 30 cm and 8 cm (or divide the final volume by 1000)", look: ["50 cm", "30 cm", "8 cm", "÷ 1000", "÷1000", "/ 1000", "/1000"], see: "Changing units" },
          { text: "Multiply: 50 × 30 × 8 = 12 000 cm³", look: ["12000", "12 000", "12,000", "50 × 30 × 8", "50x30x8", "50 x 30 x 8"], see: "Start here: area and volume" }
        ]
      },
      {
        type: "Volume with a hole",
        command: "Calculate",
        asks: "work out the volume of material in a part with a hole right through it.",
        marks: 3, minutes: 4,
        gets: "<b>One mark</b> for the volume of the whole plate as if it were solid. <b>One mark</b> for the volume of the hole. <b>One mark</b> for taking one from the other, and giving the answer to the nearest mm³.",
        watch: "The hole needs its volume, not just its area, so multiply by the thickness. Early rounding was only accepted when the final answer still came out right, so keep the full value. Different values of π were accepted, and the calculator's π button is the most accurate.",
        source: "AQA 8552/W June 2019 Question 27 mark scheme and report. The question uses different numbers from the original.",
        question: "A flat plate is 80 mm long, 60 mm wide and 5 mm thick. A round hole, 20 mm across, goes right through it. Calculate the volume of material in the plate. Show your working and give your answer to the nearest mm³. (3 marks)",
        plan: [
          "Find the volume of the plate as if it had no hole.",
          "Find the radius, then the volume of the hole.",
          "Take the hole away from the solid.",
          "Round to the nearest mm³."
        ],
        hint: "The hole is a short cylinder as thick as the plate.",
        find: "June 2019 Question 27. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["plate", "hole", "volume", "material", "thick"],
        answer: [
          { text: "Solid plate: 80 × 60 × 5 = 24 000 mm³", look: ["24000", "24 000", "24,000", "80 × 60 × 5", "80x60x5", "80 x 60 x 5"], see: "Volume with a hole" },
          { text: "Hole: π × 10 × 10 × 5 = 1570.8 mm³ (the radius is half of 20)", look: ["1570", "1571", "π × 10", "pi × 10", "π x 10", "3.14 × 10", "3.142 × 10", "10 × 10 × 5", "10x10x5"], see: "Volume with a hole" },
          { text: "Material: 24 000 − 1570.8 = 22 429 mm³", look: ["22429", "22 429", "22,429", "22430", "22 430"], see: "Volume with a hole" }
        ]
      },
      {
        type: "Mass from density",
        command: "Calculate",
        asks: "use a volume and a density to find a mass, and change it into kilograms.",
        marks: 3, minutes: 4,
        gets: "<b>One mark</b> for volume × density, giving the mass in grams. <b>One mark</b> for changing grams into kilograms. <b>One mark</b> for rounding to the nearest whole kilogram. If you used different values earlier but your method is correct, all three marks are still possible.",
        watch: "Check the units of density, for example g per cm³, so that your volume is in cm³. Round at the very end.",
        source: "AQA 8552/W November 2021 Question 20.2 mark scheme. The question uses different numbers from the original.",
        question: "A hollow base has an internal volume of 18 000 cm³. It is filled with sand of density 1.6 g per cm³. Calculate the mass of sand needed. Give your answer to the nearest whole kg. (3 marks)",
        plan: [
          "Multiply the volume by the density to get grams.",
          "Divide by 1000 to get kilograms.",
          "Round to the nearest whole kilogram."
        ],
        hint: "Grams to kilograms means dividing by 1000.",
        find: "November 2021 series, Question 20.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["sand", "density", "mass", "kg", "base"],
        answer: [
          { text: "Mass in grams: 18 000 × 1.6 = 28 800 g", look: ["28800", "28 800", "28,800", "18000 × 1.6", "18 000 × 1.6", "18000x1.6", "18 000 x 1.6"], see: "Density and mass" },
          { text: "Change to kg: 28 800 ÷ 1000 = 28.8 kg", look: ["28.8", "28 800 ÷ 1000", "28800 ÷ 1000", "28800/1000", "28 800 / 1000"], see: "Changing units" },
          { text: "Nearest whole kilogram: 29 kg", look: ["29 kg", "29kg", "= 29", "is 29"], see: "Density and mass" }
        ]
      },
      {
        type: "Number of slabs",
        command: "Calculate",
        asks: "work out how many whole slabs are needed to cover an area.",
        marks: 4, minutes: 5,
        gets: "<b>One mark</b> for the area of one slab. <b>One mark</b> for dividing the patio area by it. <b>One mark</b> for the answer before rounding. <b>One mark</b> for rounding up to whole slabs. If the final answer is correct, full marks are awarded.",
        watch: "A mark is for rounding up to a whole slab. Good working earned part credit even when the final answer was wrong.",
        source: "AQA 8552/W June 2024 Question 14 mark scheme and report. The question uses different numbers from the original.",
        question: "A garden patio has an area of 15 m². The slabs measure 0.45 m by 0.45 m. Calculate how many slabs are needed in total. Show your working and give a whole number of slabs. (4 marks)",
        plan: [
          "Find the area of one slab.",
          "Divide the area of the patio by the area of one slab.",
          "Write the full calculator answer.",
          "Round up to a whole slab."
        ],
        hint: "You cannot buy part of a slab, so which way do you round?",
        find: "June 2024 Section B, Question 14. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["patio", "slabs", "paving", "area", "needed"],
        answer: [
          { text: "Area of one slab: 0.45 × 0.45 = 0.2025 m²", look: ["0.2025", "0.45 × 0.45", "0.45x0.45", "0.45 x 0.45"], see: "How many slabs or tiles?" },
          { text: "Divide: 15 ÷ 0.2025", look: ["15 ÷ 0.2025", "15/0.2025", "15 / 0.2025", "÷ 0.2025", "÷0.2025"], see: "How many slabs or tiles?" },
          { text: "Answer before rounding: 74.07...", look: ["74.0", "74.1", "74.07"], see: "How many slabs or tiles?" },
          { text: "Round up to 75 whole slabs", look: ["75 slabs", "75 whole", "= 75", "is 75", "round up to 75"], see: "How many slabs or tiles?" }
        ]
      },
      {
        type: "Internal base area",
        command: "Calculate",
        asks: "work out the inside area of a box base, once the wall thickness is taken away, and give units.",
        marks: 4, minutes: 5,
        gets: "<b>One mark</b> for doubling the wall thickness. <b>One mark</b> for taking it from the overall side. <b>One mark</b> for multiplying to find the area. <b>One mark</b> for the correct units. Other methods are accepted, such as taking the four wall strips away from the whole base.",
        watch: "Do not forget the units: one mark is kept for them. Take the thickness away from both sides of each length.",
        source: "AQA 8552/W November 2021 Question 22.1 mark scheme. The question uses different numbers from the original.",
        question: "The overall base of a box measures 250 mm by 250 mm. The sides of the box are 10 mm thick. Calculate the internal base area. Give your answer with units and show your working. (4 marks)",
        plan: [
          "Double the wall thickness.",
          "Take it from the overall side.",
          "Multiply the internal length by the internal width.",
          "Write the units, mm² or cm²."
        ],
        hint: "The wall is on both sides of the base, not just one.",
        find: "November 2021 series, Question 22.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["box", "internal", "base", "area", "thick"],
        answer: [
          { text: "Double the wall thickness: 2 × 10 = 20 mm", look: ["2 × 10", "2x10", "2 x 10", "= 20 mm", "20 mm", "both sides", "double", "twice"], see: "Internal dimensions and wall thickness" },
          { text: "Internal side: 250 − 20 = 230 mm", look: ["230", "250 - 20", "250-20", "250 − 20", "250−20"], see: "Internal dimensions and wall thickness" },
          { text: "Internal area: 230 × 230 = 52 900", look: ["52900", "52 900", "52,900", "230 × 230", "230x230", "230 x 230"], see: "Start here: area and volume" },
          { text: "Units: mm² (or 529 cm²)", look: ["mm²", "mm2", "cm²", "cm2", "square mm", "square cm"], see: "Changing units" }
        ]
      }
    ],
    connect: [
      { q: "Link to percentages: you have worked out the area of a sheet and the area of the pieces cut from it. How do you find the percentage waste?", a: "Area of the sheet minus the area of the pieces gives the waste. Then divide the waste by the area of the sheet and multiply by 100." },
      { q: "Link to percentages: why does rounding up to whole slabs change how much material is wasted?", a: "Buying whole slabs means you buy more than the exact amount, so some is left over. Work out the percentage waste using the whole number you buy." }
    ],
    links: []
  }
);
