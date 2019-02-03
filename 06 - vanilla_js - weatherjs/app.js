// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object and UI object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set locaion in Local Storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal, this is jquery
  $('#locModal').modal('hide');
});

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
