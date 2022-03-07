//VARIABLES

//variables var, let y const

let telefonoMadre = 123456678;
const telefono_madre = 123456678;

//bloques

// bloque 1
if(true){
    let nombre = 'Daniel';
    console.log(nombre);
}
// bloque 2
if(true){
    let nombre = 'Andrés';
    console.log(nombre);
}
//Error por llamar la variable nombre fuera de su bloque de definición
// console.log(nombre);

// bloque error
// if(true){
//     let nombre = 'Daniel';
//     console.log(nombre);
//     let nombre = 'Andrés';

//     console.log(nombre);
// }

// console.log(nombre);

//const -> no es mutable

const edad0 = 50;

//Error por intentar modificar una variable definida con const, paso por valor, tener presente el paso por referencia
// edad = 25;

//playGround Declarando variables

var edad;
var peso;

//playGround Asignando valores a las variables

var edad1 = 30;
var peso = 85;

//playGround La diferencia entre var y let

let nombre;
let apellido;
let edad2;
let telefono;
let sabeProgramar;

//playGround Las constantes

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//TIPOS DE DATOS

//Enteros
let edad3 = 32;
console.log(edad3)
let precio = 105.65;
console.log(precio)

//Strings
let cadena = "Hola, soy una cadena"
console.log(cadena)
let cadena2 = 'yo también soy una cadena'
console.log(cadena2)
let cadena3 = `yo igual soy`
console.log(cadena3)

//Boleano
const verdad = true;
console.log(verdad)
const falso = false;
console.log(falso)

//NaN

let notANumber = NaN;
console.log(notANumber);


//null

let nulo = null;

//undefined

let noDefinido;
console.log(noDefinido)

//Objeto literla
let objetoLiteral= {
    clave : 'valor',
    edad: 20,
    marca : 'Una pc',
    modelo : 2017,
    estaEncendida: false
}
console.log(objetoLiteral);

//Arrays

let unaLista = ["hola", 2022, true, "estudiante", objetoLiteral];

console.log("unaLista =", unaLista);
console.log(unaLista[1]);

//playGround Una variable de cada tipo
let verdadero = true;
let nada = null;
let texto = 'texto';
let numero = 09;

//playGround Usando Number()
let positivo = Number(1);
let negativo = Number(-1);
let decimal = Number(1.1);

//playGround Usando parseInt()
const nan = parseInt('a');
const correcto = parseInt(1.1);

//playGround Operando

let primerNumero = 10;
let segundoNumero = 6;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

//FUNCIONES

function elDoble (unNumero) {
    return unNumero * 2;
}

console.log("elDoble", elDoble(2));

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}

console.log("sumar", sumar(1,2));

function restar(numeroC, numeroD){
    return numeroC - numeroD;
}

console.log("restar",restar(12,4));

//Scope

let mensaje = 'hola';

function saludar (){
    let mensaje = 'Chau';
    console.log("mensaje local", mensaje);
    return mensaje;
}

console.log("mensaje global", mensaje);

console.log(saludar());

//playGround Declarar funciones

function ejemplo(){
    return "hola, soy una función";
}

//playGround Declarando funciones en variables

let ejemplo2 = function(){
    return "hola, soy una función expresada";
}

//playGround Funciones con parámetros

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

//playGround Números pares
function esPar(n){
    return n%2 === 0;
}

//playGround Declarando tres funciones
function anterior(n){
    return n-1;
}

function triple(n){
    return n*3;
}

function anteriorDelTriple(n){
    return anterior(triple(n));
}

//CONDICIONALES

//if, else, else if

let clima = 'soleado';
dia = 'martes'
//condición
if(clima === 'soleado' && dia === "domingo"){
//bloque de código
    console.log('Lindo día para pasear');
} else if(clima === 'soleado' && dia === "lunes"){
    console.log('Podría salir igual');
} else {
    console.log('Mejor en casa')
}

//playGround Mi primer if

let dato = true;

if(dato){
    console.log('es true');
}else {
    console.log('es false');
}

//playGround igualdad, if y else

let lenguaje = "javascript";

if(lenguaje === 'javascript'){
    console.log("Estoy aprendiendo");
} else {
    console.log('Lo aprenderé más adelante');
}

//playGround ¿Puede pasar cosme fulanito?

function puedePasar(nombre){
    if(nombre === 'Cosme Fulanito'){
        return false;
    } else {
        return true;
    }
}

//ARRAYS
let edades = [1,2,3,4,5]
let seriesFavoritas = ["one punch man", 'sekiro', "RE8", edades]
console.log(seriesFavoritas[0])

seriesFavoritas.map(el => {
    return console.log(el);
})

console.log(seriesFavoritas[3][2])

//Métodos de arrays
let colores = ['Rojo','Naranja','Azul'];

//push
colores.push('Violeta');
console.log(colores);
colores.push('Marino');
console.log(colores);

//pop
let elUltimo = colores.pop();
console.log(colores);
console.log(elUltimo);

//shift
colores.shift();
console.log(colores);

//unshift
colores.unshift('Rosa')
console.log(colores);

//indexOf lastIndexOf

console.log(colores.indexOf('Violeta'));
console.log(colores.lastIndexOf('Violeta'));
console.log(colores.lastIndexOf('Morado'));

//join
console.log( colores.join(',* '));

//includes
console.log(colores.includes('Violeta'));

//playGround indexOf

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"];

let indiceJuan = alumnos.indexOf("Juan");
let indiceFrancisco = alumnos.indexOf("Francisco");

//playGround Join

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];

let fraseNueva = arrayFrase.join(" ");

//playGround Pop

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];

let alumnoEgresado = estudiantes.pop();

//playGround Push

estudiantes.push(  {
    nombre: "Juan",
    promedio: 5,
    curso: "iOS"
  });
estudiantes.push(  {
    nombre: "Miguel",
    promedio: 2,
    curso: "Android"
  });

//playGround shift
let alumnoDeBaja = estudiantes.shift();

estudiantes.unshift(  {
    nombre: "Mariana",
    promedio: 9,
    curso: "Full Stack"
  });
estudiantes.unshift(  {
    nombre: "Francisco",
    promedio: 2,
    curso: "Android"
  });