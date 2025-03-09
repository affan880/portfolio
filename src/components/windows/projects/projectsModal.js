import { projects } from '@/utils/data'
import Image from 'next/image';
import React, { useState } from "react";
import { FaMinus, FaSquare, FaTimes } from 'react-icons/fa';

import JS from '../../../../public/images/js.svg'
import Card from './card.js'
import ProjectDetailsModal from './projectDetailsModal'

import './styles.css'

const ProjectsModal = ({showModal, setShowModal }) => {
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
    setShowProjectDetailsModal(false);
  };
  const closeAllModals = () => {
    setShowProjectDetailsModal(false);
    setShowModal(false)
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-50 outline-none focus:outline-none bg-gray-800 w-[75%] h-[75%] rounded-md shadow-lg">
          <div className="sticky top-0 pl-2 pb-2 flex left-0 w-full items-center justify-between bg-gray-800 z-50">
            <div className="flex items-center pt-2 pl-2">
              <Image src={JS} className='h-6 w-6 mr-2' alt='Logo' />
              <p className="text-xs font-semi-bold text-white">Projects</p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => setShowModal(false)}>
                <FaMinus className="text-white" />
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer p-2 pl-4 pr-4 transition duration-300 ease-in-out hover:bg-gray-900" onClick={() => setShowModal(false)}>
                <FaSquare className="text-white" />
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer p-2  pl-4 pr-4 transition duration-300 ease-in-out hover:bg-red-500" onClick={() => setShowModal(false)}>
                <FaTimes className="text-white" /> 
              </div>
            </div>
          </div>
          <div className="h-[100%] overflow-y-hidden bg-gray-500 bg-opacity-10 rounded-md">
            <div className="flex flex-row">
              <p className="text-xl font-semi-bold p-6 text-white">“ Projects ”</p>
            </div>
            <div className="h-full overflow-y-scroll custom-scrollbar-hidden bg-gray-500 bg-opacity-10 rounded-md">
              <div className="grid grid-cols-2 gap-5 p-6 mb-32">
                {
                  projects.map((project, key) => (
                    <div key = {key} onClick={()=> {
                      setSelectedProject(project);
                      setShowProjectDetailsModal(true);
                    }}>
                      <Card details={project}/>
                    </div>
                  ))
                }
                {
                  selectedProject && 
                  <ProjectDetailsModal visible={showProjectDetailsModal} closeModal={closeModal} closeAllModals={closeAllModals} project={selectedProject} />
                }
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProjectsModal
