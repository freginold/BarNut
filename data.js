// nutrition data file

var terms = [],
    termNames = [],
    starches = [],
    nonStarches = [],
    gI = "<span class='goodFood'>&#10004;</span>",    // good food icon
    bI = "<span class='badFood'>&#10060;</span>";    // bad food icon
    nI = "<span class='neutralFood'>&#9432;</span>";    // neutral food icon

    // good msgs
    nonStarchTxt = "Non-starchy vegetable",
    leanProteinTxt = "Lean protein",
    ifUnswTxt = "If unsweetened",
    sugFreeTxt = "Sugar free",

    // neutral msgs
    isolateTxt = 'Look for "isolate" as the first ingredient',
    sugar15gTxt = "Look for 15g of sugar or less",
    protein15gTxt = "Look for > 15g of protein",

    // bad msgs
    starchTxt = "Starch",
    moreFatTxt = "More fat than protein",
    highFatTxt = "High in fat",
    highSugarTxt = "High in sugar",

    // foods/drinks to search through
    data = [
    "alcohol", bI, ["Empty calories (no nourishment or satiety)", "After surgery, you can reach dangerous levels of intoxication quickly",
        "Can lead to ulcers or other stomach/GI complications", "Dehydrates you", "Depletes your body of certain nutrients"],
    "almond butter", bI, [moreFatTxt],
    "almond milk", gI, [ifUnswTxt],
    "applesauce", gI, [ifUnswTxt, sugar15gTxt],
    "artichoke", gI, [nonStarchTxt],
    "arugula", gI, [nonStarchTxt],
    "asparagus", gI, [nonStarchTxt],
    "bacon", bI, [highFatTxt, moreFatTxt],
    "Bai waters", gI, [],
    "bean (not incl. string/green bean)", bI, [starchTxt],
    "bok choy", gI, [nonStarchTxt],
    "bologna", bI, [highFatTxt, moreFatTxt],
    "bread", bI, [starchTxt],
    "breaded food", bI, [highFatTxt],
    "broccoli", gI, [nonStarchTxt],
    "broccoli rabe", gI, [nonStarchTxt],
    "brussels sprout", gI, [nonStarchTxt],
    "butter", bI, [highFatTxt],
    "cabbage (green, red, napa, savoy)", gI, [nonStarchTxt],
    "cake", bI, [highSugarTxt],
    "candy", bI, [highSugarTxt],
    "canned/packaged fruit in own juice", gI, [sugar15gTxt],
    "carrot", gI, [nonStarchTxt],
    "cashew milk", gI, [ifUnswTxt],
    "cauliflower", gI, [nonStarchTxt],
    "celery", gI, [nonStarchTxt],
    "cereal (hot & cold)", bI, [starchTxt],
    "cheese (reduced fat)", gI, [leanProteinTxt],
    "chicken", gI, [leanProteinTxt],
    "coffee", gI, ["OK after 1 month", "Does not count toward fluid goals"],
    "coffee (decaf)", gI, ["OK after 3 weeks"],
    "collard greens", gI, [nonStarchTxt],
    "cookie", bI, [highSugarTxt],
    "cooking oil", bI, [highFatTxt],
    "corn", bI, [starchTxt],
    "cottage cheese (low fat)", gI, [leanProteinTxt],
    "crackers", bI, [starchTxt],
    "creamer", gI, ["If sugar free and low fat"],
    "creamy dressing", bI, [highFatTxt],
    "creamy sauce", bI, [highFatTxt],
    "creamy soup", bI, [highFatTxt],
    "Crystal Light powder drink mix", gI, [sugFreeTxt],
    "cucumber", gI, [nonStarchTxt],
    "daikon radish", gI, [nonStarchTxt],
    "Diet V8 Splash", gI, [],
    "eggplant", gI, [nonStarchTxt],
    "egg (raw)", gI, [leanProteinTxt],
    "egg (hard-boiled)", gI, [leanProteinTxt],
    "endive", gI, [nonStarchTxt],
    "escarole", gI, [nonStarchTxt],
    "fennel", gI, [nonStarchTxt],
    "fish", gI, [leanProteinTxt],
    "flavored water", gI, ["If no sugar"],
    "flour", bI, [starchTxt],
    "fried food", bI, [highFatTxt],
    "frozen yogurt", bI, [highSugarTxt],
    "fruit cup", gI, [sugar15gTxt],
    "fruit juice", bI, [highSugarTxt],
    "fruit products", gI, [sugar15gTxt],
    "fruit punch", bI, [highSugarTxt],
    "full-fat dairy products", bI, [moreFatTxt],
    "garlic", gI, [nonStarchTxt],
    "Gatorade", bI, ["There are no sugar-free Gatorade products"],
    "grains", bI, [starchTxt],
    "granola", bI, [starchTxt],
    "grease", bI, [highFatTxt],
    "green bean", gI, [nonStarchTxt],
    "half and half", gI, ["If fat free"],
    "heart of palm", gI, [nonStarchTxt],
    "hot dog", bI, [highFatTxt, moreFatTxt],
    "ice cream", bI, [highSugarTxt],
    "jicama", gI, [nonStarchTxt],
    "kale", gI, [nonStarchTxt],
    "leek", gI, [nonStarchTxt],
    "lemonade (diet)", gI, [],
    "lettuce (all kinds)", gI, [nonStarchTxt],
    "milk", gI, ["fat free or 1%", sugar15gTxt],
    "Mio powder drink mix", gI, [sugFreeTxt],
    "multigrain bar", bI, [starchTxt],
    "mushroom (all kinds)", gI, [nonStarchTxt],
    "mustard greens", gI, [nonStarchTxt],
    "nut butter (peanut butter, almond butter, etc.)", bI, [highFatTxt],
    "nut", bI, [highFatTxt],
    "oats", bI, [starchTxt],
    "Ocean Spray Sugar Free juice", gI, [sugFreeTxt],
    "okra", gI, [nonStarchTxt],
    "onion", gI, [nonStarchTxt],
    "quinoa", bI, [starchTxt],
    "parsley", gI, [nonStarchTxt],
    "pasta (gluten or gluten-free)", bI, [starchTxt],
    "pea", bI, [starchTxt],
    "peanut butter", bI, [highFatTxt, moreFatTxt],
    "pepperoncini", gI, [nonStarchTxt],
    "pepperoni", bI, [highFatTxt, moreFatTxt],
    "peppers (green, red, etc.)", gI, [nonStarchTxt],
    "pickle", gI, [nonStarchTxt],
    "pimiento", gI, [nonStarchTxt],
    "popcorn", bI, [starchTxt],
    "potato", bI, [starchTxt],
    "Powerade Zero", gI, [],
    "Propel powder drink mix", gI, [sugFreeTxt],
    "protein bar", gI, [isolateTxt, protein15gTxt, "Not to be used until week 3"],
    "protein powder", gI, [leanProteinTxt],
    "protein shake (ready-made)", gI, [isolateTxt, protein15gTxt],
    "radish", gI, [nonStarchTxt],
    "rice", bI, [starchTxt],
    "rice cake", bI, [starchTxt],
    "rhubarb", gI, [nonStarchTxt],
    "salami", bI, [highFatTxt, moreFatTxt],
    "sauerkraut", gI, [nonStarchTxt],
    "sausage", bI, [highFatTxt, moreFatTxt],
    "scallions", gI, [nonStarchTxt],
    "seaweed", gI, [nonStarchTxt],
    "seed", bI, [highFatTxt],
    "shallots", gI, [nonStarchTxt],
    "shellfish", gI, [leanProteinTxt],
    "snap pea", gI, [nonStarchTxt],
    "snow pea", gI, [nonStarchTxt],
    "Sobe Lifewater", gI, [],
    "soda", bI, [highSugarTxt],
    "soy milk", gI, [ifUnswTxt],
    "spaghetti squash", gI, [nonStarchTxt],
    "spinach", gI, [nonStarchTxt],
    "sprouts", gI, [nonStarchTxt],
    "squash", gI, [nonStarchTxt],
    "store brand powder drink mix", gI, [sugFreeTxt],
    "string bean", gI, [nonStarchTxt],
    "summer squash (yellow, zucchini)", gI, [nonStarchTxt],
    "sweet potato", bI, [starchTxt],
    "sweet tea", bI, [highSugarTxt],
    "sweets & dessert", bI, [highSugarTxt],
    "Swiss chard", gI, [nonStarchTxt],
    "tea (decaf)", gI, [],
    "tea (herbal)", gI, [],
    "tofu", gI, [leanProteinTxt],
    "tomatillo", gI, [nonStarchTxt],
    "tomato (fresh, canned)", gI, [nonStarchTxt],
    "tortilla (incl. low-carb tortilla)", bI, [starchTxt],
    "True Lemon powder drink mix", gI, [sugFreeTxt],
    "turkey", gI, [leanProteinTxt],
    "turnip", gI, [nonStarchTxt],
    "Vitamin Water Zero", gI, [],
    "wax bean", gI, [nonStarchTxt],
    "winter squash (butternut, acorn, etc.)", gI, [nonStarchTxt],
    "wrap", bI, [starchTxt],
    "yogurt (low fat)", gI, [leanProteinTxt, sugar15gTxt],
    "zucchini noodles", gI, [nonStarchTxt]
],

