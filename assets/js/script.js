let currentValue="";
document.querySelector("#display").value = currentValue;

function one(){
  document.getElementById('one');
  currentValue = currentValue + '1';
  document.querySelector("#display").value = currentValue;
}

function two(){
  document.getElementById('two');
  currentValue = currentValue + '2';
  document.querySelector("#display").value = currentValue;
}

function three(){
  document.getElementById('three');
  currentValue +='3';
  document.querySelector("#display").value = currentValue;
}
function four(){
  document.getElementById('four');
  currentValue +='4';
  document.querySelector("#display").value = currentValue;
}
function four(){
  document.getElementById('four');
  currentValue +='4';
  document.querySelector("#display").value = currentValue;
}
function five(){
  document.getElementById('five');
  currentValue +='5';
  document.querySelector("#display").value = currentValue;
}
function six(){
  document.getElementById('six');
  currentValue +='6';
  document.querySelector("#display").value = currentValue;
}
function seven(){
  document.getElementById('seven');
  currentValue +='7';
  document.querySelector("#display").value = currentValue;
}
function eight(){
  document.getElementById('eight');
  currentValue +='8';
  document.querySelector("#display").value = currentValue;
}
function nine(){
  document.getElementById('nine');
  currentValue +='9';
  document.querySelector("#display").value = currentValue;
}
function zero(){
  document.getElementById('zero');
  currentValue +='0';
  document.querySelector("#display").value = currentValue;
}
function clear(){
  currentValue ='';
  document.querySelector("#display").value = currentValue;
}
document.getElementById('clear').addEventListener('click', clear);

function eqal(){
  document.getElementById('eqal');
  currentValue = eval(currentValue);
  document.querySelector("#display").value = currentValue;
}
function plus(){
  document.getElementById('plus');
  currentValue = currentValue + '+';
  document.querySelector("#display").value = currentValue;
}
function minus(){
  document.getElementById('minus');
  currentValue = currentValue + '-';
  document.querySelector("#display").value = currentValue;
}
function multiply(){
  document.getElementById('multiply');
  currentValue = currentValue + '*';
  document.querySelector("#display").value = currentValue;
}
function divide(){
  document.getElementById('divide');
  currentValue = currentValue + '/';
  document.querySelector("#display").value = currentValue;
}