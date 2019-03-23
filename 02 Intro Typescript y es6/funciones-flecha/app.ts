//Equivalencia entre funcion normal y las funciones flechas

//Funcion normal
function normalFunction(number1:number, number2:number):number {
    return number1 + number2;
}

//función flecha(Arrow function)
let arrowFunction = (number1:number, number2:number) => number1 + number2;

// funcion flecha con varias lineas
let arrowFunctionMulti = (number1:number, number2:number) => {
    let result = number1 + number2;

    return result;
}

//Ejemplo práctico
//En este caso la funcion flecha nos ayuda a establecer el contexto
// de la palabra THIS dentro del objecto(es decir this apunta
// al this del objeto hulk )
let hulk = {
    name: 'Bruce',
    power() {
        //con un callback normal this apunta al this GLOBAl
        // en este caso this.name no existe en el contexto global
        setTimeout( function() {
            console.log(this.name + " smash");
       },1500)

       // Con el callback en funcion flecha el this AHORA si
       // APUNTA al this.nombre del objeto hulk
       setTimeout( () => {
            console.log(this.name + " smash");
       },1500)
    }
}

hulk.power();


