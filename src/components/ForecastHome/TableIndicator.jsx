/* eslint-disable react/prop-types */
import { faCertificate, faDroplet, faEye, faGauge, faMountainSun, faSun, faTemperature3, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TableIndicator = ({ cityPinned }) => {

  const calculateDewPoint = (temp, humidity) => {
    return temp - ((100 - humidity) / 5);
  };

  const temp = cityPinned.main?.temp; // Nhiệt độ (°C)
  const humidity = cityPinned.main?.humidity; // Độ ẩm (%)
  const dewPoint = temp && humidity ? calculateDewPoint(temp, humidity).toFixed(1) : "N/A";

  return (
    <table className="table-auto my-2 w-full ">
      <tbody className="">
        <tr className="border-b-2 border-dotted border-slate-400/50 py-7">
          <td className="pb-3"><FontAwesomeIcon icon={faSun} /> Sunrise/Sunset </td>
          <td className="text-end"><FontAwesomeIcon icon={faMountainSun} /> 6:21 - 17:58</td>
        </tr>
        <tr className="border-b-2 border-dotted border-slate-400/50 ">
          <td className="pb-3"><FontAwesomeIcon icon={faTemperature3} /> Low/High</td>
          <td className="text-end">{cityPinned.main?.temp_min.toFixed(1) ?? "Loading..."}°/{cityPinned.main?.temp_max.toFixed(1) ?? "Loading..."}°</td>
        </tr>
        <tr className="border-b-2 border-dotted border-slate-400/50 ">
          <td className="pb-3"><FontAwesomeIcon icon={faDroplet} /> Humidity</td>
          <td className="text-end">{cityPinned.main?.humidity ?? "Loading..."}%</td>
        </tr>
        <tr className="border-b-2 border-dotted border-slate-400/50 ">
          <td className="pb-3"><FontAwesomeIcon icon={faGauge} /> Pressure</td>
          <td className="text-end">{cityPinned.main?.pressure ?? "Loading..."} mb</td>
        </tr>
        <tr className="border-b-2 border-dotted border-slate-400/50 ">
          <td className="pb-3"><FontAwesomeIcon icon={faEye} /> Visibility</td>
          <td className="text-end">{cityPinned.visibility ?? "Loading..."} km</td>
        </tr>
        <tr className="border-b-2 border-dotted border-slate-400/50 ">
          <td className="pb-3"><FontAwesomeIcon icon={faWind} /> Win</td>
          <td className="text-end">{cityPinned.wind?.speed ?? "Loading..."} km/h</td>
        </tr>
        <tr className="border-b-2 border-dotted border-slate-400/50 ">
          <td className="pb-3"><FontAwesomeIcon icon={faDroplet} /> Dew Point</td>
          <td className="text-end">{dewPoint}°C</td>
        </tr>
        <tr>
          <td ><FontAwesomeIcon icon={faCertificate} /> UV Index</td>
          <td className="text-end">0.33</td>
        </tr>
      </tbody>
    </table>
  )
}
export default TableIndicator