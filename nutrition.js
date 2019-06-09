// nutrition JS file

function onSubmitted(val) {
    // take input from inputBox
    console.log(data.length + " " + terms.length + " " + terms[1]);
    var descripList;
    for (var i = 0; i < terms.length; i++) {
        if (terms[i].term == val) {
            // if a match
            inputBox.value = "";
            descripList = "";
            for (var j = 0; j < terms[i].description.length; j++) {
                // get strings in description & display them in list format
                descripList = descripList + "<li>" + terms[i].description[j] + "</li>";
            }    
            $("#termHeader").html(terms[i].icon + " " + terms[i].term);
            $("#descriptionList").html(descripList);
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
            if (terms[c].description[j] == nonStarchTxt) {
                nonStarches.push(terms[c].term);
            }
        }
        termNames[c] = data[i];
        c++;
    }
    fillStarchTables();
    fillExerciseLists();
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
        height: "fill",
        disabled: [1, 4]  // temporary
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


// ----------- start -----------

$(document).ready(function() {
    getData();
    setAutocomplete();
    setTabs();
});
