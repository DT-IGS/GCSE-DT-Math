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
    n: 5,
    name: "Lengths, spacing, circumference and tolerance",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can find the centre line of a component by halving its width", key: true },
      { text: "I can work out the spacing for equally spaced holes", key: true },
      { text: "I can work out the gap between the edges of two holes" },
      { text: "I can give the maximum and minimum sizes from a tolerance of plus or minus a number", key: true },
      { text: "I can work out maximum and minimum sizes from a percentage tolerance, to 2 decimal places", key: true },
      { text: "I can find the circumference of a circle using the π button", key: true },
      { text: "I can add up the lengths of material for several parts, and give the total in the units asked", key: true },
      { text: "I can show my working and round only at the end" }
    ],
    warmup: [
      { when: "Last month", q: "How do you change millimetres into centimetres?", a: "Divide by 10." },
      { when: "Last week", q: "How do you find the cost of a whole order?", a: "Work out the cost of one product, then multiply by the number of products." },
      { when: "Last lesson", q: "How do you change seconds into minutes?", a: "Divide by 60." }
    ],
    knowledge: [
      { title: "Centre lines and half distances",
        text: "A centre line runs down the middle of a component. It is the same distance from both edges, so it is <b>half</b> of the distance between those two edges.",
        steps: [
          "Decide which two edges the centre line sits between.",
          "Measure the distance between those two edges.",
          "Divide it by 2."
        ],
        example: "A strip is 120 mm long and 30 mm wide. A centre line between the two long sides is 30 ÷ 2 = 15 mm from each long side. Use the width of 30, not the length of 120.",
        source: "AQA 8552/W June 2023 Question 23.1 mark scheme and report" },
      { title: "Equally spaced holes",
        text: "If holes are spaced equally from each other <b>and</b> from each end, count the <b>gaps</b>. There is one more gap than there are holes.",
        steps: [
          "Write down the number of holes.",
          "Number of gaps = number of holes + 1.",
          "Spacing = length of the component ÷ number of gaps.",
          "This is the distance from the centre of one hole to the centre of the next."
        ],
        example: "A strip is 150 mm long with 5 holes. Gaps = 5 + 1 = 6. Spacing = 150 ÷ 6 = 25 mm. Check: the centres are at 25, 50, 75, 100 and 125 mm, and the last is 25 mm from the end.",
        source: "AQA 8552/W June 2023 Question 23.2 mark scheme and report (the length divided by 8 for seven holes)" },
      { title: "The gap between two holes",
        text: "The distance between centres is not the same as the gap between the edges of two holes. The gap is smaller by the width of one hole.",
        steps: [
          "Find the distance from centre to centre.",
          "Take away the diameter of one hole.",
          "The answer is the shortest distance between the edges."
        ],
        example: "Centres are 25 mm apart and each hole is 6 mm across. The gap between the edges is 25 − 6 = 19 mm.",
        source: "AQA 8552/W June 2023 Question 23.3 mark scheme and report" },
      { title: "Tolerance: plus or minus",
        text: "A <b>tolerance</b> is the amount a size can vary and still be acceptable. It can be given as a number, such as ±0.5 mm, or as a percentage. A part inside the limits passes. A part outside them does not.",
        steps: [
          "Maximum size = size + tolerance.",
          "Minimum size = size − tolerance.",
          "Give both the maximum and the minimum."
        ],
        example: "A hole is to be 9 mm with a tolerance of ±0.3 mm. Maximum = 9 + 0.3 = 9.3 mm. Minimum = 9 − 0.3 = 8.7 mm. A 9.4 mm hole fails.",
        source: "AQA 8552/W June 2023 Question 23.4 mark scheme and report; June 2024 Question 26.1 mark scheme (a tolerance is shown as a number or as a percentage)" },
      { title: "Percentage tolerance",
        text: "When a tolerance is a percentage, first work out how big it is in mm. It is a percentage of the size.",
        steps: [
          "Tolerance amount = size × percentage ÷ 100.",
          "Maximum = size + tolerance amount.",
          "Minimum = size − tolerance amount.",
          "Keep the full number on your calculator. Round to 2 decimal places at the end."
        ],
        example: "A part is 185 mm with a tolerance of ±0.5%. Tolerance amount = 185 × 0.5 ÷ 100 = 0.925 mm. Maximum = 185.925, which is 185.93 mm. Minimum = 184.075, which is 184.08 mm.",
        source: "AQA 8552/W June 2019 Question 22.1 mark scheme and report" },
      { title: "Circumference of a circle",
        text: "The <b>circumference</b> is the distance around a circle. Bending a length of rod or wire into a hoop uses a length of material equal to the circumference.",
        steps: [
          "Circumference = π × diameter. You can also use 2 × π × radius.",
          "Use the π button on your calculator.",
          "Round at the end, as the question asks."
        ],
        example: "A hoop has a diameter of 70 mm. C = π × 70 = 219.91... mm. To the nearest whole millimetre, that is 220 mm.",
        source: "AQA 8552/W June 2022 Question 20.1 mark scheme" },
      { title: "Total length of material",
        text: "To find the total length of material for a structure, work out the length for each type of part, multiply by how many there are, and add them all together. Then change units and round, as the question asks.",
        steps: [
          "Work out the length of one part of each type.",
          "Multiply by the number of parts of that type.",
          "Add the totals together.",
          "Change the units, such as mm to cm: divide by 10.",
          "Round at the very end."
        ],
        example: "A structure has 3 hoops of diameter 70 mm and 3 legs of 90 mm. Legs: 3 × 90 = 270 mm. Hoops: 3 × 219.91 = 659.73 mm. Total = 929.73 mm. In cm that is 92.97, so 93 cm to the nearest whole centimetre.",
        source: "AQA 8552/W June 2022 Question 20.2 mark scheme and report" }
    ],
    images: [
      { title: "Equally spaced holes", describe: "Draw a long rectangle with five circles in a row. Mark each gap with a double arrow and write the same distance on all six gaps. Write 'gaps = holes + 1' underneath." },
      { title: "A hoop and legs", describe: "Draw a circle with its diameter marked, and three straight lines beside it for legs. Label the circumference as 'π × diameter' and each leg with its length." }
    ],
    keywords: [
      { term: "Tolerance", meaning: "The amount a size can vary and still be acceptable." },
      { term: "Maximum and minimum", meaning: "The biggest and smallest sizes that are acceptable." },
      { term: "Centre line", meaning: "A line down the middle of a component, the same distance from both edges." },
      { term: "Diameter", meaning: "The distance straight across a circle, through the centre." },
      { term: "Circumference", meaning: "The distance around a circle." },
      { term: "Equally spaced", meaning: "With the same distance between each hole or part." },
      { term: "Method mark", meaning: "A mark for a correct step in your working, even if the final answer is wrong." }
    ],
    misconceptions: [
      { wrong: "The centre line is half of the length of the component.",
        right: "It is halfway across the width, between the long sides. Halving the distance between the short sides gives 60, which is a different distance.",
        source: "AQA 8552/W June 2023 report on the examination, Question 23.1" },
      { wrong: "One drill size is enough for a tolerance question.",
        right: "Give both the maximum and the minimum. Both were needed for the mark.",
        source: "AQA 8552/W June 2023 report on the examination, Question 23.4" },
      { wrong: "One decimal place is enough for a tolerance answer.",
        right: "When the question says 2 decimal places, only answers to 2 decimal places were credited.",
        source: "AQA 8552/W June 2019 report on the examination, Question 22.1" },
      { wrong: "Rounding the numbers early keeps things simple.",
        right: "Rounding too early can cost marks. Keep the full number and round once, at the end.",
        source: "AQA 8552/W June 2019 report on the examination, Question 22" },
      { wrong: "I can leave my total in millimetres.",
        right: "The question asked for centimetres, so convert a total such as 1208.34 mm before you finish.",
        source: "AQA 8552/W June 2022 report on the examination, Question 20.2" },
      { wrong: "I do not need to show any working for spacing questions.",
        right: "Working earns method marks, so show it for every spacing question.",
        source: "AQA 8552/W June 2023 report on the examination, Questions 23.2 and 23.3" }
    ],
    quiz: [
      { q: "A strip is 40 mm wide. How far is its centre line from each long side?", options: ["40 mm", "20 mm", "10 mm"], answer: 1, hint: "The centre line is halfway across the width.", see: "Centre lines and half distances" },
      { q: "Four holes are equally spaced from each other and from each end of a 100 mm strip. How far apart are the centres?", options: ["20 mm", "25 mm", "33 mm"], answer: 0, hint: "Count the gaps. There is one more gap than holes.", see: "Equally spaced holes" },
      { q: "A part is 50 mm with a tolerance of ±0.2 mm. What is the maximum size?", options: ["49.8 mm", "49.2 mm", "50.2 mm"], answer: 2, hint: "Add the tolerance to the size.", see: "Tolerance: plus or minus" },
      { q: "What is the circumference of a circle with a diameter of 20 mm, to 1 decimal place?", options: ["31.4 mm", "62.8 mm", "125.7 mm"], answer: 1, hint: "Multiply π by the diameter.", see: "Circumference of a circle" },
      { q: "A structure needs 930 mm of material. What is that in centimetres?", options: ["9.3 cm", "930 cm", "93 cm"], answer: 2, hint: "Divide millimetres by 10 to get centimetres.", see: "Total length of material" }
    ],
    gaps: {
      text: "For equally spaced holes, the number of gaps is the number of holes plus {one}. Spacing = length ÷ the number of {gaps}. Maximum size = size plus the {tolerance}. Circumference = π × {diameter}. Give lengths in the units the question asks for, such as {cm}.",
      extra: ["radius", "two", "area"]
    },
    exam: [
      {
        type: "Centre line distance",
        command: "What distance",
        asks: "find how far a centre line is from the edge of a component.",
        marks: 1, minutes: 2,
        gets: "<b>One mark</b> for halving the distance between the two edges the line sits between.",
        watch: "Use the width, the distance between the long sides, not the length. Halving the length, as in 120 ÷ 2 = 60 for the original question, finds the wrong distance.",
        source: "AQA 8552/W June 2023 Question 23.1 mark scheme and report. The question uses different numbers from the original.",
        question: "A strip of acrylic is 120 mm long and 30 mm wide. A line of holes is drilled along the centre line, the same distance from both long sides. What distance is the centre line from either long side? (1 mark)",
        plan: [
          "Decide which two edges the centre line sits between.",
          "Divide the distance between them by 2."
        ],
        hint: "Which measurement goes across, from one long side to the other?",
        find: "June 2023 Section C, Question 23.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["strip", "acrylic", "centre line", "long side", "distance"],
        answer: [
          { text: "30 ÷ 2 = 15 mm", look: ["= 15", "15 mm", "30 ÷ 2", "30/2", "30 / 2", "30÷2"], see: "Centre lines and half distances" }
        ]
      },
      {
        type: "Maximum and minimum from a tolerance",
        command: "State the maximum and minimum",
        asks: "give the biggest and smallest acceptable sizes from a tolerance of plus or minus a number.",
        marks: 1, minutes: 2,
        gets: "<b>One mark</b> for giving both the maximum and the minimum. Both are needed.",
        watch: "Giving only one of the two sizes did not earn the mark.",
        source: "AQA 8552/W June 2023 Question 23.4 mark scheme and report. The question uses different numbers from the original.",
        question: "A hole is to be drilled 9 mm in diameter with a tolerance of ±0.3 mm. State the maximum and minimum acceptable diameters. (1 mark)",
        plan: [
          "Add the tolerance to the size for the maximum.",
          "Take the tolerance from the size for the minimum."
        ],
        hint: "You need two answers for one mark.",
        find: "June 2023 Section C, Question 23.4. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["hole", "diameter", "tolerance", "maximum", "minimum"],
        answer: [
          { text: "Maximum 9.3 mm and minimum 8.7 mm", look: ["9.3", "8.7", "9 + 0.3", "9 - 0.3", "9 − 0.3"], see: "Tolerance: plus or minus" }
        ]
      },
      {
        type: "Percentage tolerance",
        command: "Calculate the maximum and minimum length",
        asks: "work out the biggest and smallest acceptable lengths from a percentage tolerance, to 2 decimal places.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for the maximum. <b>One mark</b> for the minimum. Each is given to 2 decimal places.",
        watch: "Give 2 decimal places, because only answers in that form were credited, with or without units. Do not round early.",
        source: "AQA 8552/W June 2019 Question 22.1 mark scheme and report. The question uses different numbers from the original.",
        question: "A part should be 185 mm long. The manufacturing tolerance is ±0.5%. Calculate the maximum and minimum length of the part to 2 decimal places. (2 marks)",
        plan: [
          "Work out 0.5% of 185.",
          "Add it to 185 for the maximum.",
          "Take it away from 185 for the minimum.",
          "Round both to 2 decimal places at the end."
        ],
        hint: "Find the tolerance in mm first. It is a percentage of 185.",
        find: "June 2019 Question 22.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["tolerance", "maximum", "minimum", "part", "185"],
        answer: [
          { text: "Maximum: 185 + 0.925 = 185.925, so 185.93 mm", look: ["185.93", "185.925", "0.925"], see: "Percentage tolerance" },
          { text: "Minimum: 185 − 0.925 = 184.075, so 184.08 mm", look: ["184.08", "184.075", "184.07"], see: "Percentage tolerance" }
        ]
      },
      {
        type: "Equal spacing of holes",
        command: "What is the required distance",
        asks: "work out the distance from the centre of one hole to the centre of the next, when holes are equally spaced from each other and from each end.",
        marks: 2, minutes: 3,
        gets: "<b>Two marks</b> for 150 ÷ 6 = 25 mm, with working. In the original June 2023 question a second route was also credited, taking away the combined hole widths first. Your question states the spacing, so 25 mm is the only answer here.",
        watch: "Show your working so method marks are possible. Count the gaps, not the holes.",
        source: "AQA 8552/W June 2023 Question 23.2 mark scheme and report. The question uses different numbers from the original.",
        question: "A strip is 150 mm long and has five holes, each 6 mm across. The distance from the centre of one hole to the centre of the next is the same as the distance from the centre of an end hole to the end of the strip. What is the distance from the centre of one hole to the centre of the next? Show your working. (2 marks)",
        plan: [
          "Count the gaps: holes + 1.",
          "Divide the length by the number of gaps."
        ],
        hint: "How many gaps are there if there are five holes?",
        find: "June 2023 Section C, Question 23.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["holes", "equally", "centre", "spaced", "distance"],
        answer: [
          { text: "Gaps = 5 + 1 = 6", look: ["5 + 1", "5+1", "6 gaps", "= 6", "six gaps"], see: "Equally spaced holes" },
          { text: "Spacing = 150 ÷ 6 = 25 mm", look: ["= 25", "25 mm", "150 ÷ 6", "150/6", "150 / 6", "150÷6"], see: "Equally spaced holes" }
        ]
      },
      {
        type: "Gap between holes",
        command: "Work out the shortest distance",
        asks: "find the shortest distance between the edges of two neighbouring holes.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for the centre to centre distance. <b>One mark</b> for taking away the diameter of a hole. The report says answers from either of the two routes were credited.",
        watch: "Take away one hole width, not two. Show your working so method marks are possible.",
        source: "AQA 8552/W June 2023 Question 23.3 mark scheme and report. The question uses different numbers from the original.",
        question: "Using the strip above, with holes 25 mm apart from centre to centre and each hole 6 mm across, work out the shortest distance between the edges of two neighbouring holes. Show your working. (2 marks)",
        plan: [
          "Write the distance from centre to centre.",
          "Take away the diameter of one hole."
        ],
        hint: "The edges are closer together than the centres.",
        find: "June 2023 Section C, Question 23.3. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["holes", "shortest", "edges", "distance", "circumference"],
        answer: [
          { text: "Distance between centres: 25 mm", look: ["25 mm", "= 25", "centre to centre", "centres 25"], see: "The gap between two holes" },
          { text: "Subtract one hole diameter: 25 − 6 = 19 mm", look: ["= 19", "19 mm", "25 - 6", "25-6", "25 − 6", "25−6"], see: "The gap between two holes" }
        ]
      },
      {
        type: "Length of material for a hoop",
        command: "Calculate the length of material",
        asks: "work out the length of material needed to make one hoop, to the nearest whole millimetre.",
        marks: 3, minutes: 4,
        gets: "<b>One mark</b> for the correct formula with the numbers put in. <b>One mark</b> for the unrounded value. <b>One mark</b> for rounding to the nearest whole millimetre. A correct answer with no working still earned full marks. The mark scheme accepted 3.14, 3.142 or 22/7 for π.",
        watch: "Use the π button, and round only at the end. Check you use the diameter, not the radius, in the formula you choose.",
        source: "AQA 8552/W June 2022 Question 20.1 mark scheme and report. The question uses different numbers from the original.",
        question: "A hoop is bent from a length of steel rod. The hoop has a diameter of 70 mm. Calculate the length of rod needed to make one hoop, to the nearest whole millimetre. Show your working. (3 marks)",
        plan: [
          "Write the circumference formula and put in the diameter.",
          "Work it out on your calculator.",
          "Round to the nearest whole millimetre."
        ],
        hint: "The rod bent into a hoop is as long as the circumference.",
        find: "June 2022 Section C, Question 20.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["hoop", "rod", "length", "diameter", "circumference"],
        answer: [
          { text: "Formula and substitution: C = π × 70", look: ["π × 70", "pi × 70", "π x 70", "π × d", "π d", "πd", "3.14 × 70", "3.142 × 70", "3.14 x 70", "π70"], see: "Circumference of a circle" },
          { text: "Value: 219.91... mm", look: ["219.9", "219.8", "219.7", "219.91"], see: "Circumference of a circle" },
          { text: "To the nearest whole millimetre: 220 mm", look: ["220 mm", "220mm", "= 220", "is 220"], see: "Circumference of a circle" }
        ]
      },
      {
        type: "Total length of material for a structure",
        command: "Calculate the total length of material",
        asks: "add up the lengths of material for hoops and legs, and give the total in centimetres to the nearest whole centimetre.",
        marks: 4, minutes: 5,
        gets: "<b>One mark</b> for the total length of the legs. <b>One mark</b> for the total length of the hoops. <b>One mark</b> for the total in mm. <b>One mark</b> for the total in cm, rounded as asked. A correct answer with no working earned all four marks. If none of the step values are right but the method is correct, up to 2 marks can be earned.",
        watch: "The question asked for centimetres, so finish by converting. Allow for all three hoops and all three legs.",
        source: "AQA 8552/W June 2022 Question 20.2 mark scheme and report. The question uses different numbers from the original.",
        question: "A structure has three hoops, each with a diameter of 70 mm, and three straight legs, each 90 mm long. Calculate the total length of material needed to the nearest whole centimetre. Show your working. (4 marks)",
        plan: [
          "Work out the total length of the three legs.",
          "Work out the total length of the three hoops.",
          "Add them to find the total in mm.",
          "Change to cm and round to the nearest whole centimetre."
        ],
        hint: "Find the circumference of one hoop first, then multiply.",
        find: "June 2022 Section C, Question 20.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["structure", "hoops", "legs", "total length", "centimetre"],
        answer: [
          { text: "Three legs: 3 × 90 = 270 mm", look: ["270", "3 × 90", "3x90", "3 x 90"], see: "Total length of material" },
          { text: "Three hoops: 3 × 219.91 = 659.73 mm (or 660 mm if you used the rounded hoop)", look: ["659", "660", "3 × 219", "3x219", "3 x 219", "3 × 220", "3x220"], see: "Circumference of a circle" },
          { text: "Total: 270 + 659.73 = 929.73 mm (or 930 mm)", look: ["929", "930 mm", "270 + 659", "270+659", "270 + 660", "270+660"], see: "Total length of material" },
          { text: "In cm to the nearest whole centimetre: 93 cm", look: ["93 cm", "93cm", "92.9", "= 93", "is 93"], see: "Total length of material" }
        ]
      }
    ],
    connect: [
      { q: "Link to percentages: how is working out a percentage tolerance like finding a percentage of an amount?", a: "You multiply the size by the percentage divided by 100 to find the tolerance in mm. Then you add it to, or take it from, the size." },
      { q: "Link to area and volume: when do you need to change units, as you did here with mm and cm?", a: "Whenever the answer must be in different units from the measurements. Divide mm by 10 to get cm, and keep the full number until the end." }
    ],
    links: []
  }
);
