import React from 'react';
import PropTypes from 'prop-types'
import WearherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import 
{
  CLOUD,
  CLOUDY,
  SUN,
  RAIN, 
  SNOW, 
  WINDY,
} from './../../../constants/Weather';
import './styles.css';
const WeatherData = ({ data: {temperature,weatherstate,humidity, wind}  }) => 
{
 return ( <div className="weatherDataCont">
       <WeatherTemperature 
       temperature={temperature} 
       weatherstate={weatherstate} />
      <WearherExtraInfo humidity={humidity} wind={wind}/>
     
  </div>)
}
WeatherData.prototype =
{
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
}
export default WeatherData