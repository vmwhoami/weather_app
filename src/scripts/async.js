import { forecast } from './queries';
import getLocalTime from './localTime';
let info = document.querySelector('.location');

let getTemp = (data) => {
  let num = Number(data.main.temp)
  let celsius = `${Math.round(num - 273.15)}\xB0C`
  let fahrenheit = `${Math.round((num - 273.15) * 9 / 5 + 32)}\xB0F`
  return [celsius, fahrenheit]
}

let setImg = (data, location) => {
  let imgcode = data.weather[0].icon;
  let imgLink = `./${location}/${imgcode}.png`;
  console.log(imgLink);
  return imgLink
}



let populateDom = (data) => {
  let location = document.querySelector('.location');
  let countryInitials = document.querySelector('.countryInitials');
  let temperature = document.querySelector('.temperature');
  let img = document.querySelector('.img');
  let descr = document.querySelector('.description')
  let infoimg = document.querySelector('.infoimg')
  img.src = setImg(data, 'imgs');
  infoimg.src = setImg(data, 'icons');
  descr.textContent = data.weather[0].main
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