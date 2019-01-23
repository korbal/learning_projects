// Init weather object
const weather = new Weather('budapest', 'hu');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('London', 'uk');

// Because getWeather is an async function, it returns a promise
function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results)
  })
  .catch(err => console.log(err));
}
