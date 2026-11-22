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
    n: 9,
    name: "Levers and gear trains",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can explain what a fixed pivot is and how a lever moves" },
      { text: "I can work out how far and which way a part moves when the distances from the pivot are equal", key: true },
      { text: "I can work out how far a point moves when the distances from the pivot are different", key: true },
      { text: "I can say which way each gear in a train turns", key: true },
      { text: "I can say which gear turns faster or slower, using the number of teeth", key: true },
      { text: "I can describe the direction and speed of one named gear", key: true },
      { text: "I can use the words clockwise and anticlockwise correctly" }
    ],
    warmup: [
      { when: "Last month", q: "How do you find the maximum size from a tolerance of plus or minus a number?", a: "Add the tolerance to the size." },
      { when: "Last week", q: "How do you find the ratio of a new length to an old length?", a: "Divide the new length by the old length." },
      { when: "Last lesson", q: "How many degrees stand for 1% on a pie chart?", a: "3.6 degrees." }
    ],
    knowledge: [
      { title: "Start here: levers and pivots",
        text: "A <b>lever</b> is a bar that turns about a point called a <b>fixed pivot</b>. When one end moves up, the other end moves down, and both ends turn the same way round the pivot. The further a point is from the pivot, the further it moves.",
        example: "A see-saw has a fixed pivot in the middle. When one end goes down, the other end goes up.",
        source: "AQA 8552/W June 2024 Question 04 and June 2025 Question 06 (levers with a fixed pivot)" },
      { title: "Levers: equal distances",
        text: "If two points are the <b>same distance</b> from the fixed pivot, they move the <b>same distance</b>, but in <b>opposite directions</b>.",
        steps: [
          "Check that the two distances from the pivot are equal.",
          "The second part moves the same distance as the first.",
          "It moves in the opposite direction."
        ],
        example: "Part A of a linkage moves 15 mm to the right, and both parts are the same distance from the fixed pivot. Part B moves 15 mm to the left.",
        source: "AQA 8552/W June 2025 Question 06 mark scheme (a part moving 20 mm to the right gave 20 mm to the left)" },
      { title: "Levers: unequal distances",
        text: "If the two points are <b>different</b> distances from the fixed pivot, the one closer to the pivot moves less. The movement is in the same ratio as the distances.",
        steps: [
          "Write the distance of each point from the pivot.",
          "Divide the second distance by the first distance.",
          "Multiply the movement of the first point by that number."
        ],
        example: "Point A is 60 mm from the pivot and point B is 15 mm from it. 15 ÷ 60 = 0.25. If A moves 24 mm, B moves 24 × 0.25 = 6 mm.",
        source: "AQA 8552/W June 2024 Question 04 mark scheme (80 mm and 20 mm from the pivot, point A moving 40 mm, gave 10 mm)" },
      { title: "Gear trains: direction",
        text: "In a <b>gear train</b>, gears that mesh together turn in <b>opposite</b> directions. In a line of gears, each gear turns the opposite way to the one before it. Use the words clockwise and anticlockwise.",
        steps: [
          "Start with the gear whose direction you know.",
          "The next gear turns the opposite way.",
          "Keep going along the train, switching each time.",
          "Stop at the gear the question asks about."
        ],
        example: "Gears A, B and C mesh in a line. A turns clockwise, so B turns anticlockwise, and C turns clockwise. A and C turn the same way.",
        source: "AQA 8552/W June 2023 Question 14 mark scheme and report (gear C turns clockwise)" },
      { title: "Gear trains: speed",
        text: "The number of teeth decides how fast a gear turns. A gear with <b>more teeth</b> turns <b>more slowly</b> than a gear with fewer teeth. The <b>gear ratio</b> compares the teeth on two gears.",
        steps: [
          "Count the teeth on each gear, or compare their sizes.",
          "The gear with the most teeth turns the slowest.",
          "Gear ratio = teeth on the driven gear ÷ teeth on the driver gear.",
          "The driven gear turns at the speed of the driver ÷ the gear ratio."
        ],
        example: "A driver gear has 20 teeth and a driven gear has 40 teeth. Gear ratio = 40 ÷ 20 = 2, or 2 : 1. The driven gear turns at half the speed of the driver.",
        source: "AQA 8552/W June 2023 Question 14 mark scheme (the gear with the most teeth turns the slowest, slower than gear A, with a 19 : 26 ratio)" },
      { title: "Describing gear motion",
        text: "When a question asks about <b>one named gear</b>, give its direction and its speed. Refer clearly to that gear. Compare its speed with another gear.",
        steps: [
          "Name the gear: 'Gear C ...'.",
          "Give its direction with clockwise or anticlockwise.",
          "Give its speed: faster or slower, compared with another gear, and say why, for example 'it has the most teeth'."
        ],
        example: "'Gear C turns clockwise. It turns more slowly than gear A, because it has more teeth.'",
        source: "AQA 8552/W June 2023 Question 14 mark scheme and report (only points about gear C were marked, and the words clockwise and anticlockwise were expected)" }
    ],
    images: [
      { title: "A lever with a fixed pivot", describe: "Draw a straight bar with a fixed pivot as a small circle. Mark point A on the left and point B on the right at different distances from the pivot. Draw an arrow at A and a shorter arrow at B. Label each distance in mm." },
      { title: "A gear train", describe: "Draw three gears meshing in a line, with A smallest and C largest. Draw a curved arrow on A, then on B, then on C, switching the direction each time. Write the number of teeth inside each gear." }
    ],
    keywords: [
      { term: "Lever", meaning: "A bar that turns about a fixed point." },
      { term: "Fixed pivot", meaning: "The point a lever turns around." },
      { term: "Gear train", meaning: "Gears that mesh together in a line." },
      { term: "Mesh", meaning: "When the teeth of two gears fit together." },
      { term: "Clockwise", meaning: "Turning the same way as the hands of a clock." },
      { term: "Anticlockwise", meaning: "Turning the opposite way to the hands of a clock." },
      { term: "Gear ratio", meaning: "A comparison of the teeth on two gears, which tells you how their speeds differ." }
    ],
    misconceptions: [
      { wrong: "I can say that gear C turns left.",
        right: "Use clockwise or anticlockwise. They are the words that earn the mark for a turning direction.",
        source: "AQA 8552/W June 2023 report on the examination, Question 14" },
      { wrong: "All of the gears in a train turn the same way.",
        right: "Gears that mesh turn in opposite directions, so the direction switches at every gear along the train.",
        source: "AQA 8552/W June 2023 report on the examination, Question 14" },
      { wrong: "I can describe all of the gears in my answer.",
        right: "The marks are for points about the named gear, so keep your answer on that gear.",
        source: "AQA 8552/W June 2023 Question 14 mark scheme and report" },
      { wrong: "A bigger gear turns faster.",
        right: "The gear with the most teeth turns the slowest. Use the gear ratio to see how much slower.",
        source: "AQA 8552/W June 2023 Question 14 mark scheme and report" }
    ],
    quiz: [
      { q: "Two gears mesh. One turns clockwise. Which way does the other turn?", options: ["Clockwise", "Anticlockwise", "It does not turn"], answer: 1, hint: "Meshing gears turn in opposite directions.", see: "Gear trains: direction" },
      { q: "Gears A, B and C mesh in a line. A turns clockwise. Which way does C turn?", options: ["Anticlockwise", "It depends on the teeth", "Clockwise"], answer: 2, hint: "Switch direction at each gear: A, then B, then C.", see: "Gear trains: direction" },
      { q: "Three meshing gears have 12, 20 and 30 teeth. Which turns the slowest?", options: ["The 30 tooth gear", "The 12 tooth gear", "They all turn at the same speed"], answer: 0, hint: "More teeth means slower.", see: "Gear trains: speed" },
      { q: "A lever point 40 mm from the pivot moves 20 mm. Another point is 10 mm from the pivot on the other side. How far does it move?", options: ["80 mm", "5 mm", "10 mm"], answer: 1, hint: "It is four times closer to the pivot.", see: "Levers: unequal distances" },
      { q: "Part A of a linkage moves 30 mm to the right. Both parts are the same distance from the fixed pivot. What does Part B do?", options: ["Moves 30 mm to the right", "Moves 60 mm to the left", "Moves 30 mm to the left"], answer: 2, hint: "Equal distances mean equal movement, in the opposite direction.", see: "Levers: equal distances" }
    ],
    gaps: {
      text: "A lever turns about a fixed {pivot}. A point closer to the pivot moves {less}. Gears that mesh turn in {opposite} directions. A gear with more teeth turns {slower}. When you describe a gear, give its {direction} and its speed.",
      extra: ["faster", "same", "weight"]
    },
    exam: [
      {
        type: "Distance moved on a lever",
        command: "How far does point B move",
        asks: "work out how far a point on a lever moves, when its distance from the fixed pivot is different from the first point's distance.",
        marks: 1, minutes: 2,
        gets: "<b>One mark</b> for the correct distance. In the exam this was a multiple choice question.",
        watch: "The point closer to the pivot moves less. Work out how many times closer it is, then use the same number for the movement.",
        source: "AQA 8552/W June 2024 Question 04 mark scheme. The question uses different numbers from the original.",
        question: "A lever turns about a fixed pivot. Point A is 60 mm from the pivot and point B is 15 mm from the pivot, on the other side. If point A of the lever moves 24 mm clockwise, how far does point B move clockwise? (1 mark)",
        plan: [
          "Divide the distance of B by the distance of A.",
          "Multiply the movement of A by that number."
        ],
        hint: "Point B is four times closer to the pivot than point A.",
        find: "June 2024 Section A, Question 04. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["lever", "pivot", "point", "moves", "distance"],
        answer: [
          { text: "15 ÷ 60 = 0.25, and 24 × 0.25 = 6 mm", look: ["= 6 mm", "= 6mm", "is 6 mm", "moves 6 mm", "moves 6mm", "24 × 0.25", "24x0.25", "24 x 0.25", "24 ÷ 4", "24/4", "24 / 4", "15 ÷ 60", "15/60", "15 / 60"], see: "Levers: unequal distances" }
        ]
      },
      {
        type: "Direction and distance of a linkage",
        command: "How far and in what direction does Part B move",
        asks: "give the distance and direction a part moves, when the distances from the fixed pivot are equal.",
        marks: 1, minutes: 2,
        gets: "<b>One mark</b> for the correct distance and direction together. In the exam this was a multiple choice question.",
        watch: "Equal distances mean equal movement. Parts on opposite sides of a fixed pivot move in opposite directions.",
        source: "AQA 8552/W June 2025 Question 06 mark scheme. The question uses different numbers from the original.",
        question: "Part A of a linkage moves 25 mm to the right. The distances between the fixed pivot and the moving pivots are the same. How far and in what direction does Part B move? (1 mark)",
        plan: [
          "Decide how far: equal distances mean equal movement.",
          "Decide which way: opposite to Part A."
        ],
        hint: "Which way does the other end of a see-saw move?",
        find: "June 2025 Section A, Question 06. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["linkage", "part", "pivot", "moves", "direction"],
        answer: [
          { text: "Part B moves 25 mm to the left", look: ["25 mm to the left", "25 mm left", "25mm left", "left 25", "moves left", "opposite"], see: "Levers: equal distances" }
        ]
      },
      {
        type: "Gear train direction and speed",
        command: "Describe the direction and speed",
        asks: "describe the direction and the speed of one named gear in a gear train.",
        marks: 2, minutes: 3,
        gets: "<b>Two marks</b> for any two correct points about the direction and the speed of the named gear. <b>One mark</b> for one correct point. Only points about the named gear were marked. Accepted points included that it turns slowest because it has the most teeth, that it turns slower than the first gear, that it takes longer to turn, and a ratio of the teeth.",
        watch: "Use clockwise or anticlockwise for the direction. Refer to the named gear, and compare its speed with another gear.",
        source: "AQA 8552/W June 2023 Question 14 mark scheme and report. The question uses different numbers from the original.",
        question: "Three gears, A, B and C, mesh in a line. Gear A has 15 teeth, gear B has 20 teeth and gear C has 30 teeth. Gear A turns anticlockwise. Describe the direction and speed of movement of gear C. (2 marks)",
        plan: [
          "Work out the direction of B, then of C.",
          "Compare the teeth to decide the speed of C.",
          "Write about gear C only."
        ],
        hint: "Switch direction at each gear. Which gear has the most teeth?",
        find: "June 2023 Section A, Question 14. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["gear", "gear c", "direction", "speed", "teeth"],
        answer: [
          { text: "Gear C turns anticlockwise: A anticlockwise, B clockwise, C anticlockwise", look: ["c turns anticlockwise", "c anticlockwise", "c is anticlockwise", "c goes anticlockwise", "c turns anti-clockwise", "c anti-clockwise", "same direction as a", "same way as a"], see: "Gear trains: direction" },
          { text: "Gear C turns slower, because it has the most teeth: 30, compared with 15 on gear A, so it turns at half the speed of A", look: ["c turns slower", "c is slower", "c slower", "more slowly", "slowest", "slower than a", "slower than gear a", "half the speed", "half speed", "takes longer"], see: "Gear trains: speed" }
        ]
      }
    ],
    connect: [
      { q: "Link to ratio: how is a gear ratio like the ratios you simplified earlier?", a: "It compares two numbers, the teeth on two gears, and you can simplify it in the same way. For example 20 : 40 simplifies to 1 : 2." },
      { q: "Link to angles: how are the clockwise and anticlockwise turns of a lever like the angles you measured?", a: "Both are turns about a point. A lever turns through an angle about its fixed pivot, and the further a point is from the pivot, the further it moves." }
    ],
    links: []
  }
);
