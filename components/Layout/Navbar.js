import React, { useContext } from "react";
import Link from "next/link";
import NotificationContext from "../../store/context";

const Navbar = () => {
  const ctx = useContext(NotificationContext);

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
    <nav className="max-w-[90vw] mx-auto overflow-hidden flex justify-between items-center py-8 px-4">
      <Link href="/" className="font-bold text-2xl lg:text-3xl text-secondary invisible">
        logo
      </Link>
      <div
        className={
          !ctx.toggleMenu
            ? "hamburger lg:hidden block mt-2"
            : "hamburger toggle lg:hidden block mt-2"
        }
        onClick={toggleMenuHandler}
      >
        <span className="bg-gray-600"></span>
        <span className="bg-gray-600"></span>
        <span className="bg-gray-600"></span>
      </div>

      <ul className="font-sans hidden lg:flex justify-center items-center nav_list">
        <li className="ml-6 cursor-pointer py-2" onClick={() => handleClickScroll("about")}>
          ABOUT CELS
        </li>
        <li
          className="ml-6 cursor-pointer py-2"
          onClick={() => handleClickScroll("testing")}
        >
          TESTING
        </li>
        <li
          className="ml-6 cursor-pointer py-2"
          onClick={() => handleClickScroll("scoring")}
        >
          SCORING
        </li>
        <li
          className="ml-6 cursor-pointer py-2"
          onClick={() => handleClickScroll("practice")}
        >
          PRACTICE
        </li>
        <li
          className="ml-6 cursor-pointer py-2"
          onClick={() => handleClickScroll("contact")}
        >
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
