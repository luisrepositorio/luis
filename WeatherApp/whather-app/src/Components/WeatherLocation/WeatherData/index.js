import React from 'react';
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
const WeatherData = () => 
(
  <div className="weatherDataCont">
       <WeatherTemperature 
       temperature={20} 
       weatherstate={CLOUD} />
      <WearherExtraInfo humidity={86} wind={"10 m/s"}/>
     
  </div>
);
export default WeatherData