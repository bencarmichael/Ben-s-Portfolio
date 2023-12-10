import React from "react";
import Ready from "../components/Ready";

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center animate-fadeIn ">
      <div className="w-full h-full flex flex-row justify-center items-start pl-10">
        <div className="w-[45%] h-full flex flex-col justify-end items-center">
          <img
            className="w-[80%] opacity-90 "
            src="/portfolio/profile_picture.png"
          />
        </div>
        <div className="w-[55%] h-full flex flex-col justify-start items-start py-[40px] px-[40px] overflow-auto typeOne">
          <div className="w-full flex flex-row justify-center items-center">
            <Ready color="#3970AA" width="250px" />
          </div>
          <div className="w-full font-bold text-lg my-10">Hi I'm Mark</div>
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
          <div className="w-full mt-10 text-sm">
            <div className="w-full font-bold text-lg my-5">History</div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>August 1996</p>
              <p>Born in Willmar, Minnesota</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>August 2008</p>
              <p>Moved to Milwaukee, Wisconsin</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>October 2014</p>
              <p>WIAA Cross Country State Champion</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>June 2015</p>
              <p>Graduated from Wisconsin Lutheran High School</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>August 2015 to May 2018</p>
              <p>Cross Country/Track Athlete at UWEC</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>August 2019 to November 2019</p>
              <p>Cross Country Assistant Coach at UWEC</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>May 2020</p>
              <p>
                Graduated with Honors from University of Wisconsin-Eau Claire
              </p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>July 2020</p>
              <p>Obtained TEFL Certificate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>January 2021</p>
              <p>Moved to Seoul, South Korea</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>February 2021 to July 2021</p>
              <p>Middle School Teacher at Canaan Lutheran Academy</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>August 2021 to February 2023</p>
              <p>ESL Teacher at TOPIA Education Inc</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>March 2023 to July 2023</p>
              <p>R&D Member at Poly Language Academy</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>August 2023</p>
              <p>Moved to Seattle, Washington</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>November 2023</p>
              <p>Obtained Web Development Certificate from John Hopkins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
