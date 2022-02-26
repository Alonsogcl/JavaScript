//La definición de las funciones debe ir al inicio y el llamado después

function saludar(){ //Función porque tiene paréntesis, su función es ejecutar un código y que regrese algo.
  console.log('Hola Mundo'); //Método: función que se encuentra dentro de un objeto
}

//Definición de funciones de 4 maneras diferentes

//cuando tenemos una variable y no está inicializada toma el valor de undefined
function saludar(nombre){
  // console.log(arguments); //Todas las funciones que tienen la palabra explicita function tienen un objeto implicito llamado arguments, no esta definido en ningun lugar
  // console.log('Hola ' + nombre);
  // return 1; //retornara un 1 donde se llame, se puede retornar cualquier cosa
  return [1, 2]; //para regresar dos valores se colocan entre corchetes
  //Esta línea de código jamás se va a ejecutar
  console.log('Soy un código que está después del return'); 
}

const saludar2=function(nombre){ //Se establece como constante para que nadie más use ese nombre
  console.log('Hola ' + nombre);
}

//Funciones Flecha o Landa Function EcmaScript 6 o JavaScript 2015
const saludarFlecha=()=>{
  console.log('Hola Flecha');
} //Cada una de estas funciones retorna undefined, sino tiene la palabra explicita return no regresa nada

const saludarFlecha2 = (nombre) =>{ //Cuando solo se esta mandando un argumento se pueden omitir los parentesis pero es buena práctica usarlos
  console.log('Hola' + nombre);
}

//saludar(); //nombre de la función y paréntesis

const retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Rica'); //mandando varios argumentos a la función
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar(a, b){
  return a+b;
}

// const sumar2 = (a,b)=>{
//   return a+b;
// }

//Esta función se puede resumir así:

const sumar2 = (a, b) => a + b;
console.log (sumar2 (4,2));

// function getAleatorio() {
//   return Math.random();
// }

//Función de flecha que no tenga llaves

const getAleatorio2 = () => Math.random();
// console.log(getAleatorio());
console.log(getAleatorio2());
