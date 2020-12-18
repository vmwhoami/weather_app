import { forecast } from './queries';
let info = document.querySelector('.location');

let getTemp = (data) => {
  let num = Number(data.main.temp)
  let celsius = Math.round(num - 273.15)
  let fahrenheit = Math.round((num - 273.15) * 9 / 5 + 32)
  return [celsius, fahrenheit]
}


let populateDom = (data) => {
  let location = document.querySelector('.location');
  let countryInitials = document.querySelector('.countryInitials')
  let temperature = document.querySelector('.temperature')
  temperature.textContent = (getTemp(data))[0]
  location.textContent = data.name
  countryInitials.textContent = data.sys.country
}
async function getPredictions(lat, lon, exclude) {
  let link = forecast(lat, lon, exclude);
  let data = fetch(link);
  let raw = await data
  let predictions = raw.json()
  return predictions
}

let countryInitials = document.querySelector('.countryInitials');
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    populateDom(data)
    let temp = getTemp(data)


    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let pedictions = await getPredictions(lat, lon, 'minutely,hourly')
    console.log(pedictions);

  } catch (error) {
    let err = document.querySelector('.error__msg');
    err.textContent = "Couldn't find your location"

  }

}

export { fetchData }