import React from 'react';
import logo from '../Images/logo.png'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-gray-200 shadow-md dark:bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center ">
          <img src={logo} className="h-14" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
       
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:dark:bg-white">
            <li>
              <a href="#" className="block px-3 py-2 text-white bg-[#BF8425] rounded md:bg-transparent md:text-[#271300] md:p-0 dark:text-white md:dark:text-[#BF8425]" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-[#271300] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#BF8425] md:p-0 dark:text-[#271300] md:dark:hover:text-[#BF8425] dark:hover:text-white md:dark:hover:bg-transparent">Menu</a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-[#271300] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#BF8425] md:p-0 dark:text-[#271300] md:dark:hover:text-[#BF8425] dark:hover:text-white md:dark:hover:bg-transparent">Locations</a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-[#271300] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#BF8425] md:p-0 dark:text-[#271300] md:dark:hover:text-[#BF8425] dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-[#271300] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#BF8425] md:p-0 dark:text-[#271300] md:dark:hover:text-[#BF8425] dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
