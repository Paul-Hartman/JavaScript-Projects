var myObj = { 'name': 'John', 'age': 31, 'city': 'New York' };
var myJSON = JSON.stringify(myObj);
var JSONstring = JSON.parse(myJSON);
document.getElementById('JSON').innerHTML = JSONstring.age + JSONstring.city;


// Check browser support
if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}