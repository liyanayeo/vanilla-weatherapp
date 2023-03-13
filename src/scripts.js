function formatDate (timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    
    if (hours < 10) {
    hours `0${minutes}`;
}
    
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes `0${minutes}`;
}

    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = date.getDay();

    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector(#date);

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = Math.round(response.data.humidity);
  windElement.innerHTML = Math.round(response.data.wind);
  dateElement.innerHTML = formateDate(response.data.dt * 1000);
}

let apiKey = "t9fbed0c49f69aaa4826cecb20340o76";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=newYork&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
