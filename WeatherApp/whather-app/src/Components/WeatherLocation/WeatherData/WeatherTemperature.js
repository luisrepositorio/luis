import React from 'react';
import WeatherIcons from "react-weathericons";
import PropTypes from 'prop-types';
import './styles.css';
import 
{
  CLOUD,
  CLOUDY,
  SUN,
  RAIN, 
  SNOW, 
  WINDY,
} from './../../../constants/Weather';

const icons =
{
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
};
const SizeIcon ="4x";
const getWeatherIcon = weatherstate =>
{
    const icon = icons[weatherstate];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={SizeIcon} />;
    else
    return <WeatherIcons className="wicon" name="day-sunny" size={SizeIcon} />;
}
   


const WeatherTemperature = ({ temperature, weatherstate }) =>
(
    <div className="WeatherTemperatureCont">
          {
              getWeatherIcon(weatherstate)
          }
        <span className="temperature" >{`${temperature} `}</span>
        <span className="temperatureType">{` C°`}</span>
        
    </div>
);
WeatherTemperature.propTypes = 
{
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,
};
export default WeatherTemperature;