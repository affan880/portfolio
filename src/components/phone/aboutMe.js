import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { IoCall, IoMail, IoShareSharp } from 'react-icons/io5';
import { AiFillChrome } from 'react-icons/ai';
import Image from 'next/image';

import {aboutMe,socialLinks} from '@/utils/data'
function AboutMe({onCloseModalAbout}) {
    const joinWithPipe = (array) => array?.join(" , ");
    let skills = joinWithPipe(aboutMe.skills);

    const openMailbox = () => {
        window.location.href = `mailto:${socialLinks.email}`;
      };
    function setupPhoneCall() {
        const telUri = `tel:${aboutMe.phone}`; 
        window.location.href = telUri;
    }
    const shareProfile = () => {
        const profileUrl = 'https://affann.dev';
        const shareableLink = prompt('Copy the shareable link:', profileUrl);
      
        if (shareableLink) {
          const tempInput = document.createElement('input');
          document.body.appendChild(tempInput);
          tempInput.value = shareableLink;
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
      
          console.log('Profile link copied to clipboard:', shareableLink);
        } else {
          console.error('Error sharing profile: User cancelled');
        }
      };

  return (
    <div className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden z-50 outline-none focus:outline-none bg-gray-800 w-[75%] h-[60%] rounded-md">
        <div className="flex flex-row sticky top-0 items-center justify-end cursor-pointer p-2  pl-4 pr-4" onClick={() => {
            onCloseModalAbout()
          }}>
            <FaTimes className="text-white" /> 
        </div>
        <div className='flex flex-row items-center p-4'>
            <Image
            src={aboutMe.image}
            alt="Profile Pic"
            className=" w-22 rounded-full"
            width={70}
            height={70}
            />
            <div className='flex flex-col pl-4'>
            <p className='text-white font-sm' >{aboutMe.name}</p>
            <p className='text-white text-xs' >{aboutMe.bio}</p>
            </div>
        </div>
        <div className='flex flex-row justify-around pl-6 pr-6'>
            <div className='flex flex-col' onClick={()=>{setupPhoneCall}}>
                <IoCall className='text-white mb-2 w-6 h-6'/>
                <p className='text-white text-xs'>Call</p>
            </div>
            <div className='flex flex-col' onClick={()=>{openMailbox()}}>
                <IoMail className='text-white mb-2 w-6 h-6'/>
                <p className='text-white text-xs'>Mail</p>
            </div>
            <div className='flex flex-col'>
                <AiFillChrome className='text-white mb-2 w-6 h-6'/>
                <p className='text-white text-xs'>Web</p>
            </div>
            <div className='flex flex-col' onClick={()=>{shareProfile()}}>
                <IoShareSharp className='text-white mb-2 w-6 h-6'/>
                <p className='text-white text-xs'>Share</p>
            </div>
        </div>
        <div className='flex flex-col p-4'>
            <div className='flex flex-col pb-4'>
                <p className='text-gray-400 text-xs pb-1'>Mobile</p>
                <p className='text-white text-sm'>{aboutMe.phone}</p>
            </div>
            <div className='flex flex-col pb-2'>
                <p className='text-gray-400 text-xs pb-1'>Email</p>
                <p className='text-white text-sm'>{aboutMe.email}</p>
            </div>
            <div className='flex flex-col pb-2'>
                <p className='text-gray-400 text-xs pb-1'>Experience</p>
                <p className='text-white text-sm'>2+ Years</p>
            </div>
            <div className='flex flex-col pb-2'>
                <p className='text-gray-400 text-xs pb-1'>Skills</p>
                <p className='text-white text-sm'>{skills}</p>
            </div>
        </div>

    </div>
  )
}

export default AboutMe