import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NotificationContext from "../../store/context";
import { LiaFacebook, LiaLinkedin, LiaTwitter } from "react-icons/lia";

const MobileMenu = () => {
  const ctx = useContext(NotificationContext);
  const router = useRouter();

  const toggleMenuHandler = () => {
    // router.push(`/${id}`);
    ctx.toggleMenuHandler();
  };

  return (
    <div
      className={
        ctx.toggleMenu
          ? "h-[100vh] bg-primary/50 fixed z-50 top-0 left-0 right-0 bottom-0 opacity-100 transition ease-in-out duration-300"
          : "h-[100vh] bg-primary/50 fixed -z-50 top-0 left-0 right-0 bottom-0 opacity-0 transition ease-in-out duration-300"
      }
    >
      <nav className="max-w-[90vw] mx-auto h-auto px-2">
        <div className=" flex items-center justify-between md:container md:mx-auto lg:px-16">
          <Link href="/" className="ml-2">
            <img src="./images/logo2.png" alt="Logo" className="h-[60px]" />
          </Link>
          <div>
            <div
              className={
                !ctx.toggleMenu
                  ? "hamburger lg:hidden block mt-3 py-8 pr-2"
                  : "hamburger toggle lg:hidden block mt-3 py-8 pr-2"
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
          <Link
            href="/"
            className="mb-4 cursor-pointer"
            onClick={toggleMenuHandler}
          >
            {" "}
            Home Page
          </Link>
          <Link
            href="/about"
            className="mb-4 cursor-pointer"
            onClick={toggleMenuHandler}
          >
            {" "}
            ABOUT CELS<span>&reg;</span>
          </Link>

          <Link
            href="/testing"
            className="mb-4 cursor-pointer"
            onClick={toggleMenuHandler}
          >
            Testing
          </Link>
          <Link
            href="/scoring"
            className="mb-4 cursor-pointer"
            onClick={toggleMenuHandler}
          >
            Scoring
          </Link>
          <Link
            href="/practice"
            className="mb-4 cursor-pointer"
            onClick={toggleMenuHandler}
          >
            Practice
          </Link>
        </ul>
      )}
      <div className="flex flex-col items-center lg:flex-none mt-auto">
        <h1 className="text-slate-50 font-light text-xl mt-8">FOLLOW US ON</h1>
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
        <div className="text-center lg:text-left text-slate-50 font-light text-sm mt-4">
          <p className="mb-2">+1 416 624 15 91</p>
          <p>contact@celstest.org</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
