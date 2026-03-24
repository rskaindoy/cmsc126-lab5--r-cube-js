//declaration and initialization of variables
const btn1 = document.getElementById("button1"); //ref to button1
const btn3 = document.getElementById("button3"); //ref to student form field
const btn4 = document.getElementById("button4"); // ref to search student button
const btn5 = document.getElementById("button5"); // ref to display all button
const studentForm = document.getElementById("studentForm"); //ref to student form 
const toSearch = document.getElementById("studID");
const showFind = document.getElementById("showFind");
const showAll = document.getElementById("showAll");
const students = [] //for student obj storage


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
    const name = document.getElementById("SName").value.trim();
    const age = Number(document.getElementById("SAge").value);
    const email = document.getElementById("SEmail").value;
    const course = document.getElementById("SCourse").value;

    const sNumber = generate_sNum();

    //student object and properties
    const student = {
        sNumber: sNumber,
        name: name,
        age: age,
        email: email,   
        course: course
    };

    students.push(student); //push student object to array
    console.log(student) //for debugging: track student objects

}


function find_student() {
    const foundStudent = students.find(student => student.sNumber === toSearch.value.trim())
    
    if (foundStudent === undefined){
        showFind.innerHTML = "Student record does not exist.";
        console.log("Student record does not exist.")
    } else {
        showFind.innerHTML = "";      // to clear prev content
        for (let property in foundStudent){
            showFind.innerHTML += property + ': ' + foundStudent[property] + '<br>';
            console.log(property + ': ' + foundStudent[property] + '\h');
        }
    }
}


function display_list() {
    showAll.innerHTML = "";           // to clear prev content

    for (let student of students){
        for (let property in student){
            showAll.innerHTML += property + ': ' + student[property] + '<br>';
        }
        showAll.innerHTML += '<br>';    // for space between students
    }
}


function generate_sNum(){
    let noDupe = false;
    let random;
    while(noDupe == false){
        random = "2024"
        for(let i=0; i<5; i++){
            random += Math.floor(Math.random() * 10); //why is js weird with integers??? what the hell
            }

        //checks for duplicates, if any studentnumber == random variable generated
        if (students.some(st => st.sNumber === random)){
            noDupe = false;
            // content.textContent = 'Duplicate found!' ?
            console.log("Duplicate found!")
        } else {
            noDupe = true;
            console.log("Unique ID")
        }
        
    }
    console.log(random) //debugging
    return random
}

//event-handling for time
btn1.addEventListener("click", time_now); //call time_now function which show current date and time button is clicked



//call add_student function which appends student obj to arr list
studentForm.addEventListener("submit", (event) => {
    event.preventDefault(); //for preventing refreshing of page

    //form validation, does not submit if there are any invalid inputs

    let valid = true;

    const checkName = document.getElementById("SName").value.trim(); //For removing trailing and leading whitespace
    const checkAge = Number(document.getElementById("SAge").value);
    const checkEmail = document.getElementById("SEmail").value;


    //name validation
        if (checkName.length <= 5){
            valid = false;
            document.getElementById('errName').textContent= "Invalid Name! Must have length greater than 5.";
        } else if (checkName.indexOf(" ") == -1){
            valid = false;
            document.getElementById('errName').textContent= "Invalid Name! Must have whitespace in between.";
        } else {
            document.getElementById('errName').textContent="";
        }

        //age validation
        if ((checkAge < 18) || (checkAge>99) ){
            valid = false;
            document.getElementById('errAge').textContent= "Invalid Age! Must be > 18 or < 19." ;
        } else {
            document.getElementById('errAge').textContent= "";
        }

        //email validation
        if (!(checkEmail.endsWith("@up.edu.ph"))){
            valid = false;
            document.getElementById('errEmail').textContent= "Invalid Email! Must end with '@up.edu.ph'.";
        } else {
            document.getElementById('errEmail').textContent= "";
        }

    if (valid){
        alert("Form submitted successfully!")
        add_student(); //only adds student if all input is valid
        console.log("form submitted"); //for debugging: check if form is submitted
    }   console.log(students); //check current submitted students
    
    //IMPORTANT: if page is reloaded, all submitted students will be lost
    
    
});

// finding student
btn4.addEventListener("click", find_student);

// displaying list of students
btn5.addEventListener("click", display_list);