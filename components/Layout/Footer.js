import React from "react";
import { LiaFacebook, LiaLinkedin, LiaTwitter } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-secondary" id="contact">
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 pt-8 lg:pt-16 pb-8 border-b border-slate-50">
        <div className="w-full lg:w-1/3">
          <div className="text-center lg:text-left text-slate-50 font-light text-sm mb-4">
            <h1 className="font-medium">HEAD OFFICE</h1>
            <p>56 Forest Manor Rd. U-1105 North YORK, ON M2J 0E5</p>
            <p>KANADA</p>
          </div>
          <div className="text-center lg:text-left text-slate-50 font-light text-sm">
            <h1 className="font-medium">TURKEY OFFICE</h1>
            <p>
              Acıbadem Mah. Tekin Sok.No:5 (Havuzlar Sitesi Köşkü) Acıbadem |
              İstanbul - Turkey
            </p>
            <p>TURKEY</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:flex-none">
          <h1 className="text-slate-50 text-sm font-medium mb-2">
            FOLLOW US ON
          </h1>
          <ul className="text-slate-50 text-3xl flex justify-start space-x-2">
            <li>
              <LiaLinkedin className="hover:text-gray-900 cursor-pointer"/>
            </li>
            <li>
              <LiaTwitter className="hover:text-gray-900 cursor-pointer"/>
            </li>
            <li>
              <LiaFacebook className="hover:text-gray-900 cursor-pointer"/>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:flex-none">
          <ul className="font-sans flex flex-col text-sm font-medium text-slate-50">
            <li className="mb-2">ABOUT CELS</li>
            <li className="mb-2">TESTING</li>
            <li className="mb-2">SCORING</li>
            <li className="mb-2">PRACTICE</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm font-light italic py-8 text-slate-50">
          &copy; 2023 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
