import Image from 'next/image';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'

const WeatherWidget = ({ weatherData }) => {
const currentWeather = weatherData?.current;
  const forecast = weatherData?.forecast?.forecastday[0].hour;
  const formatTime = (epochTime) => {
    const date = new Date(epochTime * 1000);
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
  
    return `${formattedHours} ${ampm}`;
  };
  return (
      <div className='bg-opacity-40 backdrop-filter backdrop-blur-md p-2 w-[90vw] h-[25vh] items-center justify-between shadow-xl bg-gray-800 text-white rounded-[30px] m-auto mt-4' >
          <div className='justify-between p-2 flex flex-row'>
            <div className='flex-col'>
              <div className='flex flex-row items-center'>
              <p className='text-md font-semi-bold'>{weatherData?.location?.name}</p>
              <FaLocationArrow className='text-white w-3 h-3 pl-1'/>
              </div>
              <p className='text-[30px] font-semi-bold'>{weatherData?.current?.temp_c}°C</p>
            </div>
            <div className='flex flex-col justify-right'>
              <Image src={`http:${currentWeather?.condition?.icon}`} width={36} height={36} className='ml-20' alt="Weather Icon" />
              <p className='text-xs font-bold text-right'>{currentWeather?.condition?.text}</p>
              <div className="text-xs text-right">{`H:${weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c}° L-${weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}°`}</div>
            </div>

          </div>
          <div className='justify-between p-2 pt-2 flex flex-row overflow-hidden'>
          {forecast?.slice(0,5).map((hour, index) => (
            <div key={index} className="flex flex flex-col justify-center items-center">
              <div className="text-xs text-gray-400">{formatTime(hour.time_epoch)}</div>
              <Image src={`http:${hour?.condition?.icon}`} width={36} height={36} alt="Weather Icon" />
              <div className="text-xs">{`${hour?.temp_c}°C`}</div>
            </div>
          ))}
          </div>
      </div>
  );
}

export default WeatherWidget;
