import React, { useState } from "react";
import Project from "../components/Project";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [projectOpen, setProjectOpen] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-auto typeOne animate-fadeIn ">
      {projectOpen === true ? (
        <div className="z-10 absolute inset-0">
          <Project />
        </div>
      ) : (
        <></>
      )}
      <div className="w-[98%] flex flex-row justify-start items-start flex-wrap p-10">
        <div className="w-[24.2%] h-[300px] cursor-pointer hover:opacity-50 bg-slate-300 m-1 overflow-hidden relative">
          <img src="/Ben-s-Portfolio/blugold.png" />
        </div>
        <div
          className="w-[24.2%] h-[300px] cursor-pointer hover:opacity-50 bg-slate-300 m-1 overflow-hidden relative"
          onClick={() => setProjectOpen(true)}
        >
          <img src="/Ben-s-Portfolio/food_booklet_00.jpg" />
        </div>
        <div className="w-[24.2%] h-[300px] cursor-pointer hover:opacity-50 bg-slate-300 m-1 overflow-hidden relative">
          <img src="/Ben-s-Portfolio/ima_00.jpg" />
        </div>
        {projects.map((project) => {
          return (
            <div className="w-[24.2%] h-[300px] cursor-pointer hover:bg-slate-400 bg-slate-300 m-1"></div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
