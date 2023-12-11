// const cuadrados = document.getElementsByClassName("square");
const colorDisplay = document.getElementById("colorDisplay");
const h1 = document.getElementById("h1");
const body = document.getElementsByTagName("body");
const message = document.getElementById("message");
const btnHard = document.getElementById("hard");
const btnEasy = document.getElementById("easy")
const squareContainer = document.getElementById("container");
let flag = false;

// let colors = ["rgb(255, 47, 100)", "rgb(160, 120, 57)", "rgb(90, 200, 175)", "rgb(200, 150, 13)", "rgb(62, 23, 90)", "rgb(150, 160, 80)"];

function loadPage(num) {
    btnLoad();
    const colors = generateColors(num)
    const option = Math.floor(Math.random() * colors.length);
    console.log(option)
    let pickedColor = colors[option];
    // h1.style.backgroundColor = pickedColor;
    colorDisplay.innerText = pickedColor;
    squareContainer.innerHTML = ""
    
    
    for (let i = 0; i < colors.length; i++) {
        const square = document.createElement("div")
        square.className = "square"
        squareContainer.appendChild(square);
        square.style.backgroundColor = colors[i];
        square.addEventListener("click", () => {
            if (i == option) {
                const cuadrados = document.getElementsByClassName("square");
                victoria(pickedColor, cuadrados);
            } else {
                fallo(square);
            }
        })
        
    }
}

function generateColors(num) {
    colors = [];
    for (let i = 0; i < num; i++) {
        let cadena = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        colors.push(cadena);
    }
    return colors;
}

function victoria(pickedColor, cuadrados) {
    for (let square of cuadrados) {
        square.style.backgroundColor = pickedColor;
        square.removeEventListener("click", () => {fallo(square)})
    }
    message.innerText = "Correcto!";
    flag = true;
    // loadPage();
}

function fallo(square) {
    if (!flag) {
        square.style.backgroundColor = body[0].style.backgroundColor;
        message.innerText = "Intentelo nuevamente!";
    }

}

function btnLoad() {
    btnHard.addEventListener("click", () => {
        flag = false;
        btnHard.className = "selected";
        btnEasy.className = "";
        loadPage(6);
    })
    btnEasy.addEventListener("click", () => {
        flag = false;
        btnEasy.className = "selected";
        btnHard.className = "";
        loadPage(3);
    })
}

loadPage(6);