// exercise guidance -- 1st line is title
    exerciseData = [
        [
            "Exercise Guidance / Advice",
            "Start slowly (even just 1-2 minutes). Progress to 30 minutes at least 5 days per week.",
            "Exercise should be approved by your physician and included in your daily routine.",
            "Weight lifting can help rebuild some of the muscle normally lost with large weight loss."
        ],
        [
            "Recommended Activities",
            "Walking -- outside, in a mall, on a treadmill",
            "Recumbent bike",
            "Water aerobics",
            "Swimming",
            "Weight lifting",
            "Dancing"
        ],
        [
            "Benefits of Exercise",
            "Decreases your risk of chronic disease",
            "Gives you more energy",
            "Helps you sleep better",
            "Improves your self-esteem"
        ],
        [
            "Supplemental Activities",
            "Park farther away in the parking lot",
            "March in place during TV commercials",
            "Take a flight of stairs instead of the elevator"
        ]
    ];

// fluids guidance -- 1st line is title
fluidsData = [
    [
        "Fluids Guidance",
        "Drink at least 64 ounces every day.",
        "Don't drink with a meal or for 30 minutes after.",
        "Take your water bottle everywhere."
    ],
    [
        "Fluids to Avoid",
        "Decaf coffee - 3 weeks",
        "Caffeine - 1 month",
        "Alcohol (all types) - 1 year",
        "Carbonated drinks - forever",
        "Drinks with sugar (even juice) - forever"
    ]
];

