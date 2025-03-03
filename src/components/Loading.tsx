import React from "react"
import "../assets/styles/Loading.scss"

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading weather data...</p>
    </div>
  )
}

export default Loading
