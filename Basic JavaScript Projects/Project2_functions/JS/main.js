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

function feetToMeters(valNum) {  //Defining a function with a input of a number 
    document.getElementById('outputMeters').innerHTML = valNum / 3.2808; //puttin the value of the input with an expression done to it into the HTML
                                                        // element with id 'outputMeters'

}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById('Math').innerHTML = '2 + 2 = ' + addition;
}