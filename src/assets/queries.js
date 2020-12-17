
let apikey = process.env.KEY
let forecast = (lat, lon, part = {}) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apikey}`
}
let weatherNow = (city) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`
}

export { forecast, weatherNow }