
function congValue() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result;
    result = number1 + number2;
    document.getElementById("result").innerHTML = result;
}
function truValue() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result;
    result = number1 - number2;
    document.getElementById("result").innerHTML = result;
}
function nhanValue() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result;
    result = number1 * number2;
    document.getElementById("result").innerHTML = result;
}
function chiaValue() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result;
    result = number1 / number2;
    document.getElementById("result").innerHTML = result;
}