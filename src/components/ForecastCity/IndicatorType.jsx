import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IndicatorType = ({ name, indicator, icon = faDroplet, unit }) => {
  return (
    <div className="flex items-center gap-5">
      <FontAwesomeIcon icon={icon} />
      <div>
        <p>{name}</p>
        <p>{indicator}{unit}</p>
      </div>
    </div>
  )
}
export default IndicatorType