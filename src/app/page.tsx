'use client'

import { useEffect, useState } from 'react';
import Windows from '@/pages/windows'
import Android from '@/pages/android'
import MacOs from '@/pages/macos'
import Iphone from '@/pages/iphone'
import App from './App2';
import Image from 'next/image';
import { FaMinus, FaSquare, FaTimes } from 'react-icons/fa';
import TerminalLogo from '../../public/images/win-terminal.png'

export default function Home() {
  const [os, setOs] = useState('');
  const [terminal,setTerminal] = useState(false);
  useEffect(() => {
    const detectOS = () => {
      if (typeof navigator !== 'undefined') {
        const platform = navigator.platform.toLowerCase();
        if (platform.includes('win')) {
          return 'Windows';
        } else if (platform.includes('mac')) {
          return 'MacOS';
        } else if (platform.includes('linux')) {
          const screenWidth = window.innerWidth;
          if (screenWidth <= 767) {
            return 'Android';
          } else {
            return 'Windows';
          }
        } else if (platform.includes('iphone')) {
          return 'Iphone';
        } else if (platform.includes('android')) {
          return 'Android';
        } else {
          const screenWidth = window.innerWidth;
          if (screenWidth <= 767) {
            return 'Android';
          } else {
            return 'Windows';
          }
        }
      }
      return 'Unknown';
    };

    const userOS = detectOS();
    setOs(userOS)
    }, []);

    const openTerminal = () => {
      setTerminal(true);
    }

  return (
    <main className="flex min-h-screen flex-col justify-between">
        {terminal ? <div className='fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-50 outline-none focus:outline-none bg-gray-800 w-[100%] h-[100%] rounded-md'>
          <div className="sticky top-0 pl-2 pb-0 flex left-0 w-full items-center justify-between z-50">
            <div className="flex items-center pt-2 pl-2">
              <Image src={TerminalLogo} className='h-6 w-6 mr-2' alt='Logo' />
              <p className="text-xs font-semi-bold text-white">Projects</p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => setTerminal(false)}>
                <FaMinus className="text-white" />
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => setTerminal(false)}>
                <FaSquare className="text-white" />
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer p-2  pl-4 pr-4 transition duration-300 ease-in-out hover:bg-red-500" onClick={() => setTerminal(false)}>
                <FaTimes className="text-white" /> 
              </div>
            </div>
            
          </div>
          <App/>
        </div> : <>
        {os === 'Windows' ? <Windows openTerminal={openTerminal}  setOs={setOs}/>: null}
        {os === 'MacOS' ? <MacOs openTerminal={openTerminal} setOs={setOs}/>: null}
        {os === 'Android' ? <Android openTerminal={openTerminal} setOs={setOs}/>: null}
        {os === 'Iphone' ? <Iphone openTerminal={openTerminal} setOs={setOs}/>: null}
        </> }
    </main>
  );
}
