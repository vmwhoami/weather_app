let info = document.querySelector('.location')
let countryInitials = document.querySelector('.countryInitials')
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let weatherData = await response.json();
    let city = weatherData.name
    let county = weatherData.sys.country
    let lat = weatherData.coord.lat;
    let lon = weatherData.coord.lon;
    console.log(lat);
    info.textContent = city
    countryInitials.textContent = county
  } catch (error) {
    console.log(error);
  }

}

export { fetchData }