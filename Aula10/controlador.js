
  function somar(){
    var numero1 = window.document.getElementById('number1') 
    var numero2 = window.document.getElementById('number2')
    var resultado = window.document.getElementById('resultado')
    var soma1 = Number (numero1.value)
    var soma2 = Number (numero2.value)
    var s = soma1 + soma2
    resultado.innerText = s
}
