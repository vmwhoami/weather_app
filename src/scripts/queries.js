const apikey = process.env.KEY;
const forecast = (lat, lon, part = {}) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apikey}`
}
const weatherNow = (location) => `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apikey}`;

export { forecast, weatherNow };