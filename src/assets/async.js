
let info = document.querySelector('.location');

let getTemp = (data) => {
  let num = Number(data.main.temp)
  let celsius = num - 273.15
  let fahrenheit = (num - 273.15) * 9 / 5 + 32
  return [celsius, fahrenheit]
}


let populateDom = (data) => {
  let location = document.querySelector('.location');
  let countryInitials = document.querySelector('.countryInitials')
  location.textContent = data.name
  countryInitials.textContent = data.sys.country
}

let countryInitials = document.querySelector('.countryInitials');
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    populateDom(data)
    let temp = getTemp(data)

    console.log(temp);
    let lat = weatherData.coord.lat;
    let lon = weatherData.coord.lon;
    console.log(weatherData);
    info.textContent = city
    countryInitials.textContent = county
  } catch (error) {
    let err = document.querySelector('.error__msg');
    err.textContent = "Couldn't find your location"

  }

}

export { fetchData }