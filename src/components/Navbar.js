import React, { useState } from "react";
import logo from "../assets/logo6.png";
import { FaUserCircle } from "react-icons/fa";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-indigo-800 to-purple-900 ......">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className=" h-16 lg:h-20 flex">
                <img src={logo} className=" object-cover -my-0" alt="" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="flex justify-between font-serif">
                    <div
                      href="#"
                      className="text-gray-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                    >
                      Home
                    </div>
                    <div
                      href="#"
                      className="text-gray-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                    >
                      Startup
                    </div>
                    <div
                      href="#"
                      className="text-gray-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                    >
                      Investor
                    </div>
                    <div
                      href="#"
                      className="text-gray-300 hover:bg-pink-900 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                    >
                      About Us
                    </div>
                  </div>
                </div>
              </div>

              <div className=" ml-10 lg:ml-56 flex items-right justify-right pr-3 font-serif gap-8 text-gray-600 ">
                <div className="flex items-center border px-3 py-2 rounded-md gap-2  lg:text-xl font-medium text-white font-bold shadow shadow-gray-300  duration-100 ease-out transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-900 duration-300 ...">
                  <FaUserCircle className="" />
                  Login
                </div>

                <div className="flex items-center border px-3 py-2 rounded-md gap-2  lg:text-xl font-medium text-white font-bold shadow shadow-gray-100  duration-100 ease-out transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-900 duration-300 ...">
                  Add Listing
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <div
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </div>
                <div
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Startup
                </div>
                <div
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Investor
                </div>
                <div
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </div>
              </div>
            </div>

          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
