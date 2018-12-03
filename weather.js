class Weather {
  constructor (city, country) {
    this.apiKey = '68e986237aa7d52d5cd9962697ecb51c';
    this.city = city;
    this.country = country;
    // this.lat = 42.3601;
    // this.lng = -71.0589;
  }

  // Fetch city information from database
  async getCityInfo() {
    let cityInfo;

    const res = await fetch('ua.json');

    const resData = await res.json();

    resData.forEach( currentCity => {
      if (currentCity.city === this.city) {
        cityInfo = currentCity;
      }
    });

    return cityInfo;
  }

  // Fetch weather from API
  async getWeather (cityInfo) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apiKey}/${cityInfo.lat},${cityInfo.lng}`);

    const responseData = await response.json();
    const weatherInfo = responseData.currently;
        
    const result = [];
    result.push(cityInfo);
    result.push(weatherInfo);
    
    return result;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}