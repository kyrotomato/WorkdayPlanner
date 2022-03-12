var todaysDate = moment().format("MMM Do YYYY");
$(currentDay).text(todaysDate);

//check time
function checkTime() {
    //current time variable
    var currentTime = moment().hour();

$(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id"),10, 1);

    if (timeBlock < currentTime) {
        $(this).addclass("past");
    }
    else if (timeBlock === currentTime) {
        $(this).addclass("present");
    }

});
}
checkTime();





//give save button functionality
    //save the entered text to local storage
        //save it at the time entered
