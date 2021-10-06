x = 25;     //Declaring and assigning a value to a global variable
function Global_Variable() { //Defining and naming a function
    y = x * x;      //Declaring a local variable and setting its value to the answer of a math expression
    document.getElementById("Global").innerHTML = y;  //Putting that value in an HTML element
}

function Local_Variable() {  //Defining and naming a function
    B = y + 200;        //setting a variable to the value of an expression using a local variable from another function 
    console.log(y + 41); //Logging an expression in the console to debug. y is not defined because it is a local varibale from another function
    document.getElementById('Local').innerHTML = y; //putting that value in an HTML element (This will work if you click the first function first because y becomes a global variable)
}

function get_Date() {  //Defining and naming a function
    if (new Date().getHours() < 18) {  //Defining an conditional if statement and calling a function that gets information about the time and expresses it as a number between 1-24
        document.getElementById("Greeting").innerHTML = 'Good Morning';  //Putting the String into an HTML element if the if condition is met
    }
}


function Date_Function() {      //Naming and defining a function
    var time = new Date().getHours();       //Naming a variable and setting it equal to the number given by the get hours function
    var warning;        //Declaring a variable
    if (time == 20) {       //Conditional if statement
        warning = "Its 8:00 do you know where your children are?";  //if the if statement is true the variable warning is set to this string value
    } else  {warning = "your children are safe";}       //If the if statement is false warning is set to this string value
    document.getElementById("Warning").innerHTML = warning;     //putting the value of warning in an HTML element
}
    
function Year_Function(){       //naming and defining a function
    year = document.getElementById('year').value;  //Setting the variable year to the value input in the HTML element with the id year
    if (year < 1997) {      //conditional if statement
        response = 'You are older than me';     //if the if statement is true set the value of response to this string
    }
    else if (year = 1997) { //if the if statement is false check if this statement is true
        response = 'We are the same age';       //if the else if statement is true set response to this string value
    }
    else {                                  
        response = "You are younger than me";       //if both the if statement and the else if statement are false set the variable to this string value
    }
    document.getElementById('Response').innerHTML = response;  //put the value of response into an HTML element
}
 
function Time_function() {      //Naming and defining a function
    var Time = new Date().getSeconds();     //Defining the variable time and setting it to the number by the get seconds function it will be between 1 and 60
    console.log(Time);      //Logging the variable time for debugging
    var Reply;          //Naming hte variable Reply
    if (Time < 30) {        //Conditional if statement
        Reply = "We are in the first half of the minute";  //If true set reply to this string value
    }
    else if (Time == 30) {      //if false try this expression
        Reply = 'We are mid minute';        //if if else is true set Reply to this string value
    }
    else {      //if neither are true set reply to this string value
        Reply = 'We are in the second half of the minute';
    }
    document.getElementById('minute_tracker').innerHTML = Reply;        //Putting the value of Reply in an HTML element


}
