import { forecast } from './queries';
import getLocalTime from './localTime';




let getTemp = (data) => {
  let num = Number(data.main.temp)
  let celsius = `${Math.round(num - 273.15)}\xB0C`
  let fahrenheit = `${Math.round((num - 273.15) * 9 / 5 + 32)}\xB0F`
  return [celsius, fahrenheit]
}

let setImg = (data, location) => {
  let imgcode = data.weather[0].icon;
  let imgLink = `./${location}/${imgcode}.png`;
  return imgLink
}

let setImages = (data) => {
  let img = document.querySelector('.img');
  let infoimg = document.querySelector('.infoimg');
  img.src = setImg(data, 'imgs');
  infoimg.src = setImg(data, 'icons');
}

let setlocalTime = (data) => {
  let time = getLocalTime(data);
  let dayofweek = time[0];
  let date = time[1];
  let month = time[2];
  let hoursMin = time[3]
}

let setTemp = (data, num) => {
  let temperature = document.querySelector('.temperature');
  temperature.textContent = ''
  let feelsLike = document.querySelector('.undertop__feelslike');
  temperature.textContent = (getTemp(data))[num];
}


let populateDom = (data, num = null) => {
  let location = document.querySelector('.location');
  let countryInitials = document.querySelector('.countryInitials');
  let descr = document.querySelector('.description');

  descr.textContent = data.weather[0].main

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


async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    populateDom(data)
    setTemp(data, 0)
    let topinfo = document.querySelector('.topinfo');
    topinfo.addEventListener('click', () => {
      if (!topinfo.classList.contains('fahrenheit')) {
        console.log(topinfo);
        topinfo.classList.add('fahrenheit')
        setTemp(data, 1)
      } else {
        topinfo.classList.remove('fahrenheit')
        setTemp(data, 0)
      }
    })

    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let pedictions = await getPredictions(lat, lon, 'minutely,hourly')


  } catch (error) {
    let err = document.querySelector('.error__msg');
    err.textContent = "Couldn't find your location"

  }

}

export { fetchData }