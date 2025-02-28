/* eslint-disable react/prop-types */
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export function Breadcum() {
  const [searchParams] = useSearchParams();
  const { cityName } = useParams();
  const { days } = useParams();
  const location = useLocation();
  let city = searchParams.get('city') || cityName;


  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="max-w-screen-xl mx-auto p-4">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>

      {city && (
        <Breadcrumb.Item href={`/city?city=${city}&label=VN`} >
          {city}
        </Breadcrumb.Item>
      )}

      {days && (
        <Breadcrumb.Item className="cursor-pointer" >
          {days}
        </Breadcrumb.Item>
      )}

      {location.pathname.includes("/byHours") && (
        <Breadcrumb.Item className="cursor-pointer" >
          Hourly Forecast
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
export default Breadcum