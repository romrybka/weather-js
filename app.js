// {
//   "city": "Kiev", 
//   "admin": "Kyyiv, Misto", 
//   "country": "Ukraine", 
//   "population_proper": "1662508", 
//   "iso2": "UA", 
//   "capital": "primary", 
//   "lat": "50.433333", 
//   "lng": "30.516667", 
//   "population": "2709000"
// },
// {
//   "city": "L\u2019viv", 
//   "admin": "L\u2019vivs\u2019ka Oblast\u2019", 
//   "country": "Ukraine", 
//   "population_proper": "717803", 
//   "iso2": "UA", 
//   "capital": "admin", 
//   "lat": "49.840661", 
//   "lng": "24.030451", 
//   "population": "803880"
// }

// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init ui object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  
  // Change location
  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getCityInfo()
  .then(cityInfo => {    
    return weather.getWeather(cityInfo);
  })
  .then(results => {
    // results = [cityInfo, weatherInfo]
    ui.paint(results);
  })
  .catch(error => console.log(error));
}

// async function getWeather() {
//   try {
//     const coordinates = await weather.getCoordinates();
//     const weatherData = await weather.getWeather(coordinates.lat, coordinates.lng);
//     console.log(weatherData);
//   } catch(error) {
//     console.log(error);
//   }
// }
// getWeather();




