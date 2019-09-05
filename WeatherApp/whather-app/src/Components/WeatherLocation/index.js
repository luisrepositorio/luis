import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types';
import getUrlWeatherBycity from './../../Services/getUrlWeatherBycity'
import transformWeather from './../../Services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData'
import './styles.css';



class WeatherLocation extends Component{
    constructor(props){
        super(props);
        const {city}= props;

        this.state = {
            city: city,
            data: null
        }
        console.log("constructor");
    }
    componentDidMount()
    {
        console.log("componentDidMount");
        this.hanledUpdateClick();
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
     
    }

    
    hanledUpdateClick=() => {
        const api_weather = getUrlWeatherBycity(this.state.city);
        fetch(api_weather).then( resolve => {
                return resolve.json();
            }).then( data => {
                console.log("resultado del hanledUpdateClick");
                const newweather =  transformWeather(data);               
                this.setState ({
                    data: newweather
                });
                
               
            });


    }
    render(){
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return( <div className="weatherlocationCont" onClick={onWeatherLocationClick}>
                    <Location city={city}></Location>          
                    {data ?
                        <WeatherData data={data}></WeatherData> :
                        <CircularProgress size={50}/>
                    }
                 
                </div> 
            )
    }   
}
WeatherLocation.prototypes= {
    city: PropTypes.string.isRequired,
   onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;