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

-------------------------Ejercicios Condicionales IF
-------------Ejercicio 1

console.log("perro"=="gato"?true:false);
console.log("perro"=="perro"?true:false);
console.log("10"===10?true:false);
console.log("10"==10?true:false);

-------------Ejercicio 2

if(true){
    console.log("Codigo que siempre corre.");
}
if(false){
    console.log("Codigo que nunca corre.");
}
if(prompt("Como estás?")=="triste"){
    console.log("Ya vas a estar mejor.");
}
if(prompt("Cual es el número secreto?")!=42){
    console.log("Número secreto erroneo.");
}
if(prompt("Ingrese contraseña")==1234){
    window.location ="http://www.google.com";
}

-------------Ejercicio 3

console.log(prompt("Ingresar número")%2==0?"par":"impar");

-------------Ejercicio 4

let edad = prompt("Ingrese su edad.");
let mensaje = "";

if (edad>=0){
    if(edad<18) {
        mensaje = "No puede pasar al bar.";
    } else if(edad<21){
        mensaje = "Puede pasar al bar, pero no puede tomar alcohol.";
    } else{
        mensaje = "Puede pasar al bar y tomar alcohol.";
    }
}else{
    mensaje = "Edad invalida.";
}
if(edad%2!=0){
    mensaje = mensaje+"\nSabías que tu edad es impar?"
}

alert(mensaje);

-------------Ejercicio 5

let numero_secreto = 1234;
let guess = Number(prompt("Cual es el número secreto?"));

if (guess === numero_secreto){
    alert("Adivinaste el número secreto!");
}else if(guess >= numero_secreto){
    alert("El número secreto es menor.");
}else if(guess <= numero_secreto){
    alert("El número secreto es mayor.");
}
-------------Ejercicio 6
let edad = Number(prompt("Cual es su edad?"));
let genero = toLowerCase(prompt("Cual es su genero?(M/F)"));

if((edad>=65 & genero=="m")||(edad>=60 & genero=="f")){
    alert("Usted puede jubilarse!");
}else{
    alert("Usted no puede jubilarse!");
}

*/