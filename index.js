$("#submit").on('click', function() {
    $("#results").html("Dropdown value: " + $("#cities").val());
});

var day, month, year;

$('#submit').on('click', function() {
    var date = $('#date').val().split("-");
    day = date[2];
    month = date[1];
    year = date[0];
    $("#results").append("<br>Date: " + day + ", Month: " + month + ", Year: "+ year);
});
