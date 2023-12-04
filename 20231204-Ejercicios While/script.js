/*
-------------------------Ejercicios Condicionales SWITCH
-------------Ejercicio 1

let user_input = prompt("Ingresar número");

switch(user_input%2){
    case 0:
        alert("Numero par.");
        break
    default:
        alert("Numero impar.");
        break
}

-------------Ejercicio 2

let user_input = prompt("Ingrese palabra:");

switch(toLowerCase(user_input)) {
    case "casa": 
        alert("House");
        break;
    case "perro":
        alert("Dog");
        break;
    case "pelota":
        alert("Ball");
        break;
    case "arbol":
        alert("Tree");
        break;
    case "genio":
        alert("Genius");
        break;
    default:
        alert("Palabra incorrecta.");
}
-------------Ejercicio 3

let user_input = prompt("Ingrese valoracion:");

switch(toLowerCase(user_input)) {
    case "muy mala": 
        alert(`Calificaste la pelicula como ${user_input}.\nNo concuerdo con tu calificación.`);
        break;
    case "mala":
        alert(`Calificaste la pelicula como ${user_input}.\nNo concuerdo con tu calificación.`);
        break;
    case "mediocre":
        alert(`Calificaste la pelicula como ${user_input}.\nNo concuerdo con tu calificación.`);
        break;
    case "buena":
        alert(`Calificaste la pelicula como ${user_input}.\nNo concuerdo con tu calificación.`);
        break;
    case "muy buena":
        alert(`Calificaste la pelicula como ${user_input}.\nNo concuerdo con tu calificación.`);
        break;
    default:
        alert(`Calificaste la pelicula como ${user_input}.\nNo concuerdo con tu calificación.`);
}
alert('Gracias por visitarnos.');

-------------Ejercicio 4

let user_input = prompt("Ingrese número:");
let number_stack = 0;
let i = 0;

if (!isNaN(user_input)){
    while(i<=user_input){
        number_stack+=i;
        i++;
    }
    alert(`Valor ingresado=${user_input}\nTotal=${number_stack}\nPromedio=${number_stack/user_input}`)
}else{
    alert("Input invalido.")
}

-------------Ejercicio 5

let user_input = 0;
let number_stack = 0;

while(user_input>=0){
    user_input=prompt("Ingrese número positivo o ingrese un número negativo para terminar");
    if(!isNaN(user_input)){
        if(user_input>=0){number_stack++;}
    }else{
        alert("Input invalido, ingresar nuevamente.");
    }
}

alert(`El total de numeros positivos es ${number_stack}`);

-------------Ejercicio 6

i=1;
while(i<=100){
    if(i%3==0 & i%5==0){
        console.log('FizzBuzz');
    }else if(i%3==0 & !i%5==0){
        console.log('Fizz');
    }else if(!i%3==0 & i%5==0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
    i++;
}

-------------Ejercicio 7
*/
let user_input = 0;
let num_input = 0;
let factura = "Gracias por visitarnos!\n--------------------------\nFactura total:";
let precio_coca = 100;
let precio_cafe = 80;
let precio_torta = 150;
let precio_medialuna = 70;
let total_factura = 0;

do{
    user_input= prompt(`Bienvenido al café, seleccione una opción:\n0-Pedir cuenta\n1-Coca Cola $${precio_coca}\n2-Cafe $${precio_cafe}\n3-Torta $${precio_torta}\n4-Medialuna $${precio_medialuna}`);
    if(!isNaN(user_input)){
        switch(user_input){
            case "1":
                num_input = prompt("Seleccione una cantidad de vasos de Coca Cola");
                if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
                    factura = factura+`\n${num_input} - Vaso de Coca Cola - $${num_input*precio_coca}`;
                    total_factura = total_factura+(num_input*precio_coca);
                }
                break;
            case "2":
                num_input = prompt("Seleccione una cantidad de tazas de café");
                if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
                    factura = factura+`\n${num_input} - Taza de Cafe - $${num_input*precio_cafe}`;
                    total_factura = total_factura+(num_input*precio_cafe);
                }
                break;
            case "3":
                num_input = prompt("Seleccione una cantidad de porciones de torta");
                if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
                    factura = factura+`\n${num_input} - Porción de Torta - $${num_input*precio_torta}`;
                    total_factura = total_factura+(num_input*precio_torta);
                }
                break;
            case "4": 
                num_input = prompt("Seleccione una cantidad de medialunas");
                if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
                    factura = factura+`\n${num_input} - Medialuna - $${num_input*precio_medialuna}`;
                    total_factura = total_factura+(num_input*precio_medialuna);
                }
                break;  
            default:
                console.log("Error input number");
                break;
        }
    }else{
        if(user_input.toLowerCase().includes("chiste")){
            alert("¿Cuál es el último animal que subió al arca de Noé? El del-fin.");
        }else if(user_input.toLowerCase().includes("como andas")){
            alert("Bien, el día está excelente.");
        }else{
            alert("No entendí su orden.");
        }
    }
}while(user_input!=0);

let propina_sino = prompt("Desea dejar propina? SI/NO");
let monto_propina = 0;
if(propina_sino.toLowerCase().includes("si")){
    do{
        monto_propina = prompt("Seleccione monto a dejar de propina:");
        if(!isNaN(monto_propina) & monto_propina>0){
            factura = factura+`\nPropina - $${monto_propina} - Muchas gracias!`;
            total_factura = total_factura+monto_propina;
        }else{
            alert("Error en seleccion de monto de propina.\nIngrese un monto nuevamente sin caracteres especiales.");
        }
    }while(monto_propina<=0);
}

alert(factura+`\n-------------------\nTotal Factura = $${total_factura}`);