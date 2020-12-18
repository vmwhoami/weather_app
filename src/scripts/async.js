import { forecast } from './queries';
import getLocalTime from './localTime';


const getTemp = (data) => {
  const num = Number(data.main.temp);
  const celsius = `${Math.round(num - 273.15)}\xB0`;
  const fahrenheit = `${Math.round((num - 273.15) * 9 / 5 + 32)}\xB0`;
  return [celsius, fahrenheit];
};

const feelsLike = (data) => {
  const num = Number(data.main.feels_like);
  const celsius = `${Math.round(num - 273.15)}\xB0`;
  const fahrenheit = `${Math.round((num - 273.15) * 9 / 5 + 32)}\xB0`;
  return [celsius, fahrenheit];
};

const setImg = (data, location) => {
  const imgcode = data.weather[0].icon;
  const imgLink = `./${location}/${imgcode}.png`;
  return imgLink;
};

const setImages = (data) => {
  const img = document.querySelector('.img');
  const infoimg = document.querySelector('.infoimg');
  img.src = setImg(data, 'imgs');
  infoimg.src = setImg(data, 'icons');
};

const setlocalTime = (data) => {
  const notice = document.querySelector('.main__notice');

  const dispTime = document.querySelector('.main__time');
  const mainDate = document.querySelector('.main__date');
  const time = getLocalTime(data);
  const dayofweek = time[0];
  const date = time[1];
  const month = time[2];
  const hoursMin = time[3];
  mainDate.textContent = `${dayofweek}, ${date} of ${month}`;
  notice.textContent = '*Local time 24 hours format';
  dispTime.textContent = hoursMin;
};

const setTemp = (data, num) => {
  const temperature = document.querySelector('.temperature');
  temperature.textContent = '';
  const feel = document.querySelector('.undertop__feelslike');
  if (num === 0) {
    temperature.textContent = `${(getTemp(data))[num]}C`;
    feel.textContent = `Feels like ${(feelsLike(data))[num]}C`;
  } else {
    temperature.textContent = `${(getTemp(data))[num]}F`;
    feel.textContent = `Feels like ${(feelsLike(data))[num]}F`;
  }
};


const populateDom = (data, num = null) => {
  setImages(data);
  const location = document.querySelector('.location');
  const countryInitials = document.querySelector('.countryInitials');
  const descr = document.querySelector('.description');

  descr.textContent = data.weather[0].main;

  location.textContent = data.name;
  countryInitials.textContent = data.sys.country;
};


async function getPredictions(lat, lon, exclude) {
  const link = forecast(lat, lon, exclude);
  const data = fetch(link);
  const raw = await data;
  const predictions = raw.json();
  return predictions;
}


async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    populateDom(data);
    setTemp(data, 0);
    setlocalTime(data);
    const topinfo = document.querySelector('.topinfo');
    topinfo.addEventListener('click', () => {
      if (!topinfo.classList.contains('fahrenheit')) {
        topinfo.classList.add('fahrenheit');
        setTemp(data, 1);
      } else {
        topinfo.classList.remove('fahrenheit');
        setTemp(data, 0);
      }
    });

    const { lat } = data.coord;
    const { lon } = data.coord;
    const pedictions = await getPredictions(lat, lon, 'minutely,hourly');
  } catch (error) {
    const err = document.querySelector('.error__msg');
    err.textContent = "Couldn't find your location";
  }
}

export { fetchData };