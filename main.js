/*1
Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo.
 */

let num1 = 99
let num2 = 66
 
if(num1 >num2){
    console.log("El primer numero 99  es mayor que 66")
}

/*2*Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes */

 
if(num1==num2){
    console.log("Los numeros son iguakes")
}else{
    console.log("Los numeros son diferente")
}

/**3
 *
 * Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales.

 */

let numm1= 12
let numm2 = 12
 
if(numm1 >numm2){
    console.log("El primer numero  es mayor")
}else if (numm1 < numm2){
    console.log("el segundo numero es mayor")
}else{
    console.log("Los dos numeros son iguales")
}

/*4*Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más
chico */

let num3 = 77
let menor = num1;

if (  menor> num2) {
  menor = num2;
}
if (menor> num3 ) {
  menor = num3;
}
console.log("El número más pequeño es: " + menor);



/*5*Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad.

Crear 2 objetos*/

let persona1 = {
    nombre: "Cri",
    edad: 20,
    altura: 1.79
};

let persona2 = {
    nombre: "Lupe",
    edad: 29,
    altura: 1.43
};

/* Comparación de alturas*/
if (persona1.altura > persona2.altura) {

    console.log(persona1.nombre + " es más alto que " + persona2.nombre);

} else if (persona1.altura < persona2.altura) {

    console.log(persona2.nombre + " es más alto que " + persona1.nombre);

} else {

    console.log(persona1.nombre + " y " + persona2.nombre + " Miden igual");
}


/* Comparación de edades*/
if (persona1.edad > persona2.edad) {

    console.log(persona1.nombre + " es mayor que " + persona2.nombre);

} else if (persona1.edad < persona2.edad) {

    console.log(persona2.nombre + " es mayor que " + persona1.nombre);

} else {
    console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma edad");
}


/*6*Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo.
 */



let Nombre = prompt("Digite  nombre")

let edad = prompt("Digite edad")

let altura = prompt("Digite altura en cm")

let vision = prompt(" Digite cual es su  Vision en una escala de 1 a 10")

if (( edad >= 18 || altura >= 150 ) || ( vision >= 8 || vision <= 10 )) {

    alert("La persona: " + Nombre + " esta capacitada para conducir")

} else {

    alert("La persona " + Nombre + " no esta capacitada para conducir")
}


/*7*Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase
(vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean
tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida. */


let nombre = prompt("Ingrese su nombre:");
let pase = prompt("Ingrese su tipo de pase (vip o normal):").toLowerCase();
let tieneEntrada = prompt("¿Posee entrada? (si/no):").toLowerCase();

// Verificar condiciones de acceso
if (nombre === nombreOrganizador || pase === "vip") {



}
    


/*8*
 * Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
más eficiente.
9. Crear un progra
 */

const numeroIncognita = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

while (intentos > 0) {


  const Ingresa = parseInt(prompt("Ingresa un número entre 1 y 10:"));

  if (numeroIngresado === numeroIncognita) {
    alert("Ganaste");
    break;
  } else if (numeroIngresado > numeroIncognita) {
    alert("El número ingresado es mayor, Intenta otra vez");
  } else {
    alert("El número ingresado es menor, Intenta otra vez");
  }

  intentos--;
}

if (intentos == 0) {
  alert("Se termino tus intentos, el número era: " + numeroIncognita);
}




/*9 *
Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad.*/

let Edad = parseInt(prompt("Digite edad"))

if ((Edad >= 0) && (tuEdad <= 12)) {
    alert("Eres un infante")
}else if ((Edad >= 13) && (Edad <= 18)){
    alert("Eres un adolecente")
}else if ((Edad >= 19) && (Edad <= 45)){
    alert("Eres un mayor joven")
}else if ((Edad > 45) && (Edad <= 100)) {
    alert("Eres un anciano")
}else {
    alert("¿Tu en realidad tienes esa edad?")
}
/*10*. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa
 * 
 */


alert("Juego piedra, papel o tijeras.")

let jugador1  = prompt("Jugador #1, piedra ,papel o tijeras?").toLowerCase();
let jugador2  = prompt("Jugador #2,piedra ,papel o tijeras ").toLowerCase();

if ((jugador1 == "piedra") && (jugador2 == "tijeras" ))
    alert("El jugador 1 ha ganado la partida")
else if ((jugador1 == "tijeras") && (jugador2 == "papel" ))
    alert("El jugador 1 ha ganado la partida")
else if ((jugador1 == "papel" ) && (jugador2 == "piedra" ))
    alert("El jugador 1 ha ganado la partida")
if ((jugador1 == "piedra" ) && (jugador2 == "papel"))
    alert("El jugador 2 ha ganado la partida")
else if ((jugador1 == "tijeras" ) && (jugador2 == "piedra"))
    alert("El jugador 2 ha ganado la partida")
else if ((jugador1 == "papel" ) && (jugador2 == "tijeras"))
    alert("El jugador 2 ha ganado la partida")
else if (jugador1 == jugador2)
    alert("El jugado queda empatado")
else {
    alert("Uno de los jugadores ha hecho trampa.")
}


/**
 * 11
 * 
 * 
 * . Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de
color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,
Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor:
Excelente elección, no lo teníamos pensado.
 */

let color = prompt("Ingrese un color")

switch (color) {
    case "blanco":
        alert("Falta de color");
        break;
    case "negro":
        alert("Falta de color");
        break;
    case "verde":
        alert("El color de la naturaleza");
        break;
    case "azul":
        alert("El color del agua");
        break;
    case "amarillo":
        alert("El color del sol");
        break;
    case "rojo":
        alert("El color del fuego");
        break;
    case "marron":
        alert("El color de la tierra");
        break;
    default:
        alert("Excelente elección, no lo teníamos pensado");
        break;
    }



/*12**Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0. */
    
let valor1 = parseInt(prompt("Ingrese un valor numérico"))
let valor2 = parseInt(prompt("Ingrese otro valor numérico"))
let operacion = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicación, división)")

if (operacion == "suma") {
    let suma = valor1 + valor2
    alert("el resultado  " +operacion+ " es: " +suma)
}else if (operacion == "resta") {
    let resta = valor1 - valor2
    alert("el resultado = " +operacion+ " es: " +resta)
}else if (operacion == "multiplicacion") {
    let multiplicacion = valor1 * valor2
    alert("el resultado = " +operacion+ " es: " +multiplicacion)
}else if (operacion == "division") {
    let division = valor1 / valor2

    if ((valor1 === 0) || (valor2 ===0)){
        alert("ERROR")
    }else{
        alert("el resultado = " +operacion+ " es: " +division)
    }
}else{
    alert("La operacion  no se encuentra")
}
