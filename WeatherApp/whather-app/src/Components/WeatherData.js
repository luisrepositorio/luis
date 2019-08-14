import React from 'react';
import WearherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'


const WeatherData = () => 
(
  <div>
       <WeatherTemperature 
       temperature={20} 
       weatherstate={""} />
      <WearherExtraInfo humidity={85} wind={"10 m/s"}/>
     
  </div>
);
export default WeatherData