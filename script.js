const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '96cdffdafd290b870ef2d0bb07f09160'
const diff_kelvin = -273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city)
    } else {
        alert('Ingrese una ciudad válida')
    }
})

function getWeather(city) {
    fetch(`${URL_BASE}?q=${city.trim()}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeather(data))
}

function showWeather(data) {

    const weatherData = document.getElementById('weatherData')
    weatherData.innerHTML = ''
    const cityData = data.name
    const tempData = Math.floor(data.main.temp + diff_kelvin)
    const descriptionData = data.weather[0].description
    const countryData = data.sys.country
    const imgData = data.weather[0].icon

    const tempCity = document.createElement('h2')
    const description = document.createElement('p')
    const icon = document.createElement('img')
    tempCity.textContent = `La temperatura en ${cityData}, ${countryData}, es: ${tempData}°`
    description.textContent = `El estado del clima es: ${descriptionData}`
    icon.src = `http://openweathermap.org/img/wn/${imgData}@2x.png`

    weatherData.appendChild(tempCity)
    weatherData.appendChild(description)
    weatherData.append(icon)

}


