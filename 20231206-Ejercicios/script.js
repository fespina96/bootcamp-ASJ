let user_input = document.getElementById("user-input");
let output_p = document.getElementById("output-p");
const vocales = ["a","e","i","o","u"]

const sacarVocales = () => {
    let string_input = user_input.value;
    let string_output = "";

    for (let i=0;i < string_input.length;i++){
        
        if(vocales.includes(string_input[i])){
            string_output+="_";
        }else{
            string_output+=string_input[i];
        }
    }

    output_p.innerText = string_output;
}

user_input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sacarVocales();
    }
});