import Modal from '@/components/phone/projects/projectsModal';
import WeatherWidget from '@/components/phone/weatherWidget'
import { aboutMe, socialLinks } from '@/utils/data'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AboutMe from '@/components/phone/aboutMe';

import Chrome from  '../../public/images/chrome.svg'
import Contacts from  '../../public/images/Gcontacts.svg'
import Git from  '../../public/images/github.svg'
import Mail from  '../../public/images/gmail.svg'
import JS from  '../../public/images/js.svg'
import LinkedIn from  '../../public/images/linkedIn.svg'
import Calendar from  '../../public/images/google-calendar.svg'
import apple from  '../../public/images/apple-logo.svg'
import Android from  '../../public/images/android-logo.svg'
import Pdf from  '../../public/images/pdf.svg'
import Phone from  '../../public/images/phone.svg'
import WindowsBackground from '../../public/images/windows.jpg';
import Terminal from '../../public/images/win-terminal.png';

const Windows = ({setOs, openTerminal}) => {
  const [showLoader, setShowLoader] = useState(true);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showModal, setShowModal] = useState(false);    const [weatherData, setWeatherData] = useState(null);
    const getWeatherData = async () => {
      const apiKey = '9957fdc2d100492890f140053231203';
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=auto:ip&days=1&aqi=no&alerts=no`;
    
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
      }
    };
    const redirect = (link) => {
      window.open(link)
    }
    useEffect(()=>{
      getWeatherData().then((weatherData) => {
        if (weatherData) {
          setWeatherData(weatherData);
        }
      });
    },[])

    const onCloseModalAbout = () => {
      setShowAboutMe(false)
    }

    const openMailbox = () => {
      window.location.href = `mailto:${socialLinks.email}`;
    };
    function setupPhoneCall() {
        const telUri = `tel:${aboutMe.phone}`; 
        window.location.href = telUri;
      }
      useEffect(() => {
        const loaderTimeout = setTimeout(() => {
          setShowLoader(false);
        }, 2000);
      })
  return (
    <>
    {showLoader && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
          <Image src={Android} className='h-24 w-24 pb-1' alt=""/>
        </div>
      )}
    <div style={{ 
        backgroundImage: `url(${WindowsBackground.src})`, 
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        }} className='h-[100vh] w-[100vw] overflow-y-hidden flex-col justify-center items-center'>
          {
            weatherData? <WeatherWidget weatherData={weatherData}/> : null
          }
          {
            showAboutMe ? <AboutMe onCloseModalAbout={onCloseModalAbout}/> : null
          }
          <div className="flex flex-wrap items-start justify-start p-8">
          <style jsx>{`
            .project-item {
              margin: 0;
            }
          `}</style>
            <div className="min-h-screen flex flex-wrap items-start justify-start p-2 gap-4">
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-center cursor-pointer rounded-md transition duration-300 ease-in-out  project-item" onClick={() => { setShowModal(true) }}>
                  <Image src={JS} className='h-24 w-24 rounded-full pb-1'alt="" />
                  <p className="text-sm text-white">Projects</p>
                </div>
                <div onClick={() => redirect(socialLinks.resume)} className="flex flex-col items-center justify-center cursor-pointerrounded-md project-item transition duration-300 ease-in-out ">
                  <Image src={Pdf} className='h-24 w-24 rounded-full pb-1' alt=""/>
                  <p className="text-sm text-white">Resume</p>
                </div>
                <div onClick={() => redirect(socialLinks.github)} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out ">
                  <Image src={Git} className='h-24 w-24 rounded-full pb-1'alt="" />
                  <p className="text-sm text-white">Github</p>
                </div>
                <div onClick={() => redirect(socialLinks.linkedin)} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out ">
                  <Image src={LinkedIn} className='h-24 w-24 rounded-full pb-1' alt=""/>
                  <p className="text-sm text-white">LinkedIn</p>
                </div>
                <div onClick={() => redirect(socialLinks.calendly)} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out ">
                  <Image src={Calendar} className='h-24 w-24 rounded-full pb-1'alt="" />
                  <p className="text-sm text-white">Calendar</p>
                </div>
                <div onClick={()=> openTerminal()} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
                  <Image src={Terminal} className='h-14 w-14 rounded-full pb-1'alt="" />
                  <p className="text-sm">Termux</p>
                </div>
                <div onClick={() => setOs('Iphone')} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out ">
                  <Image src={apple
                  } className='h-24 w-24 rounded-full pb-1'alt="" />
                  <p className="text-sm text-white">iOS</p>
                </div>
              </div>
            </div>

        </div>

        <div className="bg-opacity-80 backdrop-filter backdrop-blur-md p-2 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 flex items-center justify-between shadow-xl bg-gray-1000 text-white rounded-lg">
          <div className="flex items-center">
            <div className='flex flex-col items-center justify-center cursor-pointer p-0 pl-3 pr-3 rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={()=>{setupPhoneCall()}} >
              <Image src={Phone} className='h-14 w-14'alt="" />
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer p-0 pl-3 pr-3 rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={()=>{redirect('https://portfolio.affan.codes')}}>
              <Image src={Chrome} className='h-14 w-14'alt=""  />
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer p-0 pl-3 pr-3 rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={() => { openMailbox() }} >
              <Image src={Mail} className='h-14 w-14' alt=""/>
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer p-0 pl-3 pr-3 rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={() => { setShowAboutMe(true) }} >
              <Image src={Contacts} className='h-14 w-14'alt="" />
            </div>
          </div>
        </div>
    </div>
    
    <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Windows;
