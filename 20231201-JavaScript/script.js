/* ----------Ejercicio 1 

var uno = 1;
var dos = uno;

uno = 2;

 ------------Ejercicio 2 

alert("Bienvenidos a mi pagina JS");

let nombre_usuario = prompt("Ingrese su nombre");

alert("Bienvenido "+nombre_usuario);

let edad_usuario = prompt("Ingrese su edad");

alert("Su edad es "+edad_usuario);
console.log(edad_usuario);

alert("Bienvenido "+nombre_usuario+"\nSu edad es "+edad_usuario);

--------------Ejercicio 3 

var nombre="Fernando";
var edad=27;
var cumpleanios="1 de marzo de 1996";
var ciudad="Buenos Aires";
var ocupacion="Programador";
var pasatiempos="Coding";
console.log("Nombre: "+ nombre+"\nEdad: "+edad+"\nCumpleaños: "+cumpleanios+"\nCiudad: "+ciudad+"\nOcupacion: "+ocupacion+"\nPasatiempos: "+pasatiempos);

-------------Ejercicio 4

let text = prompt("Ingrese un texto breve");
console.log("Cantidad de caracteres: "+text.length);

-------------Ejercicio 5

let edad = prompt("Ingrese su edad");
console.log("Días: "+edad*365);

-------------Ejercicio 6

var num1;
var num2;
var result;
num1 = prompt("Ingrese numero 1");
num2 = prompt("Ingrese numero 2");
result = num1 + num2;
console.log(result);

-------------Ejercicio 7

var edad = 27;
var edad_max = 99;
var snack_favorito = "Gomitas";
var snack_por_dia = 5;
var snack_por_resto = (edad_max-edad)*365*5;
alert("necesitas "+snack_por_resto+" snacks para que te acancen hasta los "+edad_max+"años");
var precio_snack_resto = snack_por_resto*300;
alert("Por un total de $"+precio_snack_resto);

-------------Ejercicio 8

var cant_dias_viaje = 8;
var pres_viaje = 1000000;
var comida;
var cant_comida = cant_dias_viaje*3;
var gasto_comida = pres_viaje/cant_comida;
alert("Podes gastar $"+gasto_comida+" para que te alcance plata dorante los "+cant_dias_viaje+" dias del viaje");

-------------Ejercicio 9
let nombre = "Gabriela";
let profesion ="programadora";
alert(`${nombre} es ${profesion}`);

-------------Ejercicio 10
var precio_articulo = prompt("Ingresar precio producto");
var cant_articulo = prompt("Ingresar cantidad producto");
alert(`El total es ${precio_articulo*cant_articulo}`);
*/
