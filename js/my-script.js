var btnElement = document.getElementById('btn');
btnElement.onclick = function(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName+' '+lastName;
    document.getElementById('fullName').value = fullName;
}

function myFunction2() {
    document.getElementById("myForm2").reset();
}

// calculator
 var btnElement = document.getElementById('addition');
 btnElement.onclick = function(){
    var firstNumber = Number(document.getElementById( 'firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber + secondNumber;
    document.getElementById('result').value = result;
}

var btnElement = document.getElementById('subtraction');
 btnElement.onclick = function(){
    var firstNumber = Number(document.getElementById( 'firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber - secondNumber;
    document.getElementById('result').value = result;
}

var btnElement = document.getElementById('multiplication');
 btnElement.onclick = function(){
    var firstNumber = Number(document.getElementById( 'firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber * secondNumber;
    document.getElementById('result').value = result;
}

var btnElement = document.getElementById('division');
 btnElement.onclick = function(){
    var firstNumber = Number(document.getElementById( 'firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber / secondNumber;
    document.getElementById('result').value = result;
}

var btnElement = document.getElementById('remainder');
 btnElement.onclick = function(){
    var firstNumber = Number(document.getElementById( 'firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber % secondNumber;
    document.getElementById('result').value = result;
}
function myFunction() {
    document.getElementById("myForm").reset();
}
