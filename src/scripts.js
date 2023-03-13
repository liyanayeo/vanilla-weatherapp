function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "t9fbed0c49f69aaa4826cecb20340o76";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=newYork&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
