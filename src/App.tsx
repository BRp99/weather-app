import React, { useEffect, useState } from "react"
import { fetchWeather, WeatherData } from "./services/weatherService"

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    fetchWeather("Lisbon").then(setWeather).catch(console.error)
  }, [])

  return (
    <div>
      {weather ? (
        <div>
          <h1>Weather in {weather.city}</h1>
          <p>Temperature: {weather.temperature}°C</p>
          <img src={weather.icon} alt="Weather icon" />
          <p>🌅Sunrise: {weather.sunrise}</p>
          <p>🌇 Sunset: {weather.sunset}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
