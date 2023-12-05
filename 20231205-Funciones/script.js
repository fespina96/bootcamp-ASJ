// ------------------ Ejercicio 1 
// let factura = "Gracias por visitarnos!\n--------------------------\nFactura total:";
// let precio_coca = 100;
// let precio_cafe = 80;
// let precio_torta = 150;
// let precio_medialuna = 70;
// let total_factura = 0;

// const llamarMozo = () => {

//     let user_input = 0;
//     let num_input = 0;

//     do{
//         user_input= prompt(`Bienvenido al café, seleccione una opción:\n0-Cerrar\n1-Coca Cola $${precio_coca}\n2-Cafe $${precio_cafe}\n3-Torta $${precio_torta}\n4-Medialuna $${precio_medialuna}`);
//         if(!isNaN(user_input)){
//             switch(user_input){
//                 case "1":
//                     num_input = prompt("Seleccione una cantidad de vasos de Coca Cola");
//                     if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
//                         factura = factura+`\n${num_input} - Vaso de Coca Cola - $${num_input*precio_coca}`;
//                         total_factura = total_factura+(num_input*precio_coca);
//                     }
//                     break;
//                 case "2":
//                     num_input = prompt("Seleccione una cantidad de tazas de café");
//                     if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
//                         factura = factura+`\n${num_input} - Taza de Cafe - $${num_input*precio_cafe}`;
//                         total_factura = total_factura+(num_input*precio_cafe);
//                     }
//                     break;
//                 case "3":
//                     num_input = prompt("Seleccione una cantidad de porciones de torta");
//                     if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
//                         factura = factura+`\n${num_input} - Porción de Torta - $${num_input*precio_torta}`;
//                         total_factura = total_factura+(num_input*precio_torta);
//                     }
//                     break;
//                 case "4": 
//                     num_input = prompt("Seleccione una cantidad de medialunas");
//                     if(isNaN(num_input)){alert("Error, ingrese un número.");}else{
//                         factura = factura+`\n${num_input} - Medialuna - $${num_input*precio_medialuna}`;
//                         total_factura = total_factura+(num_input*precio_medialuna);
//                     }
//                     break;  
//                 default:
//                     console.log("Error input number");
//                     break;
//             }
//         }else{
//             if(user_input.toLowerCase().includes("chiste")){
//                 alert("¿Cuál es el último animal que subió al arca de Noé? El del-fin.");
//             }else if(user_input.toLowerCase().includes("como andas")){
//                 alert("Bien, el día está excelente.");
//             }else{
//                 alert("No entendí su orden.");
//             }
//         }
//     }while(user_input!=0);
// }

// let monto_propina = 0;

// const dejarPropina = () =>{
//     do{
//         monto_propina = prompt("Seleccione monto a dejar de propina:");
//         if(!isNaN(monto_propina) & monto_propina>0){
//             factura = factura+`\nPropina - $${monto_propina} - Muchas gracias!`;
//             total_factura = Number(total_factura)+Number(monto_propina);
//         }else{
//             alert("Error en seleccion de monto de propina.\nIngrese un monto nuevamente sin caracteres especiales.");
//         }
//     }while(monto_propina<=0);

// }

// const pedirCuenta = () =>{
//     alert(factura+`\n-------------------\nTotal Factura = $${total_factura}`);
// }

// ------------------ Ejercicio 2

// const fibonacci = (input_num) => {
//     let array_resultado = [];
//     if(isNaN(input_num) || input_num<=0){alert("Ingrese un número correcto."); return;}
//     for(let x=1;x<=Number(input_num)+2;x++){
//         if(x==1){
//             array_resultado.push(0);
//         }else if(x<=3){
//             array_resultado.push(1);
//         }else{
//             array_resultado.push(array_resultado[(x-2)]+array_resultado[(x-3)]);
//         }
//     }
//     console.log(array_resultado);
// }

// ------------------ Ejercicio 3
// let nombreHTML = document.getElementById("nombreHTML");
// let apellidoHTML = document.getElementById("apellidoHTML");
// let input_nombre = document.getElementById("nombre");
// let input_apellido = document.getElementById("apellido");
// let input_btn = document.getElementById("input_btn");

// let cargarDatos = () =>{
//     nombreHTML.innerHTML = `<strong>${input_nombre.value}</strong>`;
//     apellidoHTML.innerHTML = `<i style='color:red;'>${input_apellido.value}</i>`;
// }

// input_btn.addEventListener("click",cargarDatos());

// ------------------ Ejercicio 4
let scrCalc = document.getElementById("scrCalc");
let scrCalcBis = document.getElementById("scrCalc2");
let flag = "";
let repeat = document.getElementById("repeat");;
let lastVal = document.getElementById("lastVal");;
let botones = document.getElementsByClassName('btnCalc');

let btnPress = (val) =>{
    if(isNaN(val)){
        switch(val){
            case ".":
                if(!scrCalc.value.includes(".")){scrCalc.value = scrCalc.value +""+ val;};
                break;
            case "+":
                scrCalcBis.value = scrCalc.value;
                scrCalc.value = "";
                flag ="+";
                repeat.value = false;
                break;
            case "-":
                scrCalcBis.value = scrCalc.value;
                scrCalc.value = "";
                flag ="-";
                repeat.value = false;
                break;
            case "x":
                scrCalcBis.value = scrCalc.value;
                scrCalc.value = "";
                flag ="x";
                repeat.value = false;
                break;
            case "/":
                scrCalcBis.value = scrCalc.value;
                scrCalc.value = "";
                flag ="/";
                repeat.value = false;
                break;
            case "=":
                if (repeat.value == "true"){scrCalcBis.value = Number(lastVal.value);}else{lastVal.value = Number(scrCalc.value);}
                switch(flag){
                    case "+":
                        scrCalc.value = Number(scrCalcBis.value)+Number(scrCalc.value);
                        break;
                    case "-":
                        if(scrCalc.value != ""){scrCalc.value = Number(scrCalcBis.value)-Number(scrCalc.value);}else{scrCalc.value = "-";}
                        break;
                    case "x":
                        scrCalc.value = Number(scrCalcBis.value)*Number(scrCalc.value);
                        break;
                    case "/":
                        if(repeat.value == "true"){
                            scrCalc.value = Number(scrCalc.value)/Number(scrCalcBis.value);
                        }else if(scrCalc.value!=0){scrCalc.value = Number(scrCalcBis.value)/Number(scrCalc.value);}else{document.getElementsByTagName('body')[0].innerHTML = "<img src='https://wallpapersmug.com/download/1920x1080/bd36e4/space-dark-black-hole-planet.jpg'>"}
                        break;
                    default:
                         alert("Value error.");
                        break;
                    }
                if(repeat.value == "false"){scrCalcBis.value = Number(lastVal.value);}
                repeat.value = true;
                break;
            default:
                alert("Value error.");
                location.reload();
                break;
        }
    }else{
        scrCalc.value = scrCalc.value +""+ val; 
    }
}

for (let btn of botones){
    btn.addEventListener("click", ()=>btnPress(btn.innerHTML));
}