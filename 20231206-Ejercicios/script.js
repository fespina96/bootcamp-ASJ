let user_input = document.getElementById("user-input");
let output_p = document.getElementById("output-p");
const vocales = "aAeEiIoOuUáéíóúÁÉÍÓÚ";

const sacarVocales = () => {
    let string_output = "";

    for (let i=0;i < user_input.value.length;i++){
        
        if(vocales.includes(user_input.value[i])){
            string_output+="_";
        }else{
            string_output+=user_input.value[i];
        }
    }
    output_p.innerText = string_output;
}

user_input.addEventListener('input',()=> sacarVocales());