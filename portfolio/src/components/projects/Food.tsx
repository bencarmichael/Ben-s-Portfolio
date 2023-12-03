import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../App";

const Food = () => {
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
          <p className="font-bold">TRUSTING THE PROCESS</p>
          <p className="font-normal text-sm text-mcolor">
            Informational Booklet
          </p>
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
            <div className=" w-full flex flex-row justify-center items-center mb-10 gap-2">
              <img
                className=" w-[50%] h-full object-cover"
                src="/Ben-s-Portfolio/food_01.jpg"
              />
              <img
                className=" w-[50%] h-full object-cover"
                src="/Ben-s-Portfolio/food_02.jpg"
              />
            </div>

            <p className="font-black  px-3 underline">TRUSTING THE PROCESS</p>
            <p className="p-3 text-left text-[14px]">
              Trusting the Process is an informational booklet about the dangers
              of eating too much processed foods. It is targeted at everyday
              people who love the convenience and taste of fast food. The
              booklet is filled with images and graphs to show the harms these
              foods can cause. The colors resemble those used by McDonald’s, one
              of the most popular fast food chains in America.
            </p>
            <p className="p-3 text-left text-[10px] leading-3">
              Created with Adobe Illustrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
