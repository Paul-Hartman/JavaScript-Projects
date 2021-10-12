function validateForm() {
    var fname = document.forms['myForm']['fname'].value;
    var lname = document.forms['myForm']['lname'].value;
    var message = document.forms['myForm']['message'].value;
    var string = fname + ' ' + lname + ' left you a message saying \"' + message + '\"';
    document.getElementById('string').innerHTML = string;
}