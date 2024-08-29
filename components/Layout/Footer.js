import React from "react";
import { LiaFacebook, LiaLinkedin, LiaTwitter } from "react-icons/lia";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handleClickScroll = (id) => {
    // // TIKLANACAK ELEMENTE VERİLECEK ONCLICK
    const section = document.getElementById(id); // GİDİLECEK ID
    const coords = section.getBoundingClientRect();

    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary"
      id="contact"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 pt-8 lg:pt-16 pb-8 border-b border-slate-50">
        <div className="w-full lg:w-1/4">
          <div className="text-center lg:text-left text-slate-50 font-light text-sm mb-4">
            <h1 className="font-medium">HEAD OFFICE</h1>
            <p>56 Forest Manor Rd. U-1105 North YORK, ON M2J 0E5</p>
            <p className="mb-2">CANADA</p>
            <p className="mb-2">+1 416 571 4696</p>
            <p>contact@celstest.org</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:flex-none">
          <div className="text-center lg:text-left text-slate-50 font-light text-sm mb-4">
            <h1 className="font-medium">Partner of Türkiye</h1>
            <p className="font-medium">WCEP</p>
            <p className="mb-2">
              Acıbadem Mah. Tekin Sok.No:5 <br></br>(Havuzlar Sitesi Köşkü)
              <br></br>İSTANBUL / TÜRKİYE
            </p>
            <p className="mb-2">+90 216 339 01 07</p>
            <p>istanbul@wcep.org</p>
          </div>
          {/* <ul className="text-slate-50 text-3xl flex justify-start space-x-2">
            <li>
              <LiaLinkedin className="hover:text-gray-900 cursor-pointer" />
            </li>
            <li>
              <LiaTwitter className="hover:text-gray-900 cursor-pointer" />
            </li>
            <li>
              <LiaFacebook className="hover:text-gray-900 cursor-pointer" />
            </li>
          </ul> */}
        </div>
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:flex-none">
          <ul className="font-sans flex flex-col text-sm font-medium text-slate-50">
            <li className="mb-2 hover:text-primary">
              {" "}
              <Link href="/"> HOME</Link>
            </li>
            <li className="mb-2 hover:text-primary">
              {" "}
              <Link href="/about">
                {" "}
                ABOUT CELS<span className="font-light">&reg;</span>
              </Link>
            </li>

            <li className="mb-2 cursor-pointer hover:text-primary">
              <Link href="/testing"> TESTING</Link>
            </li>
            <li className="mb-2 cursor-pointer hover:text-primary">
              <Link href="/scoring"> SCORING</Link>
            </li>
            <li className="mb-2 cursor-pointer hover:text-primary">
              <Link href="/practice"> PRACTICE</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm font-light py-8 text-slate-50">
          {new Date().getFullYear()} | &copy; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
