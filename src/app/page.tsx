'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Windows from '@/pages/windows'
import Android from '@/pages/android'
import MacOs from '@/pages/macos'
import Iphone from '@/pages/iphone'

export default function Home() {
  const [os, setOs] = useState('')
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
    console.log(`Detected OS: ${userOS}`);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <MacOs/> */}
      {/* <Android/> */}
        {/* <Windows/> */}
        {/* <Iphone/> */}
        {os === 'Windows' ? <Windows setOs={setOs}/>: null}
        {os === 'MacOS' ? <MacOs setOs={setOs}/>: null}
        {os === 'Android' ? <Android setOs={setOs}/>: null}
        {os === 'Iphone' ? <Iphone setOs={setOs}/>: null}
    </main>
  );
}
