// nutrition JS file

var terms = [],
    termNames = [],
    gI = "<span id='goodFood'>&#9745;</span>",    // good food icon
    bI = "<span id='badFood'>&#9746;</span>",    // bad food icon
    data = [
        "almond butter", bI, "Avoid - smore fat than protein",
        "asparagus", gI, "Non-starchy vegetable",
        "artichoke", gI, "Non-starchy vegetable",
        "bacon", bI, "Avoid - high in fat, more fat than protein",
        "bean", bI, "Avoid - starch (except string/green beans)",
        "bologna", bI, "Avoid - high in fat, more fat than protein",
        "bread", bI, "Avoid - starch",
        "breaded food", bI, "Avoid - high in fat",
        "broccoli", gI, "Non-starchy vegetable",
        "brussels sprout", gI, "Non-starchy vegetable",
        "butter", bI, "Avoid - high in fat",
        "cabbage", gI, "Non-starchy vegetable",
        "cake", bI, "Avoid - high in sugar",
        "candy", bI, "Avoid - high in sugar",
        "carrot", gI, "Non-starchy vegetable",
        "cauliflower", gI, "Non-starchy vegetable",
        "celery", gI, "Non-starchy vegetable",
        "cereal", bI, "Avoid - starch (hot & cold cereal)",
        "cheese (reduced fat)", gI, "Lean protein",
        "chicken", gI, "Lean protein",
        "collard greens", gI, "Non-starchy vegetable",
        "cookie", bI, "Avoid - high in sugar",
        "cooking oil", bI, "Avoid - high in fat",
        "corn", bI, "Avoid - starch",
        "cottage cheese (low fat)", gI, "Lean protein",
        "creamy dressing", bI, "Avoid - high in fat",
        "creamy sauce", bI, "Avoid - high in fat",
        "creamy soup", bI, "Avoid - high in fat",
        "cucumber", gI, "Non-starchy vegetable",
        "eggplant", gI, "Non-starchy vegetable",
        "egg", gI, "Lean protein (raw or hard-boiled)",
        "fish", gI, "Lean protein",
        "fried food", bI, "Avoid - high in fat",
        "frozen yogurt", bI, "Avoid - high in sugar",
        "fruit juice", bI, "Avoid - high in sugar (even 100% fruit juice)",
        "fruit punch", bI, "Avoid - high in sugar",
        "grains", bI, "Avoid - starch",
        "granola", bI, "Avoid - starch",
        "grease", bI, "Avoid - high in fat",
        "green bean", gI, "Non-starchy vegetable",
        "hot dog", bI, "Avoid - high in fat, more fat than protein",
        "ice cream", bI, "Avoid - high in sugar",
        "kale", gI, "Non-starchy vegetable",
        "leek", gI, "Non-starchy vegetable",
        "lettuce", gI, "Non-starchy vegetable",
        "multigrain bar", bI, "Avoid - starch",
        "mushroom", gI, "Non-starchy vegetable",
        "nut butter", bI, "Avoid - high in fat (peanut butter, almond butter, etc.)",
        "nut", bI, "Avoid - high in fat",
        "oats", bI, "Avoid - starch",
        "okra", gI, "Non-starchy vegetable",
        "onion", gI, "Non-starchy vegetable",
        "quinoa", bI, "Avoid - starch",
        "pasta", bI, "Avoid - starch (even gluten-free pasta)",
        "pea", bI, "Avoid - starch",
        "peanut butter", bI, "Avoid - high in fat, more fat than protein",
        "pepperoni", bI, "Avoid - high in fat, more fat than protein",
        "peppers", gI, "Non-starchy vegetable (green pepper, red pepper, etc.)",
        "popcorn", bI, "Avoid - starch",
        "potato", bI, "Avoid - starch",
        "protein powder", gI, "Lean protein",
        "radish", gI, "Non-starchy vegetable",
        "rice", bI, "Avoid - starch",
        "salami", bI, "Avoid - high in fat, more fat than protein",
        "sausage", bI, "Avoid - high in fat, more fat than protein",
        "seed", bI, "Avoid - high in fat",
        "shellfish", gI, "Lean protein",
        "soda", bI, "Avoid - high in sugar",
        "spinach", gI, "Non-starchy vegetable",
        "squash", gI, "Non-starchy vegetable",
        "string bean", gI, "Non-starchy vegetable",
        "sweet potato", bI, "Avoid - starch",
        "sweet tea", bI, "Avoid - high in sugar",
        "sweets & dessert", bI, "Avoid - high in sugar",
        "tofu", gI, "Lean protein",
        "tomato", gI, "Non-starchy vegetable",
        "tortilla", bI, "Avoid - starch (even low-carb tortillas)",
        "turkey", gI, "Lean protein",
        "turnip", gI, "Non-starchy vegetable",
        "wrap", bI, "Avoid - starch",
        "yogurt (low fat)", gI, "Lean protein",
        "zucchini", gI, "Non-starchy vegetable",
    ];

function onSubmitted(val) {
    // take input from inputBox
    console.log(data.length + " " + terms.length + " " + terms[1]);
    for (var i = 0; i < terms.length; i++) {
        if (terms[i].term == val) {
            // if a match
            inputBox.value = "";
            $("#infoDiv").html(terms[i].term + "<br /><br />" + terms[i].icon + terms[i].description);
        }
    }
}

function getData() {
    // configure data as objects
    var c = 0;
    for (var i = 0; i < (data.length); i = i + 3) {
        terms[c] = {
            "term": data[i],
            "icon": data[i + 1],
            "description": data[i + 2]
        }
        termNames[c] = data[i];
        c++;
    }
}

function setAutocomplete() {
    $("#inputBox").autocomplete({
        source: termNames
      });
}


// ----------- start -----------

$(document).ready(function() {
    getData();
    setAutocomplete();

});
