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


const fibonacci = (input_num) => {
    let array_resultado = [];

    if(isNaN(input_num) || input_num<=0){alert("Ingrese un número correcto."); return;}
    
    for(let x=1;x<=input_num;x++){
        if(x<=2){
            array_resultado.push(1);
        }else{
            array_resultado.push(array_resultado[(x-2)]+array_resultado[(x-3)]);
        }
    }

    console.log(array_resultado);
}