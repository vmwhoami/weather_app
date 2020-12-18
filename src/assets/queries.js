
let apikey = process.env.KEY
let forecast = (lat, lon, part = {}) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apikey}`
}
let weatherNow = (location) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apikey}`
}

let pngsetter = (icon) => {
  // http://openweathermap.org/img/w/11d.png
}
export { forecast, weatherNow }