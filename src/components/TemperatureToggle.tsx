import React from "react"

interface Props {
  onToggle: () => void
  isCelsius: boolean
}

const TemperatureToggle: React.FC<Props> = ({ onToggle, isCelsius }) => {
  return <button onClick={onToggle}>{isCelsius ? "Switch to °F" : "Switch to °C"}</button>
}

export default TemperatureToggle
