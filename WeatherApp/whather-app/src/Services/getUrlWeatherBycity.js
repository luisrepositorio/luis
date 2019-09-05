import {url_base_weather, api_Key} from './../constants/api_url';
const getUrlWeatherBycity = city => {
   return  `${url_base_weather}?q=${city}&appid=${api_Key}`
}
export default getUrlWeatherBycity;