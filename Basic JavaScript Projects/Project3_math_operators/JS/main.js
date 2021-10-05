function addition_Function() {      //defining and naming a function
    var addition = 2 + 2;           //defining a variable with a math expression
    document.getElementById('Math').innerHTML = '2 + 2 = ' + addition; //putting the value of addition into the HTML element 'Math' concactenating it with a string
}

function subtraction_Function(){  //defining and naming a function
    var Subtraction = 5 - 2;        //defining a variable with a math expression
    document.getElementById('Sub').innerHTML = '5 - 2 =' + Subtraction; //putting the value of addition into the HTML element 'Sub' concactenating it with a string
}

function multiplication() {     //defining and naming a function
    var simple_Math = 6 * 8;        //defining a variable with a math expression
    document.getElementById('Mult').innerHTML = '6 x 9 = ' + simple_Math;  //putting the value of addition into the HTML element 'Mult' concactenating it with a string
}

function division() {           //defining and naming a function
    var simple_Math = 48 / 6;       //defining a variable with a math expression
    document.getElementById('Div').innerHTML = '48 / 6 = ' + simple_Math;       //putting the value of addition into the HTML element 'Div' concactenating it with a string
}

function more_Math() {          //defining and naming a function
    var simple_Math = (1 + 5) * 10 / 2 - 9;         //defining a variable with a math expression
    document.getElementById('Maths').innerHTML = '1 plus 5, times 10, divided in half and then subtracted by 9 equals ' + simple_Math
    //putting the value of addition into the HTML element 'Maths' concactenating it with a string
}

function modulus_Operator() {       //defining and naming a function
    var simple_Math = 25 % 6;       //defining a variable with a math expression
    document.getElementById('Remainder').innerHTML = "when you divide 25 / 6 you get a remainder of: " + simple_Math;
}       //putting the value of addition into the HTML element 'Remainder' concactenating it with a string

function negation_Operator() {      //defining and naming a function
    var x = 13;                 //defining a variable
    document.getElementById('Neg').innerHTML = -x;      //putting the value of addition into the HTML element 'Neg' and making it negative
}

function Decrement() {          //defining and naming a function
    let x = 5;                  //defining a variable
    x--;                        //decrementing a variable
    document.getElementById("dec").innerHTML = x;  //putting the value of the decremented variable into the HTML element with the id 'dec'
}


function Increment() {          //defining and naming a function
    let x = 5;                  //defining a variable
    x++;                          //Incrementing a variable
    document.getElementById("inc").innerHTML = x;   //putting the value of the incremented variable into the HTML element with the id 'inc'
}

window.alert(Math.random() * 100);     //calling the math.random method to pick a random number and setting the top of its range to 100 and displaying it in an alert window