// nutrition JS file

var terms = [],
    termNames = [],
    gI = "<span id='goodFood'>&#9745;</span>",    // good food icon
    bI = "<span id='badFood'>&#9746;</span>";    // bad food icon

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

function fillStarchTable() {
    // populate #starchTable

}


// ----------- start -----------

$(document).ready(function() {
    getData();
    setAutocomplete();
    $( "#tabs" ).tabs({
        active: 0,
        height: "fill"
    });
    fillStarchTable();
    alert(testVar);
});
