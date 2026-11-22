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
    n: 3,
    name: "Costing and production costs",
    section: "Written paper: maths questions in Sections A, B and C",
    checklist: [
      { text: "I can change between pence and pounds" },
      { text: "I can work out the total cost of an order from a price per item and the number of items", key: true },
      { text: "I can work out a cost from a price per pack, such as per 10 items", key: true },
      { text: "I can work out a price after a percentage discount", key: true },
      { text: "I can compare a one-off cost with a cost that repeats each time", key: true },
      { text: "I can work out labour cost from the hourly rate, the number of workers and the time", key: true },
      { text: "I can add materials and labour to find a total production cost", key: true },
      { text: "I can compare two methods and explain which is more cost effective", key: true },
      { text: "I can round money to the nearest penny and show my working" }
    ],
    warmup: [
      { when: "Last month", q: "How do you work out a 20% discount on £50?", a: "£50 × 0.2 = £10 off, so the price is £40." },
      { when: "Last week", q: "Why do you round up when you need whole slabs?", a: "You cannot buy part of a slab, and you need enough to cover the area." },
      { when: "Last lesson", q: "How many pence are there in £1?", a: "100 pence." }
    ],
    knowledge: [
      { title: "Start here: pounds and pence",
        text: "There are 100 pence in £1. To change pence into pounds, divide by 100. To change pounds into pence, multiply by 100. Pick one unit and keep to it all the way through the calculation.",
        example: "A button costs 9p, which is £0.09. For 2500 buttons: 2500 × 9 = 22 500p. Then 22 500 ÷ 100 = £225. Or 2500 × 0.09 = £225. Both routes give the same answer.",
        source: "AQA 8552/W June 2023 Question 15 mark scheme (it shows the pence route and the pounds route)" },
      { title: "Total cost for a whole order",
        text: "A whole order costs the cost of <b>one</b> product multiplied by the <b>number</b> of products. Work out the cost of one first, then scale up.",
        steps: [
          "Find how many of the part one product needs. Include any spares.",
          "Cost for one product = the number of parts × the price of one part.",
          "Multiply by the number of products in the order.",
          "Change to pounds if the question asks for pounds."
        ],
        example: "800 bags are made. Each needs 6 rivets and 2 spare rivets, and each rivet costs 3p. Parts per bag = 6 + 2 = 8. Cost per bag = 8 × 3 = 24p. For 800 bags: 800 × 24 = 19 200p. That is £192.",
        source: "AQA 8552/W June 2023 Question 15 mark scheme and report" },
      { title: "Price per pack and unit cost",
        text: "Prices are often given for a pack, such as per 10 items. You can work out how many packs you need, or the price of one item. Both routes work.",
        steps: [
          "Route 1: number of packs = items needed ÷ items in a pack. Then multiply by the pack price.",
          "Route 2: price of one item = pack price ÷ items in a pack. Then multiply by the number of items.",
          "Keep the full number on your calculator and round money only at the end."
        ],
        example: "Screws cost £3.40 per 10. You need 500. Route 1: 500 ÷ 10 = 50 packs, then 50 × 3.40 = £170. Route 2: 3.40 ÷ 10 = £0.34 each, then 0.34 × 500 = £170.",
        source: "AQA 8552/W June 2024 Question 17 mark scheme" },
      { title: "Discounts",
        text: "A discount takes a percentage off a price. There are two routes. Use the one you find easier.",
        steps: [
          "Route 1: find the discount, price × percentage ÷ 100. Then take it away from the price.",
          "Route 2: multiply the price by the percentage you still pay. For a 15% discount you pay 85%, so multiply by 0.85.",
          "Round money to the nearest <b>penny</b>, at the end."
        ],
        example: "An order costs £300 and has a 15% discount. Route 1: 300 × 0.15 = £45 off, so £255. Route 2: 300 × 0.85 = £255. For an answer such as £464.3125, you write £464.31, not £464.30 or £464.",
        source: "AQA 8552/W June 2024 Question 17 mark scheme and report" },
      { title: "One-off cost and running cost",
        text: "Some options cost a lot at the start and then very little each time. Others cost a little each time. To compare them, add up the whole cost over the same number of uses.",
        steps: [
          "Work out the one-off cost. Count it <b>once</b>.",
          "Work out the cost that repeats: the price each time × the number of times.",
          "Total = one-off cost + repeated costs.",
          "Do the same for the other option and compare the totals."
        ],
        example: "A torch can use disposable batteries at £1.80 a set, or a rechargeable set that costs £9 plus £0.02 each charge. After 10 uses: disposable = 10 × 1.80 = £18.00. Rechargeable = 9 + (10 × 0.02) = £9.20.",
        source: "AQA 8552/W June 2019 Question 11 mark scheme" },
      { title: "Labour and production costs",
        text: "<b>Labour cost</b> is the cost of paying workers. Add it to the cost of tools and materials to find the total cost of production. The tool and material cost belongs to <b>every</b> product, so multiply it by the number of products.",
        steps: [
          "Total time = time to make one product × number of products.",
          "Labour cost = hourly rate × number of workers × total time.",
          "Material cost = cost per product × number of products.",
          "Total cost = labour cost + material cost."
        ],
        example: "A team of 3 workers is paid £18 each per hour. The team takes 2 hours to make one table. Materials cost £6 per table. For 4 tables: time = 4 × 2 = 8 hours. Labour = 18 × 3 × 8 = £432. Materials = 6 × 4 = £24. Total = 432 + 24 = £456.",
        source: "AQA 8552/W June 2025 Question 24 mark scheme and report" },
      { title: "Which method is more cost effective?",
        text: "To answer this kind of question, work out the total cost of each method first. Name the cheaper one and give a reason that uses the numbers. The words cheaper and quicker need more detail on their own.",
        steps: [
          "Work out the total cost of each method.",
          "Name the method with the lower total.",
          "Give a qualified reason: for example, lower total labour cost, or less production time.",
          "Compare using numbers, such as how much less it costs."
        ],
        example: "Method A for four tables costs £384. Method B costs £456. Method A is more cost effective because its total is £72 lower, mainly through lower labour costs.",
        source: "AQA 8552/W June 2025 Question 24.3 mark scheme and report" }
    ],
    images: [
      { title: "Building a total cost", describe: "Draw three boxes: 'labour', 'materials' and 'total'. Join the first two to the third with a plus sign. Under 'labour' write: rate × workers × time. Under 'materials' write: cost per product × number of products." },
      { title: "Comparing two methods", describe: "Draw a table with a column for Method A and a column for Method B. Add rows for hourly rate, number of workers, time, materials and total cost. Fill it in with your own numbers and circle the cheaper total." }
    ],
    keywords: [
      { term: "Unit cost", meaning: "The cost of one item." },
      { term: "Discount", meaning: "An amount taken off a price, often given as a percentage." },
      { term: "Labour cost", meaning: "The cost of paying the workers who make a product." },
      { term: "Material cost", meaning: "The cost of the materials, tools and equipment used to make a product." },
      { term: "Hourly rate", meaning: "How much a worker is paid for each hour of work." },
      { term: "Total cost", meaning: "All of the costs added together." },
      { term: "Cost effective", meaning: "Gives the best result for the money spent." },
      { term: "One-off cost", meaning: "A cost paid once, such as buying a charger." }
    ],
    misconceptions: [
      { wrong: "Rounding money to the nearest 10p is fine.",
        right: "Round to the nearest penny. Rounding to the nearest 10p gives £590.80, but the correct answer was £590.75.",
        source: "AQA 8552/W June 2024 report on the examination, Question 17" },
      { wrong: "The £5 for tools and materials is the cost for all six weather vanes.",
        right: "The tool and material cost applies to each product. For six products it was £30, so multiply it by the number of products.",
        source: "AQA 8552/W June 2025 report on the examination, Question 24.2" },
      { wrong: "To compare two methods I can just say 'method two is cost effective'.",
        right: "Repeating the question gains no credit. Name the method, then give a reason using the costs. Cheaper or quicker on its own was not accepted.",
        source: "AQA 8552/W June 2025 report and mark scheme, Question 24.3" },
      { wrong: "If my last step is wrong, I get no marks.",
        right: "Method marks were available for correct steps, such as 1500 × 5 = 7500. Show your working so you can earn them.",
        source: "AQA 8552/W June 2023 report on the examination, Question 15" }
    ],
    quiz: [
      { q: "What is 350 pence in pounds?", options: ["£350", "£3.50", "£35"], answer: 1, hint: "Divide by 100.", see: "Start here: pounds and pence" },
      { q: "Each bag needs 6 rivets plus 2 spares. Rivets cost 3p each. What is the rivet cost for 100 bags?", options: ["£2.40", "£18", "£24"], answer: 2, hint: "Work out the cost for one bag first, then multiply.", see: "Total cost for a whole order" },
      { q: "Screws cost £3.40 per pack of 10. How much do 500 screws cost?", options: ["£170", "£17", "£1 700"], answer: 0, hint: "How many packs of 10 are in 500?", see: "Price per pack and unit cost" },
      { q: "An order costs £300 and has a 15% discount. What is the price after the discount?", options: ["£45", "£255", "£285"], answer: 1, hint: "You pay 85% of the price.", see: "Discounts" },
      { q: "Four workers are each paid £10 an hour for 3 hours. What is the labour cost?", options: ["£30", "£43", "£120"], answer: 2, hint: "Multiply the rate by the number of workers and the hours.", see: "Labour and production costs" }
    ],
    gaps: {
      text: "Labour cost = hourly rate × hours × number of {workers}. Add the cost of {materials} for every product made. To change pence into pounds, divide by {100}. When you compare two methods, name the cheaper one and give a {reason}. Round money to the nearest {penny} at the end.",
      extra: ["1000", "percentage", "weight"]
    },
    exam: [
      {
        type: "Total cost over repeated use",
        command: "Calculate",
        asks: "work out the total cost of two options after the same number of uses, so a customer can compare them.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for the correct total cost of each option. Count a one-off cost once, and add the repeated cost for every use.",
        watch: "Add the cost of the rechargeable batteries and charger once, not every time. Most students scored across the mark range on this type of question.",
        source: "AQA 8552/W June 2019 Question 11 mark scheme and report. The question uses different numbers from the original.",
        question: "A torch can use disposable batteries, which cost £1.80 for each set, or a rechargeable set that costs £9 to buy and £0.02 to charge each time. Work out the total cost to the customer after 10 uses of each option. (2 marks)",
        plan: [
          "Disposable: price of a set × number of uses.",
          "Rechargeable: one-off cost, plus the charge cost × number of uses.",
          "Write both totals with the £ sign."
        ],
        hint: "Which cost do you only pay once?",
        find: "June 2019 Section A, Question 11. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["batteries", "torch", "rechargeable", "disposable", "cost"],
        answer: [
          { text: "Disposable: 10 × £1.80 = £18.00", look: ["£18", "18.00", "10 × 1.80", "10 × £1.80", "10x1.80", "10 x 1.80"], see: "One-off cost and running cost" },
          { text: "Rechargeable: £9 + (10 × £0.02) = £9.20", look: ["9.20", "9 + 0.2", "9 + (10 × 0.02)", "9 + 10 × 0.02", "9+0.2", "9+10×0.02"], see: "One-off cost and running cost" }
        ]
      },
      {
        type: "Total production cost, one worker",
        command: "Calculate",
        asks: "work out the total cost of making several products with one worker, from the labour cost and the tool and material cost.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for a correct step, such as the total cost of one product. <b>One mark</b> for the fully correct final answer. A correct answer earns both marks even with no working.",
        watch: "Students who made an error still gained a mark for using a correct method, so show your steps. The tool and material cost belongs to every product.",
        source: "AQA 8552/W June 2025 Question 24.1 mark scheme and report. The question uses different numbers from the original.",
        question: "A workshop makes four stools, one at a time, with one worker. Tools and materials cost £8 for each stool. The worker is paid £15 per hour and takes 3 hours to make one stool. Calculate the cost of making the four stools. Show your working. (2 marks)",
        plan: [
          "Labour for one stool: hourly rate × hours.",
          "Add the cost of tools and materials for one stool.",
          "Multiply by the number of stools."
        ],
        hint: "Work out one stool first, then scale up.",
        find: "June 2025 Section C, Question 24.1. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["stool", "worker", "labour", "cost", "hour"],
        answer: [
          { text: "One stool: (£15 × 3 hours) + £8 = £53", look: ["£53", "= 53", "15 × 3", "15x3", "15 x 3"], see: "Labour and production costs" },
          { text: "Four stools: £53 × 4 = £212", look: ["212", "53 × 4", "53x4", "53 x 4"], see: "Total cost for a whole order" }
        ]
      },
      {
        type: "Which method is more cost effective",
        command: "Which of the two methods is the more cost effective",
        asks: "compare two total costs, name the cheaper method and explain why.",
        marks: 2, minutes: 3,
        gets: "<b>One mark</b> for naming the correct method. <b>One mark</b> for a valid explanation. The mark scheme accepted points such as lower total labour costs, higher productivity or less production time. A wrong method with a correct reason still earns one mark.",
        watch: "Give a reason, because repeating the question earns no credit. Cheaper or quicker needs more detail. Compare the costs.",
        source: "AQA 8552/W June 2025 Question 24.3 mark scheme and report. The question uses different numbers from the original.",
        question: "Method A makes four stools for £212. Method B, a team of three workers, makes the same four stools for £302. Which method is more cost effective? Explain your answer. (2 marks)",
        plan: [
          "Name the method with the lower total.",
          "Say how much lower, using both totals.",
          "Add a reason, such as lower labour cost."
        ],
        hint: "Which total is smaller, and by how much?",
        find: "June 2025 Section C, Question 24.3. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["method", "cost effective", "stool", "cheaper", "total"],
        answer: [
          { text: "Method A is more cost effective", look: ["method a", "one worker", "method 1", "single worker"], see: "Which method is more cost effective?" },
          { text: "Its total is lower, £212 compared with £302, which is £90 less, because its labour costs are lower", look: ["302 - 212", "302 − 212", "302-212", "£90", "90 less", "90 lower", "90 cheaper", "lower labour", "labour cost is lower", "labour costs are lower", "less labour"], see: "Which method is more cost effective?" }
        ]
      },
      {
        type: "Cost of parts for an order",
        command: "Calculate",
        asks: "work out the total cost of the parts needed for a large order, including spares, and give it in pounds.",
        marks: 3, minutes: 4,
        gets: "<b>One mark</b> for the cost of the parts for one product. <b>One mark</b> for multiplying by the number of products. <b>One mark</b> for the answer in pounds. A correct answer earns all three marks, even with no working.",
        watch: "Where the working was correct but the final answer was wrong, method marks were still awarded, for example for the total number of parts. Make sure your final answer is in £, as the question asks.",
        source: "AQA 8552/W June 2023 Question 15 mark scheme and report. The question uses different numbers from the original.",
        question: "A manufacturer makes 800 jackets. Each jacket needs 6 buttons and one spare button. Each button costs 9 pence. What is the total cost of the buttons for the order? Show your working and give your answer in pounds. (3 marks)",
        plan: [
          "Work out the buttons for one jacket, including the spare.",
          "Find the cost for one jacket, then for 800 jackets.",
          "Change pence into pounds."
        ],
        hint: "Do not forget the spare button on every jacket.",
        find: "June 2023 Section B, Question 15. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["jackets", "buttons", "spare", "pence", "order"],
        answer: [
          { text: "Buttons per jacket: 6 + 1 = 7, and 7 × 9p = 63p", look: ["63p", "7 × 9", "7x9", "7 x 9", "£0.63"], see: "Total cost for a whole order" },
          { text: "For 800 jackets: 63p × 800 = 50 400p", look: ["50400", "50 400", "50,400", "63 × 800", "63x800", "63 x 800", "800 × 63", "800x63"], see: "Total cost for a whole order" },
          { text: "Change to pounds: £504", look: ["£504", "504 ÷ 100", "50400 ÷ 100", "50 400 ÷ 100", "50400/100", "50 400 / 100", "= 504"], see: "Start here: pounds and pence" }
        ]
      },
      {
        type: "Price per pack with a discount",
        command: "Give your answer to the nearest penny",
        asks: "work out the cost of a large number of items priced per pack, then apply a percentage discount.",
        marks: 3, minutes: 4,
        gets: "<b>One mark</b> for the total cost before the discount. <b>One mark</b> for the discount amount, or for multiplying by the percentage you still pay. <b>One mark</b> for the final price to the nearest penny. A correct answer earns all three marks.",
        watch: "Round to the nearest penny, not the nearest 10p. The price is for a pack of 10, so divide the number of items by 10 first.",
        source: "AQA 8552/W June 2024 Question 17 mark scheme and report. The question uses different numbers from the original.",
        question: "A manufacturer buys 1250 hinges at £4.37 per 10 hinges. The manufacturer is then offered a 15% discount. What is the total price for the 1250 hinges? Give your answer to the nearest penny and show your working. (3 marks)",
        plan: [
          "Work out how many packs of 10 you need.",
          "Multiply by the price of a pack.",
          "Take off the 15% discount, or multiply by 0.85.",
          "Round to the nearest penny at the end."
        ],
        hint: "How many packs of 10 are there in 1250?",
        find: "June 2024 Section B, Question 17. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["hinges", "discount", "price", "penny", "10 hinges"],
        answer: [
          { text: "Total before discount: 125 packs × £4.37 = £546.25", look: ["546.25", "125 × 4.37", "125x4.37", "125 x 4.37", "4.37 × 125"], see: "Price per pack and unit cost" },
          { text: "Discount: 15% of £546.25 = £81.94, or £546.25 × 0.85", look: ["81.94", "81.9375", "× 0.85", "x 0.85", "×0.85", "546.25 × 0.85"], see: "Discounts" },
          { text: "Price after the discount: £464.31 to the nearest penny", look: ["464.31", "£464.31"], see: "Discounts" }
        ]
      },
      {
        type: "Total production cost, team of workers",
        command: "Calculate",
        asks: "work out the total cost of making several products with a team, from the total time, the labour cost and the tool and material cost.",
        marks: 4, minutes: 5,
        gets: "<b>Up to three marks</b> for any correct steps from: the total time, the labour cost, the material cost and the total cost. <b>One mark</b> for the fully correct final answer. A correct answer earns all four marks even with no working.",
        watch: "The tool and material cost applies to each product, so multiply it by the number of products. Remember to multiply the hourly rate by the number of workers.",
        source: "AQA 8552/W June 2025 Question 24.2 mark scheme and report. The question uses different numbers from the original.",
        question: "A team of three workers makes four stools together. Each worker is paid £15 per hour. The team takes 1.5 hours to make one stool. Tools and materials cost £8 for each stool. Calculate the total cost of making the four stools. Show your working. (4 marks)",
        plan: [
          "Find the total time for all four stools.",
          "Work out the labour cost: rate × workers × total time.",
          "Work out the material cost for four stools.",
          "Add them to find the total."
        ],
        hint: "How many hours does the whole team work in total, and how many workers are paid?",
        find: "June 2025 Section C, Question 24.2. The paper and mark scheme are on Showbie/D&T Core Knowledge/Maths.",
        focus: ["team", "stools", "workers", "labour", "total cost"],
        answer: [
          { text: "Total time: 4 × 1.5 = 6 hours", look: ["6 hours", "6h", "6 hrs", "4 × 1.5", "4x1.5", "4 x 1.5", "1.5 × 4"], see: "Labour and production costs" },
          { text: "Labour: £15 × 3 workers × 6 hours = £270", look: ["£270", "= 270", "15 × 3 × 6", "15x3x6", "15 x 3 x 6", "3 × 15 × 6", "6 × 15 × 3"], see: "Labour and production costs" },
          { text: "Materials: £8 × 4 = £32", look: ["£32", "= 32", "8 × 4", "8x4", "8 x 4"], see: "Labour and production costs" },
          { text: "Total: £270 + £32 = £302", look: ["£302", "= 302", "270 + 32", "270+32", "270 + £32"], see: "Which method is more cost effective?" }
        ]
      }
    ],
    connect: [
      { q: "Link to percentages: how is a discount the same as finding a percentage of an amount?", a: "A 15% discount means finding 15% of the price, using the price × 0.15, then taking it away. You can also find 85% of the price directly by multiplying by 0.85." },
      { q: "Link to area and volume: a quote is per square metre and you need slabs for a patio. What do you work out first?", a: "The area of the patio, and the area one slab covers. Round up to whole slabs, then multiply by the price of each slab." }
    ],
    links: []
  }
);
