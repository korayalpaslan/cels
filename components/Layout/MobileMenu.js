import React, { useContext } from "react";
import Link from "next/link";
import NotificationContext from "../../store/context";
import { LiaFacebook, LiaLinkedin, LiaTwitter } from "react-icons/lia";

const MobileMenu = () => {
  const ctx = useContext(NotificationContext);

  const toggleMenuHandler = () => {
    ctx.toggleMenuHandler();
  };

  const handleClickScroll = (id) => {
    // // TIKLANACAK ELEMENTE VERİLECEK ONCLICK
    const section = document.getElementById(id); // GİDİLECEK ID
    const coords = section.getBoundingClientRect();
    ctx.toggleMenuHandler();
    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        ctx.toggleMenu
          ? "h-[100vh] bg-primary fixed z-50 top-0 left-0 right-0 bottom-0 opacity-100 transition ease-in-out duration-300"
          : "h-[100vh] bg-primary fixed -z-50 top-0 left-0 right-0 bottom-0 opacity-0 transition ease-in-out duration-300"
      }
    >
      <nav className="max-w-[90vw] mx-auto h-auto">
        <div className=" flex items-center justify-between md:container md:mx-auto px-4 lg:px-16 py-8">
          <Link href="/" className="ml-2">
            <img src="./images/logo2.png" alt="Logo" className="h-[45px]" />
          </Link>
          <div>
            <div
              className={
                !ctx.toggleMenu
                  ? "hamburger lg:hidden block mt-3"
                  : "hamburger toggle lg:hidden block mt-3"
              }
              onClick={toggleMenuHandler}
            >
              <span className="bg-white"></span>
              <span className="bg-white"></span>
              <span className="bg-white"></span>
            </div>
          </div>
        </div>
      </nav>
      {ctx.toggleMenu && (
        <ul className="flex flex-col items-center mt-10 text-slate-50 list-none text-2xl font-light">
          <li
            className="mb-4 cursor-pointer"
            onClick={() => handleClickScroll("about")}
          >
            About CELC
          </li>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => handleClickScroll("testing")}
          >
            Testing
          </li>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => handleClickScroll("scoring")}
          >
            Scoring
          </li>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => handleClickScroll("practice")}
          >
            Practice
          </li>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => handleClickScroll("contact")}
          >
            Contact
          </li>
        </ul>
      )}
      <div className="flex flex-col items-center lg:flex-none mt-auto">
        <h1 className="text-slate-50 font-light text-xl mt-10">FOLLOW US ON</h1>
        <ul className="text-slate-50 text-3xl flex justify-start space-x-2">
          <li>
            <LiaLinkedin />
          </li>
          <li>
            <LiaTwitter />
          </li>
          <li>
            <LiaFacebook />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
