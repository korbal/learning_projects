/*  {
  events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
  squirrel: false
},
*/

// original journal
var JOURNAL = [
  { events: ["carrot", "exercise", "weekend"], squirrel: false },
  {
    events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    squirrel: false
  },
  {
    events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    squirrel: false
  },
  {
    events: [
      "brussel sprouts",
      "ice cream",
      "brushed teeth",
      "computer",
      "weekend"
    ],
    squirrel: false
  },
  {
    events: [
      "potatoes",
      "candy",
      "brushed teeth",
      "exercise",
      "weekend",
      "dentist"
    ],
    squirrel: false
  },
  {
    events: [
      "brussel sprouts",
      "pudding",
      "brushed teeth",
      "running",
      "weekend"
    ],
    squirrel: false
  },
  {
    events: [
      "pizza",
      "brushed teeth",
      "computer",
      "work",
      "touched tree",
      "pina"
    ],
    squirrel: false
  },
  {
    events: ["bread", "beer", "brushed teeth", "cycling", "work", "pina"],
    squirrel: false
  },
  { events: ["cauliflower", "brushed teeth", "work", "pina"], squirrel: false },
  {
    events: ["pizza", "brushed teeth", "cycling", "work", "pina"],
    squirrel: false
  },
  {
    events: ["lasagna", "nachos", "brushed teeth", "work", "pina"],
    squirrel: false
  },
  {
    events: ["brushed teeth", "weekend", "touched tree", "pina"],
    squirrel: false
  },
  {
    events: ["lettuce", "brushed teeth", "television", "weekend", "pina"],
    squirrel: false
  },
  { events: ["spaghetti", "brushed teeth", "work", "pina"], squirrel: false },
  { events: ["brushed teeth", "computer", "work", "pina"], squirrel: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["cauliflower", "reading", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false
  },
  {
    events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    squirrel: false
  },
  { events: ["spaghetti", "nachos", "work"], squirrel: false },
  {
    events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false
  },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    squirrel: false
  },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "work"],
    squirrel: false
  },
  { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work"], squirrel: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
  {
    events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    squirrel: false
  },
  { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "work"], squirrel: false },
  { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
  { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false
  },
  {
    events: ["spaghetti", "pudding", "television", "weekend"],
    squirrel: false
  },
  {
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false
  },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "television", "work"],
    squirrel: false
  },
  { events: ["pizza", "cycling", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  {
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false
  },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    squirrel: false
  },
  {
    events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    squirrel: false
  },
  {
    events: ["lasagna", "brushed teeth", "cycling", "weekend"],
    squirrel: false
  },
  {
    events: [
      "cauliflower",
      "peanuts",
      "brushed teeth",
      "computer",
      "work",
      "touched tree"
    ],
    squirrel: false
  },
  {
    events: ["lettuce", "brushed teeth", "television", "work"],
    squirrel: false
  },
  {
    events: ["potatoes", "brushed teeth", "computer", "work"],
    squirrel: false
  },
  { events: ["bread", "candy", "work"], squirrel: false },
  { events: ["potatoes", "nachos", "work"], squirrel: false },
  {
    events: ["carrot", "pudding", "brushed teeth", "weekend"],
    squirrel: false
  },
  {
    events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    squirrel: false
  },
  { events: ["brussel sprouts", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["candy", "brushed teeth", "work"], squirrel: false },
  {
    events: ["brussel sprouts", "brushed teeth", "computer", "work"],
    squirrel: false
  },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
  {
    events: ["spaghetti", "candy", "television", "work", "touched tree"],
    squirrel: false
  },
  { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false
  },
  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  {
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false
  },
  { events: ["brushed teeth", "running", "work"], squirrel: false },
  {
    events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    squirrel: false
  },
  {
    events: ["lasagna", "brushed teeth", "television", "work"],
    squirrel: false
  },
  {
    events: ["cauliflower", "brushed teeth", "running", "work"],
    squirrel: false
  },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    squirrel: false
  },
  { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["bread", "brushed teeth", "television", "weekend"],
    squirrel: false
  },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    squirrel: false
  }
];

