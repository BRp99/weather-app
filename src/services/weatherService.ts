const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export interface WeatherData {
  name: string
  main: { temp: number }
  weather: [{ icon: string }]
  sys: { sunrise: number; sunset: number }
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    console.log("response status:", response.status)

    if (!response.ok) {
      throw new Error(`ERROR ${response.status}: Fail search for climate`)
    }

    const data: WeatherData = await response.json()
    console.log("api RESPONSE:", data)
    return data
  } catch (error) {
    console.error("ERROR fetching weather data:", error)
    throw error
  }
}

// test if API works
fetchWeather("Lisbon")
  .then((data) => console.log("Weather data:", data))
  .catch((error) => console.error("ERROR search time:", error))
