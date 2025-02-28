import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DailyCard from "./DailyCard";
import Loading from "../Loading";
import { useExtractDaily } from "../../hooks/useExtractDaily";
import ForecastSpeCity from "../ForecastSpeCity";

const ForecastForHour = ({ cityName }) => {

  const { data: weatherDaily, isLoading } = useExtractDaily({ cityName });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!weatherDaily) {
    return <div>No data available</div>;
  }

  const dailyForecast = weatherDaily.forecast?.forecastday || [];

  console.log({ weatherDaily });

  const CustomArrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2  p-2 text-white font-bold z-10 ${direction === "prev" ? "left-0" : "right-0"}`}
    >
      {direction === "prev" ? <FontAwesomeIcon icon={faAngleLeft} className="text-[25px]" /> : <FontAwesomeIcon icon={faAngleRight} className="text-[25px]" />}
    </button>
  );

  const dailyName = ['Tomorrow', '3 days', '5 days', '7 days', '10 days', '15 days', '30 days'];

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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <Loading />
  }

  const dateExtract = (date) => {
    return date.split('-').join('/');
  }
  const textExtract = (text) => {
    return text.split(' ').slice(0, 2).join(' ');
  }


  return (
    <div className="bg-white/[0.1] border border-slate-600 py-2 px-1 flex flex-col gap-4 ">
      <div className="flex flex-col justify-between gap-2">
        <p className="text-[18px]">
          Daily weather in {" "}
          <span className="underline decoration-dotted cursor-pointer">
            {cityName}
          </span>{" "}
        </p>
        <div className="flex flex-row justify-start gap-2 text-[15px]">
          {
            dailyName.map((daily, index) => <DailyCard key={index} dailyName={daily} cityName={cityName} />)
          }
        </div>
      </div>
      <Slider {...settings} className="mb-5">
        {
          dailyForecast.map((daily) => (
            <ForecastSpeCity isCity={false} key={daily.date_epoch} humidity={daily.day.avghumidity} name={dateExtract(daily.date)} tempMin={daily.day.maxtemp_c} tempMax={daily.day.mintemp_c} description={textExtract(daily.day.condition.text)} condition={daily.day.condition.text} label={''}
              bg="bg-white/[0.1]" bgHover="hover:bg-white/[0.05]" border="border-slate-500"
            />
          ))
        }
      </Slider>
    </div>
  );
};

export default ForecastForHour;