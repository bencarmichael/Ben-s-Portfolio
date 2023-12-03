import React, { useContext, useState } from "react";
import { ModalContext } from "../App";
import projects from "../data/projects.json";

const Projects = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [name, setName] = useState("");
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-auto typeOne animate-fadeIn ">
      <div className="w-[98%] flex flex-row justify-start items-start flex-wrap p-10">
        {projects.map((project) => {
          return (
            <div
              className="w-[24.2%] h-[300px] cursor-pointer bg-slate-300 m-1 overflow-hidden relative flex flex-row items-center justify-center"
              onClick={() =>
                setModal({
                  open: true,
                  id: project.id,
                })
              }
              onMouseEnter={() => setName(project.id)}
              onMouseLeave={() => setName("")}
            >
              <img
                className="h-full w-full object-cover"
                src={`/Ben-s-Portfolio/${project.id}_00.jpg`}
              />
              {name === project.id && (
                <div>
                  <div className="w-full h-[60%] absolute z-10 bottom-0 left-0 bg-gradient-to-t from-black to-transparent "></div>
                  <div className="w-full h-full flex flex-col justify-end items-start absolute text-left z-10 inset-0 text-white p-5">
                    <p className="text-md font-bold">{project.title}</p>
                    <p className="text-xs font-normal">{project.category}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
