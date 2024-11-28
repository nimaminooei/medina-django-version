import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Close the menu function

  return (
    <nav className="p-[.3em]">
      {/* <div className="flex items-center justify-between">
        <div> MEDINA</div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <img src="images/iconmenu.png" className="h-[.9em]" />
            ) : (
              <img src="images/iconmenu.png" className="h-[.9em]" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a href="#" className="text-black text-lg">
            خانه
          </a>
          <a href="#" className="text-black text-lg">
            درباره ما
          </a>
          <a href="#" className="text-black text-lg">
            تماس با ما
          </a>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-500 transform" // Adjusted duration for enter
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-500 transform" // Adjusted duration for leave
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <div
          className="  fixed right-0 top-[.4em] flex flex-col items-center justify-center opacity-90 z-50 h-1/3 lg:hidden"
          onMouseLeave={closeMenu} // Close the menu when the mouse leaves
        >
          <a href="#" className="block px-4 py-2 text-black text-xl">
            خانه
          </a>
          <a href="#" className="block px-4 py-2  text-black text-xl">
            درباره ما
          </a>
          <a href="#" className="block px-4 py-2  text-black text-xl">
            تماس با ما
          </a>
        </div>
      </Transition> */}
    </nav>
  );
};

export default Navbar;
