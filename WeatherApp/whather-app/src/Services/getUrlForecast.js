import {url_base_Forecast, api_Key} from './../constants/api_url';
const getUrlForecast = city => {
   return  `${url_base_Forecast}?q=${city}&appid=${api_Key}`
}
export default getUrlForecast;