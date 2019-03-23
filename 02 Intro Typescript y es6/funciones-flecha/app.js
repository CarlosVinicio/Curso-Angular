//Equivalencia entre funcion normal y las funciones flechas
//Funcion normal
function normalFunction(number1, number2) {
    return number1 + number2;
}
//función flecha(Arrow function)
var arrowFunction = function (number1, number2) { return number1 + number2; };
// funcion flecha con varias lineas
var arrowFunctionMulti = function (number1, number2) {
    var result = number1 + number2;
    return result;
};
//Ejemplo práctico
//En este caso la funcion flecha nos ayuda a establecer el contexto
// de la palabra THIS dentro del objecto(es decir this apunta
// al this del objeto hulk )
var hulk = {
    name: 'Bruce',
    power: function () {
        var _this = this;
        //con un callback normal this apunta al this GLOBAl
        // en este caso this.name no existe en el contexto global
        setTimeout(function () {
            console.log(this.name + " smash");
        }, 1500);
        // Con el callback en funcion flecha el this AHORA si
        // APUNTA al this.nombre del objeto hulk
        setTimeout(function () {
            console.log(_this.name + " smash");
        }, 1500);
    }
};
hulk.power();
