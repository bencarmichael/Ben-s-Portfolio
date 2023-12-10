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
          <div className="w-full font-bold text-lg my-10">Hi, I'm Ben!</div>
          <div className="w-full font-normal text-left">
            I am a passionate graphic designer with unique experiences that have helped me grow tremendously.
            While at the University of Wisconsin-Eau Claire, I developed a strong base of knowledge and skills necessary for a graphic designer.
            This includes becoming more proficient with Adobe Creative Cloud, understanding elements and principles of art, and practicing with 
            other mediums. During my time at the university, I also had the opportunity to work with Blugold Esports. This helped me improve my logo design 
            as well as promotional material. After college, I obtained a TEFL certificate and gained experience as a teacher. From the time I spent there, 
            I vastly improved my communication skills as it was necessary to convey information to parents, students, and coworkers who all came 
            from different backgrounds. As a member of an R&D team, I learned how to work at a faster pace while still producing high quality content 
            such as student workbooks and educational videos, as it was necessary to keep up with the fast-paced environment. Overall, I have been very fortunate to have such unique and diverse experiences.
          </div>
          <div className="w-full mt-10 text-sm">
            <div className="w-full font-bold text-lg my-5">History</div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Aug 1996</p>
              <p>Born in Willmar, Minnesota</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Aug 2008</p>
              <p>Moved to Milwaukee, Wisconsin</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Oct 2014</p>
              <p>WIAA Cross Country State Champion</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>June 2015</p>
              <p>Graduated from Wisconsin Lutheran High School</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Aug 2015 to May 2018</p>
              <p>Cross Country/Track Athlete at UWEC</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Aug 2019 to Nov 2019</p>
              <p>Cross Country Assistant Coach at UWEC</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>May 2020</p>
              <p>
                Graduated with Honors from the University of Wisconsin-Eau Claire
              </p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>July 2020</p>
              <p>Obtained TEFL Certificate</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Jan 2021</p>
              <p>Moved to Seoul, South Korea</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Feb 2021 to July 2021</p>
              <p>Middle School Teacher at Canaan Lutheran Academy</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Aug 2021 to Feb 2023</p>
              <p>ESL Teacher at TOPIA Education Inc</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>March 2023 to July 2023</p>
              <p>R&D Member at Poly Language Academy</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Aug 2023</p>
              <p>Moved to Seattle, Washington</p>
            </div>
            <div className="border-b solid w-full flex flex-row justify-between px-5 py-2">
              <p>Nov 2023</p>
              <p>Obtained Web Development Certificate from John Hopkins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
