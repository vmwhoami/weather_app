import './styles/styles.scss';
import addEventsToSearch from './assets/events';



let apikey = process.env.KEY
addEventsToSearch()

let info = document.querySelector('.location')
let countryInitials = document.querySelector('.countryInitials')


let forecast = (lat, lon, part = {}) => {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apikey}`
}

let weatherNow = (city) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`
}





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

