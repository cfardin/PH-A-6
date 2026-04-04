import React from "react";
import banner from "../assets/banner.png";
import dot from "../assets/dot.png";
import { CiPlay1 } from "react-icons/ci";
const HeroBanner = () => {
  return (
    <div className="w-full md:w-10/12 m-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          {/* hero text stuffs */}
          <div>
            <div className="badge badge-soft badge-primary text-[#4F39F6] rounded-[25px] p-4"><img src={dot} alt="" />New: AI-Powered Tools Available</div>
            <h1 className="text-[72px] leading-20 line- font-extrabold">Supercharge Your<br /><span className="text-[#4F39F6]">Digital Workflow</span></h1>
            <p className="text-[#627382] py-6">
              Access premium AI tools, design assets, templates, and productivity <br />
              software—all in one place. Start creating faster today. <br />
              Explore Products
            </p>
            {/* hero button */}
            <div className="flex gap-4"> 
                <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[25px] ">Explore Products</button>
                <button className="btn btn-outline btn-primary  rounded-[25px]"><CiPlay1></CiPlay1> Watch Demo</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
