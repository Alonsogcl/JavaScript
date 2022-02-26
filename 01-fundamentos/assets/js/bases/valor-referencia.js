let a = 10;
let b = 10;
a = 30;

//En JS todos los objetos son pasados por referencia
//Todos los primitivos se pasan por valor, en JS todos son objetos exceptuando a los primitivos
console.log({ a, b });

let juan = { nombre: 'Juan' }; //se guarda en algun espacio de memoria
//let ana  = juan; //al hacer la asignación se apunta al mismo espacio de memoria de juan
let ana = { ...juan }; //Hace una copia de juan y apunta a otro espacio de memoria
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => { //Para que no quede como rest se coloca entre llaves para que sea spread
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

//Para crear una copia de un objeto
//Existe un Operador especial para separar todas las propiedades y los valores de un objeto spred ...
//Diferencia con el parámetro rest ... cuando se usa como argumento directamente después de los parentesis une todos los argumentos en una sola variable y transformalo como un arreglo
//Cuando se usa fuera de este lugar o de otro lugar es spred y separa los elementos y rompe la referencia que hay en javascript y hacer igualaciones que apunten a diferentes espacios de memoria 
//porque todo queda almacenado en un espacio de memoria y cuando se apuntan  se apunta al mismo lugar de memoria


//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
//const otrasFrutas = frutas; //No colocarlo así porque al agregar un nuevo dato modifica frutas y otrasFrutas

//Método 1
//const otrasFrutas = [...frutas]; //Un nuevo arreglo usando spread para separar cada uno de los elementos del areglo romper la relación con el de arriba

//Método 2
//Usando el método slice() de los arreglos. Al usarlo le digo cortame el arreglo y regresame los elementos 
//que yo especifico pero sino le mando ningun argumento regresa un nuevo arreglo rompiendo dicha relación

//Para saber cual método es más eficiente
console.time('slice'); //Nombre de la bandera que yo quiera  Inicia timer aqui
const otrasFrutas = frutas.slice();
console.timeEnd('slice'); //Termina timer aquí

console.time('spread');  //sirve para medir el rendimiento de varias cosas en nuestra app JS
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });

