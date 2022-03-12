var todaysDate = moment().format("MMM Do YYYY");
$(currentDay).text(todaysDate); 

//local storage item grab
$(".1").val(localStorage.getItem("9"));
$(".2").val(localStorage.getItem("10"));
$(".3").val(localStorage.getItem("11"));
$(".4").val(localStorage.getItem("12"));
$(".5").val(localStorage.getItem("13"));
$(".6").val(localStorage.getItem("14"));
$(".7").val(localStorage.getItem("15"));
$(".8").val(localStorage.getItem("16"));
$(".9").val(localStorage.getItem("17"));

//check time
function checkTime() {
    //current time variable
    var currentTime = moment().hour();

$(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id"),10, 1);
    
    //apply classes for background

    if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");

    }
    else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    

});
}




//save button onclick
$(".saveBtn").click(function() {

        //save it at the time entered
        var task = $(this).siblings(".tasktext").val();
        var timestamp = $(this).parent().attr("id");
        localStorage.setItem(timestamp, task);
});


checkTime();
