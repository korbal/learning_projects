class Storage {
  constructor(){
    this.city;
    this.country;
    this.defaultCity = 'Budapest';
    this.defaultCountry = 'Hungary';
  }
  getLocationData(){
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city')
    }

    if(localStorage.getItem('country') === null){
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country')
    }

    return {
      city: this.city,
      country: this.country
    }
  }
  setLocationData(city, country){
    // These are just strings so no need to parse and stringify them as json for local storage
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);

  }
}