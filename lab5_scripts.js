//declaration and initialization of variables
const btn1 = document.getElementById("button1");




//functions
function time_now() {
    const dateNow = new Date(); //create date obj
    
    //convert to string using predefined formats
    //date without day
    const formatDate = dateNow.toLocaleDateString("en-US", { 
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    //day
    const formatWeekDay = dateNow.toLocaleDateString("en-US", { 
        weekday: "long"
    });
    //time
    const formatTime = dateNow.toLocaleTimeString("en-US", { 
        hour: "numeric",
        minute: "2-digit"
    });

    //replace button1 with formatted date and time
    document.getElementById("button1").innerHTML = "Today is " + formatDate + 
        ", " + formatWeekDay + ".<br>" + "The current time is " + formatTime + "."
}


//event-handling
btn1.addEventListener("click", time_now); //trigger time_now function when clicked
