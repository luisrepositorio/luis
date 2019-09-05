import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForrecastItem from './Forecastitem/index';
import getUrlForecast from './../Services/getUrlForecast';
import './styles.css';
import transformForecast from './../Services/transformForecast';
/*
const days =[
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes"
]
const data = {
    temperature: 10,
    weatherState: 'normal',
    humidity: 10,
    wind: 'normal'
};
*/
class ForecastExtended extends Component {
    constructor()
    {
        super();
        this.state={ forecastData:null}
    }
    componentDidMount(){
        this.updateCity(this.props.city);
        
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.city !== this.props.city)
        {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }

    }
    updateCity = city => {
        const url_forecast = getUrlForecast(city);
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData: forecastData});
            }
        )
    }
   // const api_weather = getUrlWeatherBycity(this.state.city);
    renderForecastItemDays(forecastData){
      
       return forecastData.map( forecast =>(
       <ForrecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
         weekDay={forecast.weekDay} 
         hour={forecast.hour} 
         data={forecast.data}>
       </ForrecastItem>));
       
    };
    rendeProgress = () => {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }
    render() {
        const {city} = this.props;
        const { forecastData } = this.state;
        return (<div>
                     <h2 className="forecast-title">Pronostico Extendido para {city}</h2>
                     { forecastData ? 
                       this.renderForecastItemDays(forecastData):
                       this.rendeProgress()}
                </div>);
    }
}
ForecastExtended.propTypes ={
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;