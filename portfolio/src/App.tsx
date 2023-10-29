import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ben from "./components/Ben";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Ready from "./components/Ready";

function App() {
  const [open, setOpen] = useState("home");

  return (
    <div className="App">
      <div className="lg:hidden flex fixed z-50 w-screen h-screen inset-0 bg-black flex-col justify-center items-center gap-5 text-white">
        <Ready color="white" width="300px" />
        Sorry, Mobile environment are not supported.
      </div>
      <div className="w-full h-[100vh] bg-[#0086FF] flex flex-col justify-start items-center text-white">
        <div className="w-[80%] h-[120px]  flex flex-row justify-center pb-6 pt-10">
          <div className="flex flex-col justify-center text-2xl items-end">
            <Ben color="white" width="350px" />
            {/* <div className="text-sm absolute font-bold top-[10%]">
              Graphic Designer
            </div> */}
          </div>
        </div>

        <div className="w-[80%] h-[78vh] flex flex-col justify-start items-center bg-white text-black rounded-2xl shadow-sm">
          <div className=" my-2 px-10 py-2 w-[95%] h-[70px] flex flex-row gap-3 justify-between items-center text-lg font-bold solid ">
            <div
              className=" w-[100px] cursor-pointer font-black hover:text-[#0086FF]"
              style={
                open === "home" ? { color: "#0086FF", fontWeight: "800" } : {}
              }
              onClick={() => setOpen("home")}
            >
              Home
            </div>
            <div
              className=" w-[100px] cursor-pointer font-black  transition-all hover:text-[#0086FF] "
              style={
                open === "profile"
                  ? { color: "#0086FF", fontWeight: "800" }
                  : {}
              }
              onClick={() => setOpen("profile")}
            >
              Profile
            </div>
            <div
              className=" w-[100px] cursor-pointer font-black  transition-all hover:text-[#0086FF]"
              style={
                open === "projects"
                  ? { color: "#0086FF", fontWeight: "800" }
                  : {}
              }
              onClick={() => setOpen("projects")}
            >
              Projects
            </div>
            <div
              className="  w-[100px] cursor-pointer font-black transition-all hover:text-[#0086FF]"
              style={
                open === "contact"
                  ? { color: "#0086FF", fontWeight: "800" }
                  : {}
              }
              onClick={() => setOpen("contact")}
            >
              Contact
            </div>
          </div>
          <div className="w-full h-full overflow-hidden pr-1 typeOne">
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
              <Contact />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
