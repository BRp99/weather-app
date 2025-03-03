import React, { useEffect, useState } from "react"
import { fetchWeather, WeatherData } from "./services/weatherService"
import "./assets/styles/global.scss"

import CitySelector from "./components/CitySelector"
import TemperatureToggle from "./components/TemperatureToggle"
import WeatherCard from "./components/WeatherCard"
import Loading from "./components/Loading"

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [city, setCity] = useState<string>("Lisbon")
  const [isCelsius, setIsCelsius] = useState(true)

  useEffect(() => {
    fetchWeather(city).then(setWeather).catch(console.error)
  }, [city])

  const handleSelectCity = (city: string) => {
    setCity(city)
  }

  const handleToggleTemperature = () => {
    setIsCelsius(!isCelsius)
  }

  const convertTemperature = (tempInCelsius: number) => {
    const tempInFahrenheit = isCelsius ? tempInCelsius : (tempInCelsius * 9) / 5 + 32

    return parseFloat(tempInFahrenheit.toFixed(2))
  }

  return (
    <div className="app-container">
      <div className="controls-container">
        <CitySelector onSelectCity={handleSelectCity} />
        <TemperatureToggle onToggle={handleToggleTemperature} isCelsius={isCelsius} />
      </div>

      {weather ? <WeatherCard weather={weather} convertTemperature={convertTemperature} /> : <Loading />}
    </div>
  )
}

export default App
