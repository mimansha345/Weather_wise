const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "886b502e26msh95bb95dd7dae7cfp18d69ejsnec2303e4a882",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city)=>{
cityName.innerHTML = city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    // cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
	  temp2.innerHTML = response.temp;
    temp3.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    feels_like2.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
	  humidity2.innerHTML = response.humidity;
    humidity3.innerHTML = response.humidity;
	  min_temp.innerHTMl = response.min_temp;
    min_temp2.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    max_temp2.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
	  wind_speed2.innerHTML = response.wind_speed;
    wind_speed3.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_degrees2.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunrise2.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    sunset2.innerHTML = response.sunset2;
  })
  .catch((err) => console.log(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Gorakhpur")