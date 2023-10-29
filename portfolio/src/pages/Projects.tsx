import React from "react";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-auto typeOne">
      <div className="w-[98%] flex flex-row justify-start items-start flex-wrap p-10">
        <div className="w-[19.2%] h-[200px] cursor-pointer hover:opacity-50 bg-slate-300 m-1 overflow-hidden ">
          <img src="/Ben-s-Portfolio/blugold.png" />
        </div>
        {projects.map((project) => {
          return (
            <div className="w-[19.2%] h-[200px] cursor-pointer hover:bg-slate-400 bg-slate-300 m-1"></div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
