let avenger = {
    nombre: 'capitan america',
    poder:'fuerza'
}
//forma tradicional de extraer datos de un objeto
//let nombre = avenger.nombre;
//let poder = avenger.poder;


//Ahora lo mismo pero mas 'directo' mediante la destructuración
//la sintaxis es let {}
let {nombre, poder} = avenger;

console.log(nombre)

//DESTRUCTURACION DE ARRAYS ----------------------------------
let avengers:string[] = ['Thor', 'Steve'];

//sintaxis normal
//let thor:string = avengers[0];
//let steve:string = avengers[1];

//la sintaxis para destructrurar un array sera let []
let [thor, steve] = avengers;
