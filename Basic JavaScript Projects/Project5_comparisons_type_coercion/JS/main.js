document.write(typeof 4.6);     //using the typeof operator to show the data type of the variable
document.write("<br>20" + 9);    //using type coercion to combine a string and a number variable

document.write('<br>');  //adding a line break

document.write(10 < 3);  //Printing the boolean answer to an expression using the less than operator
document.write(10 > 3);     //Printing the boolean answer to an expression using the greater than operator
document.write((10 + 7) == 17);     //Printing the boolean answer to an expression using the equal to operator

document.write('<br>');  //adding a line break


x = '10';       //Defining a variable with a string value
y = '10';       //Defining a variable with a string value
document.write(x === y);    //Printing the boolean answer to an expression using the strict equality operator


A = 'ten';      //Defining a variable with a string value
B = 11;         //Defining a variable with a number value
document.write(A === B);//Printing the boolean answer to an expression using the strict equality operator


C = '10';       //Defining a variable with a string value
D = 10;     //Defining a variable with a number value
document.write(C === D);//Printing the boolean answer to an expression using the strict equality operator


E = 10;     //Defining a variable with a number value
F = 11;     //Defining a variable with a number value
document.write(E === F);      //Printing the boolean answer to an expression using the strict equality operator

document.write('<br>');     //adding a line break

document.write(9 < 10 && 8 < 10);       //Printing the boolean answer to an expression using the and operator.
document.write(5 > 8 && 9 < 4);     //Printing the boolean answer to an expression using the and operator.

document.write(8 == 8 || 8 == 10); //Printing the boolean answer to an expression using the or operator.
document.write(4 == 8 || 9 > 10); //Printing the boolean answer to an expression using the or operator.

console.log(8 * 8);  //Logging in the console the answer to an expression using multiplication
console.log(90 > 100);  //Logging in the console the boolean answer to an expression using the greater than operator.


function my_Function() {     //Defining and naming a function
    document.getElementById('test').innerHTML = 0 / 0;  //Putting the value of an expression that yields an answer of Not a Number into the HTML element with the id "test".
    document.getElementById('test2').innerHTML = isNaN('007');     //Putting the boolean answer to the is not a number operator being used on a number value into the HTML element with the id "test2".
    document.getElementById('test3').innerHTML = isNaN("string"); //Putting the boolean answer to the is not a number operator being used on a string value into the HTML element with the id "test3".
    document.getElementById('test4').innerHTML = (2E319);       //Putting a value that JavaScript displays as infinity into the HTML element with the id "test4".
    document.getElementById('test5').innerHTML = (-2E319);    //Putting a value that JavaScript displays as -infinity into the HTML element with the id "test5". 
}

function not_Function() {       //Defining and naming a function
    document.getElementById("Not").innerHTML = !(10 === 10); //Putting the boolean answer to an expression using the strict equality 
                                                                //operator and the not operator into the HTML element with the id "Not".
    
    document.getElementById('Not2').innerHTML = !(10 < 9);      //Putting the boolean answer to an expression using the less than operator 
                                                                //and the not operator into the HTML element with the id "Not2".
}