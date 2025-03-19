import sun from '/public/icons/sun.png'
import cloud from "/public/icons/clouds.png"
import mist from '/public/icons/fog.png'
import rain from '/public/icons/rain.png'
import snow from '/public/icons/snow.png'
import storm from '/public/icons/storm.png'
import wind from '/public/icons/windy.png'
import clear from '/public/icons/clear.png'
import cloudy from '/public/icons/cloudy.png'
import partlyCloudy from '/public/icons/partly-cloudy.png'
import { useEffect, useState } from 'react'


export function useWeatherConditionIcon({ condition }) {
  const [iconWeather, setIconWeather] = useState();

  useEffect(() => {
    if (condition) {
      if (condition.toLowerCase().includes('sun')) {
        setIconWeather(sun);
      }
      else if (condition.toLowerCase().includes('clouds')) {
        setIconWeather(cloud);
      }
      else if (condition.toLowerCase().includes('partly cloudy')) {
        setIconWeather(partlyCloudy);
      }
      else if (condition.toLowerCase().includes('overcast')) {
        setIconWeather(cloud);
      }
      else if (condition.toLowerCase().includes('mist')) {
        setIconWeather(mist);
      }
      else if (condition.toLowerCase().includes('fog')) {
        setIconWeather(mist);
      }
      else if (condition.toLowerCase().includes('rain')) {
        setIconWeather(rain);
      }
      else if (condition.toLowerCase().includes('snow')) {
        setIconWeather(snow);
      }
      else if (condition.toLowerCase().includes('storm')) {
        setIconWeather(storm);
      }
      else if (condition.toLowerCase().includes('wind')) {
        setIconWeather(wind);
      }
      else if (condition.toLowerCase().includes('clear')) {
        setIconWeather(clear);
      }
      else if (condition.toLowerCase().includes('cloudy')) {
        setIconWeather(cloudy);
      }
    }
  });

  return iconWeather;

}
export default useWeatherConditionIcon