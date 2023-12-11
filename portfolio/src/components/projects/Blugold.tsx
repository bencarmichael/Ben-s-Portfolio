import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../App";

const Blugold = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { modal, setModal } = useContext(ModalContext);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      modalRef.current && setScrollY(modalRef.current.scrollTop);
      modalRef.current && console.log(modalRef.current.scrollTop);
    };

    modalRef.current &&
      modalRef.current.addEventListener("scroll", handleScroll);

    return () => {
      modalRef.current &&
        modalRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full noScroll flex flex-col justify-start items-center bg-white font-md text-black leading-5">
      <div className="w-full h-[10%] font-md flex flex-row justify-between items-center fixed p-3 pl-8 text-xl bg-white">
        <div className="w-full h-full flex flex-col justify-center items-start mt-5">
          <p className="font-bold">BLUGOLD ESPORTS/BLUGOLD LEAGUE OF LEGENDS</p>
          <p className="font-normal text-sm text-mcolor">Logo design</p>
        </div>

        <div
          className="w-[40px] cursor-pointer font-thin text-xl"
          onClick={() => setModal({ open: false, id: "" })}
        >
          ╳
        </div>
      </div>
      <div
        className="w-full mt-[68px] h-[732px] flex flex-col justify-start items-center overflow-auto typeOne gap-2 overflow-x-hidden relative"
        ref={modalRef}
      >
        <div className="w-full h-full flex flex-col justify-start lg:justify-between items-center snap-center relative lg:p-10">
          <div className="w-[85%] h-[732px] p-2 flex flex-col justify-center items-start z-10">
            <div className=" w-full flex flex-row justify-center items-center m-10 my-20 mt-40 gap-10">
              <img
                className=" w-[20%] object-cover"
                src="/portfolio/blugold_04.png"
              />
              <img
                className="w-[20%]  object-cover"
                src="/portfolio/blugold_03.jpg"
              />
            </div>

            <p className="font-black  px-3 underline">
              BLUGOLD ESPORTS/BLUGOLD LEAGUE OF LEGENDS
            </p>
            <p className="p-3 text-left text-[14px] whitespace-pre-wrap leading-6 ">
              In 2018, the Blugold League of Legends Club was a newly
              established club at the University of Wisconsin-Eau Claire. Being
              a fan of the game myself, I eagerly accepted the task of designing
              a logo for them. The logo contains a bird, resembling both an
              in-game character and the school's mascot. I decided to stick to
              navy and gold, the university's official colors.
              <br></br>
              <br></br>
              Fast forward a year, the university's recreation department
              approached the club's president and requested expanding the club
              into an esports club. Since esports has continued to grow rapidly
              in popularity, the school wanted to take this chance to develop
              their very own esports program. With that being the case, the club
              was in need of a new logo. So I designed the logo for Blugold
              Esports, closely resembling a video controller.
            </p>
            <p className="p-3 text-left text-[10px] leading-3">
              Created with Adobe Illustrator
            </p>

            <div className=" w-full flex flex-row justify-between items-start my-10 gap-1">
              <img
                className=" w-[50%] h-full object-cover"
                src="/portfolio/blugold_01.jpg"
              />
              <img
                className="w-[50%] h-full object-cover"
                src="/portfolio/blugold_02.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blugold;
