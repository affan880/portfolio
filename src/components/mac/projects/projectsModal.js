import { projects } from '@/utils/data'
import React, { useState } from "react";

import Card from './card.js'
import ProjectDetailsModal from './projectDetailsModal'

import './styles.css'

const ProjectsModal = ({children}) => {
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    <div onClick={() => setShowModal(true)}>
        {
          children
        }
    </div>
      {showModal ? (
        <>
        <div className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-50 outline-none focus:outline-none bg-gray-800 w-[75%] h-[75%] rounded-md">
          <div className="sticky top-0 pl-2 pb-2 flex left-0 w-full items-center justify-between bg-gray-800 z-50 pt-2">
            <div className="flex items-center justify-center">
              <div className="flex flex-row items-center justify-center cursor-pointer m-1 p-1 w-3 h-3 bg-gray-500 rounded-full transition duration-300 ease-in-out hover:bg-red-500" onClick={() => setShowModal(false)}>
                <p className='text-gray-500 hover:text-white text-[8px] text-center' >X</p>
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer m-1 p-1 w-3 h-3 bg-gray-500 rounded-full transition duration-300 ease-in-out" onClick={() => setShowModal(false)}>
                {/* <FaMinus className="text-white" /> */}
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer m-1 p-1 w-3 h-3 bg-gray-500 rounded-full transition duration-300 ease-in-out" onClick={() => setShowModal(false)}>
                {/* <FaSquare className="text-white" /> */}
              </div>
            </div>
          </div>
          <div className="h-[100%] overflow-y-auto custom-scrollbar bg-gray-500 bg-opacity-10 rounded-md">
            <div className="flex flex-row">
              <p className="text-xl font-semi-bold p-6 text-white">“ Projects ”</p>
            </div>
            <div className="h-full overflow-y-auto custom-scrollbar bg-gray-500 bg-opacity-10 rounded-md">
            <div className="grid grid-cols-2 gap-5 p-6">
                {/* <Card/> */}
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

        </>
      ) : null}
    </>
  );
};

export default ProjectsModal