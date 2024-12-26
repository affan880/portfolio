import AboutMe from '@/components/phone/aboutMe';
import Modal from '@/components/phone/projects/projectsModal';
import WeatherWidget from '@/components/phone/weatherWidget'
import { aboutMe, socialLinks } from '@/utils/data'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Android from  '../../public/images/android-logo.svg'
import Apple from  '../../public/images/apple-logo-white.svg'
import Calendar from  '../../public/images/calendar-mac.svg'
import Contacts from  '../../public/images/Gcontacts.svg'
import Git from  '../../public/images/github.svg'
import Mail from  '../../public/images/gmail.svg'
import Terminal from '../../public/images/ios-terminal.svg';
import Iphone from '../../public/images/iphone.jpg';
import JS from  '../../public/images/js.svg'
import LinkedIn from  '../../public/images/linkedIn.svg'
import Pdf from  '../../public/images/pdf.svg'
import Phone from  '../../public/images/phone.svg'
import Safari from  '../../public/images/safari.svg'

const Windows = ({setOs, openTerminal}) => {
  const [showAboutMe, setShowAboutMe] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
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
    

    useEffect(() => {
      const loaderTimeout = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
  
      return () => clearTimeout(loaderTimeout);
    }, []);

    useEffect(()=>{
      getWeatherData().then((weatherData) => {
        if (weatherData) {
          setWeatherData(weatherData);
          console.log(weatherData)
        }
      });
    },[])
    
    const onCloseModalAbout = () => {
      setShowAboutMe(false)
    }
    
    const redirect = (link) => {
      window.open(link)
    } 

    const openMailbox = () => {
      window.location.href = `mailto:${socialLinks.email}`;
    };
    function setupPhoneCall() {
        const telUri = `tel:${aboutMe.phone}`; 
        window.location.href = telUri;
      }
  return (
    <>
         <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Syed Affan",
              "url": "https://affan.io",
              "sameAs": [
                "https://www.linkedin.com/in/syed-affan",
                "https://github.com/affan880",
                "https://calendly.com/affann",
                "https://ik.imagekit.io/affan/Syed_Affan_CV.pdf"
              ],
              "jobTitle": "React Web and App Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Your Company or Freelance"
              },
              "mainEntityOfPage": {
                "@type": "CreativeWork",
                "url": "https://affan.io"
              },
              "description": "Experienced React web and app developer with a passion for creating innovative and user-friendly applications. Explore my portfolio to see a showcase of my projects and skills.",
              "image": "https://ik.imagekit.io/affan/Projects/IMG_20230128_065318_032.jpg",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Osmania University"
              }
            }
          `}
        </script>
      </Head>
      {showLoader && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
          <Image src={Apple} className='h-24 w-24 pb-1' alt=""/>
        </div>
      )}
    <div style={{ 
        backgroundImage: `url(${Iphone.src})`, 
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
                <div className="flex flex-col items-center justify-center cursor-pointer rounded-md transition duration-300 ease-in-out project-item" onClick={() => { setShowModal(true) }}>
                  <Image src={JS} className='h-24 w-24 rounded-full pb-1' alt=""/>
                  <p className="text-sm text-white">Projects</p>
                </div>
                <div onClick={() => redirect(socialLinks.resume)} className="flex flex-col items-center justify-center cursor-pointerrounded-md project-item transition duration-300 ease-in-out">
                  <Image src={Pdf} className='h-24 w-24 rounded-full pb-1'alt="" />
                  <p className="text-sm text-white">Resume</p>
                </div>
                <div onClick={() => redirect(socialLinks.github)} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out">
                  <Image src={Git} className='h-24 w-24 rounded-full pb-1'alt="" />
                  <p className="text-sm text-white">Github</p>
                </div>
                <div onClick={() => redirect(socialLinks.linkedin)} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out">
                  <Image src={LinkedIn} className='h-24 w-24 rounded-full pb-1' alt="" />
                  <p className="text-sm text-white">LinkedIn</p>
                </div>
                <div onClick={() => redirect(socialLinks.calendly)} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out">
                  <Image src={Calendar} className='h-24 w-24 rounded-full pb-1' alt="" />
                  <p className="text-sm text-white">Calendar</p>
                </div>
                <div onClick={()=> openTerminal()} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out">
                  <Image src={Terminal} className='h-24 w-24 rounded-full pb-1'alt="" />
                  <p className="text-sm text-white">xTerminal</p>
                </div>
                <div onClick={() => setOs('Android')} className="flex flex-col items-center justify-center cursor-pointer rounded-md project-item transition duration-300 ease-in-out ">
                  <Image src={Android} className='h-24 w-24 rounded-full pb-1' alt="" />
                  <p className="text-sm text-white">Android</p>
                </div>
              </div>
            </div>
        </div>
        <div className="bg-opacity-80 backdrop-filter backdrop-blur-md p-2 fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] flex items-center justify-around shadow-xl bg-gray-900 text-white rounded-[25px]">
            <div className='flex flex-col items-center justify-center cursor-pointer  rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={()=>{setupPhoneCall()}} >
              <Image src={Phone} className='h-14 w-14' alt="" />
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer  rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={()=>{redirect('https://portfolio.affan.io')}} >
              <Image src={Safari} className='h-14 w-14' alt="" />
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer  rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={() => { openMailbox() }} >
              <Image src={Mail} className='h-14 w-14' alt="" />
            </div>
            <div className='flex flex-col items-center justify-center cursor-pointer  rounded-md transition duration-300 ease-in-out  hover:bg-opacity-50' onClick={() => { setShowAboutMe(true) }} >
              <Image src={Contacts} className='h-14 w-14' alt="" />
            </div>
        </div>
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Windows;
