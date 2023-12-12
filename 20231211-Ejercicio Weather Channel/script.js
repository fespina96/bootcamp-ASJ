const cityName = document.getElementById("name");
const temp = document.getElementById("temp");
const img = document.getElementById("img");
const desc = document.getElementById("desc");
const ciudad = document.getElementById("ciudad");
const buscar = document.getElementById("buscar");

buscar.addEventListener("click", () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=fdd533266e28101881f610f2b8f1ebe1`)
    .then((response) => response.json()) //convertir a JSON
    .then((json) => {
      cityName.textContent = json.name;
      temp.textContent = `${Math.floor(json.main.temp - 273.15)}ºC`;
      img.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
      desc.textContent = json.weather[0].main;
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
});