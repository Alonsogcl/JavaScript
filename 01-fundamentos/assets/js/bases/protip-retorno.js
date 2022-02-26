// function crearPersona(nombre, apellido){
//   return { // ES6 Cuando quieren retornar algo en un objeto y el nombre de la propiedad es el mismo que el nombre de la variable solo se coloca una vez
//     nombre: nombre,
//     apellido: apellido
//   }
// }

// function crearPersona(nombre, apellido) {
//   return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido }); //se coloca en parentesis para indicar es un objeto lo q se está retornando, no el cuerpo de la función.

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

// function imprimeArgumentos() {
//   console.log(arguments);
// }

// const imprimeArgumentos2 = () => { //Una función de flecha no crea el objeto argumentos solo pasa en las funciones tradicionales
//   console.log(arguments);
// }

//imprimeArgumentos(10, true, false, 'Fernando', 'Hola');

//Para trabajar con los argumentos en una función de
//imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');


const imprimeArgumentos2 = (edad, ...args) => { //Una función de flecha no crea el objeto argumentos solo pasa en las funciones tradicionales
  console.log({edad, args});
}

imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');