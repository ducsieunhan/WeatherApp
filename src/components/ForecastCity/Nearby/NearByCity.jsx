import useWeatherConditionIcon from '../../../hooks/useWeatherConditionIcon';
import { capitalizeWords } from '../../../libs/utils';
import wind from '/public/icons/windy.png'

const NearByCity = ({ name, tempMin, tempMax, description, condition }) => {

  const iconWeather = useWeatherConditionIcon({ condition });


  return (
    <div className="flex justify-between p-1 border-b border-dashed border-slate-500 cursor-pointer hover:bg-slate-600 transition">
      <div className='flex gap-2 item'>
        <img src={iconWeather} className='w-12 md:w-[2.5vw] object-contain' />
        <p>{name}</p>
      </div>
      <div>
        <p> {tempMin.toFixed(1)}&deg;C/{tempMax.toFixed(1)}&deg;C</p>
        <p>{capitalizeWords(description)}</p>
      </div>
    </div>
  )
}
export default NearByCity