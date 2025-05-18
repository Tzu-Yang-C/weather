import Head from "./components/Head"
import Location from "./components/Location"
import WeatherInfo from "./components/Weather"
import "./style/index.css"
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  return (
    <div>
      <Head />
      <Location setWeather={setWeather} />
      <WeatherInfo weather={weather} />
    </div>
    
  )
}

export default App
