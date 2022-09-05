/* VARIABLES

1️⃣-Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
-Es un espacio en memoria donde se almacena informacion para ser usada por nuestro codigo.

¿Cuál es la diferencia entre declarar e inicializar una variable?
-Declarar una variable es darle un nombre con la palabra reservada var, let o const.
Ejemplo: let varibale;

-Inicializar es cuando le asignamos un valor a dicha variable.
Ejemplo: let variable = "informacion";

¿Cuál es la diferencia entre sumar números y concatenar strings?
-La diferencia se encuentra en el tipo de valor, ambos se hacen con el simbolo +
pero al usarlo con valores numericos, javaScript lo interpreta como una operacion aritmetica,
mientas eque si son string, se encargara de unir los valores.

¿Cuál operador me permite sumar o concatenar?
-EL simbolo +
*/

//2️⃣ - Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
//3️⃣ - Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "Leopoldo"; // String
let apellido = "Martinez"; // String
let nombreUsuario = "leomartz"; // String
let edad = 34; // Number
let correoElectronico = "alb.mar.cta.4312@gmail.com"; // String
let mayorEdad = true; // Boolean
let dineroAhorrado = 10000; // number
let deudas = true; // Boolean
let deudas2 = 1800 // number.

//4️⃣ - Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas2;

/* FUNCIONES

1️⃣ - Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
-Es un bloque de codigo que cunmple una tarea especifica.

¿Cuándo me sirve usar una función en mi código?
-Cuando tenemos una tarea repetitiva a lo largo del codigo, usamos una funcion para
poder realizar la tarea sin escribir codigo inecesario.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
-Parametro es lo que indicamos en la estructuracion de la funcion y son los datos
que estara esperando para realizar la tarea que le indicamos.

-Argumento es el valor que pasamos junto al llamado de la funcion el cual sera utilizado
para realizar la tarea que programamos previamente.
*/

/*2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las
variables constantes por parámetros y argumentos en una función:*/

let nick = "Leo";
function identificaion(nombreCompleto){
    console.log(`Mi nombre es ${nombreCompleto}, pero prefiero que me llamen ${nick}.`);
}

/* Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
-Es una expresion que nos permite evaluar casos para realizar una accion u otra
segun se vayan cumpliendo los pasos esperados en el programa.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
-if, else, if else.
-switch
-La principal caracteristica es que con if, else, if else, podemos hacer varias expresiones
de evaluacion como necesitemos y podemos anidar if para hacer evaluaciones dentro de una evaliacion.
Mientras que con switch no podemos anidar y solo daremos una expresion y hara evaluaciones segun cada caso.

¿Puedo combinar funciones y condicionales?
- Si.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
*/
const suscription = ["Free", "Basic", "Expert", "Expert Plus", "Family Expert"]
const suscrcriptionDetail = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
    "Tú y 3 personas más pueden tomar TODOS los cursos de Platzi durante un año"
]
const tipoDeSuscripcion = 1;

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion <= 4){
    console.log(`Tu suscripcion es ${suscription[tipoDeSuscripcion]}, asi que ${suscrcriptionDetail[tipoDeSuscripcion]}`)
}else{
    console.log('No tiene suscripcion o por favor ingrese una opcion valida')
}

/* Ciclos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
-Es un trozo de codigo que ejecutara una tarea hasta que una condicion se cumpla.

¿Qué tipos de ciclos existen en JavaScript?
-For y While

¿Qué es un ciclo infinito y por qué es un problema?
-Es un codigo que no se establecio correctamente el limite del ciclo
por lo cual no dejara de ejecutarse y consumira recursos infinitamente y podria
trabar la pc o el sistema donde sea ejecutado.

¿Puedo mezclar ciclos y condicionales?
-SI.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:*/

// Ciclo 1
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while(i < 5){
     i++
    console.log(`El valor de i es: ${i}`);
}

// Ciclo 2
for (let e = 10; e >= 2; e--) {
    console.log("El valor de e es: " + e);
}

let e = 10;
while(e >= 2){
    e--
    console.log(`El valor de e es: ${e}`)
}

/* 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript. */

//Variables
let value1 = parseInt(prompt('Indique el valor 1'));
let value2 = parseInt(prompt('Indique el valor 2'));
let resultOk = value1 + value2;
let result = parseInt(prompt(`Cuanto es ${value1} + ${value2}?`));

if(result == resultOk){
    alert('Well Done')
}else{
    alert('Keep Trying')
}

/* Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
-Un array es un conjunto de valores, almacenados como un grupo, con un indice que va de 0 en adelante.

¿Qué es un objeto?
-Es un conjunto de valores que pueden tener varias variables en cada uno de sus elementos.

¿Cuándo es mejor usar objetos o arrays?
-Cuando tenemos una gran cantidad de elementos que tienen caracteristicas similares, las agrupamos para tener mejor gestion
mayor orden y poder obtener resultados mas eficiente.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
-Si

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
*/

let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

function showFirstArray(array){
    console.log(`El primer valor del array es ` + array[0])
  }

showFirstArray(myArray);

/* 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por
uno (no se vale imprimir el array completo). */

function readArray(array){
  for (let i = 0; i < array.length; i++){
    console.log(`${i + 1} ${array[i]}`);
  }
}
readArray(myArray);