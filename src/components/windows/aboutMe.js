import Image from 'next/image';
import React from 'react'
import { FaMinus, FaSquare, FaTimes } from 'react-icons/fa';
import {aboutMe} from '@/utils/data'

export default function AboutMe({setAboutModal}) {
    const joinWithPipe = (array) => array?.join(" , ");
    let skills = joinWithPipe(aboutMe.skills);
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-50 outline-none focus:outline-none bg-gray-800 w-1/4 rounded-md">
  <div className="flex items-center justify-between p-4 pt-0 pr-0">
    <h2 className="text-sm text-white">About Me</h2>
    <div className="flex items-center">
      <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => setAboutModal(false)}>
        <FaMinus className="text-white" />
      </div>
      <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => setAboutModal(false)}>
        <FaSquare className="text-white" />
      </div>
      <div className="flex flex-row items-center justify-center cursor-pointer p-2  pl-4 pr-4 transition duration-300 ease-in-out hover:bg-red-500" onClick={() => setAboutModal(false)}>
        <FaTimes className="text-white" /> 
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center p-4">
    <div className="mr-4">
      {/* Your profile pic */}
      <Image
        src={aboutMe.image}
        alt="Profile Pic"
        className=" w-22 rounded-full"
        width={120}
        height={120}
      />
    </div>
    <div>
      <p className="text-white">{aboutMe.name}</p>
      <p className="text-gray-400">{aboutMe.bio}</p>
    </div>
  </div>
  <div className="p-4 pb-0 flex items-start">
    <p className="text-sm text-white mr-2 text-center">Experience: </p>
    <p className="text-gray-400 text-center text-sm">2+ years</p>
</div>

  <div className="p-4">
    <h3 className="text-sm text-white mb-2">Skills</h3>
    <p className="text-gray-400">
        {skills}
    </p>
  </div>
</div>

  )
}