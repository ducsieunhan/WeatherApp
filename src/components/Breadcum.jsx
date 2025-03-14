/* eslint-disable react/prop-types */
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "flowbite-react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export function Breadcum() {
  const [searchParams] = useSearchParams();
  const { cityName } = useParams();
  const { days } = useParams();
  const { WeatherMap } = useParams();
  const location = useLocation();
  let city = searchParams.get('city') || cityName;


  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="max-w-screen-xl mx-auto p-4 border border-strong/50 my-3 bg-blue-400/30">
      <Breadcrumb.Item href="/" className="">
        <p className="text-gray-600"><FontAwesomeIcon icon={faHome} /> Home</p>
      </Breadcrumb.Item>

      {city && (
        <Breadcrumb.Item href={`/city?city=${city}&label=VN`} >
          <p className="text-gray-600">{city}</p>
        </Breadcrumb.Item>
      )}

      {location.pathname.includes("/WeatherMap") && (
        <Breadcrumb.Item href={`/WeatherMap`} >
          <p className="text-gray-600">Weather Map</p>
        </Breadcrumb.Item>
      )}

      {days && (
        <Breadcrumb.Item className="cursor-pointer" >
          <p className="text-gray-600">{days}</p>
        </Breadcrumb.Item>
      )}

      {location.pathname.includes("/byHours") && (
        <Breadcrumb.Item className="cursor-pointer" >
          <p className="text-gray-600">Hourly Forecast</p>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
export default Breadcum