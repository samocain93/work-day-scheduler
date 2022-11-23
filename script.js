// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

  // Var to hold current hour block
  var currentHour = dayjs().hour();
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Gets values from text area and saves to local storage

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");
   localStorage.setItem(time, value)
  })

  //Function to compare time id to current hour, change bg colors, and get local storage on load

  $(".time-block").each(function() {
// var to get id element representing time 
    var timeBlock = $(this).children(".description").attr("id");
   
    // sets up variable to get items from local storage and set the value in the time block
    var blockText = localStorage.getItem(timeBlock);
    $(this).children(".description").val(blockText);

    $(this).removeClass("past present future");

    if (timeBlock == currentHour) {
      $(this).addClass("present");
    } else if (timeBlock < currentHour) {
      $(this).addClass("past");
    } else if (timeBlock > currentHour) {
      $(this).addClass("future");
    }
  });


  //  var to display current date in header 
  var now = dayjs().format("MMMM D, YYYY")

  $("#currentDay").text(now);

});
