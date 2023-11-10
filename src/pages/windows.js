import Modal from '@/components/windows/projects/projectsModal';
import { socialLinks } from '@/utils/data'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Calendar from  '../../public/images/calendar-win.svg'
import Edge from  '../../public/images/edge-win.svg'
import Git from  '../../public/images/github.svg'
import JS from  '../../public/images/js.svg'
import LinkedIn from  '../../public/images/linkedIn.svg'
import Mac from  '../../public/images/mac.svg'
import Mail from  '../../public/images/mail-win.png'
import Pdf from  '../../public/images/pdf.svg'
import RN from  '../../public/images/rn.svg'
import Weather from '../../public/images/weather-win.svg'
import Win from  '../../public/images/win11.svg'
import WindowsBackground from '../../public/images/windows.jpg';
import WindowsKey from '@/components/windowsKey'
import Terminal from '../../public/images/win-terminal.png';

const Windows = ({setOs, openTerminal}) => {
    const [showLoader, setShowLoader] = useState(true);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [viewWindow, setViewWindow] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const updateTimeAndDate = () => {
      const now = new Date();
  
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
  
      const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
      const formattedDate = `${now.toLocaleString('en-us', { month: 'short' })} ${now.getDate()}, ${now.getFullYear()}`;
  
      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    };
    useEffect(() => {
      const loaderTimeout = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    })
    useEffect(() => {
      const intervalId = setInterval(updateTimeAndDate, 1000);
      updateTimeAndDate();
      return () => clearInterval(intervalId);
    }, []);
    const redirect = (link) => {
      window.open(link)
    } 

    const openMailbox = () => {
      window.location.href = `mailto:${socialLinks.email}`;
    };
  
  return (
    <>
     <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Syed Affan",
              "url": "https://affan.codes",
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
                "url": "https://affan.codes"
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
          <Image src={Win} className='h-24 w-24 pb-1'alt="" />
        </div>
      )}
    <div style={{ 
        backgroundImage: `url(${WindowsBackground.src})`, 
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex', 
        }}>
          {
            viewWindow ? <WindowsKey setViewWindow={()=>{
              setViewWindow(false)
            }}/> : null
          }
          
        <div className="min-h-screen flex flex-col items-start justify-start p-8 space-y-4">
        <div className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900" onClick={()=>{setShowModal(true)}}>
          <Image src={JS} className='h-14 w-14 rounded-full pb-1' alt=""/>
          <p className="text-sm">Projects</p>
        </div>
        <div onClick={()=> redirect(socialLinks.resume)} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
          <Image src={Pdf} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm">Resume</p>
        </div>
        <div onClick={()=> redirect(socialLinks.github)} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
          <Image src={Git} className='h-14 w-14 rounded-full pb-1' alt=""/>
          <p className="text-sm">Github</p>
        </div>
        <div onClick={()=> redirect(socialLinks.linkedin)} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
          <Image src={LinkedIn} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm">LinkedIn</p>
        </div>
        <div onClick={()=> openTerminal()} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
          <Image src={Terminal} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm">Terminal</p>
        </div>
        <div onClick={()=> setOs('MacOS')} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
          <Image src={Mac} className='h-14 w-14 rounded-full pb-1' alt=""/>
          <p className="text-sm">Mac OS</p>
        </div>
      </div>
            <div className="bg-opacity-80 backdrop-filter backdrop-blur-md p-2 fixed bottom-0 left-0 w-full flex items-center shadow-xl justify-between bg-gray-1000 text-white">
                <div className="flex items-center">
                <Image src={Weather} className='h-6 w-6 mr-2'alt="" />
                 <div className='flex flex-col justify-content-center'>
                 <p className="text-xs font-semi-bold">28&deg;C</p>
                  <p className="text-xs">Mist</p>
                 </div>
                </div>
                <div className="flex items-center">
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-50' onClick={()=> {setViewWindow(!viewWindow)}} >
                    <Image src={Win} className='h-8 w-8' alt=""/>
                  </div>
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-50'onClick={()=>{redirect('https://portfolio.affan.codes')}} >
                    <Image src={Edge} className='h-8 w-8' alt=""/>
                  </div>
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-50' >
                    <Image src={RN} className='h-8 w-8' alt="" />
                  </div>
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-50' onClick={() => { openMailbox() }} >
                    <Image src={Mail} className='h-8 w-8' alt="" />
                  </div>
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-50' onClick = {() => { redirect(socialLinks.calendly) }} >
                    <Image src={Calendar} className='h-8 w-8' alt="" />
                  </div>
                </div>
                  <div className="flex flex-col text-right items-end">
                    <div className="text-xs">
                        <div className="text-right">
                          <span id="current-time">{currentTime}</span>
                        </div>
                    </div>
                    <div className="text-xs">
                        <div className="text-right">
                        <span id="current-date">{currentDate}</span>
                        </div>
                    </div>
                  </div>
            </div>
    </div>
    
    <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Windows;
