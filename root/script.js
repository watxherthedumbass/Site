function solve() {

  var x = parseInt(document.getElementById("number1").value);

  var operator = document.getElementById("operator").value

  var y = parseInt(document.getElementById("number2").value);

  if (operator=="+") {

    var answer = x + y;

  }

  else if (operator=="-") {

    var answer = x - y;

  }

  else if (operator=="*" || operator=="x") {

    var answer = x * y;

  }

  else if (operator == "/" || operator == "÷") {

    var answer = x / y;

  }

  document.getElementById("answer").innerHTML = answer;

}

function countdown() {

  var x = document.getElementById("seconds").value;

  let s = setInterval(timer, 1000);

  y = 0

  function timer() {

  y = y + 1;

    document.getElementById("time").innerHTML = y

  if (y==x) {

    alert("COUNTDOWN DONE");

    clearInterval(s);

    y = 0

  }

  }

}
