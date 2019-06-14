// nutrition data file

var terms = [],
    termNames = [],
    starches = [],
    nonStarches = [],
    gI = "<span id='goodFood'>&#9745;</span>",    // good food icon
    bI = "<span id='badFood'>&#9746;</span>";    // bad food icon

    // good msgs
    nonStarchTxt = "Non-starchy vegetable",
    leanProteinTxt = "Lean protein",

    // bad msgs
    starchTxt = "Starch",
    moreFatTxt = "More fat than protein",
    highFatTxt = "High in fat",
    highSugarTxt = "High in sugar",

    // foods/drinks to search through
    data = [
    "almond butter", bI, [moreFatTxt],
    "asparagus", gI, [nonStarchTxt],
    "artichoke", gI, [nonStarchTxt],
    "bacon", bI, [highFatTxt, moreFatTxt],
    "bean (not incl. string/green bean)", bI, [starchTxt],
    "bologna", bI, [highFatTxt, moreFatTxt],
    "bread", bI, [starchTxt],
    "breaded food", bI, [highFatTxt],
    "broccoli", gI, [nonStarchTxt],
    "brussels sprout", gI, [nonStarchTxt],
    "butter", bI, [highFatTxt],
    "cabbage", gI, [nonStarchTxt],
    "cake", bI, [highSugarTxt],
    "candy", bI, [highSugarTxt],
    "carrot", gI, [nonStarchTxt],
    "cauliflower", gI, [nonStarchTxt],
    "celery", gI, [nonStarchTxt],
    "cereal (hot & cold)", bI, [starchTxt],
    "cheese (reduced fat)", gI, [leanProteinTxt],
    "chicken", gI, [leanProteinTxt],
    "collard greens", gI, [nonStarchTxt],
    "cookie", bI, [highSugarTxt],
    "cooking oil", bI, [highFatTxt],
    "corn", bI, [starchTxt],
    "cottage cheese (low fat)", gI, [leanProteinTxt],
    "crackers", bI, [starchTxt],
    "creamy dressing", bI, [highFatTxt],
    "creamy sauce", bI, [highFatTxt],
    "creamy soup", bI, [highFatTxt],
    "cucumber", gI, [nonStarchTxt],
    "eggplant", gI, [nonStarchTxt],
    "egg (raw)", gI, [leanProteinTxt],
    "egg (hard-boiled)", gI, [leanProteinTxt],
    "fish", gI, [leanProteinTxt],
    "flour", bI, [starchTxt],
    "fried food", bI, [highFatTxt],
    "frozen yogurt", bI, [highSugarTxt],
    "fruit juice", bI, [highSugarTxt],
    "fruit punch", bI, [highSugarTxt],
    "grains", bI, [starchTxt],
    "granola", bI, [starchTxt],
    "grease", bI, [highFatTxt],
    "green bean", gI, [nonStarchTxt],
    "hot dog", bI, [highFatTxt, moreFatTxt],
    "ice cream", bI, [highSugarTxt],
    "kale", gI, [nonStarchTxt],
    "leek", gI, [nonStarchTxt],
    "lettuce", gI, [nonStarchTxt],
    "multigrain bar", bI, [starchTxt],
    "mushroom", gI, [nonStarchTxt],
    "nut butter (peanut butter, almond butter, etc.)", bI, [highFatTxt],
    "nut", bI, [highFatTxt],
    "oats", bI, [starchTxt],
    "okra", gI, [nonStarchTxt],
    "onion", gI, [nonStarchTxt],
    "quinoa", bI, [starchTxt],
    "pasta (gluten or gluten-free)", bI, [starchTxt],
    "pea", bI, [starchTxt],
    "peanut butter", bI, [highFatTxt, moreFatTxt],
    "pepperoni", bI, [highFatTxt, moreFatTxt],
    "peppers (green pepper, red pepper, etc.)", gI, [nonStarchTxt],
    "popcorn", bI, [starchTxt],
    "potato", bI, [starchTxt],
    "protein powder", gI, [leanProteinTxt],
    "radish", gI, [nonStarchTxt],
    "rice", bI, [starchTxt],
    "rice cake", bI, [starchTxt],
    "salami", bI, [highFatTxt, moreFatTxt],
    "sausage", bI, [highFatTxt, moreFatTxt],
    "seed", bI, [highFatTxt],
    "shellfish", gI, [leanProteinTxt],
    "soda", bI, [highSugarTxt],
    "spinach", gI, [nonStarchTxt],
    "squash", gI, [nonStarchTxt],
    "string bean", gI, [nonStarchTxt],
    "sweet potato", bI, [starchTxt],
    "sweet tea", bI, [highSugarTxt],
    "sweets & dessert", bI, [highSugarTxt],
    "tofu", gI, [leanProteinTxt],
    "tomato", gI, [nonStarchTxt],
    "tortilla (incl. low-carb tortilla)", bI, [starchTxt],
    "turkey", gI, [leanProteinTxt],
    "turnip", gI, [nonStarchTxt],
    "wrap", bI, [starchTxt],
    "yogurt (low fat)", gI, [leanProteinTxt],
    "zucchini", gI, [nonStarchTxt]
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
