import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { LuPercent } from "react-icons/lu";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";

function WeatherInfo({ weather }) {
  if (!weather) return null; // 如果沒有資料就不顯示

  return (
    <div className="info">
      <p className="weather"><FaTemperatureHigh />最高溫{weather.maxT}<TbTemperatureCelsius /></p>
      <p className="weather"><FaTemperatureLow />最低溫{weather.minT}<TbTemperatureCelsius /></p>
      <p className="weather"><FaCloud />{weather.wx}</p>
      <p className="weather"><FaCloudShowersHeavy />降雨機率{weather.pop}<LuPercent /></p>
    </div>
  );
}

export default WeatherInfo;