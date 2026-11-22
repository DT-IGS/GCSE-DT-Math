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
    n: 1,
    name: "Percentages, waste and material efficiency",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can explain what a percentage means and turn it into a decimal" },
      { text: "I can find a percentage of an amount, such as a discount", key: true },
      { text: "I can work out one number as a percentage of another", key: true },
      { text: "I can work out the percentage waste when material is cut", key: true },
      { text: "I can work out a percentage increase or decrease", key: true },
      { text: "I can round up when I need whole items, such as paving stones or tins", key: true },
      { text: "I can use my calculator, keep the full number and only round at the end" },
      { text: "I can round my answer exactly as the question asks" },
      { text: "I can show my working so I can earn method marks", key: true }
    ],
    warmup: [
      { when: "Last month", q: "How many millimetres are there in one metre?", a: "1000 mm." },
      { when: "Last week", q: "What is 10% of 80?", a: "8." },
      { when: "Last lesson", q: "What is the area of a rectangle 30 mm long and 20 mm wide?", a: "600 mm²." }
    ],
    knowledge: [
      { title: "Start here: what a percentage is",
        text: "A <b>percentage</b> means a number out of 100. 50% is 50 out of 100, which is one half. To turn a percentage into a decimal, divide by 100. So 25% is 0.25.",
        example: "Picture 100 sheets of card. If 20 are scratched, 20% are scratched. If you have 200 sheets and 40 are scratched, it is still 20%, because 40 out of 200 is the same share as 20 out of 100." },
      { title: "Finding a percentage of an amount",
        steps: [
          "Change the percentage into a decimal by dividing by 100. So 15% becomes 0.15.",
          "Multiply the amount by the decimal.",
          "For a <b>discount</b>, take your answer away from the original price.",
          "Round only at the end. If the answer is money and the question asks, round to the nearest penny."
        ],
        example: "A pack of hinges costs £8.40 and has a 15% discount. 8.40 × 0.15 = £1.26. Then 8.40 − 1.26 = £7.14.",
        source: "AQA 8552/W June 2024 report on the examination, Question 17 (rounding to the nearest penny)" },
      { title: "One number as a percentage of another",
        text: "Put the <b>part</b> on top and the <b>whole</b> underneath. Divide, then multiply by 100.",
        steps: [
          "Decide which number is the part and which is the whole.",
          "Divide the part by the whole.",
          "Multiply the answer by 100.",
          "Write the % sign."
        ],
        example: "18 of 120 test pieces bend too far. 18 ÷ 120 = 0.15. 0.15 × 100 = 15%.",
        source: "AQA 8552/W mark schemes, November 2020 Question 12.2 and June 2025 Question 15" },
      { title: "Percentage waste",
        text: "<b>Waste</b> is the material left over after the pieces are cut. Percentage waste compares the waste with the <b>total</b> you started with. It works for lengths and for areas.",
        steps: [
          "Work out the total you started with.",
          "Work out how much the pieces use.",
          "Waste = total − used.",
          "Percentage waste = waste ÷ total × 100.",
          "Round at the end."
        ],
        example: "A sheet is 1000 mm by 500 mm, so its area is 500 000 mm². Twenty pieces, each 200 mm by 100 mm, use 20 × 20 000 = 400 000 mm². Waste = 500 000 − 400 000 = 100 000 mm². Then 100 000 ÷ 500 000 × 100 = 20%.",
        source: "AQA 8552/W mark schemes, June 2019 Question 22.2 and November 2020 Question 16.3" },
      { title: "Percentage increase and decrease",
        text: "A percentage change compares the change with the <b>original value</b>, which is the figure you started with.",
        steps: [
          "Find the change: the bigger number take away the smaller number.",
          "Divide the change by the <b>original</b> value.",
          "Multiply by 100.",
          "Say whether it is an increase or a decrease."
        ],
        example: "Orders rise from 40 to 50. Change = 10. 10 ÷ 40 = 0.25, so a 25% increase. Orders fall from 50 to 40. Change = 10. 10 ÷ 50 = 0.2, so a 20% decrease. The change is the same, but the starting figure is different.",
        source: "AQA 8552/W mark schemes, November 2020 Question 12.2 and June 2025 Question 15 (which also accepts finding the new value as a share of the old one, then taking it from 100)" },
      { title: "Whole items: round up",
        text: "Some answers must be whole numbers, such as paving stones, tins or boards. If your calculation gives part of an item, you still have to buy the whole one. So <b>round up</b>, even when the decimal part is small.",
        steps: [
          "Work out how many items you need.",
          "If it is not a whole number, round up.",
          "Use the rounded up number in any later step."
        ],
        example: "A patio is 9.5 m². Each slab covers 0.2 m². 9.5 ÷ 0.2 = 47.5, so you need 48 slabs. For tins: you need 5.7 tins of paint, so you buy 6. Unused paint = 6 − 5.7 = 0.3 of a tin. Then 0.3 ÷ 6 × 100 = 5% is left unused.",
        source: "AQA 8552/W June 2024 report, Question 14, and November 2021 mark scheme, Question 13" },
      { title: "Calculator rules and showing your working",
        text: "Your calculator keeps far more digits than you write down. Let it. Marks are given for method, so show each step.",
        steps: [
          "Keep the full number on the screen. Use the Ans button to carry it into the next step.",
          "Only round at the end.",
          "Follow the question: nearest whole item, nearest penny, nearest whole percent or 2 decimal places. If it gives no instruction, show your full working and give a sensible answer.",
          "Write each step of your method, with units.",
          "Check that your answer makes sense."
        ],
        example: "0.4 ÷ 3.7 × 100 shows 10.81081... on the calculator. You write 10.81%. You do not round 0.4 ÷ 3.7 to 0.1 first, because that would give 10%, which is not the same.",
        source: "AQA 8552/W reports on the examination, June 2019, November 2020, June 2023, June 2024 and June 2025" }
    ],
    images: [
      { title: "Waste on a sheet", describe: "Draw a large rectangle for a sheet. Draw smaller rectangles inside it for the pieces and shade the leftover space. Label the total area, the used area and the waste. Write the percentage waste formula underneath." },
      { title: "The percentage method", describe: "Draw three boxes joined by arrows: 'part ÷ whole', then '× 100', then '%'. Under the first box write an example with your own numbers." }
    ],
    keywords: [
      { term: "Percentage", meaning: "A number out of 100." },
      { term: "Original value", meaning: "The figure you start with. A percentage change is worked out from it." },
      { term: "Increase", meaning: "The amount a value has grown." },
      { term: "Decrease", meaning: "The amount a value has fallen." },
      { term: "Waste", meaning: "Material left over after pieces are cut." },
      { term: "Discount", meaning: "An amount taken off a price, often given as a percentage." },
      { term: "Method mark", meaning: "A mark for a correct step in your working, even if the final answer is wrong." },
      { term: "Round up", meaning: "Move to the next whole number, so you have enough." },
      { term: "Decimal places", meaning: "The number of digits after the decimal point." }
    ],
    misconceptions: [
      { wrong: "If my final answer is wrong, I get no marks.",
        right: "Marks are given for each correct step. Show your working, because a wrong final answer can still earn method marks.",
        source: "Examiner reports for 8552/W, June 2019, November 2020, June 2023, June 2024 and June 2025" },
      { wrong: "Rounding at every step keeps the numbers tidy.",
        right: "Rounding too early can cost marks. Keep the full number and round once, at the end, to keep every mark.",
        source: "AQA 8552/W June 2019 report on the examination, Question 22" },
      { wrong: "One decimal place is close enough.",
        right: "Give exactly the number of decimal places the question asks for, because only answers in that form earned the marks.",
        source: "AQA 8552/W June 2019 report on the examination, Question 22" },
      { wrong: "When counting stones, I should round to the nearest whole number.",
        right: "Round up, so you have enough. The mark for rounding up to a whole stone is only given when you show it.",
        source: "AQA 8552/W June 2024 report on the examination, Question 14" },
      { wrong: "For money, rounding to the nearest 10p is fine.",
        right: "Round to the nearest penny when the question says so. Rounding to the nearest 10p gives £590.80, but the correct answer was £590.75. The rounding must also match the question in percentage answers.",
        source: "AQA 8552/W June 2024 report, Question 17, and June 2025 report, Question 15" }
    ],
    quiz: [
      { q: "What is 15% of £60?", options: ["£4", "£9", "£15"], answer: 1, hint: "Change 15% to a decimal first, then multiply.", see: "Finding a percentage of an amount" },
      { q: "A 5 m strip is bought and 4 m is used. What percentage is waste?", options: ["20%", "80%", "25%"], answer: 0, hint: "Work out the waste first, then divide by the total you started with.", see: "Percentage waste" },
      { q: "Orders rise from 40 to 50. What is the percentage increase?", options: ["10%", "20%", "25%"], answer: 2, hint: "Divide the change by the starting figure.", see: "Percentage increase and decrease" },
      { q: "You need 47.5 paving stones. How many do you buy?", options: ["47", "48", "50"], answer: 1, hint: "You cannot buy half a stone, and you need enough.", see: "Whole items: round up" },
      { q: "When should you round your answer?", options: ["Only at the end", "After every step", "Before you start"], answer: 0, hint: "Keep the full number on your calculator between steps.", see: "Calculator rules and showing your working" }
    ],
    gaps: {
      text: "To find a percentage waste, first work out the {total} you started with and the amount {used}. Take away to find the {waste}, divide by the total and multiply by {100}. Only {round} at the end. If you need whole items, round {up}.",
      extra: ["increase", "down", "10"]
    },
    exam: [
      {
        type: "Percentage increase",
        command: "What is the percentage increase",
        asks: "work out how much a value has grown, as a percentage of the value you started with.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for finding the increase. <b>One mark</b> for dividing it by the original value and multiplying by 100. The mark scheme also accepts dividing the new value by the old one, then reading the answer as a percentage.",
        watch: "Divide by the starting figure, not the new figure. The mark scheme accepted 43.75% or 43.8% for its question, so keep the full number until the end.",
        source: "AQA 8552/W November 2020 Question 12.2 mark scheme. The question uses different numbers from the original.",
        question: "A workshop recycled 25 tonnes of offcuts in one year and 40 tonnes the next year. What is the percentage increase? (2 marks)",
        plan: [
          "Find the increase: new amount take away old amount.",
          "Divide the increase by the old amount.",
          "Multiply by 100 and write the % sign."
        ],
        hint: "Which figure is the starting figure? Divide by that one.",
        find: "November 2020 series (the paper is dated 22 May 2020), Question 12.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["increase", "recycled", "offcuts", "tonnes", "percentage"],
        answer: [
          { text: "Find the increase: 40 − 25 = 15 tonnes", look: ["= 15", "15 tonnes", "40 - 25", "40-25", "40 − 25", "40−25"], see: "Percentage increase and decrease" },
          { text: "Divide by the original and multiply by 100: 15 ÷ 25 × 100 = 60%", look: ["60%", "15 ÷ 25", "15/25", "15 / 25", "1.6"], see: "Percentage increase and decrease" }
        ]
      },
      {
        type: "Percentage waste when cutting",
        command: "What percentage",
        asks: "work out the percentage of material wasted after cutting pieces from a length or sheet.",
        marks: 3, minutes: 4,
        gets: "<b>One mark</b> for the total used by the pieces. <b>One mark</b> for the waste. <b>One mark</b> for waste ÷ total × 100, rounded as asked. If the final answer is correct, the 2019 mark scheme gave all three marks even when the steps were missing.",
        watch: "Keep the full number and round once, at the end. Divide the waste by the total you started with. Check the units match before you subtract, for example both in metres.",
        source: "AQA 8552/W mark schemes, June 2019 Question 22.2 and November 2020 Question 16.3; June 2019 report. The question uses different numbers from the original.",
        question: "Six pieces, each 0.55 m long, are cut from a 3.7 m length of timber. What percentage of the timber is waste? Give your answer to 2 decimal places and show your working. (3 marks)",
        plan: [
          "Work out the length the six pieces use.",
          "Take it away from the total to find the waste.",
          "Divide the waste by the total length and multiply by 100.",
          "Round to 2 decimal places at the end."
        ],
        hint: "Waste is what is left over. Which length do you divide by?",
        find: "June 2019 Question 22.2 and November 2020 Question 16.3. The papers and mark schemes are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["waste", "timber", "pieces", "cut", "percentage"],
        answer: [
          { text: "Length used: 6 × 0.55 = 3.3 m", look: ["3.3 m", "= 3.3", "6 × 0.55", "6 x 0.55", "6x0.55", "6×0.55"], see: "Percentage waste" },
          { text: "Waste: 3.7 − 3.3 = 0.4 m", look: ["= 0.4", "0.4 m", "3.7 - 3.3", "3.7-3.3", "3.7 − 3.3", "3.7−3.3"], see: "Percentage waste" },
          { text: "Percentage waste: 0.4 ÷ 3.7 × 100 = 10.81%", look: ["10.81", "0.4 ÷ 3.7", "0.4/3.7", "0.4 / 3.7"], see: "Percentage waste" }
        ]
      },
      {
        type: "Percentage change in production",
        command: "Give your answer to the nearest whole percent",
        asks: "compare a reduced production figure with a maximum figure, and give the percentage fall, rounded as asked.",
        marks: 4, minutes: 5,
        gets: "<b>One mark</b> for the reduced figure divided by the maximum. <b>One mark</b> for turning it into a percentage. <b>One mark</b> for taking it away from 100. <b>One mark</b> for rounding to the nearest whole percent. A second route finds the difference first, then divides by the maximum. A correct final answer with no working still earned all four marks.",
        watch: "The final mark is for the correctly rounded answer, so read the rounding instruction before you write your last line.",
        source: "AQA 8552/W June 2025 Question 15 mark scheme and report. The question uses different numbers from the original.",
        question: "A line can make 9000 items a day. During a fault it makes 2000 items a day. By what percentage did production fall? Give your answer to the nearest whole percent. (4 marks)",
        plan: [
          "Write the reduced figure over the maximum figure.",
          "Turn it into a percentage.",
          "Take that percentage away from 100 to find the fall.",
          "Round to the nearest whole percent."
        ],
        hint: "Find what percentage of the maximum is still being made, then think about what is missing.",
        find: "June 2025 Section B, Question 15. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["production", "fall", "fault", "items", "percentage"],
        answer: [
          { text: "Reduced over maximum: 2000 ÷ 9000 = 0.2222...", look: ["0.22", "2000 ÷ 9000", "2000/9000", "2000 / 9000", "2/9", "÷ 9000"], see: "Percentage increase and decrease" },
          { text: "As a percentage: 0.2222 × 100 = 22.22%", look: ["22.2", "0.2222 × 100", "0.2222x100"], see: "One number as a percentage of another" },
          { text: "The fall is 100 − 22.22 = 77.78%", look: ["77.7", "77.8", "100 - 22", "100 − 22", "100-22"], see: "Percentage increase and decrease" },
          { text: "Nearest whole percent: 78%", look: [" 78%", "= 78", "is 78", "answer 78"], see: "Calculator rules and showing your working" }
        ]
      },
      {
        type: "Whole items, then percentage unused",
        command: "Calculate",
        asks: "find how many whole items you must buy, then work out the percentage that is left unused.",
        marks: 5, minutes: 6,
        gets: "<b>Two marks</b> for working out the amount needed and rounding up to whole tins. <b>Three marks</b> for the percentage unused, by any correct route, such as used ÷ bought, or unused ÷ bought. If your first answer is wrong but you use it correctly after that, you can still earn the later marks.",
        watch: "Round up to whole tins before you work out the waste. Do not round the first number twice. Keep the full value on your calculator.",
        source: "AQA 8552/W November 2021 Question 13 mark scheme (parts 13.1 and 13.2). The question uses different numbers from the original.",
        question: "Varnish tins each cover 3.5 m². A workshop needs to cover 20 m². How many tins must be bought? What percentage of the varnish bought is not used? Give your answer to 2 decimal places and show your working. (5 marks)",
        plan: [
          "Divide the area by the area one tin covers.",
          "Round up to whole tins.",
          "Divide the amount you need by the tins you buy to find the share used.",
          "Multiply by 100, then take the answer away from 100 to find the unused share.",
          "Round to 2 decimal places at the end."
        ],
        hint: "You will not use all of the last tin. How much of the total bought is that?",
        find: "November 2021 series, Question 13. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["varnish", "tins", "cover", "unused", "percentage"],
        answer: [
          { text: "Tins needed: 20 ÷ 3.5 = 5.71...", look: ["5.71", "20 ÷ 3.5", "20/3.5", "20 / 3.5", "÷ 3.5"], see: "Whole items: round up" },
          { text: "Round up: 6 tins must be bought", look: ["6 tins", "six tins", "round up", "rounded up", "= 6"], see: "Whole items: round up" },
          { text: "Share used: 5.71 ÷ 6 = 0.9524", look: ["0.95", "5.71 ÷ 6", "5.71/6", "5.71 / 6"], see: "Percentage waste" },
          { text: "Percentage used: 0.9524 × 100 = 95.24%", look: ["95.2"], see: "One number as a percentage of another" },
          { text: "Percentage unused: 100 − 95.24 = 4.76%", look: ["4.76", "100 - 95", "100 − 95", "100-95", "100−95"], see: "Percentage waste" }
        ]
      }
    ],
    connect: [
      { q: "Link to area and volume: to find the percentage waste of a sheet, what must you work out first?", a: "The area of the whole sheet and the area of the pieces. Waste is the total area minus the area used, and then you divide by the total area." },
      { q: "Link to costing: a price is quoted per pack and then a 15% discount is offered. What are the steps?", a: "Work out the full price first, work out 15% of it, take it away, and round to the nearest penny at the end if the question asks." }
    ],
    links: []
  }
);
