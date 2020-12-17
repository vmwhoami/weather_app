import './styles/styles.scss';
import inputValidtion from './assets/validations';
import modal from './assets/modal';

// require('dotenv').config()
// const dotenv = require('dotenv');
// dotenv.config();


// module.exports = {
//   masterKey: process.env.KEY
// };
// let apikey = Key

// console.log(apikey);

// let input = document.getElementById("input")
// let btn = document.getElementById("btn")
// let info = document.querySelector('.location')
// let countryInitials = document.querySelector('.countryInitials')


// let forecast = (lat, lon, part = null) => {
//   return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${process.env.API_KEY}`
// }

// let weatherNow = (city) => {

//   return `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`
// }


// btn.addEventListener('click', () => {
//   let error = inputValidtion(input)
//   if (!error) {
//     let searchloc = weatherNow(input.value);
//     fetchData(searchloc)
//   }
// })

// async function fetchData(url) {
//   try {
//     let response = await fetch(url);
//     let weatherData = await response.json();

//     // let city = weatherData.name
//     // let county = weatherData.sys.country
//     let lat = weatherData.coord.lat;
//     let lon = weatherData.coord.lon;
//     let forc = forecast(lat, lon, 'minutely,hourly')
//     let predictions = await fetch(forc);
//     let dayly = await predictions.json();
//     console.log(dayly);
//     // let next5days = await fetch(forecast);

//     // console.log(next5days);


//     info.textContent = city
//     countryInitials.textContent = county



//   } catch (error) {
//     console.log(error);
//   }

// }

