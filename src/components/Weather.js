import React, { useState, useEffect } from "react";
import WeatherStyles from "./styles/WeatherStyles";

const Weather = () => {
  // grabbing coordinates and assigning to state
  const [lat, setLat] = useState(33);
  const [lon, setLon] = useState(-118);
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });
  const [data, setData] = useState("");
  const appid = "api-key";
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;
  // useEffect(() => {
  //   fetch(url).then(res => res.json()).then(data => weather = data)
  // })

  return (
    <WeatherStyles>
      <div>
        <h6>Hello Weather</h6>
        <h6>
          Location: lat: {lat} lon: {lon}
        </h6>
        {data}
      </div>
    </WeatherStyles>
  );
};

export default Weather;
