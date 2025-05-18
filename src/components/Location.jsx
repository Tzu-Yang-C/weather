import React, { useEffect, useState } from "react";

const API_URL =
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-B5512792-AC47-4706-BCC8-58AE60FCBF77";

function Location({ setWeather }) {
  const [locations, setLocations] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  // 抓 API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const locs = data.records.location;
        setLocations(locs);
        setSelectedCity(locs[0].locationName);
        setWeather(parseWeatherData(locs[0]));
      });
  }, []);

  // 處理選單變更
  const handleChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    const cityData = locations.find((loc) => loc.locationName === cityName);
    setWeather(parseWeatherData(cityData));
  };

  // 解析天氣資料
  const parseWeatherData = (location) => {
    const wx = location.weatherElement.find((e) => e.elementName === "Wx").time[0].parameter.parameterName;
    const minT = location.weatherElement.find((e) => e.elementName === "MinT").time[0].parameter.parameterName;
    const maxT = location.weatherElement.find((e) => e.elementName === "MaxT").time[0].parameter.parameterName;
    const pop = location.weatherElement.find((e) => e.elementName === "PoP").time[0].parameter.parameterName;

    return {
      city: location.locationName,
      wx,
      minT,
      maxT,
      pop,
    };
  };

  return (
    <div className="cityselect">
      <label className="label">
        <select value={selectedCity} onChange={handleChange}>
          {locations.map((loc) => (
            <option key={loc.locationName} value={loc.locationName}>
              {loc.locationName}
            </option>
          ))}
        </select>
      </label>
    </div>
);
}

export default Location;