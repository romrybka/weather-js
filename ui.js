class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  getIconSrc(name) {
    let src;

    switch(name) {
      case 'clear-day':
        src = 'https://www.metaweather.com/static/img/weather/c.svg';
        break;
      case 'rain':
        src = 'https://www.metaweather.com/static/img/weather/lr.svg';
        break;
      case 'snow':
        src = 'https://www.metaweather.com/static/img/weather/sn.svg';
        break;
      case 'sleet':
        src = 'https://www.metaweather.com/static/img/weather/sl.svg';
        break;
      case 'cloudy':
        src = 'https://www.metaweather.com/static/img/weather/hc.svg';
        break;
      default:
        src = 'https://www.metaweather.com/static/img/weather/lc.svg';
        break;
    }
    
    return src;
  }

  paint(info) {
    // info = [cityInfo, weatherInfo]
    this.location.textContent = `${info[0].city}, ${info[0].country}`;
    this.desc.textContent = info[1].summary;
    this.string.textContent = `${Math.round((info[1].temperature - 32) * (5/9))} \u2103`;
    this.icon.setAttribute('src', this.getIconSrc(info[1].icon));
    this.icon.setAttribute('style', 'height:50px');
    this.humidity.textContent = `Relativy Humidity: ${info[1].humidity}`;
    this.dewpoint.textContent = `DewPoint: ${info[1].dewPoint}`;
    this.feelsLike.textContent = `Feels like: ${info[1].summary}`;
    this.wind.textContent = `Wind: ${info[1].windSpeed} m/s`;
    
  }
}



// icon
// + clear-day
// + rain
// + snow
// + sleet
// + cloudy
// clear-night
// wind
// fog
// partly-cloudy-day
// partly-cloudy-night

