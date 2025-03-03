const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export interface WeatherData {
  city: string
  temperature: number
  icon: string
  sunrise: string
  sunset: string
}

const convertUnixTimestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()

    return {
      city: data.name,
      temperature: data.main.temp,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      sunrise: convertUnixTimestampToTime(data.sys.sunrise),
      sunset: convertUnixTimestampToTime(data.sys.sunset),
    }
  } catch (error) {
    console.error("Error fetching weather data:", error)
    throw error
  }
}
