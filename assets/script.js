 var saveBtn = $(".saveBtn");

 // current date 
 $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
 
 // Block color indicator if past, present and future
 function timeBlockColor() {
     var hour = moment().hours();
 
     $(".time-block").each(function() {
         var currHour = parseInt($(this).attr("id"));

         if (currHour > hour) {
             $(this).addClass("future");
         } else if (currHour === hour) {
             $(this).addClass("present");
         } else {
             $(this).addClass("past");
         }
     })
 };
 
 // save button 
 saveBtn.on("click", function() {
 
     // console.log(this); //save button
     var time = $(this).siblings(".hour").text();
     var plan = $(this).siblings(".plan").val();
 
     // info saved in local storage
     localStorage.setItem(time, plan);
 });
 
 // info kept even when refreshed
 function usePlanner() {
 
     $(".hour").each(function() {
         var currHour = $(this).text();
         var currPlan = localStorage.getItem(currHour);
 
         // console.log(this);
         // console.log(currHour);
 
         if(currPlan !== null) {
             $(this).siblings(".plan").val(currPlan);
         }
     });
 }
 
 timeBlockColor();
 usePlanner();
 
 
 
 