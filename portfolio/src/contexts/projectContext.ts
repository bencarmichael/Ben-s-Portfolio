import React from "react";

interface ProjectContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectContext = React.createContext<ProjectContextType>({
  state: "",
  setState: () => {},
});
export default ProjectContext;
