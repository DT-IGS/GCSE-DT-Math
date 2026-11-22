/*
  SETTINGS FILE for the revision site engine (index.html).
  Each topic goes in its own file: topic1.js, topic2.js and so on.
  Keep the same shape:
  - Dates are written "YYYY-MM-DD". The timeline is worked out from them.
  - Text can use <b>bold</b>. Do not use dashes as punctuation.
  - quiz answer is the position of the right option, counting from 0.
  - Levels run from 1 mark to full marks with no gaps.
  - Never copy sources, interpretations or whole mark schemes onto the page:
    describe what earns marks in your own words and name the source.
  Open index.html?check to find problems.
*/
window.SITE = {
  id: "dtmaths8552-y11",
  subject: "Design and Technology: maths questions",
  course: "AQA GCSE Design and Technology (8552)",
  teacher: "Mrs Eyles",
  platform: "Showbie",
  version: "1.0 draft",
  checked: { by: "", on: "" },
  start: "2027-02-22",
  sessions: "one session per week, which pupils can continue for homework",
  sessionsPerWeek: 1,

  papers: [
    { name: "Unit 1 Written Paper (8552/W): maths questions", date: "2027-06-15", time: "afternoon", length: "2 hours", marks: "100 marks",
      covers: "The maths questions in all three sections. Section A (20 marks): core technical principles. Section B (30 marks): specialist technical principles. Section C (50 marks): designing and making principles." }
  ],

  holidays: [
    { name: "Easter holiday", from: "2027-03-26", to: "2027-04-11" }
  ],

  plan: [
    { topic: 1, weeks: 1 },
    { topic: 2, weeks: 1 },
    { topic: 3, weeks: 1 },
    { topic: 4, weeks: 1 },
    { topic: 5, weeks: 1 },
    { topic: 6, weeks: 1 },
    { topic: 7, weeks: 1 },
    { topic: 8, weeks: 1 },
    { topic: 9, weeks: 1 }
  ],

  resources: [],
  video: null,

  commandSource: "AQA 8552/W mark schemes and reports on the examination, 2019 to June 2025",
  commandWords: [
    { word: "Calculate", meaning: "Work out a numerical answer using a method, and write the steps. Marks go to each correct step, not only to the final answer. (for example June 2024 Section B, Question 14, 4 marks)" },
    { word: "What percentage", meaning: "Work out how big a part, a change or an amount of waste is, as a percentage of the whole or of the starting figure. (for example November 2020 Question 12.2, 2 marks)" },
    { word: "Show your working", meaning: "Write each step of your method. If your last answer is wrong, correct steps can still earn marks. (for example June 2023 Section B, Question 15, 3 marks)" },
    { word: "Give your answer to", meaning: "Round your final answer exactly as the question asks, such as the nearest whole item, the nearest penny, the nearest whole percent or 2 decimal places. (for example June 2024 Questions 14 and 17, and June 2025 Question 15)" },
    { word: "Complete", meaning: "Fill in the missing values, bars or sectors using the data given, and show your working where the question says so. (for example June 2023 Section B, Question 17, 4 marks)" }
  ],

  skills: [
    { name: "answering a calculation question",
      why: "Every maths question in the paper rewards clear steps, and a correct method earns marks even when the final answer is wrong.",
      steps: [
        "<b>Read it twice.</b> Underline what you must find and how to round the answer.",
        "<b>List the numbers</b> you are given, with their units.",
        "<b>Choose the method</b> and write it as a short sentence or formula.",
        "<b>Work it out step by step.</b> Write each step on its own line.",
        "<b>Round at the end</b>, exactly as the question asks.",
        "<b>Check</b> the units and ask: does this answer make sense?"
      ],
      example: "12 of 80 parts fail a test. What percentage fail? Method: part ÷ whole × 100. Working: 12 ÷ 80 × 100 = 15%. Check: 10% of 80 is 8 and 20% of 80 is 16. 12 is between 8 and 16, so 15% makes sense.",
      source: "Examiner reports for 8552/W, June 2019, November 2020 and June 2023 to June 2025" },
    { name: "using your calculator and rounding",
      why: "Rounding at the right moment keeps your marks safe.",
      steps: [
        "<b>Keep the full number</b> on the screen between steps. Use the Ans button to carry it forward.",
        "<b>Only round at the end.</b>",
        "<b>Follow the question's rounding.</b> If it gives no instruction, show your full working and give a sensible answer, such as 2 decimal places.",
        "<b>For whole items</b>, such as stones or tins, round up.",
        "<b>For circles</b>, use the π button on your calculator if you can. The mark schemes also accept 3.14 and 3.142, so follow the rounding the question asks for.",
        "<b>Show your working</b> so method marks are possible."
      ],
      example: "0.4 ÷ 3.7 × 100 shows 10.81081... on the calculator. Write 10.81%, because the question said 2 decimal places. Do not round 0.4 ÷ 3.7 to 0.1 first.",
      source: "Examiner reports for 8552/W, June 2019, June 2024 and June 2025; June 2019 mark scheme for the value of π" }
  ],

  topics: [
  /* Topics are in topic1.js, topic2.js and so on. */
  ]
};
