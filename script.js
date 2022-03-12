var todaysDate = moment().format("MMM Do YYYY");
$(currentDay).text(todaysDate);

//check time
function checkTime() {
    //current time variable
    var currentTime = moment().hour();

$(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id"),10, 1);
    console.log(timeBlock)

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
        $(this.addClass("future"));
    }
    

});
}
checkTime();





//give save button functionality
    //save the entered text to local storage
        //save it at the time entered
