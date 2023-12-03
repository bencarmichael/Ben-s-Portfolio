import React, { useContext } from "react";
import { ModalContext } from "../App";
import Blugold from "./projects/Blugold";
import Food from "./projects/Food";
import Wiscomile from "./projects/Wiscomile";
import IMA from "./projects/IMA";

const Modal = ({}) => {
  const { modal, setModal } = useContext(ModalContext);
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full overflow-hidden fixed inset-0 z-40 backdrop-blur-md backdrop-filter p-20"
        onClick={() => setModal({ open: false, id: "" })}
      ></div>
      <div className="w-full h-full bg-mcolor opacity-30 absolute inset-0 z-20"></div>
      <div
        className="absolute h-[40px] bottom-0 w-full my-5 z-40  flex flex-row justify-center items-center"
        onClick={() => setModal({ open: false, id: "" })}
      ></div>
      <div className="w-[100%] h-screen p-5 lg:px-[10%] pb-20 pt-20 absolute flex flex-col justify-center items-center ">
        <div className="w-[100%] h-[100%] rounded-lg inset-0 z-40 drop-shadow-lg overflow-hidden flex flex-col justify-start items-start">
          {modal.id === "blugold" ? (
            <Blugold />
          ) : modal.id === "food" ? (
            <Food />
          ) : modal.id === "wiscomile" ? (
            <Wiscomile />
          ) : modal.id === "ima" ? (
            <IMA />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
