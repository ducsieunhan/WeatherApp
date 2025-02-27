/* eslint-disable react/prop-types */
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useParams, useSearchParams } from "react-router-dom";

export function Breadcum() {
  const [searchParams] = useSearchParams();
  let city = null;
  let cityName = useParams('cityName');
  if (searchParams.get('city')) {
    city = searchParams.get('city');
  }


  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="max-w-screen-xl mx-auto p-4">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">{city}</Breadcrumb.Item>
      {cityName && <Breadcrumb.Item href="">{cityName}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}
export default Breadcum