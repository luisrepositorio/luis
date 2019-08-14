import React from 'react';
import WeatherIcons from "react-weathericons";

const icons =
{
    sunny: "day-sunny",
    fog: "day-fog",
};
const getWeatherIcon = temperature =>
{
    const icon = icons[temperature];
    if(icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
    return <WeatherIcons name="day-sunny" size="2x" />;
}
   

const WeatherTemperature = ({ temperature, weatherstate }) =>
(
    <div>
          {
              getWeatherIcon(temperature)
          }
        <span>{`${temperature} C° - `}</span>
        
    </div>
);
export default WeatherTemperature;