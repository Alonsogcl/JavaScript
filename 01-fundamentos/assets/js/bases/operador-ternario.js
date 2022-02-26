/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si está abierto hoy ...
const dia = 1; //0:Domingo.. 1:Lunes... Si ya existe un objeto en JS que dice que domingo es 0 así lo usemos
const horaActual=10;

let horaApertura;
let mensaje; //Está abierto, Está cerrado, hoy abrimos a las XX

//Todo esto se puede resumir como sigue:
//if( dia ===0 || dia === 6){ //para reducir esta linea se usa lo siguiente
// if([0,6].includes(dia)){//método includes que tienen los arreglos para indicar si algo existe en ese arreglo, si el día existe en esos dos valores true
//   console.log('Fin de semana');
//   horaApertura=9;
// }else {
//   console.log('Día de semana');
//   horaApertura =11;
// }

horaApertura = ( [0,6].includes(dia)) ? 9 : 11;//buenas practica colocar parentesis

// if(horaActual >= horaApertura){
//   mensaje = 'Está abierto';
// }else{
//   mensaje=`Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje=(horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});
