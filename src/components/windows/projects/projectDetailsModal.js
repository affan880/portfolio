import ResizableImage from '@/components/ResizeableImg'
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { CgOrganisation } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa';
import { PiArrowLeftBold } from 'react-icons/pi';
import { RiEnglishInput } from 'react-icons/ri';
import { TbCategoryFilled, TbWorld } from 'react-icons/tb';

import Home from '../../../../public/images/academic-ally/home.png';
import profile from '../../../../public/images/academic-ally/profile.png';
import search from '../../../../public/images/academic-ally/search.png';
import seekhub from '../../../../public/images/academic-ally/seekhub - Request.png';
import AllyLogo from '../../../../public/images/Ally-Logo.png'

import './styles.css'

const ProjectDetailsModal = ({ visible, closeModal, closeAllModals,project}) => {
    const [show, setShow] = useState(visible);

    useEffect(()=>{
      setShow(visible);
    },[visible]);

    const joinWithPipe = (array) => array?.join(" | ");
  
    let stack = joinWithPipe(project?.techStack);
    return (
        <>
          {
            show ? (
              <div className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-50 outline-none focus:outline-none bg-gray-800 w-[100%] h-[100%] rounded-md">
            <div className="sticky top-0 pl-2 pb-2 flex left-0 w-full items-center justify-between bg-gray-800 z-50">
              <div className="flex flex-row items-center justify-center cursor-pointer p-2" onClick={()=>{
                closeModal();
                setShow(false)
              }}>
                <PiArrowLeftBold className="text-white" />
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer p-2  pl-4 pr-4 transition duration-300 ease-in-out hover:bg-red-500" onClick={() => {
                closeAllModals()
              }}>
                <FaTimes className="text-white" /> 
              </div>
            </div>
            <div className='flex flex-col p-4 h-full overflow-y-auto custom-scrollbar'>
              <div className='flex flex-row items-center'>
              <ResizableImage src={project.logo} height={100} />
                <div className="flex flex-col p-2">
                  <p className="text-xl font-semi-bold">{project?.title} -  {project?.tagLine}</p>
                  <p className="text-sm">{stack}</p>
                </div>
              </div>
              <div className='flex flex-row justify-between items-center ml-3 mr-3'>
                <div className='flex flex-col p-6 justify-center items-center'>
                  <p className='text-xs font-bold text-gray-600 p-2 pb-4 text-center'>COMPANY</p>
                  <CgOrganisation className="text-white w-10 h-10"/>
                  <p className='text-xs font-bold p-2 pt-4 text-gray-600'>Defun</p>
                </div>
                <div className="bg-gray-500 w-[0.5px] h-20 mt-3"></div>
                <div className='flex flex-col p-6 justify-center items-center'>
                  <p className='text-xs font-bold text-gray-600 p-2 pb-4 text-center'>COUNTRIES</p>
                  <TbWorld className="text-white w-10 h-10"/>
                  <p className='text-xs font-bold p-2 pt-4 text-gray-600'>Defun</p>
                </div>
                <div className="bg-gray-500 w-[0.5px] h-20 mt-3"></div>
                <div className='flex flex-col p-6 justify-center items-center'>
                  <p className='text-xs font-bold text-gray-600 p-2 pb-4 text-center'>LANGUAGE</p>
                  <RiEnglishInput className="text-white w-10 h-10"/>
                  <p className='text-xs font-bold p-2 pt-4 text-gray-600'>English</p>
                </div>
                <div className="bg-gray-500 w-[0.5px] h-20 mt-3"></div>
                <div className='flex flex-col p-6 justify-center items-center'>
                  <p className='text-xs font-bold text-gray-600 p-2 pb-4 text-center'>CATEGORY</p>
                  <TbCategoryFilled className="text-white w-10 h-10"/>
                  <p className='text-xs font-bold p-2 pt-4 text-gray-600'>Education</p>
                </div>
                <div className="bg-gray-500 w-[0.5px] h-20 mt-3"></div>
                <div className='flex flex-col p-6 justify-center items-center'>
                  <p className='text-xs font-bold text-gray-600 p-2 pb-4 text-center'>PLATFORMS</p>
                  <div className='flex flex-row'>
                  <AiFillAndroid className="text-white w-10 h-10"/>
                  <AiFillApple className="text-white w-10 h-10"/>
                  </div>
                  <p className='text-xs font-bold p-2 pt-4 text-gray-600'>Android & iOS</p>
                </div>
              </div>
              <div className='flex flex-col p-4 pt-0'>
                  <p className='text-md p-2 text-white font-semi-bold'>Description</p>
                  <p
                    className="text-xs p-2 text-white"
                    dangerouslySetInnerHTML={{ __html: project?.description }}
                  />
            </div>
              <div className='flex flex-col p-4 pt-0 mb-2'>
              <p className='text-md p-2 text-white font-semi-bold'>Screenshots</p>
                <div className='flex flex-row overflow-x-auto custom-scrollbar2 justify-between'>
                  {
                    (project?.screenshots).map((item, key)=>(
                        <ResizableImage src={item} height={400} key={key} />
                    ))}
                </div>
            </div>
            </div>
          </div>
            ) : null
          }
        </>
    );
};

export default ProjectDetailsModal