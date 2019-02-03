class Weather{
  constructor(city, country){
    this.apiKey = 'd3d37ee03129373242999fa14ca6194e';
    this.city = city;
    this.country = country;
    
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // Change location 
  changeLocation(city, country) {
    this.city = city;
    this.country = country;

  }
}