//declaration and initialization of variables
const btn1 = document.getElementById("button1"); //ref to button1
const btn3 = document.getElementById("button3"); //ref to student form field
const studentForm = document.getElementById("studentForm"); //ref to student form 
const students =[] //for student obj storage


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
    btn1.innerHTML = "Today is " + formatDate + 
        ", " + formatWeekDay + ".<br>" + "The current time is " + formatTime + "."
}


function add_student() {
    const name = document.getElementById("SName").value;
    const age = Number(document.getElementById("SAge").value);
    const email = document.getElementById("SEmail").value;
    const course = document.getElementById("SCourse").value;

    //TODO const SNumber which will need generator function

    //student object and properties
    const student = {
        // studentNumber: studentNumber,
        name: name,
        age: age,
        email: email,
        course: course
    };

    students.push(student); //push student object to array
    console.log(student) //for debugging: track student objects

}
//TODO to implement
function find_student() {
}

//TODO to implement
function display_list() {
}

//event-handling
btn1.addEventListener("click", time_now); //call time_now function which show current date and time button is clicked

//call add_student function which appends student obj to arr list
studentForm.addEventListener("submit", (event) => {
    event.preventDefault(); //for preventing refreshing of page
    add_student(); 
    console.log("form submitted"); //for debugging: check if form is submitted
});