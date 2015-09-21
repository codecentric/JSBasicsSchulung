window.CALC = {};

;(function(doc, calc) {
  "use strict";
   // 1. fetch all needed elements
  var resultElem = doc.querySelector('#result>span')
  var operands = [].slice.call(doc.querySelectorAll('input'))
  var operatorButtons = doc.querySelector('#buttons')
  var clearButton = doc.querySelector('#clear')

  // attach Event Handlers
  operatorButtons.addEventListener('click', applyOperation)

  clearButton.addEventListener('click', clear)


  function applyOperation(event){
    var operation = event.target.textContent
    var op1 = parseInt(operands[0].value, 10)
    var op2 = parseInt(operands[1].value, 10)


    operation = calc[operation]
    var result = typeof operation === 'function' ? operation(op1, op2): NaN
    setResult(result)
  }

  function setResult(r){
    resultElem.textContent = r;
  }

  function clear(){
    resultElem.textContent = ''
    operands.forEach(function(input){
      input.value = ''
    })
  }
}(document, window.CALC));

;(function(global, calc) {
  "use strict";
  // define add, sub mult , div functions
  function add (a,b){
    return a + b;
  }
  function sub (a,b){
    return a - b;
  }
  function mult (a,b){
    return a * b;
  }
  function div (a,b){
    return a / b;
  }
  // export them
  calc['add'] = add
  calc['sub'] = sub
  calc['mult'] = mult
  calc['div'] = div
  calc['+'] = add
  calc['-'] = sub
  calc['*'] = mult
  calc['/'] = div
}(window, window.CALC));
