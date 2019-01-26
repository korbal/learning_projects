// Init weather object and UI object
const weather = new Weather('budapest', 'hu');
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('London', 'uk');

// Because getWeather is an async function, it returns a promise
function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results)
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
