import { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({ setIsOpenCountryList, currentCountry, setCurrentCountry }) {
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setCurrentCountry(value)
    setIsOpenCountryList(false);
  }

  return <Select className='text-black' options={options} value={currentCountry} onChange={changeHandler} />
}

export default CountrySelector