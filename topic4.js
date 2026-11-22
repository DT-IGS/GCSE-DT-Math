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
    n: 4,
    name: "Rates and time",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can explain what a rate is, such as stitches per minute" },
      { text: "I can change seconds into minutes and minutes into seconds", key: true },
      { text: "I can work out how many stitches or items are needed from a length", key: true },
      { text: "I can change a rate per minute into a rate per second", key: true },
      { text: "I can work out the time a job takes from an amount and a rate", key: true },
      { text: "I can work out the time for many jobs by multiplying", key: true },
      { text: "I can round a time to the nearest second, or as the question asks" },
      { text: "I can show my working and use my own earlier answer in the next part" }
    ],
    warmup: [
      { when: "Last month", q: "What is 15% of £60?", a: "£9." },
      { when: "Last week", q: "How do you change mm³ into cm³?", a: "Divide by 1000." },
      { when: "Last lesson", q: "How do you find the labour cost for a team of workers?", a: "Hourly rate × number of workers × total time." }
    ],
    knowledge: [
      { title: "Start here: what a rate is",
        text: "A <b>rate</b> tells you how much is done in each unit of time. 'Per' means 'for each'. Stitches per minute is a rate. To find a rate, divide the amount by the time.",
        example: "A drill makes 12 holes in one minute. That is 12 holes per minute. In one second it makes 12 ÷ 60 = 0.2 holes.",
        source: "AQA 8552/W June 2024 Question 24 (a sewing machine rate in stitches per minute)" },
      { title: "Changing seconds and minutes",
        text: "There are 60 seconds in one minute. To change minutes into seconds, multiply by 60. To change seconds into minutes, divide by 60.",
        steps: [
          "Minutes to seconds: × 60.",
          "Seconds to minutes: ÷ 60.",
          "Check that your answer is bigger when you change to the smaller unit, and smaller when you change to the bigger unit."
        ],
        example: "3 minutes = 3 × 60 = 180 seconds. 270 seconds = 270 ÷ 60 = 4.5 minutes.",
        source: "AQA 8552/W June 2024 Question 24 mark scheme" },
      { title: "Counting stitches or items",
        text: "First find how many stitches or items are needed to complete the job. Divide the total length by the length of one stitch or one item.",
        steps: [
          "Write the total length of the join.",
          "Write the length of one stitch.",
          "Number of stitches = total length ÷ length of one stitch."
        ],
        example: "A seam is 700 mm long and each stitch is 4 mm. 700 ÷ 4 = 175 stitches.",
        source: "AQA 8552/W June 2024 Question 24.1 mark scheme" },
      { title: "Finding the time from a rate",
        text: "Time = amount ÷ rate. First make sure the rate and the time you want use the same unit. Here, change the rate to stitches per second.",
        steps: [
          "Work out the number of stitches needed.",
          "Change the rate to stitches per second: ÷ 60.",
          "Time in seconds = stitches needed ÷ stitches per second.",
          "Keep the full number on your calculator.",
          "Round at the end, for example to the nearest second."
        ],
        example: "A machine makes 900 stitches per minute, so 900 ÷ 60 = 15 stitches per second. A seam needs 175 stitches. 175 ÷ 15 = 11.666... seconds, which is 12 seconds to the nearest second.",
        source: "AQA 8552/W June 2024 Question 24.1 mark scheme and report" },
      { title: "Another route: length per second",
        text: "There is a second way to reach the same answer. Work out how much length the machine stitches each second, then divide the length of the join by it.",
        steps: [
          "Length stitched per minute = stitches per minute × length of one stitch.",
          "Divide by 60 to get length stitched per second.",
          "Time = length of the join ÷ length stitched per second.",
          "Round at the end."
        ],
        example: "900 stitches per minute × 4 mm = 3600 mm per minute. 3600 ÷ 60 = 60 mm per second. A 700 mm seam takes 700 ÷ 60 = 11.666... seconds, which is 12 seconds to the nearest second. The same as before.",
        source: "AQA 8552/W June 2024 Question 24.1 mark scheme (second method)" },
      { title: "Time for many jobs",
        text: "When there are many identical jobs, <b>multiply</b> the time for one job by the number of jobs. More jobs take more time, so the total goes up. Then change the units if the question asks for minutes.",
        steps: [
          "Time for all the jobs = time for one job × number of jobs.",
          "Change seconds into minutes by dividing by 60.",
          "Use your own answer from the earlier part, as it can still earn a method mark."
        ],
        example: "One join takes 11.666... seconds and there are 30 joins. 11.666... × 30 = 350 seconds. 350 ÷ 60 = 5.83 minutes. Using a rounded time from an earlier part can give a slightly different answer, and the mark scheme allowed a small range.",
        source: "AQA 8552/W June 2024 Question 24.2 mark scheme and report" }
    ],
    images: [
      { title: "Two routes to the time", describe: "Draw two paths from 'join length and stitch length' to 'time'. Path 1: 'number of stitches', then 'stitches per second', then 'time'. Path 2: 'length per minute', then 'length per second', then 'time'. Write the formula on each arrow." },
      { title: "Seconds and minutes", describe: "Draw a line with 'seconds' on the left and 'minutes' on the right. Above it draw an arrow marked '÷ 60' pointing right. Below it draw an arrow marked '× 60' pointing left." }
    ],
    keywords: [
      { term: "Rate", meaning: "How much is done in each unit of time, such as stitches per minute." },
      { term: "Per", meaning: "For each, as in 'per minute'." },
      { term: "Stitch length", meaning: "The length of one stitch." },
      { term: "Join", meaning: "The line where two pieces of material are sewn or fixed together." },
      { term: "Seconds and minutes", meaning: "There are 60 seconds in a minute." },
      { term: "Method mark", meaning: "A mark for a correct step in your working, even if the final answer is wrong." }
    ],
    misconceptions: [
      { wrong: "To find the time for 30 joins, divide the time for one join by 30.",
        right: "Multiply the time for one join by 30, because more joins take more time. The method mark is for multiplying.",
        source: "AQA 8552/W June 2024 report on the examination, Question 24.2" },
      { wrong: "I cannot do the second part if my answer to the first part is wrong.",
        right: "A method mark was still available for using your own first answer correctly, so carry on.",
        source: "AQA 8552/W June 2024 report on the examination, Question 24.2" },
      { wrong: "If I write only the answer, I lose marks.",
        right: "A correct answer with no working still earned full marks. If it is wrong, working can earn method marks, so show your steps.",
        source: "AQA 8552/W June 2024 report on the examination, Question 24.1" },
      { wrong: "If I use the rounded answer from part 1, my answer to part 2 is wrong.",
        right: "The mark scheme accepted a small range of answers to allow for rounded earlier answers and differences between calculators.",
        source: "AQA 8552/W June 2024 Question 24.2 mark scheme" }
    ],
    quiz: [
      { q: "A machine makes 600 stitches a minute. How many stitches is that each second?", options: ["60", "10", "6 000"], answer: 1, hint: "Change minutes into seconds by dividing.", see: "Changing seconds and minutes" },
      { q: "A seam is 300 mm long and each stitch is 3 mm. How many stitches are needed?", options: ["100", "900", "10"], answer: 0, hint: "Divide the total length by the length of one stitch.", see: "Counting stitches or items" },
      { q: "One job takes 20 seconds. How many minutes do 15 jobs take?", options: ["1.33 minutes", "300 minutes", "5 minutes"], answer: 2, hint: "Multiply by 15, then change seconds into minutes.", see: "Time for many jobs" },
      { q: "What do you do to change seconds into minutes?", options: ["Divide by 100", "Multiply by 60", "Divide by 60"], answer: 2, hint: "There are 60 seconds in a minute.", see: "Changing seconds and minutes" },
      { q: "To find the time for 30 joins, you do what to the time for one join?", options: ["Multiply it by 30", "Divide it by 30", "Add 30"], answer: 0, hint: "More joins take more time.", see: "Time for many jobs" }
    ],
    gaps: {
      text: "A rate tells you how much is done in each unit of {time}. To change seconds into minutes, {divide} by 60. Time = amount ÷ {rate}. For many jobs, {multiply} the time for one job by the number of jobs. Round only at the {end}.",
      extra: ["add", "100", "length"]
    },
    exam: [
      {
        type: "Time for many jobs",
        command: "Calculate",
        asks: "work out how long many identical jobs take in total, and give the answer in minutes.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for the total time in seconds, by multiplying the time for one job by the number of jobs. <b>One mark</b> for changing it into minutes. A correct answer earns both marks. If you used a rounded answer from an earlier part, a small difference is allowed.",
        watch: "Multiply by the number of jobs, because more jobs take more time. Use your own earlier answer, as it can still earn a method mark.",
        source: "AQA 8552/W June 2024 Question 24.2 mark scheme and report. The question uses different numbers from the original.",
        question: "A drilling machine takes 14 seconds to drill one plate. Calculate how many minutes it takes to drill 40 plates. Give your answer to 2 decimal places and show your working. (2 marks)",
        plan: [
          "Multiply the time for one plate by 40.",
          "Divide the seconds by 60 to get minutes.",
          "Round to 2 decimal places at the end."
        ],
        hint: "More plates take more time. Should you multiply or divide?",
        find: "June 2024 Section C, Question 24.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["drilling", "plates", "seconds", "minutes", "time"],
        answer: [
          { text: "Total time: 14 × 40 = 560 seconds", look: ["560", "14 × 40", "14x40", "14 x 40", "14×40"], see: "Time for many jobs" },
          { text: "Change to minutes: 560 ÷ 60 = 9.33 minutes", look: ["9.33", "560 ÷ 60", "560/60", "560 / 60", "560÷60"], see: "Changing seconds and minutes" }
        ]
      },
      {
        type: "Time to complete a stitched join",
        command: "Calculate",
        asks: "work out how many seconds a machine takes to stitch a join, from the length of the join, the stitch length and the stitching rate.",
        marks: 4, minutes: 5,
        gets: "<b>One mark</b> for the number of stitches needed, or for the total length stitched per minute. <b>One mark</b> for the rate per second. <b>One mark</b> for the time before rounding. <b>One mark</b> for rounding to the nearest whole second. A correct answer earns all four marks. If you use both routes together, both first steps count.",
        watch: "Almost every student gained the first mark, and students who rounded correctly to the nearest second gained full marks. The rate is per minute and the time you want is in seconds, so divide by 60 once.",
        source: "AQA 8552/W June 2024 Question 24.1 mark scheme and report. The question uses different numbers from the original.",
        question: "A seam is 700 mm long. Each stitch is 4 mm long and a sewing machine makes 900 stitches per minute. Calculate how many seconds it takes to sew the seam. Give your answer to the nearest whole second and show your working. (4 marks)",
        plan: [
          "Work out how many stitches the seam needs.",
          "Work out how many stitches the machine makes each second.",
          "Divide the stitches needed by the stitches per second.",
          "Round to the nearest whole second."
        ],
        hint: "Make the rate per second before you divide.",
        find: "June 2024 Section C, Question 24.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["seam", "stitch", "sewing", "seconds", "machine"],
        answer: [
          { text: "Stitches needed: 700 ÷ 4 = 175", look: ["175", "700 ÷ 4", "700/4", "700 / 4", "700÷4"], see: "Counting stitches or items" },
          { text: "Stitches per second: 900 ÷ 60 = 15", look: ["= 15", "15 stitches", "900 ÷ 60", "900/60", "900 / 60", "900÷60"], see: "Changing seconds and minutes" },
          { text: "Time: 175 ÷ 15 = 11.67 seconds", look: ["11.6", "11.7", "175 ÷ 15", "175/15", "175 / 15", "175÷15"], see: "Finding the time from a rate" },
          { text: "Nearest whole second: 12 seconds", look: ["12 s", "12s", "12 sec"], see: "Finding the time from a rate" }
        ]
      }
    ],
    connect: [
      { q: "Link to costing: if workers are paid per hour, how could the time you have worked out be used in a cost calculation?", a: "Change the time into hours, then multiply by the hourly rate and the number of workers to find the labour cost." },
      { q: "Link to percentages: when should you round a time or a percentage?", a: "Only at the end. Keep the full number on your calculator during the steps, then round as the question asks." }
    ],
    links: []
  }
);
