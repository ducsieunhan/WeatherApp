import { faAngleLeft, faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForecastSpeCity from "../ForecastSpeCity";
import Loading from "../Loading";
import { UseExtractWeatherData } from "../../hooks/useExtractWeatherData";
import { Link } from "react-router-dom";

const ForecastForHour = ({ cityName }) => {
  const { weather24hours, isLoading } = UseExtractWeatherData(cityName);

  // console.log(weather24hours);


  const CustomArrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2  p-2 text-white font-bold z-10 ${direction === "prev" ? "left-0" : "right-0"}`}
    >
      {direction === "prev" ? <FontAwesomeIcon icon={faAngleLeft} className="text-[25px]" /> : <FontAwesomeIcon icon={faAngleRight} className="text-[25px]" />}
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    useTransform: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <Loading />
  }


  return (
    <div className="bg-white/[0.05] border border-[rgba(255,255,255,0.08)] py-2 px-1 flex flex-col gap-4 text-[0.9vw]">
      <div className="flex flex-row justify-between items-center">
        <p>
          Hourly weather in <FontAwesomeIcon icon={faSearch} />{" "}
          <span className="underline decoration-dotted cursor-pointer">
            {cityName}
          </span>{" "}
          (24h)
        </p>
        <Link to={`/${cityName}/byHours`} className="bg-white/[0.2] hover:bg-white/[0.1] cursor-pointer p-2">
          24h comings
        </Link>
      </div>
      <Slider {...settings} className="mb-5">
        {weather24hours.map((timeAt, index) => (
          <ForecastSpeCity isCity={false} key={index} humidity={timeAt.humidity} name={timeAt.time} tempMin={timeAt.temperature} tempMax={timeAt.temperature} description={timeAt.weatherDescription} condition={timeAt.weatherDescription} label={''}
            bg="bg-white/[0.1]" bgHover="hover:bg-white/[0.05]" border="border-[rgba(255,255,255,0.08)]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default ForecastForHour;