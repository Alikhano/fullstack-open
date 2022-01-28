import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}`

const getWeatherByCity = city => axios.get(`${baseUrl}&q=${city}`).then(response => response.data)

export default {getWeatherByCity}