function My_First_Function() {      //Defining a function and naming it
    var str = ' this text is green!';//Defining a variable and giving it a string value
    var result = str.fontcolor('green');//Using the font color method on str variable
    document.getElementById('Green_Text').innerHTML = result; //Putting the value of result into HTML element with id "Green_Text"
}

function My_Second_Function() {         //Defining a function and naming it
    var str = 'I was clicked';          //Defining a variable and giving it a string value
    var result = str.fontcolor("red");  //Using the font color method on str variable
    document.getElementById('Red_Text').innerHTML = result; //Putting the value of result into HTML element with id "Red_Text"
}

function myFunction() {                 //Defining a function and naming it
    var sentence = "I am enjoying";     //defining a variable and giving it a string value
    sentence += ' writing code.'; //Concactenating a string with the variable sentence
    document.getElementById('Concactenate').innerHTML = sentence;  //putting the value of sentence into the HTML element with "Concactenate" id
}