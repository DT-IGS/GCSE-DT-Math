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
    n: 8,
    name: "Charts and data handling",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can read a table of votes with a total and a percentage column" },
      { text: "I can find missing values in a table, using the total", key: true },
      { text: "I can draw bars on a bar chart from a table and label the axes", key: true },
      { text: "I can explain that 1% on a pie chart is 3.6 degrees", key: true },
      { text: "I can work out the angle of a pie chart sector from a percentage", key: true },
      { text: "I can draw a sector with a protractor and apply the key", key: true },
      { text: "I can check that my chart adds up and matches the table" },
      { text: "I can show my working so I can earn method marks" }
    ],
    warmup: [
      { when: "Last month", q: "How do you find a percentage of an amount?", a: "Divide the percentage by 100 and multiply by the amount." },
      { when: "Last week", q: "How many degrees are there in a full turn?", a: "360 degrees." },
      { when: "Last lesson", q: "How do you simplify a ratio?", a: "Divide both numbers by the same number." }
    ],
    knowledge: [
      { title: "Start here: tables and charts",
        text: "A <b>table</b> lists data in rows and columns. The <b>total</b> is all of the values added together. A <b>chart</b> shows the same data as a picture, so it is quicker to compare. Votes can also be shown as a percentage of the total.",
        example: "A table shows votes for lunch box colours: blue 70, red 50, yellow 30. A bar chart shows these as three bars, and the tallest bar is blue.",
        source: "AQA 8552/W November 2020 Question 22.1 (a table of votes and percentages)" },
      { title: "Finding a missing value in a table",
        text: "A table with a total and a percentage column lets you find missing values. Each percentage is a share of the total.",
        steps: [
          "Route 1: percentage × total. For example 20% of 200 votes = 0.2 × 200 = 40.",
          "Route 2: take all the known values away from the total.",
          "Check that all the values add up to the total.",
          "Fill in <b>both</b> missing values."
        ],
        example: "Total = 200 votes. Green is 20%. Votes = 0.2 × 200 = 40. Pink is 5%. Votes = 0.05 × 200 = 10. Check: 70 + 50 + 40 + 30 + 10 = 200.",
        source: "AQA 8552/W November 2020 Question 22.1 mark scheme (85 and 35 from a total of 250)" },
      { title: "Drawing a bar chart",
        text: "A bar chart has one bar for each item. The height of each bar shows its value. Both axes need a label so a reader knows what is being shown.",
        steps: [
          "Use the numbers from your table. If you worked out missing values, use those.",
          "Draw each bar up to the right height on the scale.",
          "Label the x axis with what the bars show, such as the type of item.",
          "Check that each bar matches its value in the table."
        ],
        example: "Green = 40 votes and pink = 10 votes. Draw a bar to 40 above 'green' and a bar to 10 above 'pink'. Label the x axis 'Colour of lunch box'.",
        source: "AQA 8552/W November 2020 Question 22.2 mark scheme (a label for the x axis, then the correct height of each bar)" },
      { title: "Pie charts: 1% is 3.6 degrees",
        text: "A pie chart is a circle. The whole circle is 360 degrees and stands for 100%. So 1% is 360 ÷ 100 = 3.6 degrees. To find the angle for a sector, multiply its percentage by 3.6.",
        steps: [
          "1% = 360 ÷ 100 = 3.6 degrees.",
          "Angle of a sector = percentage × 3.6.",
          "Keep the full value on your calculator and round at the end."
        ],
        example: "10% = 10 × 3.6 = 36 degrees. 17.5% = 17.5 × 3.6 = 63 degrees. 50% = 50 × 3.6 = 180 degrees, which is a half circle.",
        source: "AQA 8552/W June 2023 Question 17 mark scheme (diesel 36 degrees, hybrid 63 degrees)" },
      { title: "Drawing a sector with a protractor",
        text: "Some pie charts are partly drawn for you. Use the line that is already there as your starting line, and measure the new angle from it with a protractor.",
        steps: [
          "Work out the angle for the sector.",
          "Place the protractor centre on the centre of the circle, with the zero on a line already drawn.",
          "Mark the angle and draw a line from the centre to the edge.",
          "Shade or pattern each sector to match the key.",
          "Check that your line is within 2 degrees of the right place."
        ],
        example: "A sector of 54 degrees follows a line already drawn. Measure 54 degrees from that line, mark it, and draw a line from the centre to the edge. Then shade the new sector to match its colour in the key.",
        source: "AQA 8552/W June 2023 Question 17 mark scheme and report (a line within 2 degrees was accepted, and the two sectors could be drawn the opposite way round)" },
      { title: "Checking your chart",
        text: "Always check your chart against your table before you finish.",
        steps: [
          "The percentages should add up to 100.",
          "The sector angles should add up to 360 degrees.",
          "Each bar should match its value in the table.",
          "Both axes and the key are labelled or shaded."
        ],
        example: "Four pie chart sectors are 162, 108, 54 and 36 degrees. 162 + 108 + 54 + 36 = 360, so the chart adds up." }
    ],
    images: [
      { title: "A pie chart and its key", describe: "Draw a circle split into four sectors with a protractor. Write the angle on each sector and the percentage beside it. Draw a key with a different shading for each sector." },
      { title: "A bar chart with labels", describe: "Draw two axes. Mark equal steps on the y axis and a label for each bar on the x axis. Draw five bars of different heights. Write a label under the x axis describing what the bars show." }
    ],
    keywords: [
      { term: "Table", meaning: "Data laid out in rows and columns." },
      { term: "Total", meaning: "All of the values added together." },
      { term: "Bar chart", meaning: "A chart with one bar for each item, where the height shows its value." },
      { term: "Pie chart", meaning: "A circle split into sectors, where each sector shows a share of the whole." },
      { term: "Sector", meaning: "One slice of a pie chart." },
      { term: "Key", meaning: "A list that shows what each shading or colour on a chart stands for." },
      { term: "Axis", meaning: "A line on a chart with a scale or labels, such as the x axis." },
      { term: "Method mark", meaning: "A mark for a correct step in your working, even if the final answer is wrong." }
    ],
    misconceptions: [
      { wrong: "I do not need to show working, because my pie chart drawing will earn the marks.",
        right: "Show your working so you can earn method marks, because an inaccurate drawing with no working has nothing to credit.",
        source: "AQA 8552/W June 2023 report on the examination, Question 17" },
      { wrong: "If one of my two table values is right, I get the mark.",
        right: "The mark is for both missing values together, so check both before you move on.",
        source: "AQA 8552/W November 2020 Question 22.1 mark scheme" },
      { wrong: "If my table values are wrong, my bar chart cannot earn marks.",
        right: "Bars that match your own values from the table can still earn the marks, so draw your chart carefully.",
        source: "AQA 8552/W November 2020 Question 22.2 mark scheme" },
      { wrong: "I can label the x axis 'votes as a percentage'.",
        right: "A label about percentages does not describe bars of votes. Label the x axis with what the bars show, such as the type of item.",
        source: "AQA 8552/W November 2020 Question 22.2 mark scheme" },
      { wrong: "My two missing sectors must be drawn in the same order as the table.",
        right: "The two segments could be drawn either way round. What matters is that the line is in the right place, within 2 degrees.",
        source: "AQA 8552/W June 2023 Question 17 mark scheme" }
    ],
    quiz: [
      { q: "A table has a total of 200 votes. Green is 20%. How many votes is that?", options: ["20", "40", "4"], answer: 1, hint: "Find 20% of 200.", see: "Finding a missing value in a table" },
      { q: "A table has a total of 120 votes. Three of the values are 30, 45 and 25, and one is missing. What is the missing value?", options: ["20", "30", "100"], answer: 0, hint: "Take the known values away from the total.", see: "Finding a missing value in a table" },
      { q: "How many degrees on a pie chart stand for 1%?", options: ["1 degree", "10 degrees", "3.6 degrees"], answer: 2, hint: "Divide 360 by 100.", see: "Pie charts: 1% is 3.6 degrees" },
      { q: "A pie chart sector is 25%. What angle is it?", options: ["25 degrees", "90 degrees", "100 degrees"], answer: 1, hint: "Multiply the percentage by 3.6.", see: "Pie charts: 1% is 3.6 degrees" },
      { q: "What should you check once your pie chart is finished?", options: ["The angles add up to 100 degrees", "The percentages add up to 360", "The angles add up to 360 degrees"], answer: 2, hint: "A full circle is 360 degrees.", see: "Checking your chart" }
    ],
    gaps: {
      text: "To find a missing number of votes, use the {total}. A percentage of the total gives the number of votes: for example 20% of 200 is 40. In a pie chart, the full circle is {360} degrees, so 1% is {3.6} degrees. Use a {protractor} to draw each angle and apply the {key}. Check that all the angles add up to 360 degrees.",
      extra: ["100", "ruler", "mean"]
    },
    exam: [
      {
        type: "Missing values in a table",
        command: "Complete the two missing values",
        asks: "find two missing values in a table of votes, using the total and the percentages.",
        marks: 1, minutes: 2,
        gets: "<b>One mark</b> for both values, if both are correct. The mark is for both values together.",
        watch: "Both values must be right. Check by adding all of the votes, which must equal the total.",
        source: "AQA 8552/W November 2020 Question 22.1 mark scheme. The question uses different numbers from the original.",
        question: "A designer is collecting votes on the colour of a lunch box. The table shows blue 70 votes (35%), red 50 votes (25%), green (20%), yellow 30 votes (15%) and pink (5%). The total is 200 votes (100%). Complete the two missing values for the number of votes. (1 mark)",
        plan: [
          "Work out each missing value as a percentage of 200.",
          "Check that all of the votes add up to 200."
        ],
        hint: "Find 20% of 200 and 5% of 200.",
        find: "November 2020 series (the paper is dated 22 May 2020), Question 22.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["votes", "colour", "lunch box", "green", "pink"],
        answer: [
          { text: "Green = 20% of 200 = 40 votes, and pink = 5% of 200 = 10 votes", look: ["= 40", "40 votes", "= 10", "10 votes", "0.2 × 200", "0.2x200", "0.2 x 200", "0.05 × 200", "0.05x200"], see: "Finding a missing value in a table" }
        ]
      },
      {
        type: "Completing a bar chart",
        command: "Complete the bar chart and label the x axis",
        asks: "use values from a table to finish a bar chart, and label the x axis.",
        marks: 3, minutes: 4,
        gets: "<b>One mark</b> for the x axis label. <b>One mark</b> for the correct height of the first missing bar. <b>One mark</b> for the correct height and place of the second missing bar. If your table values were wrong but your bars match them, you still earn the bar marks.",
        watch: "Use your own values from the table. The mark scheme accepted labels such as the title of the data. A label about percentages does not fit bars of votes, so label the x axis with what the bars show.",
        source: "AQA 8552/W November 2020 Question 22.2 mark scheme. The question uses different numbers from the original.",
        question: "Use your values from the question above to complete the bar chart. The bars for blue, red and yellow are drawn. Label the x axis. (3 marks)",
        plan: [
          "Draw the bar for green to your value.",
          "Draw the bar for pink to your value.",
          "Label the x axis with what the bars show."
        ],
        hint: "Use the votes, not the percentages, for the heights.",
        find: "November 2020 series, Question 22.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["bar chart", "green", "pink", "x axis", "label"],
        answer: [
          { text: "Label the x axis, such as 'Colour of lunch box'", look: ["colour", "lunch box", "favourite", "label", "x axis"], see: "Drawing a bar chart" },
          { text: "Draw the green bar up to 40 votes", look: ["green bar", "green to 40", "green = 40", "green up to 40", "40 votes"], see: "Drawing a bar chart" },
          { text: "Draw the pink bar up to 10 votes", look: ["pink bar", "pink to 10", "pink = 10", "pink up to 10", "10 votes"], see: "Drawing a bar chart" }
        ]
      },
      {
        type: "Completing a pie chart",
        command: "Use the information in the table to complete the pie chart",
        asks: "work out the sector angles for two missing sectors, and draw the line and key on a partly drawn pie chart.",
        marks: 4, minutes: 5,
        gets: "<b>One mark</b> for working out that 1% is 3.6 degrees. <b>One mark</b> for the correct angle of one of the missing sectors. <b>One mark</b> for a single line in the right place, within 2 degrees. <b>One mark</b> for applying the key. If the pie chart is shaded and the line is within the tolerance, that is full marks. The two sectors can be drawn either way round.",
        watch: "Show your working, because it earns method marks if the drawing is not exact. Use a protractor.",
        source: "AQA 8552/W June 2023 Question 17 mark scheme and report. The question uses different numbers from the original.",
        question: "The table shows how pupils travel to school: bus 45%, walk 30%, car 15% and cycle 10%. The pie chart has the bus and walk sectors drawn. Use the table to complete the pie chart by working out the missing angles, drawing one line and applying the key. Show your working. (4 marks)",
        plan: [
          "Work out how many degrees stand for 1%.",
          "Work out the angle for car and for cycle.",
          "Draw one line with a protractor, from the line that is already drawn.",
          "Shade the two new sectors to match the key."
        ],
        hint: "Use 3.6 degrees for each 1%.",
        find: "June 2023 Section B, Question 17. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["pie chart", "pupils", "travel", "sector", "key"],
        answer: [
          { text: "1% = 360 ÷ 100 = 3.6 degrees", look: ["3.6", "360 ÷ 100", "360/100", "360 / 100"], see: "Pie charts: 1% is 3.6 degrees" },
          { text: "Car: 15 × 3.6 = 54 degrees. Cycle: 10 × 3.6 = 36 degrees", look: ["= 54", "= 36", "54°", "36°", "54 degrees", "36 degrees", "15 × 3.6", "10 × 3.6", "15x3.6", "10x3.6"], see: "Pie charts: 1% is 3.6 degrees" },
          { text: "Draw one line at 54 degrees (or 36 degrees from the other end) from the existing line, within 2 degrees", look: ["protractor", "54° from", "36° from", "from the line", "from the existing line", "drawn line", "one line"], see: "Drawing a sector with a protractor" },
          { text: "Shade each new sector to match the key", look: ["shade", "key", "pattern", "colour"], see: "Drawing a sector with a protractor" }
        ]
      }
    ],
    connect: [
      { q: "Link to percentages: how is finding a missing value in a table like finding a percentage of an amount?", a: "Each percentage is a share of the total, so the number of votes is the percentage divided by 100 and multiplied by the total." },
      { q: "Link to angles: why must the angles of the sectors in a pie chart add up to 360 degrees?", a: "A pie chart is a full circle, and angles around the centre of a circle make a full turn of 360 degrees." }
    ],
    links: []
  }
);
