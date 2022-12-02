// Hien thi button
$( function() {
    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "img/calendar-icon.png",
        buttonImageOnly: true,
        buttonText: "Select date",
        language: "it",
        autoclose: true,
        todayHighlight: true,
        dateFormat: "dd/mm/yy"
    });
} );

// Lay ngay mac dinh
$(document).ready(function () {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = day + "/" + month + "/" + year;
    $("#datepicker").attr("value", today);
});