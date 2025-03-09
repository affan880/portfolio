import Modal from '@/components/windows/projects/projectsModal'
import { aboutMe, socialLinks } from '@/utils/data'
import Image from 'next/image';
import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi';
import { IoIosCall } from 'react-icons/io';

import Git from  '../../public/images/github.svg'
import JS from  '../../public/images/js.svg'
import LinkedIn from  '../../public/images/linkedIn.svg'
import Pdf from  '../../public/images/pdf.svg'

export default function WindowsKey({setViewWindow}) {
    const joinWithPipe = (array) => array?.join(" , ");
    let skills = joinWithPipe(aboutMe.skills);
    const [showModal, setShowModal] = useState(false);
    
    const redirect = (link) => {
        window.open(link)
      } 
    const handleModalClick = (e) => {
      e.stopPropagation(); 
    };

    function setupPhoneCall() {
      const telUri = `tel:${aboutMe.phone}`; 
      window.location.href = telUri;
    }
    const openMailbox = () => {
      window.location.href = `mailto:${socialLinks.email}`;
    };
return (
    <>
    <Modal showModal={showModal} setShowModal={setShowModal} />
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-30" onClick={() => { setViewWindow() }}>
      <div className="fixed top-[440px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-80 w-[30%] h-[70%] rounded-md p-3" onClick={handleModalClick}>
        <div className="flex flex-row items-start justify-between p-6 border-b border-gray-600">
          <div className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900" onClick={()=> {setShowModal(true)}}>
            <Image src={JS} className='h-14 w-14 rounded-full pb-1' alt=""/>
            <p className="text-s text-white">Projects</p>
          </div>
          <div onClick={() => redirect(socialLinks.resume)} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
            <Image src={Pdf} className='h-14 w-14 rounded-full pb-1' alt=""/>
            <p className="text-sm text-white">Resume</p>
          </div>
          <div onClick={() => redirect(socialLinks.github)} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
            <Image src={Git} className='h-14 w-14 rounded-full pb-1' alt="" />
            <p className="text-sm text-white">Github</p>
          </div>
          <div onClick={() => redirect(socialLinks.linkedin)} className="flex flex-col items-center justify-center cursor-pointer p-2 pl-3 pr-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
            <Image src={LinkedIn} className='h-14 w-14 rounded-full pb-1' alt="" />
            <p className="text-sm text-white">LinkedIn</p>
          </div>
        </div>
        <div className='flex flex-row p-3 pl-8 items-start border-b border-gray-600 pb-2'>
            <p className="text-xs text-white mr-2 text-start w-[30%]">Phone: </p>
            <p className="text-gray-400 text-center text-xs">+17188010785</p>
        </div>
        <div className='flex flex-row p-3 pl-8 items-start border-b border-gray-600 pb-2'>
            <p className="text-xs text-white mr-2 text-start w-[30%]">Email: </p>
            <p className="text-gray-400 text-center text-xs">syedaffan880@gmail.com</p>
        </div>
        <div className='flex flex-row p-3 pl-8 items-start border-b border-gray-600 pb-2'>
            <p className="text-xs text-white mr-2 text-start w-[30%]">Experience: </p>
            <p className="text-gray-400 text-center text-xs">2+ Years</p>
        </div>
        <div className='flex flex-row p-3 pl-8 items-start pb-2'>
        <p className="text-xs text-white mr-2 text-start w-[30%]">Skills: </p>
        <p className="text-gray-400 text-xs">
            {skills}
        </p>
        </div>
        <div className="bg-opacity-80 backdrop-filter backdrop-blur-md p-8 pt-6 pb-6 fixed bottom-0 left-0 w-full flex flex-row items-center shadow-xl justify-between bg-gray-900 text-white">
          <div className="flex items-center">
            <Image src={aboutMe.image} className="rounded-full" width={30} height={30} alt="" />
            <div className='flex-col ml-2'>
              <p className='text-[10px] text-white'>{aboutMe.name}</p>
              <p className='text-[10px] text-white'>{aboutMe.bio}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => { setupPhoneCall() }}>
              <IoIosCall className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => { openMailbox() }}>
              <FiMail className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}