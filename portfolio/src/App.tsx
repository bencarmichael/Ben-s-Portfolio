import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Ben from "./components/Ben";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Ready from "./components/Ready";
import Mail from "./components/Mail";
import Phone from "./components/Phone";
import ProjectContext from "./contexts/projectContext";
import Modal from "./components/Modal";

interface ModalState {
  open: boolean;
  id: string;
}

interface ModalContextType {
  modal: ModalState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

export const ModalContext = React.createContext<ModalContextType>({
  modal: {
    open: false,
    id: "",
  },
  setModal: () => {},
});

function App() {
  const [open, setOpen] = useState("projects");
  const [modal, setModal] = useState<ModalState>({
    open: false,
    id: "",
  });
  const transitPage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = "Ben Carmichael";
  }, []);
  useEffect(() => {
    if (transitPage.current) {
      transitPage.current.style.opacity = "1";
    }
  }, [open]);

  return (
    <div className="App">
      <ModalContext.Provider value={{ modal, setModal }}>
        {modal.open === true && <Modal />}
        <div className="lg:hidden flex fixed z-50 w-screen h-screen inset-0 bg-black flex-col justify-center items-center gap-5 text-white">
          <Ready color="white" width="300px" />
        </div>
        <div className="w-full h-[100vh] bg-[#3970AA] flex flex-col justify-start items-center text-white">
          <div className="w-[80%] h-[100px]  flex flex-row justify-center">
            <div className="flex flex-col justify-center text-2xl items-end">
              <Ben color="white" width="300px" />
              {/* <div className="text-sm absolute font-bold top-[10%]">
              Graphic Designer
            </div> */}
            </div>
          </div>

          <div className="w-full h-[78vh] flex flex-col justify-start items-center bg-white text-black shadow-sm">
            <div className=" my-2 px-10 py-2 w-[95%] h-[90px] flex flex-row gap-3 justify-around items-center text-xl font-bold solid ">
              <div
                className=" w-[100px] cursor-pointer font-black  transition-all duration-100 hover:text-[#3970AA]"
                style={
                  open === "projects"
                    ? {
                        color: "#3970AA",
                        fontWeight: "800",
                        textDecoration: "underline",
                      }
                    : {}
                }
                onClick={() => setOpen("projects")}
              >
                Projects
              </div>
              <div
                className=" w-[100px] cursor-pointer font-black  transition-all hover:text-[#3970AA] "
                style={
                  open === "profile"
                    ? {
                        color: "#3970AA",
                        fontWeight: "800",
                        textDecoration: "underline",
                      }
                    : {}
                }
                onClick={() => setOpen("profile")}
              >
                Profile
              </div>
            </div>
            <div className="w-[90%] h-full overflow-hidden pr-1 typeOne transition-all duration-100 ">
              {" "}
              {open === "home" ? (
                <div className=" w-full transition-all"> Home </div>
              ) : open === "profile" ? (
                <div className="w-full h-full">
                  <Profile />{" "}
                </div>
              ) : open === "projects" ? (
                <div className="w-full h-full">
                  {" "}
                  <Projects />{" "}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="w-full flex flex-row justify-center items-center text-sm p-8 text-white">
            <div className="flex flex-row gap-2">
              <Mail color="white" width="22px" />
              <p>bcarmi96@gmail.com</p>
            </div>
          </div>
        </div>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
