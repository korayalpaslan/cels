import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import NotificationContext from "../../store/context";
import { useRouter } from "next/router";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const ctx = useContext(NotificationContext);
  const router = useRouter();
  const [showArrow, setshowArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowArrow(true);
      } else {
        setshowArrow(false);
      }
    });
  }, [showArrow]);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenuHandler = () => {
    ctx.toggleMenuHandler();
  };

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
    <>
      <nav className="max-w-[90vw] mx-auto overflow-hidden flex justify-between items-center px-2">
        <Link href="/">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="h-[80px] lg:h-[90px]"
          />
        </Link>
        <div
          className={
            !ctx.toggleMenu
              ? "hamburger lg:hidden block mt-2 py-8 pr-2"
              : "hamburger toggle lg:hidden block mt-2 py-8 pr-2"
          }
          onClick={toggleMenuHandler}
        >
          <span className="bg-gray-600"></span>
          <span className="bg-gray-600"></span>
          <span className="bg-gray-600"></span>
        </div>

        <ul className="font-sans hidden lg:flex justify-center items-center nav_list py-8">
          <li className="ml-6 cursor-pointer py-2">
            <Link href="/"> HOME</Link>
          </li>
          <li className="ml-6 cursor-pointer py-2">
            {" "}
            <Link href="/about">
              {" "}
              ABOUT CELS<span className="font-light">&reg;</span>
            </Link>
          </li>
          <li className="ml-6 cursor-pointer py-2">
            <Link href="/testing">TESTING</Link>
          </li>
          <li className="ml-6 cursor-pointer py-2">
            <Link href="/scoring">SCORING</Link>
          </li>
          <li className="ml-6 cursor-pointer py-2">
            <Link href="/practice">PRACTICE</Link>
          </li>
          <li
            className="ml-6 cursor-pointer py-2"
            onClick={() => handleClickScroll("contact")}
          >
            CONTACT
          </li>
        </ul>
      </nav>
      {showArrow && (
        <MdKeyboardArrowUp
          className="fixed z-30 w-8 h-8 bg-midSecondary bottom-5 right-5 cursor-pointer text-slate-50"
          onClick={scrollToTopHandler}
        ></MdKeyboardArrowUp>
      )}
    </>
  );
};

export default Navbar;
