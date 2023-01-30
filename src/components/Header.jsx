import { useState } from "react";

import Logo from "../images/logo.svg";
import Intro from "../images/illustration-intro.svg";
import Hamburger from "../images/icon-hamburger.svg";
import IconClose from "../images/icon-close.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div
        className={`pt-10 lg:pt-16 bg-[url('images/bg-tablet-pattern.svg')] bg-no-repeat bg-left-top bg-pattern ${
          isOpen ? "opacity-80" : ""
        }`}
      >
        <div className="w-11/12 container mx-auto flex justify-between items-center relative">
          <img src={Logo} alt="Manage logo" id="home" />
          <button
            className="block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={Hamburger}
              alt="hamburger icon"
              className={`${!isOpen ? "block" : "hidden"}`}
            />
            <img
              src={IconClose}
              alt="close icon"
              className={`${isOpen ? "block" : "hidden"}`}
            />
          </button>
          <nav className="hidden lg:block">
            <ul className="flex justify-between items-center text-dark-blue">
              <li className="ml-10">
                <a href="#home">Pricing</a>
              </li>
              <li className="ml-10">
                <a href="#home">Product</a>
              </li>
              <li className="ml-10">
                <a href="#home">About Us</a>
              </li>
              <li className="ml-10">
                <a href="#home">Careers</a>
              </li>
              <li className="ml-10">
                <a href="#home">Community</a>
              </li>
            </ul>
          </nav>
          <button className="hidden lg:block py-4 px-8 text-white font-medium bg-b-red rounded-full shadow-bottom">
            Get Started
          </button>
          <nav
            aria-label="mobile navigation"
            className={`${
              isOpen ? "block" : "hidden"
            } fixed top-0 inset-x-0 mx-auto w-11/12 mt-24 text-center bg-white p-10 rounded-md text-dark-blue text-opacity-100`}
          >
            <ul>
              <li className="font-bold">
                <a href="#home">Pricing</a>
              </li>
              <li className="font-bold mt-5">
                <a href="#home">Product</a>
              </li>
              <li className="font-bold mt-5">
                <a href="#home">About Us</a>
              </li>
              <li className="font-bold mt-5">
                <a href="#home">Careers</a>
              </li>
              <li className="font-bold mt-5">
                <a href="#home">Community</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="my-7 lg:mt-20 bg-[url('images/bg-tablet-pattern.svg')] bg-no-repeat bg-contain bg-pattern-2 md:bg-none pb-[7em] md:pb-4">
          <div className="lg:w-11/12 lg:mx-auto lg:container lg:flex justify-between">
            <div className="mt-8 lg:mt-0 pr-2 lg:pr-0 lg:order-2">
              <img src={Intro} alt="Intro display" className="mx-auto" />
            </div>
            <div className="text-center px-5 lg:px-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-5 md:mt-16 text-4xl lg:text-5xl font-bold text-dark-blue leading-[1.3em] lg:leading-[1.3em] lg:w-2/3">
                Bring everyone together to build better products.
              </h1>
              <p className="my-5 text-lg text-dark-grayish-blue lg:w-3/5">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button className="py-4 px-8 text-white font-medium bg-b-red rounded-full shadow-bottom">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