// this is for success for DURATION
/*
sleep_deprived: 0.2136233148205519
app.js:836 lucid: 0.22908106449636376
app.js:836 normaflor: 0.23241742005034205
app.js:836 drunk: -0.22144409528221717
app.js:836 other: -0.35229742431261823
app.js:836 extracoffee: -0.3947040205951424
app.js:836 cheatday: -0.2672612419124244

*/
JOURNAL = [
  { events: ["morning_gorgo"], squirrel: false },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_protein",
      "evening_no_drink",
      "evening_magnesium",
      "sleep_socks",
      "evening_prog_relax",
      "perinatus",
      "sleep_was_cold",
      "sleep_downstairs"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "kegel",
      "perinatus",
      "evening_protein",
      "evening_magnesium",
      "evening_prog_relax",
      "sleep_socks",
      "sleep_downstairs",
      "sleep_pijama"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "evening_prog_relax",
      "evening_booze",
      "sleep_socks",
      "sleep_downstairs",
      "sleep_pijama"
    ],
    squirrel: true
  },
  { events: ["no_sport", "evening_booze", "travel"], squirrel: false },
  { events: ["no_sport", "evening_booze", "travel"], squirrel: true },
  {
    events: [
      "no_sport",
      "evening_booze",
      "travel",
      "sleep_deprived",
      "allergy_season"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "travel",
      "sleep_sleepmaster",
      "sleep_deprived",
      "allergy_season"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_no_drink",
      "evening_magnesium",
      "evening_prog_relax",
      "sleep_sleepmaster",
      "happy"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "kegel",
      "evening_magnesium",
      "evening_prog_relax",
      "evening_booze",
      "sleep_sleepmaster",
      "lucid",
      "normaflor",
      "grind"
    ],
    squirrel: true
  },
  {
    events: [
      "long_walk",
      "evening_magnesium",
      "sleep_sleepmaster",
      "normaflor",
      "grind",
      "masszázs"
    ],
    squirrel: false
  },
  { events: ["no_sport", "travel", "drunk"], squirrel: false },
  {
    events: ["no_sport", "drunk", "travel", "sleep_sleepmaster"],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_deprived",
      "normaflor",
      "grind",
      "sleep_sleepmaster"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "lucid",
      "sex"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_no_drink",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "grind"
    ],
    squirrel: true
  },
  {
    events: [
      "perinatus",
      "evening_magnesium",
      "evening_booze",
      "sleep_sleepmaster",
      "normaflor",
      "long_walk"
    ],
    squirrel: true
  },
  { events: [""], squirrel: true },
  {
    events: ["morning_gorgo", "kegel", "normaflor", "grind", "drunk"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_sleepmaster",
      "sleep_deprived",
      "normaflor",
      "sex"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_sleepmaster",
      "normaflor",
      "kegel"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "grind",
      "kegel",
      "evening_magnesium",
      "evening_booze",
      "sleep_sleepmaster",
      "normaflor"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "perinatus",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "grind",
      "other",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "kegel",
      "evening_magnesium",
      "sleep_downstairs",
      "normaflor",
      "levendulatea",
      "other",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "other",
      "extracoffee",
      "sex"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "other",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_booze",
      "travel",
      "grind",
      "other",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_booze",
      "lucid",
      "extracoffee",
      "travel",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: ["no_sport", "evening_magnesium", "extracoffee"],
    squirrel: false
  },
  {
    events: [
      "afternoon_gorgo",
      "evening_protein",
      "evening_magnesium",
      "sleep_socks",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: [
      "afternoon_gorgo",
      "kegel",
      "grind",
      "evening_protein",
      "evening_magnesium",
      "evening_booze",
      "sleep_socks",
      "sex",
      "extracoffee",
      "evening_magnesium"
    ],
    squirrel: false
  },
  {
    events: [
      "long_walk",
      "evening_protein",
      "evening_magnesium",
      "evening_booze",
      "masszázs"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium_500",
      "evening_booze",
      "extracoffee",
      "sleep_was_hot"
    ],
    squirrel: false
  },
  {
    events: [
      "afternoon_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "long_walk",
      "extracoffee",
      "cheatday",
      "meditálás"
    ],
    squirrel: false
  },
  {
    events: [
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "sleep_socks",
      "levendulatea",
      "extracoffee",
      "telek_melo"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "long_walk",
      "stressful_day"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "perinatus",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "grind",
      "extracoffee",
      "meditálás"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium_500",
      "evening_magnesium",
      "evening_booze",
      "grind"
    ],
    squirrel: true
  },
  {
    events: ["cheatday", "afternoon_gorgo", "sleep_sleepmaster", "drunk"],
    squirrel: false
  },
  {
    events: ["no_sport", "sleep_deprived", "telek_melo", "kenese"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium_500",
      "evening_magnesium",
      "evening_booze",
      "grind",
      "sex",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "meditálás",
      "stressful_day",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "grind",
      "stressful_day",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "kegel",
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_sleepmaster",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: ["grind", "cheatday", "kegel", "no_sport", "drunk"],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_sleepmaster",
      "sleep_deprived"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "sex"
    ],
    squirrel: true
  },
  {
    events: [
      "kegel",
      "perinatus",
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "grind",
      "stressful_day"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "grind",
      "extracoffee",
      "meditálás",
      "stressful_day"
    ],
    squirrel: false
  }
];

// THIS IS SUCCESS FOR CONTINUITY
JOURNAL = [
  { events: ["morning_gorgo"], squirrel: true },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_protein",
      "evening_no_drink",
      "evening_magnesium",
      "sleep_socks",
      "evening_prog_relax",
      "perinatus",
      "sleep_was_cold",
      "sleep_downstairs"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "kegel",
      "perinatus",
      "evening_protein",
      "evening_magnesium",
      "evening_prog_relax",
      "sleep_socks",
      "sleep_downstairs",
      "sleep_pijama"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "evening_prog_relax",
      "evening_booze",
      "sleep_socks",
      "sleep_downstairs",
      "sleep_pijama"
    ],
    squirrel: true
  },
  { events: ["no_sport", "evening_booze", "travel"], squirrel: true },
  { events: ["no_sport", "evening_booze", "travel"], squirrel: false },
  {
    events: [
      "no_sport",
      "evening_booze",
      "travel",
      "sleep_deprived",
      "allergy_season"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "travel",
      "sleep_sleepmaster",
      "sleep_deprived",
      "allergy_season"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_no_drink",
      "evening_magnesium",
      "evening_prog_relax",
      "sleep_sleepmaster",
      "happy"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "kegel",
      "evening_magnesium",
      "evening_prog_relax",
      "evening_booze",
      "sleep_sleepmaster",
      "lucid",
      "normaflor",
      "grind"
    ],
    squirrel: false
  },
  {
    events: [
      "long_walk",
      "evening_magnesium",
      "sleep_sleepmaster",
      "normaflor",
      "grind",
      "masszázs"
    ],
    squirrel: true
  },
  { events: ["no_sport", "travel", "drunk"], squirrel: true },
  {
    events: ["no_sport", "drunk", "travel", "sleep_sleepmaster"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_deprived",
      "normaflor",
      "grind",
      "sleep_sleepmaster"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "lucid",
      "sex"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_no_drink",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "grind"
    ],
    squirrel: true
  },
  {
    events: [
      "perinatus",
      "evening_magnesium",
      "evening_booze",
      "sleep_sleepmaster",
      "normaflor",
      "long_walk"
    ],
    squirrel: true
  },

  {
    events: ["morning_gorgo", "kegel", "normaflor", "grind", "drunk"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_sleepmaster",
      "sleep_deprived",
      "normaflor",
      "sex"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_sleepmaster",
      "normaflor",
      "kegel"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "grind",
      "kegel",
      "evening_magnesium",
      "evening_booze",
      "sleep_sleepmaster",
      "normaflor"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "perinatus",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "grind",
      "other",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "kegel",
      "evening_magnesium",
      "sleep_downstairs",
      "normaflor",
      "levendulatea",
      "other",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "other",
      "extracoffee",
      "sex"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "other",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_booze",
      "travel",
      "grind",
      "other",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_booze",
      "lucid",
      "extracoffee",
      "travel",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: ["no_sport", "evening_magnesium", "extracoffee"],
    squirrel: true
  },
  {
    events: [
      "afternoon_gorgo",
      "evening_protein",
      "evening_magnesium",
      "sleep_socks",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: [
      "afternoon_gorgo",
      "kegel",
      "grind",
      "evening_protein",
      "evening_magnesium",
      "evening_booze",
      "sleep_socks",
      "sex",
      "extracoffee",
      "evening_magnesium"
    ],
    squirrel: true
  },
  {
    events: [
      "long_walk",
      "evening_protein",
      "evening_magnesium",
      "evening_booze",
      "masszázs"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium_500",
      "evening_booze",
      "extracoffee",
      "sleep_was_hot"
    ],
    squirrel: true
  },
  {
    events: [
      "afternoon_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "long_walk",
      "extracoffee",
      "cheatday",
      "meditálás"
    ],
    squirrel: true
  },
  {
    events: [
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "sleep_socks",
      "levendulatea",
      "extracoffee",
      "telek_melo"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "long_walk",
      "stressful_day"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "perinatus",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "grind",
      "extracoffee",
      "meditálás"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium_500",
      "evening_magnesium",
      "evening_booze",
      "grind"
    ],
    squirrel: false
  },
  {
    events: ["cheatday", "afternoon_gorgo", "sleep_sleepmaster", "drunk"],
    squirrel: true
  },
  {
    events: ["no_sport", "sleep_deprived", "telek_melo", "kenese"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium_500",
      "evening_magnesium",
      "evening_booze",
      "grind",
      "sex",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "meditálás",
      "stressful_day",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "grind",
      "stressful_day",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: [
      "kegel",
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_sleepmaster",
      "no_coffee"
    ],
    squirrel: true
  },
  {
    events: ["grind", "cheatday", "kegel", "no_sport", "drunk"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_sleepmaster",
      "sleep_deprived"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "sex"
    ],
    squirrel: true
  },
  {
    events: [
      "kegel",
      "perinatus",
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "grind",
      "stressful_day"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "grind",
      "extracoffee",
      "meditálás",
      "stressful_day"
    ],
    squirrel: true
  }
];

// this is success for bathroom trips
JOURNAL = [
  { events: ["morning_gorgo"], squirrel: false },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_protein",
      "evening_no_drink",
      "evening_magnesium",
      "sleep_socks",
      "evening_prog_relax",
      "perinatus",
      "sleep_was_cold",
      "sleep_downstairs"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "kegel",
      "perinatus",
      "evening_protein",
      "evening_magnesium",
      "evening_prog_relax",
      "sleep_socks",
      "sleep_downstairs",
      "sleep_pijama"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "evening_prog_relax",
      "evening_booze",
      "sleep_socks",
      "sleep_downstairs",
      "sleep_pijama"
    ],
    squirrel: false
  },
  { events: ["no_sport", "evening_booze", "travel"], squirrel: false },
  { events: ["no_sport", "evening_booze", "travel"], squirrel: false },
  {
    events: [
      "no_sport",
      "evening_booze",
      "travel",
      "sleep_deprived",
      "allergy_season"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "travel",
      "sleep_sleepmaster",
      "sleep_deprived",
      "allergy_season"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_no_drink",
      "evening_magnesium",
      "evening_prog_relax",
      "sleep_sleepmaster",
      "happy"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "kegel",
      "evening_magnesium",
      "evening_prog_relax",
      "evening_booze",
      "sleep_sleepmaster",
      "lucid",
      "normaflor",
      "grind"
    ],
    squirrel: false
  },
  {
    events: [
      "long_walk",
      "evening_magnesium",
      "sleep_sleepmaster",
      "normaflor",
      "grind",
      "masszázs"
    ],
    squirrel: false
  },
  { events: ["no_sport", "travel", "drunk"], squirrel: true },
  {
    events: ["no_sport", "drunk", "travel", "sleep_sleepmaster"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_deprived",
      "normaflor",
      "grind",
      "sleep_sleepmaster"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "lucid",
      "sex"
    ],
    squirrel: true
  },
  {
    events: [
      "morning_gorgo",
      "evening_no_drink",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "grind"
    ],
    squirrel: false
  },
  {
    events: [
      "perinatus",
      "evening_magnesium",
      "evening_booze",
      "sleep_sleepmaster",
      "normaflor",
      "long_walk"
    ],
    squirrel: false
  },
  { events: [""], squirrel: false },
  {
    events: ["morning_gorgo", "kegel", "normaflor", "grind", "drunk"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_sleepmaster",
      "sleep_deprived",
      "normaflor",
      "sex"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "sleep_sleepmaster",
      "normaflor",
      "kegel"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "grind",
      "kegel",
      "evening_magnesium",
      "evening_booze",
      "sleep_sleepmaster",
      "normaflor"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "perinatus",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "normaflor",
      "grind",
      "other",
      "extracoffee"
    ],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "kegel",
      "evening_magnesium",
      "sleep_downstairs",
      "normaflor",
      "levendulatea",
      "other",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "other",
      "extracoffee",
      "sex"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "sleep_downstairs",
      "sleep_sleepmaster",
      "other",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_booze",
      "travel",
      "grind",
      "other",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_booze",
      "lucid",
      "extracoffee",
      "travel",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: ["no_sport", "evening_magnesium", "extracoffee"],
    squirrel: false
  },
  {
    events: [
      "afternoon_gorgo",
      "evening_protein",
      "evening_magnesium",
      "sleep_socks",
      "extracoffee"
    ],
    squirrel: false
  },
  {
    events: [
      "afternoon_gorgo",
      "kegel",
      "grind",
      "evening_protein",
      "evening_magnesium",
      "evening_booze",
      "sleep_socks",
      "sex",
      "extracoffee",
      "evening_magnesium"
    ],
    squirrel: false
  },
  {
    events: [
      "long_walk",
      "evening_protein",
      "evening_magnesium",
      "evening_booze",
      "masszázs"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium_500",
      "evening_booze",
      "extracoffee",
      "sleep_was_hot"
    ],
    squirrel: false
  },
  {
    events: [
      "afternoon_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "long_walk",
      "extracoffee",
      "cheatday",
      "meditálás"
    ],
    squirrel: false
  },
  {
    events: [
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "sleep_socks",
      "levendulatea",
      "extracoffee",
      "telek_melo"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "long_walk",
      "stressful_day"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "perinatus",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "grind",
      "extracoffee",
      "meditálás"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium_500",
      "evening_magnesium",
      "evening_booze",
      "grind"
    ],
    squirrel: false
  },
  {
    events: ["cheatday", "afternoon_gorgo", "sleep_sleepmaster", "drunk"],
    squirrel: true
  },
  {
    events: ["no_sport", "sleep_deprived", "telek_melo", "kenese"],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium_500",
      "evening_magnesium",
      "evening_booze",
      "grind",
      "sex",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "meditálás",
      "stressful_day",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "grind",
      "stressful_day",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: [
      "kegel",
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_sleepmaster",
      "no_coffee"
    ],
    squirrel: false
  },
  {
    events: ["grind", "cheatday", "kegel", "no_sport", "drunk"],
    squirrel: true
  },
  {
    events: [
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_sleepmaster",
      "sleep_deprived"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "kegel",
      "evening_magnesium",
      "evening_magnesium_500",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "sex"
    ],
    squirrel: false
  },
  {
    events: [
      "kegel",
      "perinatus",
      "no_sport",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_booze",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "grind",
      "stressful_day"
    ],
    squirrel: false
  },
  {
    events: [
      "morning_gorgo",
      "evening_magnesium",
      "evening_magnesium_500",
      "evening_prog_relax",
      "evening_booze",
      "sleep_was_cold",
      "sleep_sleepmaster",
      "grind",
      "extracoffee",
      "meditálás",
      "stressful_day"
    ],
    squirrel: false
  },
  { events: [""], squirrel: [""] }
];

// adding entry to journal
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

/*
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
*/

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log("---------------");

console.log(journalEvents(JOURNAL));
for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

// Most correlations seem to lie close to zero. Eating carrots, bread, or pudding apparently does not trigger squirrel-lycanthropy. It does seem to occur somewhat more often on weekends. Let’s filter the results to show only correlations greater than 0.1 or less than -0.1.

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.2 || correlation < -0.2) {
    console.log(event + ":", correlation);
  }
}

// Aha! There are two factors with a correlation that’s clearly stronger than the others. Eating peanuts has a strong positive effect on the chance of turning into a squirrel, whereas brushing his teeth has a significant negative effect.

// Interesting. Let’s try something.

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));
// //1
// That’s a strong result. The phenomenon occurs precisely when Jacques eats peanuts and fails to brush his teeth. If only he weren’t such a slob about dental hygiene, he’d have never even noticed his affliction.

// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// addEntry(
//   [
//     "work",
//     "ice cream",
//     "cauliflower",
//     "lasagna",
//     "touched tree",
//     "brushed teeth"
//   ],
//   false
// );
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
