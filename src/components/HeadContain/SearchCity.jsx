import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const SearchCity = () => {
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const find = searchParams.get('find');


  const handleSearch = async () => {
    if (!cityName.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName.trim()}&limit=1&appid=${import.meta.env.VITE_API_TOKEN}`,
        {
          method: 'GET',
          headers: { accept: 'application/json' }
        }
      );

      const data = await response.json();

      if (data && data.length > 0) {

        window.location.href = `/city?city=${data[0].name}&label=${data[0].country}&find=true`;
      } else {
        toast.error('Cannot find this city');
      }
    } catch (error) {
      console.error('Error fetching city data:', error);
      toast.error('An error occurred while searching for the city');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (find) {
      toast.success('City found!');
    }
  }, [find])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative flex gap-2 h-[50%] md:h-[65%] w-[200px] md:w-[500px] lg:w-[700px] ">
      <FontAwesomeIcon icon={faSearch} className="mr-[1vw] absolute left-2 top-1/2 -translate-y-1/2 text-blue-400" />
      <input placeholder="Address, City, ..." type="text" value={cityName} onKeyPress={handleKeyPress} onChange={(e) => {
        setCityName(e.target.value);
      }}
        className="text-[13px] md:text-[20px] h-full w-[80%] border border-slate-400 pl-7 lg:pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 rounded-md" />
      <p className="flex items-center cursor-pointer h-full border border-slate-400 px-4 hover:bg-blue-400 hover:text-white transition duration-200 rounded-md"
        onClick={handleSearch}
      >
        {isLoading ? 'Searching..' : 'Search'}
      </p>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
export default SearchCity