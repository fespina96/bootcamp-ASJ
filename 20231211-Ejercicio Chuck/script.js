let buscar = document.getElementById("buscar");
let joke = document.getElementById("joke");

buscar.addEventListener("click", () => {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json()) //convertir a JSON
    .then((json) => {
      joke.textContent = json.value;
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
});