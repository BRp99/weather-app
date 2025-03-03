import React from "react"
import { WeatherData } from "../services/weatherService"
import styles from "../assets/styles/WeatherCard.module.scss"

interface Props {
  weather: WeatherData
  convertTemperature: (tempInCelsius: number) => number
}

const WeatherCard: React.FC<Props> = ({ weather, convertTemperature }) => {
  const temperature = convertTemperature(weather.temperature)

  return (
    <div className={styles["weather-card"]}>
      <h2>Weather in {weather.city}</h2>
      <img src={weather.icon} alt="Weather icon" />
      <p className={styles.temperature}>
        Temperature: {temperature}°{weather.temperature !== temperature ? (temperature === convertTemperature(weather.temperature) ? "C" : "F") : "C"}
      </p>
      <p className={styles["sun-time"]}>🌅 Sunrise: {weather.sunrise}</p>
      <p className={styles["sun-time"]}>🌇 Sunset: {weather.sunset}</p>
    </div>
  )
}

export default WeatherCard
