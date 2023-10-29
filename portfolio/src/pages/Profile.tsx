import React from "react";
import Ready from "../components/Ready";

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center transition duration-300 ease-in-out opac">
      <div className="w-full h-full flex flex-row justify-center items-start">
        <div className="w-[45%] h-full flex flex-col justify-end items-center">
          <img
            className="w-[85%] opacity-90 left-[-5%]"
            src="/Ben-s-Portfolio/profile_picture.png"
          />
          <div className="absolute top-[55%] left-[24%]">
            <Ready color="#0086FF" width="300px" />
          </div>
        </div>
        <div className="w-[55%] h-full flex flex-col justify-start items-start py-[40px] px-[40px] overflow-auto typeOne">
          <div className="w-full font-bold text-lg my-10">Hi I'm Ben</div>
          <div className="w-full font-normal text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            accusamus labore, quaerat provident expedita pariatur vel nostrum
            quis ratione laboriosam soluta sunt aliquam debitis eius doloribus
            error. Quibusdam, blanditiis iure! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. At, accusamus labore, quaerat Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. At, accusamus
            labore, quaerat provident expedita pariatur vel nostrum quis ratione
            laboriosam soluta sunt aliquam debitis eius doloribus error.
            Quibusdam, blanditiis iure! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. At, accusamus labore, quaerat
          </div>
          <div className="w-full mt-10">
            <div className="w-full font-bold text-lg my-5">History</div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>2020</p>
              <p>Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
