import Image from 'next/image';

import ResizableImage from '@/components/ResizeableImg'
import AllyLogo from '../../../../public/images/Ally-Logo.png'

const Card = ({details}) => {
  const joinWithPipe = (array) => array.join(" | ");
  
  let stack = joinWithPipe(details.techStack);
    return (
        <div className="bg-gray-600 bg-opacity-50 p-4 rounded-md shadow-xs cursor-pointer transform transition-transform hover:scale-105 flex flex-col justify-center">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center">
              <ResizableImage src={details.logo} height={50} />
                <div className="flex flex-col p-2">
                  <p className="text-lg font-semi-bold">{details.title}</p>
                  <p className="text-xs">{stack}</p>
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer" onClick={()=>{
                window.open(details.link)
              }}>
                <div className="bg-gray-800 bg-opacity-50 p-4 h-8 cursor-pointer rounded-md transform transition-transform hover:scale-125 flex items-center justify-center">
                  <p className="text-xs text-center">Visit</p>
                </div>
              </div>
            </div>
            <p className='text-xs pl-2 pt-2 pb-2'>Your go-to source for academic resources!</p>
            <Image src={details.banner} className='rounded-md w-full' width={1200} height={800} alt="" />

      </div>
      
    )
}

export default Card