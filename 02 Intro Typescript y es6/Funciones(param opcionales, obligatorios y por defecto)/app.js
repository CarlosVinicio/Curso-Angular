/**
 * los parámetros obligatorios tienen que ir al principio,
 * los parametros opcionales no pueden ir como primer parametro
 * de la funcion.
 * @param person es un parámetro de tipo obligatorio.
 * @param object es un parametro de tipo por defecto,
 * @param moment es de tipo opcional (se le pone el ? para indicar que es opcional)
 */
function activar(person, object, moment) {
    if (object === void 0) { object = 'signal'; }
    var message;
    if (moment) {
        message = person + " switch on the " + object + "  " + moment;
    }
    else {
        message = person + " switch on the " + object;
    }
    console.log(message);
}
activar('Carlos', 'signal', 'Today');
