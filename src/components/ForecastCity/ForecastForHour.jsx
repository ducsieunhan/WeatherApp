import { faAngleLeft, faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForecastSpeCity from "../ForecastSpeCity";
import Loading from "../Loading";
import { UseExtractWeatherData } from "../../hooks/useExtractWeatherData";
import { Link } from "react-router-dom";

const ForecastForHour = ({ cityName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);

  const weather24hours = UseExtractWeatherData(weatherData);

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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  useEffect(() => {
    setIsLoading(true);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${import.meta.env.VITE_API_TOKEN}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        setPosition({
          "lat": data[0].lat,
          "lon": data[0].lon
        })

      })
      .catch(err => {
        console.error(err);
      }).finally(() => {
        setIsLoading(false);
      })
  }, [cityName])

  useEffect(() => {
    if (!position.lat || !position.lon) return;
    setIsLoading(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.lat}&longitude=${position.lon}&hourly=temperature_2m,relativehumidity_2m,weathercode,precipitation,windspeed_10m,winddirection_10m,pressure_msl,uv_index`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        setWeatherData(data);

      })
      .catch((err) => {
        console.error("Lỗi khi fetch dữ liệu thời tiết:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [position]);

  useEffect(() => {
    console.log({ weather24hours });
  }, [weather24hours]);

  if (isLoading) {
    return <Loading />
  }


  return (
    <div className="bg-white/[0.1] border border-slate-600 py-2 px-1 flex flex-col gap-4 text-[0.9vw]">
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
          <ForecastSpeCity key={index} humidity={timeAt.humidity} name={timeAt.time} tempMin={timeAt.temperature} tempMax={timeAt.temperature} description={timeAt.weatherDescription} condition={timeAt.weatherDescription} label={''}
            bg="bg-white/[0.1]" bgHover="hover:bg-white/[0.05]" border="border-slate-500"
          />
        ))}
      </Slider>
    </div>
  );
};

export default ForecastForHour;