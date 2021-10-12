function Pet_Function() {
    var Pet_Output;
    var pet = document.getElementById('pet').value;
    var Pet_String = 's are so cute!!';
    switch (pet) {
        case 'Cat':
            Pet_Output = 'Cat' + Pet_String;
        break;
        case 'Lizard':
            Pet_Output = 'Lizard' + Pet_String;
        break;
        case 'Bird':
            Pet_Output = 'Bird' + Pet_String;
        break;
        case 'Fish':
            Pet_Output = 'Fish' + Pet_String;
        break;
        case 'Frog':
            Pet_Output = 'Frog' + Pet_String;
        break;
    default:
    Pet_Output = 'Please choose a type of pet from the list.'   
    }
document.getElementById('output').innerHTML = Pet_Output;
}

function Text_Function() {
    var A = document.getElementsByClassName('click');
    A[0].innerHTML = 'The text has changed!';
}


var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
ctx.moveTo(0, 0);
ctx.lineTo(500, 250);
ctx.stroke();
var grd = ctx.createRadialGradient(60, 45, 10, 110, 120, 110);
grd.addColorStop(0, 'blue');
grd.addColorStop(1, 'powderblue');


ctx.fillStyle = grd;
ctx.fillRect(20, 10, 200, 200);

