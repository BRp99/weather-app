import "./App.css"
import { useEffect } from "react"
import { fetchWeather } from "./services/weatherService"

function App() {
  useEffect(() => {
    fetchWeather("Lisbon")
      .then((data) => console.log("API working:", data))
      .catch((error) => console.error("API ERROR:", error))
  }, [])

  return <div className="App">API TEST</div>
}

export default App
