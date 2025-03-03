import React from "react"
import "../assets/styles/CitySelector.scss"

interface Props {
  onSelectCity: (city: string) => void
}

const CitySelector: React.FC<Props> = ({ onSelectCity }) => {
  return (
    <select className="city-selector" onChange={(e) => onSelectCity(e.target.value)}>
      <option value="Lisbon">Lisbon</option>
      <option value="New York">New York</option>
      <option value="Tokyo">Tokyo</option>
    </select>
  )
}

export default CitySelector
