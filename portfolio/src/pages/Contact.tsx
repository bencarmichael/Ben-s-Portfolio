import React from "react";
import Ready from "../components/Ready";
import Mail from "../components/Mail";
import Phone from "../components/Phone";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-row justify-center items-start">
        <div className="w-[45%] h-full flex flex-col justify-center items-start p-20">
          <div className="flex flex-row gap-5 justify-center items-center">
            <Mail color="#0086FF" width="22px" />
            <p className="text-[#0086FF] font-semibold">bencarmi@gmail.com</p>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center">
            <Phone color="#0086FF" width="22px" />
            <p className="text-[#0086FF] font-semibold">123-5815-2338</p>
          </div>
        </div>
        <div className="w-[55%] h-full flex flex-col justify-start items-start py-[40px] px-[40px]">
          <div className="w-full font-bold my-10">Hi I'm Ben</div>
          <div className="w-full font-normal text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            accusamus labore, quaerat provident expedita pariatur vel nostrum
            quis ratione laboriosam soluta sunt aliquam debitis eius doloribus
            error. Quibusdam, blanditiis iure! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. At, accusamus labore, quaerat
            provident expedita pariatur vel nostrum quis ratione laboriosam
            soluta sunt aliquam debitis eius doloribus error. Quibusdam,
            blanditiis iure!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
