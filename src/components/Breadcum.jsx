/* eslint-disable react/prop-types */
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function Breadcum({ cityName = "Da Nang" }) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="max-w-screen-xl mx-auto p-4">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">{cityName} City</Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default Breadcum