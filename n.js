// nutrition JS file

function onSubmitted(val) {
    // take input from inputBox
    var descripList = "";
    for (var i = 0; i < terms.length; i++) {
        if (terms[i].term == val) {
            // if a match
            inputBox.value = "";  // clear input box
            for (var j = 0; j < terms[i].description.length; j++) {
                // get strings in description & display them in list format
                descripList = descripList + "<li>" + terms[i].description[j] + "</li>";
            }
            $("#termHeader").html(terms[i].icon + " " + terms[i].term);
            $("#descriptionList").html(descripList);
            break;
        }
    }
}

function getData() {
    // configure data list as objects
    var c = 0;
    for (var i = 0; i < data.length; i = i + 3) {
        terms[c] = {
            "term": data[i],
            "icon": data[i + 1],
            "description": data[i + 2]
        }
        // check for starches
        for (var j = 0; j < terms[c].description.length; j++) {
            if (terms[c].description[j] == starchTxt) {
                starches.push(terms[c].term);
            }
        }
        // check for non-starches
        for (var j = 0; j < terms[c].description.length; j++) {
            if (terms[c].description[j] == nonStarchVegTxt) {
                nonStarches.push(terms[c].term);
            }
        }
        termNames[c] = data[i];
        c++;
    }
    fillProteinLists();
    fillStarchTables();
    fillExerciseLists();
    fillFluidsLists();
    fillFruitLists();
    fillLinkLists();
}

function setAutocomplete() {
    // set up jQuery UI autocomplete for search bar
    $("#inputBox").autocomplete({
        source: termNames
      });
}

function setTabs() {
    // set up jQuery UI tabs
    $( "#tabs" ).tabs({
        active: 0,
        height: "fill"
    });
}

function fillStarchTables() {
    // populate starch & non-starch tables
    var starchTemp = "";
    for (var i = 0; i < starches.length; i++) {
        starchTemp = starchTemp + "<tr><td>" + starches[i] + "</td></tr>";
    }
    $("#starchTableBody").html(starchTemp);
    starchTemp = "";
    for (var j = 0; j < nonStarches.length; j++) {
        starchTemp = starchTemp + "<tr><td>" + nonStarches[j] + "</td></tr>";
    }
    $("#nonStarchTableBody").html(starchTemp);
}

function fillProteinLists() {
    // populate protein tab
    var head,
        exHTML = "";
    for (var i = 0; i < proteinData.length; i++) {
        head = proteinData[i][0];
        exHTML = exHTML + "<div class='exDiv'><h3>" + head + "</h3><ul>";
        for (var j = 1; j < proteinData[i].length; j++) {
            exHTML = exHTML + "<li>" + proteinData[i][j] + "</li>";
        }
        exHTML = exHTML + "</ul></div>";
    }
    $("#tabs-2").html(exHTML);
}

function fillExerciseLists() {
    // populate exercise tab
    var head,
        exHTML = "";
    for (var i = 0; i < exerciseData.length; i++) {
        head = exerciseData[i][0];
        exHTML = exHTML + "<div class='exDiv'><h3>" + head + "</h3><ul>";
        for (var j = 1; j < exerciseData[i].length; j++) {
            exHTML = exHTML + "<li>" + exerciseData[i][j] + "</li>";
        }
        exHTML = exHTML + "</ul></div>";
    }
    $("#tabs-4").html(exHTML);
}

function fillFluidsLists() {
    // populate fluids tab
    var head,
        tempHTML = "";
    for (var i = 0; i < fluidsData.length; i++) {
        head = fluidsData[i][0];
        tempHTML = tempHTML + "<div class='exDiv'><h3>" + head + "</h3><ul>";
        for (var j = 1; j < fluidsData[i].length; j++) {
            tempHTML = tempHTML + "<li>" + fluidsData[i][j] + "</li>";
        }
        tempHTML = tempHTML + "</ul></div>";
    }
    $("#tabs-5").html(tempHTML);
}

function fillFruitLists() {
    // populate fruit tab
    var head,
        tempHTML = "";
    for (var i = 0; i < fruitData.length; i++) {
        head = fruitData[i][0];
        tempHTML = tempHTML + "<div class='exDiv'><h3>" + head + "</h3><ul>";
        for (var j = 1; j < fruitData[i].length; j++) {
            tempHTML = tempHTML + "<li>" + fruitData[i][j] + "</li>";
        }
        tempHTML = tempHTML + "</ul></div>";
    }
    $("#tabs-6").html(tempHTML);
}

function fillLinkLists() {
    // populate fruit tab
    var head,
        tempHTML = "";
    for (var i = 0; i < linkData.length; i++) {
        head = linkData[i][0];
        tempHTML = tempHTML + "<div class='exDiv'><h3>" + head + "</h3><ul>";
        for (var j = 1; j < linkData[i].length; j = j + 2) {
            tempHTML = tempHTML + "<li><a href='" + linkData[i][j + 1] + "' target='_new'>" + linkData[i][j] + "</a></li>";
        }
        tempHTML = tempHTML + "</ul></div>";
    }
    $("#tabs-7").html(tempHTML);
}


// ----------- start -----------

$(document).ready(function() {
    getData();
    setAutocomplete();
    setTabs();
    $('#submitBtn').click(function() {
        onSubmitted(inputBox.value);
        return false;   // prevents page reload
    });
});
