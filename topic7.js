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
    n: 7,
    name: "Ratio",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can explain what a ratio is and write one as a : b" },
      { text: "I can write a ratio in the order the question asks", key: true },
      { text: "I can simplify a ratio", key: true },
      { text: "I can work out how many times bigger one length is than another", key: true },
      { text: "I can find the area of a whole shape and of the shapes inside it", key: true },
      { text: "I can subtract areas to find what is left, then compare the two areas as a ratio", key: true },
      { text: "I can show my working so I can earn method marks" }
    ],
    warmup: [
      { when: "Last month", q: "How do you find the area of a rectangle?", a: "Length × width." },
      { when: "Last week", q: "How do you change mm² into cm²?", a: "Divide by 100." },
      { when: "Last lesson", q: "How do you find the other angle in a right-angled triangle, if you know one of the two smaller angles?", a: "Take it away from 90°." }
    ],
    knowledge: [
      { title: "Start here: what a ratio is",
        text: "A <b>ratio</b> compares two amounts. It is written with a colon, like 3 : 1, and said 'three to one'. The first number belongs to the first amount in the question, and the second number belongs to the second amount.",
        example: "A paint mix has 3 parts blue and 1 part white. The ratio of blue to white is 3 : 1.",
        source: "AQA 8552/W November 2021 Question 22.2 mark scheme (a ratio of how many times one height divides into another)" },
      { title: "Writing ratios in the right order",
        text: "The order of the numbers must match the order of the words in the question. If a question asks for 'the new compared to the old', write the new first.",
        steps: [
          "Underline the two things being compared.",
          "Write the first thing first.",
          "Check your answer against the words in the question."
        ],
        example: "A new box front is 240 mm high and the old one is 80 mm. 'The new compared to the old' gives 240 : 80, which simplifies to 3 : 1. Written the other way, 1 : 3, it would compare the old with the new, so check the order against the words in the question.",
        source: "AQA 8552/W November 2021 Question 22.2 mark scheme" },
      { title: "Simplifying a ratio",
        text: "To write a ratio in its <b>simplest form</b>, divide both numbers by the same number. Keep going until no number divides into both.",
        steps: [
          "Find a number that divides exactly into both sides.",
          "Divide both sides by it.",
          "Check that no larger number still divides into both."
        ],
        example: "12 : 18. Divide both by 6 to get 2 : 3. For 500 : 4500, divide both by 500 to get 1 : 9.",
        source: "AQA 8552/W June 2025 Question 22 mark scheme (a ratio of 2400 and 4800 simplified to 1 : 2)" },
      { title: "How many times bigger?",
        text: "To compare a new length with an old one, divide the new length by the old length. The answer tells you how many times bigger it is.",
        steps: [
          "Write both lengths in the same units.",
          "Divide the new length by the old length.",
          "Write the ratio with the new first: your answer : 1."
        ],
        example: "The old box is 80 mm high and the new one is 240 mm. 240 ÷ 80 = 3, so the ratio of new to old is 3 : 1.",
        source: "AQA 8552/W November 2021 Question 22.2 mark scheme (300 ÷ 75 = 4, so 4 : 1, and 1 : 4 earned one mark)" },
      { title: "Ratio of areas",
        text: "To find the ratio of two colours on a surface, work out the area of each colour first. A small shape sits inside a bigger one, so the second colour is the whole area <b>minus</b> the small shapes.",
        steps: [
          "Area of the whole surface = length × width.",
          "Area of one small shape.",
          "Area of all the small shapes = one area × the number of shapes.",
          "Area of the other colour = whole area − area of the small shapes.",
          "Write the two areas as a ratio.",
          "Simplify the ratio."
        ],
        example: "A board is 100 mm by 50 mm and has five blue squares, each 10 mm by 10 mm. Whole = 5000 mm². One square = 100 mm². Five squares = 500 mm². Green = 5000 − 500 = 4500 mm². Ratio of blue to green = 500 : 4500 = 1 : 9.",
        source: "AQA 8552/W June 2025 Question 22 mark scheme and report" },
      { title: "Common trap: the whole or the leftover?",
        text: "When the question asks for the ratio between two colours, compare the area of one colour with the area of the <b>other</b> colour. Do not compare the whole surface with one colour.",
        steps: [
          "Name the two colours.",
          "Work out the area of each colour on its own.",
          "Check that the two areas add up to the whole surface.",
          "Make the ratio from the two colour areas."
        ],
        example: "In the board above, the whole is 5000 mm² and the blue is 500 mm². Dividing 5000 ÷ 500 gives 10 : 1. That compares the whole with one colour, so it is not the ratio of the two colours. The right ratio compares blue with green: 1 : 9.",
        source: "AQA 8552/W June 2025 report on the examination, Question 22" }
    ],
    images: [
      { title: "Areas in a surface", describe: "Draw a large rectangle with five small squares inside it. Shade the squares. Write the whole area on the outside, the area of one square on one square, and the green area as 'whole minus squares'. Draw an arrow to the ratio underneath." },
      { title: "How many times bigger", describe: "Draw two boxes side by side, one short and one three times as tall. Mark both heights. Write 'new ÷ old' under the pair and the ratio '3 : 1' beneath it." }
    ],
    keywords: [
      { term: "Ratio", meaning: "A way of comparing two amounts, written with a colon, such as 3 : 1." },
      { term: "Simplest form", meaning: "A ratio that has been divided as far as it can go, so no number divides into both parts." },
      { term: "Proportion", meaning: "How big one part is compared with another, or with the whole." },
      { term: "Area", meaning: "The flat space inside a shape, measured in square units such as mm²." },
      { term: "Method mark", meaning: "A mark for a correct step in your working, even if the final answer is wrong." }
    ],
    misconceptions: [
      { wrong: "To compare two colours, I divide the whole area by the area of the small shapes.",
        right: "Find the area of each colour, then compare the two colours. In the original question, dividing the total area (7200 mm²) by the area of the six squares (2400 mm²) gave 3 : 1, which is not the ratio of the two colours.",
        source: "AQA 8552/W June 2025 report on the examination, Question 22" },
      { wrong: "A ratio can be written either way round.",
        right: "Write it in the order the question asks. In the heights question, 4 : 1 earned full marks and 1 : 4 earned half marks. In the colours question, either order of the two colours was accepted.",
        source: "AQA 8552/W November 2021 Question 22.2 and June 2025 Question 22 mark schemes" },
      { wrong: "I do not need to show working for a ratio.",
        right: "A correct ratio with no working still earned full marks, but each step of working earned a mark if the ratio was wrong. Students could gain some of the six marks even with a wrong final answer.",
        source: "AQA 8552/W June 2025 Question 22 mark scheme and report" },
      { wrong: "I can leave my ratio as two big numbers.",
        right: "The question asked for the simplest form, so divide both sides by the same number. 2400 : 4800 becomes 1 : 2.",
        source: "AQA 8552/W June 2025 Question 22 mark scheme" }
    ],
    quiz: [
      { q: "What is 12 : 18 in its simplest form?", options: ["6 : 9", "2 : 3", "3 : 2"], answer: 1, hint: "Divide both numbers by 6.", see: "Simplifying a ratio" },
      { q: "An old box is 50 mm high and the new one is 200 mm high. What is the ratio of new to old?", options: ["4 : 1", "1 : 4", "2 : 1"], answer: 0, hint: "Divide the new height by the old height.", see: "How many times bigger?" },
      { q: "A panel has an area of 1000 mm². Blue shapes take up 200 mm². What is the area of the other colour?", options: ["200 mm²", "1200 mm²", "800 mm²"], answer: 2, hint: "Take the blue away from the whole.", see: "Ratio of areas" },
      { q: "Blue is 200 mm² and the other colour is 800 mm². What is the ratio of blue to the other colour in its simplest form?", options: ["4 : 1", "1 : 4", "2 : 8"], answer: 1, hint: "Divide both numbers by 200.", see: "Ratio of areas" },
      { q: "To find the ratio between two colours on a panel, what should you compare?", options: ["The whole area with one colour", "The two colours added together", "The area of one colour with the area of the other"], answer: 2, hint: "The ratio is between the two colours.", see: "Common trap: the whole or the leftover?" }
    ],
    gaps: {
      text: "A ratio compares two amounts and is written with a {colon}. To simplify it, divide both sides by the same {number}. To compare a new length with the old one, divide the new length by the {original}. The area of the leftover colour is the {total} area minus the shapes inside it.",
      extra: ["add", "perimeter", "radius"]
    },
    exam: [
      {
        type: "Ratio of two lengths",
        command: "Give the ratio",
        asks: "work out the ratio of a new length to an original length, in simplest form.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for dividing the new length by the original length. <b>One mark</b> for the ratio in its simplest form, in the right order. A correct ratio with no working earned full marks. The ratio the other way round earned one mark.",
        watch: "Put the new height first, because the question asks for new to existing. The other order earned one of the two marks, so check it against the words in the question.",
        source: "AQA 8552/W November 2021 Question 22.2 mark scheme. The question uses different numbers from the original.",
        question: "A storage box is to be enlarged. The front of the existing box is 80 mm high. The front of the new box is 240 mm high. Give the ratio of the height of the new box to the height of the existing box. Show your working and give your answer in its simplest form. (2 marks)",
        plan: [
          "Divide the new height by the existing height.",
          "Write the ratio with the new first.",
          "Check that it is in its simplest form."
        ],
        hint: "How many times does 80 go into 240?",
        find: "November 2021 series, Question 22.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["box", "height", "ratio", "new", "existing"],
        answer: [
          { text: "240 ÷ 80 = 3", look: ["240 ÷ 80", "240/80", "240 / 80", "240÷80", "3 times", "three times"], see: "How many times bigger?" },
          { text: "The ratio is 3 : 1", look: ["3:1", "3 : 1", "3 to 1"], see: "Writing ratios in the right order" }
        ]
      },
      {
        type: "Ratio of two colours in a surface design",
        command: "Calculate the ratio",
        asks: "work out the ratio between the two colours on a decorative surface, from the dimensions given, in simplest form.",
        marks: 6, minutes: 7,
        gets: "<b>One mark</b> each for: the area of the whole surface; the area of one small shape; the total area of the small shapes; the area of the other colour by subtracting; the two areas set out as a ratio; and the ratio in its simplest form. A correct ratio with no working earned full marks. The mark scheme accepted the ratio either way round for this question.",
        watch: "Compare the area of one colour with the area of the other colour. Work out the second colour by subtracting the small shapes from the whole area. The whole area is not one of the two colours.",
        source: "AQA 8552/W June 2025 Question 22 mark scheme and report. The question uses different numbers from the original.",
        question: "A decorative panel is a green rectangle, 100 mm by 50 mm. It has five identical blue squares on it, each 10 mm by 10 mm. Calculate the ratio between the two colours. Give your answer in its simplest form. You must show your working. (6 marks)",
        plan: [
          "Find the area of the whole panel.",
          "Find the area of one blue square, then of all five.",
          "Take the blue away from the whole to find the green area.",
          "Write the blue and green areas as a ratio.",
          "Simplify the ratio."
        ],
        hint: "How much of the panel is green once the blue squares are taken away?",
        find: "June 2025 Section C, Question 22. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["panel", "ratio", "blue", "green", "squares"],
        answer: [
          { text: "Whole panel: 100 × 50 = 5000 mm²", look: ["5000", "100 × 50", "100x50", "100 x 50", "100×50", "50 × 100", "50x100"], see: "Ratio of areas" },
          { text: "One blue square: 10 × 10 = 100 mm²", look: ["10 × 10", "10x10", "10 x 10", "10×10"], see: "Ratio of areas" },
          { text: "All five blue squares: 100 × 5 = 500 mm²", look: ["100 × 5", "5 × 100", "5x100", "100x5", "5 x 100", "100 x 5", "5×100", "100×5"], see: "Ratio of areas" },
          { text: "Green: 5000 − 500 = 4500 mm²", look: ["4500", "5000 - 500", "5000 − 500", "5000-500", "5000−500"], see: "Ratio of areas" },
          { text: "Ratio of blue to green: 500 : 4500", look: ["500 : 4500", "500:4500", "500/4500", "500 / 4500", "4500 : 500", "4500:500", "4500/500"], see: "Common trap: the whole or the leftover?" },
          { text: "Simplest form: 1 : 9 (or 9 : 1)", look: ["1:9", "1 : 9", "9:1", "9 : 1"], see: "Simplifying a ratio" }
        ]
      }
    ],
    connect: [
      { q: "Link to area and volume: why do you need to find areas before you can find a ratio of two colours?", a: "A ratio compares amounts. For colours on a surface, the amount is the area of each colour, so you need length × width for each shape." },
      { q: "Link to percentages: how is a ratio of two parts like a percentage of a whole?", a: "Both compare parts of a total. A percentage compares a part with the whole out of 100. A ratio compares one part with another part." }
    ],
    links: []
  }
);
