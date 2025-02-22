import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Location = () => {
  return (
    <div className="absolute p-2 border border-slate-400 bg-white h-[60vh] w-[70vw] top-14 lg:top-20 left-1/2 -translate-x-1/2 sm:text-[1.4vw] z-10 ">
      <div>
        <h3 className="font-bold">Vietnam</h3>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} className="text-gray-500" /> Hanoi</li>
          <li><FontAwesomeIcon icon={faArrowRight} className="text-gray-500" /> HoChiMinhCity</li>
          <li><FontAwesomeIcon icon={faArrowRight} className="text-gray-500" /> DaNang</li>
        </ul>
      </div>
    </div>
  )
}
export default Location