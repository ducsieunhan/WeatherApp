/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import useWeatherConditionIcon from '../../../hooks/useWeatherConditionIcon';
import { capitalizeWords } from '../../../libs/utils';

const NearByCity = ({ name, tempMin, tempMax, description, condition, label }) => {

  const iconWeather = useWeatherConditionIcon({ condition });


  return (
    <Link to={`/city?city=${name}&label=${label}`} className="grid grid-cols-2 p-1 border-b border-dashed border-gray-300 cursor-pointer hover:bg-slate-600 transition">
      <div className='flex gap-2 item items-center'>
        <img src={iconWeather} className='w-12 md:w-[2.5vw] object-contain' />
        <p>{name}</p>
      </div>
      <div className='justify-self-end'>
        <p className='text-end'> {tempMin.toFixed(1)}&deg;C/{tempMax.toFixed(1)}&deg;C</p>
        <p className='text-end'>{capitalizeWords(description)}</p>
      </div>
    </Link>
  )
}
export default NearByCity