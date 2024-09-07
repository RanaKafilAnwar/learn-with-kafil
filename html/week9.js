function cal(num1, num2, op) {
    if (op == "+")
        return num1 + num2;
    else if (op == "-")
        return num1 - num2;
    else if (op == "/")
        return num1 / num2;
    else if (op == "*")
        return num1 * num2;
    else if (op == "%")
        return num1 % num2;
    else
    return "Invalid operator!";
}

document.getElementById("submit").addEventListener("click", () => {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    
    
    

  if(number1 == '' || number2 == ''|| operator == ''){ 
    alert("please insert values!");
    return;
  }
  else{

    let result = cal(number1, number2, operator);
   alert(number1+" "+operator+" "+ number2 + " = " + result);
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('operator').value = ''

  }
});

