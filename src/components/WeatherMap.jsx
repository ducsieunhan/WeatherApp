import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Indicator from './Indicator';


const WeatherMap = ({ lat = "21.0245", lon = "105.84117" }) => {
  const [timestamps, setTimestamps] = useState([]);
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
  const mapRef = useRef(null);
  const rainLayerRef = useRef(null);

  const DEFAULT_COORDS = [lat, lon];
  const DEFAULT_ZOOM = 7;

  useEffect(() => {
    mapRef.current = L.map('map').setView(DEFAULT_COORDS, DEFAULT_ZOOM);

    // Thêm lớp bản đồ nền
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Fetch RainViewer timestamps
    fetch('https://api.rainviewer.com/public/maps.json')
      .then(response => response.json())
      .then(data => {
        setTimestamps(data);
        updateRainLayer(data[0]);
      });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  // Cập nhật lớp mưa khi timestamp thay đổi
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