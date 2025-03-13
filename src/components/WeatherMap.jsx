import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Indicator from './Indicator';
import Loading from './Loading';
import { useCoordinationCity } from '../hooks/useCoordinationCity';


const WeatherMap = ({ cityName }) => {
  const [timestamps, setTimestamps] = useState([]);
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
  const mapRef = useRef(null);
  const rainLayerRef = useRef(null);
  const markerRef = useRef(null);
  const { data: dataCoordination, isLoadingCoordination } = useCoordinationCity({ cityName: cityName });

  // console.log(dataCoordination?.[0]?.lat ? dataCoordination?.[0]?.lat : "21.0245");

  const DEFAULT_COORDS = [dataCoordination?.[0]?.lat ? dataCoordination?.[0]?.lat : 21.0245, dataCoordination?.[0]?.lon ? dataCoordination?.[0]?.lon : 105.84117];
  // console.log({ DEFAULT_COORDS });

  const DEFAULT_ZOOM = 9;
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  // create the map 
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView(DEFAULT_COORDS, DEFAULT_ZOOM);

      // Thêm lớp bản đồ nền
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current);


      // Fetch RainViewer timestamps
      fetch('https://api.rainviewer.com/public/maps.json')
        .then((response) => response.json())
        .then((data) => {
          setTimestamps(data);
          updateRainLayer(data[0]);
        });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // update the marker location 
  useEffect(() => {
    if (mapRef.current) {
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }

      markerRef.current = L.marker(DEFAULT_COORDS, { icon: redIcon }).addTo(mapRef.current);

      mapRef.current.setView(DEFAULT_COORDS, DEFAULT_ZOOM);
    }
  }, [DEFAULT_COORDS]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(DEFAULT_COORDS, DEFAULT_ZOOM);
    }
  }, [DEFAULT_COORDS]);

  const updateRainLayer = (timestamp) => {
    if (rainLayerRef.current) {
      mapRef.current.removeLayer(rainLayerRef.current);
    }

    const rainLayer = L.tileLayer(
      `https://tilecache.rainviewer.com/v2/radar/${timestamp}/256/{z}/{x}/{y}/2/1_1.png`,
      {
        attribution: 'RainViewer',
        opacity: 0.7
      }
    ).addTo(mapRef.current);

    rainLayerRef.current = rainLayer;
  };

  const handleTimeChange = (index) => {
    setCurrentTimeIndex(index);
    updateRainLayer(timestamps[index]);
  };
  if (isLoadingCoordination) {
    return <Loading />
  }

  return (
    <div className='relative max-w-screen-xl m-auto text-black '>
      <div id="map" className='w-[100%] h-[500px] z-0'></div>

      <div className='py-4 z-10 absolute w-full bottom-0 bg-white/40'>
        <input
          type="range"
          min="0"
          max={timestamps.length - 1}
          value={currentTimeIndex}
          onChange={(e) => handleTimeChange(parseInt(e.target.value))}
          className='w-[97%] cursor-pointer'
        />
        <p>
          Time: {timestamps[currentTimeIndex] ?
            new Date(timestamps[currentTimeIndex] * 1000).toLocaleTimeString() :
            'Loading...'}
        </p>
      </div>
      <Indicator />


    </div>
  );
};

export default WeatherMap;