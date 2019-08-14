import React from 'react';
import WeatherIcons from "react-weathericons";

const icons =
{
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy",
};
const getWeatherIcon = weatherstate =>
{
    const icon = icons[weatherstate];
    if(icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
    return <WeatherIcons name="day-sunny" size="2x" />;
}
   

const WeatherTemperature = ({ temperature, weatherstate }) =>
(
    <div>
          {
              getWeatherIcon(weatherstate)
          }
        <span>{`${temperature} C° - `}</span>
        
    </div>
);
export default WeatherTemperature;