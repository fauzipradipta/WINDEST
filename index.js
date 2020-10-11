var day, month, year;

$('#submit').on('click', function() {
    $("#results").html("Dropdown value: " + $("#cities").val());

    var date = $('#date').val().split("-");
    day = date[2];
    month = date[1];
    year = date[0];
    $("#results").append("<br>Date: " + day + ", Month: " + month + ", Year: "+ year);

    // If a city isn't chosen
    if ($("#cities").val() === "") {
        $("#results").html("Please choose a city.");
    }

    // If a date is chosen before 10/11/2020
    if (date[0] < 2020 || (date[0] == 2020 && date[1] < 10) ||
        (date[0] == 2020 && date[1] == 10 && date[2] < 11)) {
        $("#results").html("Please choose a date in the future.");
    }
});
