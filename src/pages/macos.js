import Modal from '@/components/mac/projects/projectsModal';
import AboutMe from '@/components/windows/aboutMe'
import { socialLinks } from '@/utils/data'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import apple from  '../../public/images/apple.svg'
import Calendar from  '../../public/images/calendar-mac.svg'
import Git from  '../../public/images/github.svg'
import Terminal from '../../public/images/ios-terminal.png';
import JS from  '../../public/images/js.svg'
import LinkedIn from  '../../public/images/linkedIn.svg'
import Mac from  '../../public/images/mac.svg'
import MacOsBackground from '../../public/images/macos-wal.jpg';
import Mail from  '../../public/images/mail-mac.svg'
import Pdf from  '../../public/images/pdf.svg'
import RN from  '../../public/images/rn.svg'
import Safari from  '../../public/images/safari.svg'
import Win from  '../../public/images/win11.svg'

const MacOs = ({setOs, openTerminal}) => {
    const [showLoader, setShowLoader] = useState(true);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [aboutModal, setAboutModal] = useState(false);
    useEffect(() => {
      const loaderTimeout = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    })
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
          <Image src={Mac} className='h-24 w-24 pb-1'alt="" />
        </div>
      )}
     <div style={{ 
        backgroundImage: `url(${MacOsBackground.src})`, 
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex', 
        }}>
        {
          aboutModal ? <AboutMe setAboutModal={setAboutModal}/> : null
        }
        <div className="bg-opacity-50 backdrop-filter backdrop-blur-md p-0 fixed top-0 left-0 w-full flex items-center shadow-xl justify-between h-8 bg-gray-900 text-white">
        <div className="flex items-center">
          <Image src={apple} className='h-4 w-4 ml-2'alt="" />
          <div onClick={()=> setAboutModal(true)}>
            <p className='text-xs pl-2 pt-1 text-center cursor-pointer'>About Me</p>
          </div>
        </div>
        <div className="flex items-center">
        <p className="text-xs pr-2">{currentDate}</p>
        <p className="text-xs pr-2">{currentTime}</p>
        </div>
        </div>
        <div className="min-h-screen flex flex-col items-start justify-start p-8 pl-4 space-y-4">
        <Modal>
        <div className="flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-20">
          <Image src={JS} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm text-white">Projects</p>
        </div>
        </Modal>
        <div onClick={()=> redirect(socialLinks.resume)} className="flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-20">
          <Image src={Pdf} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm text-white">Resume</p>
        </div>
        <div onClick={()=> redirect(socialLinks.github)} className="flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-20">
          <Image src={Git} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm text-white">Github</p>
        </div>
        <div onClick={()=> redirect(socialLinks.linkedin)} className="flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-20">
          <Image src={LinkedIn} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm text-white">LinkedIn</p>
        </div>
        <div onClick={()=> setOs('Windows')} className="flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-20">
          <Image src={Win} className='h-14 w-14 rounded-full pb-1' alt=""/>
          <p className="text-sm text-white">Windows</p>
        </div>
        <div onClick={()=> openTerminal()} className="flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-20">
          <Image src={Terminal} className='h-14 w-14 rounded-full pb-1'alt="" />
          <p className="text-sm text-white">xTerminal</p>
        </div>
      </div>
            <div className="p-2 fixed bottom-0 left-0 w-full flex items-center justify-center">
                <div className="bg-opacity-50 rounded-[15px] backdrop-filter backdrop-blur-md flex items-center bg-gray-900 text-white">
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transform transition-transform hover:scale-125 duration-300 ease-in-out'onClick={()=>{redirect('https://portfolio.affan.io')}} >
                    <Image src={Safari} className='h-8 w-8'alt="" />
                  </div>
                  <div onClick={()=> redirect(socialLinks.github)} className='flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transform transition-transform hover:scale-125 duration-300 ease-in-out' >
                  <Image src={Git} className='h-8 w-8'alt="" />
                  </div>
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transform transition-transform hover:scale-125 duration-300 ease-in-out' onClick={() => { openMailbox() }} >
                    <Image src={Mail} className='h-8 w-8'alt="" />
                  </div>
                  <div className='flex flex-col items-center justify-center cursor-pointer p-2 rounded-md transform transition-transform hover:scale-125 duration-300 ease-in-out' onClick = {() => { redirect(socialLinks.calendly) }} >
                    <Image src={Calendar} className='h-8 w-8'alt="" />
                  </div>
                </div>
            </div>
    </div>
   </>
  );
};

export default MacOs;
