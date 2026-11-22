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
    n: 6,
    name: "Angles and geometry",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can use angles in a straight line, a full turn and a triangle" },
      { text: "I can find the side of a regular hexagon from the distance across it", key: true },
      { text: "I can find the interior angle of a regular shape", key: true },
      { text: "I can name the opposite, adjacent and longest sides of a right-angled triangle" },
      { text: "I can use tan and tan⁻¹ to find an angle", key: true },
      { text: "I can find the other angle in a right-angled triangle by taking one angle from 90", key: true },
      { text: "I can draw a triangle accurately and measure an angle with a protractor", key: true },
      { text: "I can set my calculator to degrees and round to the nearest whole degree" },
      { text: "I can show my working so I can earn method marks" }
    ],
    warmup: [
      { when: "Last month", q: "How do you work out a percentage waste?", a: "Waste ÷ total × 100." },
      { when: "Last week", q: "How do you find the maximum size from a tolerance of plus or minus a number?", a: "Add the tolerance to the size." },
      { when: "Last lesson", q: "What is the formula for the circumference of a circle?", a: "π × diameter." }
    ],
    knowledge: [
      { title: "Start here: angles you can count on",
        text: "Some angle facts are always true. Angles on a straight line add up to 180°. Angles in a full turn add up to 360°. The three angles inside any triangle add up to 180°.",
        example: "A triangle has angles of 90° and 40°. The third angle is 180 − 90 − 40 = 50°." },
      { title: "Regular hexagon: finding a side",
        text: "A regular hexagon has six equal sides and six equal angles. It can be split into six equal triangles that meet at the centre. The distance from one corner straight across to the opposite corner is <b>twice</b> the length of one side.",
        steps: [
          "Find the distance from corner to opposite corner.",
          "Divide it by 2.",
          "That is the length of one side."
        ],
        example: "A hexagonal template measures 60 mm from one corner to the opposite corner. One side = 60 ÷ 2 = 30 mm.",
        source: "AQA 8552/W June 2022 Question 16.2 mark scheme (a distance of 90 mm gave a side of 45)" },
      { title: "Interior angle of a regular shape",
        text: "The <b>interior angle</b> is the angle inside a corner of a shape. For a regular shape, split it into equal triangles that meet at the centre.",
        steps: [
          "Angle at the centre = 360 ÷ number of sides.",
          "The two other angles in each triangle are equal. Each is (180 − the centre angle) ÷ 2.",
          "Interior angle = two of those angles added together."
        ],
        example: "A regular hexagon has 6 sides. Centre angle = 360 ÷ 6 = 60°. Each other angle = (180 − 60) ÷ 2 = 60°. Interior angle = 60 + 60 = 120°. A regular octagon: 360 ÷ 8 = 45°, then (180 − 45) ÷ 2 = 67.5°, so the interior angle is 135°.",
        source: "AQA 8552/W June 2022 Question 16.3 mark scheme (an answer of 120 for two marks, with 60 in the working for one mark)" },
      { title: "Right-angled triangles: opposite and adjacent",
        text: "In a right-angled triangle, the longest side is the <b>hypotenuse</b>. It faces the right angle. For the angle you are interested in, the <b>opposite</b> side faces it and the <b>adjacent</b> side is next to it, but is not the hypotenuse.",
        steps: [
          "Mark the angle you are interested in.",
          "Find the longest side. Call it the hypotenuse.",
          "The side facing your angle is the opposite.",
          "The remaining side next to your angle is the adjacent."
        ],
        example: "A roof piece is a right-angled triangle with a base of 120 mm and a height of 50 mm. For the angle at the end of the base, the height (50 mm) is opposite and the base (120 mm) is adjacent.",
        source: "AQA 8552/W November 2020 Question 24.2 mark scheme (tan = opposite ÷ adjacent)" },
      { title: "Finding an angle with tan",
        text: "The tan of an angle is the opposite side divided by the adjacent side. To find the angle from the two sides, use <b>tan⁻¹</b> on your calculator. Check that your calculator is set to degrees.",
        steps: [
          "Write tan angle = opposite ÷ adjacent.",
          "Put in the numbers.",
          "Work out the division and keep the full value.",
          "Press tan⁻¹ of your answer to find the angle.",
          "Round at the end, for example to the nearest whole degree."
        ],
        example: "Opposite = 40 mm and adjacent = 60 mm. tan angle = 40 ÷ 60 = 0.6667. tan⁻¹ 0.6667 = 33.69°, which is 34° to the nearest degree.",
        source: "AQA 8552/W November 2020 Question 24.2 mark scheme" },
      { title: "Finding the other angle",
        text: "The two angles that are not the right angle add up to 90°. If you find one of them, you can find the other by taking it away from 90.",
        steps: [
          "Find one of the angles with tan⁻¹.",
          "Subtract it from 90 to get the other angle.",
          "Or put the sides the other way round, adjacent ÷ opposite, and use tan⁻¹ to find the other angle directly.",
          "Check which angle the question wants."
        ],
        example: "An angle is 33.69° in a right-angled triangle. The other angle = 90 − 33.69 = 56.31°, which is 56° to the nearest degree. The second method: tan angle = 60 ÷ 40 = 1.5, and tan⁻¹ 1.5 = 56.31°.",
        source: "AQA 8552/W November 2020 Question 24.2 mark scheme (both routes shown)" },
      { title: "Drawing and measuring an angle",
        text: "The mark scheme also rewarded drawing an accurate triangle and measuring the angle. You need a ruler and a protractor, both listed in the materials for the paper.",
        steps: [
          "Write down the two lengths you need.",
          "Draw a right angle and mark off the two lengths, so they join at the right angle.",
          "Join the ends to make the triangle. The drawing must be accurate.",
          "Measure the angle with your protractor.",
          "If you need the other angle, subtract your measurement from 90."
        ],
        example: "Draw a base of 60 mm and a height of 40 mm at a right angle. Join the ends. Measure the angle at the end of the base. It should be about 34°. The angle at the top is about 56°.",
        source: "AQA 8552/W November 2020 Question 24.2 mark scheme (drawn method: accuracy of the drawing, and a measurement in the right range)" }
    ],
    images: [
      { title: "A regular hexagon", describe: "Draw a regular hexagon and join its centre to all six corners. Mark the six equal triangles. Label one side and the distance across the hexagon from one corner to the opposite corner. Mark the 60° angle at the centre and the 120° interior angle." },
      { title: "Right-angled triangle labels", describe: "Draw a right-angled triangle. Mark one of the other angles with a curve. Label the hypotenuse, the opposite side and the adjacent side. Write 'tan angle = opposite ÷ adjacent' beside it." }
    ],
    keywords: [
      { term: "Interior angle", meaning: "The angle inside a corner of a shape." },
      { term: "Regular", meaning: "A shape with all sides equal and all angles equal." },
      { term: "Hypotenuse", meaning: "The longest side of a right-angled triangle, opposite the right angle." },
      { term: "Opposite", meaning: "The side that faces the angle you are looking at." },
      { term: "Adjacent", meaning: "The side next to the angle you are looking at, that is not the hypotenuse." },
      { term: "Tan", meaning: "A calculator button. Tan of an angle is opposite divided by adjacent." },
      { term: "Protractor", meaning: "A tool for measuring angles in degrees." }
    ],
    misconceptions: [
      { wrong: "I must draw a triangle to get marks for an angle question.",
        right: "A trigonometry method and an accurate drawing method both earned full marks. Use the one you can do accurately.",
        source: "AQA 8552/W November 2020 report on the examination, Question 24.2" },
      { wrong: "If I cannot reach the final answer, I should leave out my working.",
        right: "Seeing 60 in the working earned one mark in the interior angle question. Show every step.",
        source: "AQA 8552/W June 2022 report on the examination, Question 16.3" },
      { wrong: "For a one mark answer, I lose the mark if I forget the units.",
        right: "In the hexagon side question, the mark was for the number, not the units. It is still good practice to write the units.",
        source: "AQA 8552/W June 2022 report on the examination, Question 16.2" },
      { wrong: "My drawing only needs to be roughly right.",
        right: "One mark was for the accuracy of the drawing, and the measured angle had to be in the accepted range.",
        source: "AQA 8552/W November 2020 Question 24.2 mark scheme" },
      { wrong: "tan⁻¹ always gives the angle the question wants.",
        right: "Check which angle you have found. One route finds the other angle and subtracts it from 90. The other puts the sides the other way round.",
        source: "AQA 8552/W November 2020 Question 24.2 mark scheme" }
    ],
    quiz: [
      { q: "A regular hexagon measures 100 mm from one corner to the opposite corner. How long is one side?", options: ["25 mm", "50 mm", "100 mm"], answer: 1, hint: "The distance across is twice one side.", see: "Regular hexagon: finding a side" },
      { q: "What is the interior angle of a regular hexagon?", options: ["120°", "60°", "90°"], answer: 0, hint: "Start with 360 ÷ 6.", see: "Interior angle of a regular shape" },
      { q: "In a right-angled triangle, which side faces the angle you are looking at?", options: ["Adjacent", "Hypotenuse", "Opposite"], answer: 2, hint: "It is across from the angle.", see: "Right-angled triangles: opposite and adjacent" },
      { q: "Which is the correct formula for finding an angle?", options: ["tan angle = adjacent ÷ opposite", "tan angle = opposite ÷ adjacent", "tan angle = opposite × adjacent"], answer: 1, hint: "Opposite goes on the top.", see: "Finding an angle with tan" },
      { q: "One angle in a right-angled triangle is 40°. What is the other angle that is not the right angle?", options: ["140°", "40°", "50°"], answer: 2, hint: "The two smaller angles add up to 90°.", see: "Finding the other angle" }
    ],
    gaps: {
      text: "The angles inside a triangle add up to {180} degrees. In a right-angled triangle, tan of an angle = {opposite} ÷ adjacent. To find the angle, use {tan⁻¹} on your calculator, set to {degrees}. The two smaller angles in a right-angled triangle add up to {90}.",
      extra: ["radians", "hypotenuse", "360"]
    },
    exam: [
      {
        type: "Side of a regular hexagon",
        command: "Work out the length of one side",
        asks: "find the length of one side of a regular hexagon from the distance across it.",
        marks: 1, minutes: 2,
        gets: "<b>One mark</b> for the correct number. The mark scheme marked the number, not the units.",
        watch: "The distance across is twice one side. Still write the units, mm, in your answer.",
        source: "AQA 8552/W June 2022 Question 16.2 mark scheme and report. The question uses different numbers from the original.",
        question: "A manufacturer needs a regular hexagonal template. The distance between two opposite corners of the template must be 80 mm. Work out the length of one side of the hexagon. (1 mark)",
        plan: [
          "Divide the distance across by 2."
        ],
        hint: "Opposite corners are twice a side apart.",
        find: "June 2022 Section B, Question 16.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["hexagon", "template", "side", "opposite corners", "length"],
        answer: [
          { text: "80 ÷ 2 = 40 mm", look: ["40 mm", "= 40", "80 ÷ 2", "80/2", "80 / 2", "80÷2"], see: "Regular hexagon: finding a side" }
        ]
      },
      {
        type: "Interior angle of a regular hexagon",
        command: "Calculate the interior angle",
        asks: "work out the angle inside one corner of a regular hexagon.",
        marks: 2, minutes: 3,
        gets: "<b>Two marks</b> for 120°. <b>One mark</b> if you only show 60 in your working. The mark scheme gave full marks for the correct answer, even with no working.",
        watch: "The angle at the centre is 60°, not the angle inside the corner. Add the two equal angles of the triangle to find 120°.",
        source: "AQA 8552/W June 2022 Question 16.3 mark scheme and report. The question uses different numbers from the original.",
        question: "The template in the question above is a regular hexagon. Calculate the interior angle at one of its corners. (2 marks)",
        plan: [
          "Work out the angle at the centre: 360 ÷ 6.",
          "Work out the other two angles in the triangle.",
          "Add them together to find the interior angle."
        ],
        hint: "Split the hexagon into six triangles that meet at the centre.",
        find: "June 2022 Section B, Question 16.3. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["hexagon", "interior", "angle", "regular", "corner"],
        answer: [
          { text: "Angle at the centre: 360 ÷ 6 = 60°", look: ["= 60", "60°", "60 degrees", "360 ÷ 6", "360/6", "360 / 6", "360÷6"], see: "Interior angle of a regular shape" },
          { text: "Interior angle: 60° + 60° = 120°", look: ["120°", "120 degrees", "= 120", "60 + 60", "60+60"], see: "Interior angle of a regular shape" }
        ]
      },
      {
        type: "Angle in a right-angled triangle",
        command: "Calculate the size of the angle",
        asks: "find an angle in a right-angled triangle from two lengths, to the nearest whole degree, using trigonometry or an accurate drawing.",
        marks: 4, minutes: 5,
        gets: "<b>Trigonometry route:</b> one mark for the two sides seen, one for the tan formula, one for putting the numbers in, and one for the angle after subtracting from 90 if needed, rounded. <b>Drawn route:</b> one mark for the sides, one for drawing the triangle, one for the accuracy of the drawing, and one for measuring and finding the angle. A small range was accepted for the final angle.",
        watch: "Check which angle you have found. If you used the other angle, subtract it from 90. A mixture of calculation and drawing responses all earned full marks in the original. Set your calculator to degrees.",
        source: "AQA 8552/W November 2020 Question 24.2 mark scheme and report. The question uses different numbers from the original.",
        question: "Two roof pieces fit together on a model shed. The end of each piece is a right-angled triangle with a base of 120 mm and a height of 50 mm. Angle Y is at the end of the base. Angle X is the other angle that is not the right angle. Calculate the size of angle X to the nearest whole degree. Show your working or construction. (4 marks)",
        plan: [
          "Write down the two sides you will use.",
          "Write the tan formula and put in the numbers.",
          "Use tan⁻¹ to find angle Y.",
          "Subtract angle Y from 90 to find angle X, and round."
        ],
        hint: "The two angles that are not the right angle add up to 90°.",
        find: "November 2020 series (the paper is dated 22 May 2020), Question 24.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["roof", "angle", "triangle", "base", "height"],
        answer: [
          { text: "The sides are the height 50 mm and the base 120 mm", look: ["50 mm and 120", "120 mm and 50", "height 50", "base 120", "opposite = 50", "adjacent = 120", "opposite is 50", "adjacent is 120", "opposite 50", "adjacent 120"], see: "Right-angled triangles: opposite and adjacent" },
          { text: "tan Y = opposite ÷ adjacent", look: ["tan y = opp", "tan x = opp", "tan = opp", "tan angle = opp", "opp/adj", "opp ÷ adj", "opposite ÷ adjacent", "opposite/adjacent", "opposite / adjacent"], see: "Finding an angle with tan" },
          { text: "tan Y = 50 ÷ 120 = 0.4167", look: ["50 ÷ 120", "50/120", "50 / 120", "0.416", "0.417"], see: "Finding an angle with tan" },
          { text: "Y = tan⁻¹ 0.4167 = 22.62°. X = 90 − 22.62 = 67.38°, so 67°", look: ["22.6", "67.3", "67°", "= 67", "is 67", "90 - 22", "90 − 22", "90-22", "90−22"], see: "Finding the other angle" }
        ]
      }
    ],
    connect: [
      { q: "Link to lengths and tolerance: you cut a part to an angle. Why does an accurate angle matter, as an accurate length does?", a: "Parts only fit together if they are within the accepted size. An angle that is wrong by a few degrees leaves gaps, in the same way that a length outside its tolerance does." },
      { q: "Link to circles: how is the π button used differently from tan⁻¹?", a: "π is a number you use in a formula for the circumference or area of a circle. tan⁻¹ turns a ratio of two sides into an angle, with the calculator set to degrees." }
    ],
    links: []
  }
);
