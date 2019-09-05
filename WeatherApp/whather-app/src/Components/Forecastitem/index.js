import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'

const ForecatstItem = ({ weekDay, hour ,data})=> (
    <div>
         <h2>{weekDay} Hora: {hour} hs</h2>
         <WeatherData data={data}></WeatherData>
    </div>
);
ForecatstItem.protoTypes ={
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
      })
}
export default ForecatstItem;