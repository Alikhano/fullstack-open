import React, {useState, useEffect} from "react";
import weatherService from '../services/weather'

const CountryInfo = ({country}) => {
    const [weather, setWeather] = useState({
        wind: '',
        temp: '',
        iconUrl: ''
    })
    useEffect(() => {
        weatherService.getWeatherByCity(country.capital).then(capitalWeather => {
            setWeather({
                wind: capitalWeather.wind.speed,
                temp: capitalWeather.main.temp,
                iconUrl: `http://openweathermap.org/img/w/${capitalWeather.weather[0].icon}.png`
            })
        })
    }, [])

    return (
        <div>
            <h2>{country.name.common.toLocaleString()}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
                {Object.values(country.languages).map(value => <li key={value}>{value}</li>)}
            </ul>
            <p><img src={country.flags.png} alt='weather icon'/></p>
            <h2>Weather in {country.capital}</h2>
            <p><strong>temperature:</strong> {weather.temp}</p>
            <p><img src={weather.iconUrl} alt='weather icon'/></p>
            <p><strong>wind:</strong> {weather.wind}</p>
        </div>
    )
}

export default CountryInfo