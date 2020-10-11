var day, month, year;

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

$('#submit').on('click', function() {
    $("#results").html("Selected City: " + cityNames[$("#cities").val()]);

    var date = $('#date').val().split("-");
    day = date[2];
    month = date[1];
    year = date[0];
    $("#results").append("<br>Date: " + day + ", Month: " + month + ", Year: "+ year);

    // If a city isn't chosen
    if ($("#cities").val() === "") {
        $("#results").html("Please select a city.");
    }

    // If a date is chosen before 10/11/2020
    if (date[0] < 2020 || (date[0] == 2020 && date[1] < 10) ||
        (date[0] == 2020 && date[1] == 10 && date[2] < 11)) {
        $("#results").html("Please select a date in the future.");
    }
});
