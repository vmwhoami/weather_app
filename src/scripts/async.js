import { forecast } from './queries';
import getLocalTime from './localTime';

const getTemp = (data) => {
  const num = Number(data.main.temp);
  const cel = Math.round(num - 273.15);
  const celsius = `${cel}\xB0`;
  const f = (num - 273.15) * 9;
  const faht = Math.round((f / 5) + 32);
  const fahrenheit = `${faht}\xB0`;
  return [celsius, fahrenheit];
};

const feelsLike = (data) => {
  const num = Number(data.main.feels_like);
  const cel = Math.round(num - 273.15);
  const celsius = `${cel}\xB0`;
  const f = (num - 273.15) * 9;
  const faht = Math.round((f / 5) + 32);
  const fahrenheit = `${faht}\xB0`;
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

const setTemp = (data, num, s) => {
  const temperature = document.querySelector('.temperature');
  const feel = document.querySelector('.undertop__feelslike');
  temperature.textContent = `${(getTemp(data))[num]}${s}`;
  feel.textContent = `Feels like ${(feelsLike(data))[num]}${s}`;
};
const changeMerics = (data) => {
  const search = document.querySelector('.search');
  search.addEventListener('click', () => {
    const topinfo = document.querySelector('.topinfo');
    topinfo.classList.toggle('fahrenheit');
    if (topinfo.classList.contains('fahrenheit')) {
      setTemp(data, 1, 'F');
    } else {
      setTemp(data, 0, 'C');
    }
  });
};

const populateDom = (data) => {
  setlocalTime(data);
  setImages(data);
  setTemp(data, 0, 'C');
  changeMerics(data);
  const location = document.querySelector('.location');
  const countryInitials = document.querySelector('.countryInitials');
  const descr = document.querySelector('.description');
  descr.textContent = data.weather[0].main;
  location.textContent = data.name;
  countryInitials.textContent = data.sys.country;
};

const showError = (error) => {
  if (error) {
    const err = document.querySelector('.error__msg');
    err.textContent = 'Location not found';
  }
};

async function getPredictions(lat, lon, exclude) {
  const link = forecast(lat, lon, exclude);
  const data = fetch(link);
  const raw = await data;
  const predictions = raw.json();
  return predictions;
}

export default async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    populateDom(data);
    const { lat } = data.coord;
    const { lon } = data.coord;
    await getPredictions(lat, lon, 'minutely,hourly');
  } catch (error) {
    showError(error);
  }
}
