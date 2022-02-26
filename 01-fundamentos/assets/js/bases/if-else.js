//Estructura de control 
let a = 5;

if (a>=10) { //undefined, null, una asignacion
  console.log('A es mayor o igual a 10');
} else{
   console.log('A es menos a 10');
}

//console.log('Fin de programa');

//nueva instancia de un objeto Date
const hoy = new Date(); //Es lo mismo que new Object()
//console.log (hoy);
let dia = hoy.getDay(); //0: Domingo, 1: lunes, 2: martes...

console.log({dia});


//if (dia=1){  //Esto es una asignación no se debe usar así en condiciones
//if (dia=='2'){  //doble igual confirma si el día es igual al valor 2 No importa el tipo de dato si es número o ' 'string o cualquier cosa
if (dia===0){  //triple igual indica que no solo los valores internos sean lo mismo sino q el tipado también sea igual
    console.log('Domingo');
}else if (dia===1){
  console.log('Lunes');
}else if (dia===2){
  console.log('Martes');
}else{
  console.log('No es lunes, martes o domingo...');
}

//Sin usar If Else o Switch, únicamente objetos 

dia=2; //0:domingo
//dia de la semana del domingo hasta el sábado
const diaLetras = {
  0: 'Domingo',  
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
}

console.log(diaLetras[dia] || 'Día no definido');

const diaLetras2 = {
  0: ()=>'Domingo',  
  1: ()=>'Lunes',
  2: ()=>'Martes',
  3: ()=>'Miércoles',
  4: ()=>'Jueves',
  5: ()=>'Viernes',
  6: ()=>'Sábado'
}
//dia de la semana
console.log(diaLetras2[dia]()); //Para que no solo apunte a la función sino qtraiga lo q esta dentro

const diaLetras3 = ['Domingo',  'Lunes','1Martes','Miércoles','Jueves','Viernes','Sábado'];
console.log(diaLetras3[dia]);


