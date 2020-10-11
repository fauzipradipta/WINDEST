var day, month, year;
var websocket = new WebSocket("ws://127.0.0.1:6789/");
var predictValue;

var cityNames = {
    "albuquerque": "Albuquerque",
    "atlanta": "Atlanta",
    "boston": "Boston",
    "charlotte": "Charlotte",
    "chicago": "Chicago",
    "dallas": "Dallas",
    "denver": "Denver",
    "detroit": "Detroit",
    "houston": "Houston",
    "indianapolis": "Indianapolis",
    "jacksonville": "Jacksonville",
    "kansas-city": "Kansas City",
    "las-vegas": "Las Vegas",
    "los-angeles": "Los Angeles",
    "miami": "Miami",
    "minneapolis": "Minneapolis",
    "nashville": "Nashville",
    "new-york": "New York",
    "philadelphia": "Philadelphia",
    "phoenix": "Phoenix",
    "pittsburgh": "Pittsburgh",
    "portland": "Portland",
    "saint-louis": "Saint Louis",
    "san-antonio": "San Antonio",
    "san-diego": "San Diego",
    "san-fransisco": "San Francisco",
    "seattle": "Seattle",
    "vancouver": "Vancouver",
}

var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];

function suffix(n) {
    if (n >= 11 && n <= 13) { return "th"; }
    n %= 10;
    if (n == 1) { return "st"; }
    if (n == 2) { return "nd"; }
    if (n == 3) { return "rd"; }
    return "th";
}

function printResults() {
    $("#results").html("The predicted wind speed in " + cityNames[$("#cities").val()] +
                        " on " + months[month - 1] + " " + day + suffix(day) + ", " + year +
                        " is " + Math.round(predictValue * 1000) / 1000 + " m/s.");
}

$('#submit').on('click', function() {
    // $("#results").html("Selected City: " + cityNames[$("#cities").val()]);

    var date = $('#date').val().split("-");
    day = date[2];
    month = date[1];
    year = date[0];
    // $("#results").append("<br>Date: " + day + ", Month: " + month + ", Year: "+ year);

    // If a city isn't chosen
    if ($("#cities").val() === "") {
        $("#results").html("Please select a city.");
    }

    // If a date is chosen before 10/11/2020
    if (date[0] < 2020 || (date[0] == 2020 && date[1] < 10) ||
        (date[0] == 2020 && date[1] == 10 && date[2] < 11)) {
        $("#results").html("Please select a date in the future.");
    }

    websocket.send(JSON.stringify({
        action: 'submit',
        city: cityNames[$("#cities").val()],
        month: month,
        day: day
    }));
})

function showResult(prediction) {
    predictValue = prediction;
    console.log(predictValue)
    return 0;
}

//The websocket message handler, this code executes whenever we get a message from the server.
websocket.onmessage =  function (event) {
    data = JSON.parse(event.data);
    if (!(data)){   //To get around a bug.
        return
    }
    switch (data.type) {
        case 'submit':
            console.log("Submit message received!");
            showResult(data.predictValue);
            printResults();
    }
};