// fruit guidance -- 1st line is title
fruitData = [
    [
        "Fruit Servings",
        "Have up to 3 servings per day",
        "1 serving = 1 cup or a small piece of fruit",
        "For fruit smoothies, limit fruit to 1/2 cup"
    ],
    [
        "Fruit Guidance",
        "Pair fruit with a protein for a snack to prevent blood sugar spikes.",
        "Eat fruit after protein and non-starch vegetables, if still hungry."
    ],
    [
        "Possible Fruit Intolerances",
        "Fruit with tough skin",
        "Dried fruit",
        "Hard fruit",
        "Citrus fruit"
    ]
];

// external links -- 1st line is title
linkData = [
    [
        "GBMC Sites",
        "GBMC - Bariatric Surgery & COMP","https://www.gbmc.org/weightloss",
        "B4 Fitness & Lifestyle Coaching", "https://www.b4fitlife.com/",
        "Facebook - GBMC COMP","https://www.facebook.com/GBMCWeightLoss",
        "Facebook - B4 Fitness & Lifestyle Coaching","https://www.facebook.com/b4fitlife",
        "Pinterest - GBMC HealthCare","https://www.pinterest.com/gbmchealthcare/",
        "Instagram - GBMC HealthCare","https://www.instagram.com/gbmchealthcare/"
    ],
    [
        "Recipe Sites",
        "Bariatric Foodie","https://www.bariatricfoodie.com/",
        "BariatricEating.com","https://www.bariatriceating.com/",
        "My Bariatric Life","http://www.mybariatriclife.org/",
        "Karen Mangum Nutrition - Bariatric Friendly Main Dishes","https://karenmangum.com/category/bariatric-friendly-main-dishes/",
        "Skinny Taste","https://www.skinnytaste.com/",
        "Facebook - Bariatric Recipes for Me","https://www.facebook.com/bariatricrecipesforme",
        "Pinterest - Bariatric Recipes", "https://www.pinterest.com/explore/bariatric-recipes/"
    ]
];
