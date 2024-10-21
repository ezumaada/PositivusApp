import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import hamburger from '../../assets/images/burger-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Navbar for small screens */}
      <div className="flex justify-between items-center p-4 md:hidden">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8" />

        {/* Hamburger icon */}
        <button onClick={toggleSidebar} className="text-black">
          <img src={hamburger} alt="Hamburger Icon" className="h-8" />
        </button>
      </div>

      {/* Full Navbar for medium and large screens */}
      <div className="hidden md:flex justify-between items-center p-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8" />

        {/* Navbar Links */}
        <ul className='flex gap-8 items-center justify-around'>
          <li>
            <a href="#about-us" className='hover:text-lg transition duration-300'>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className='hover:text-lg transition duration-300'>
              Services
            </a>
          </li>
          <li>
            <a href="#use-cases" className='hover:text-lg transition duration-300'>
              Use Cases
            </a>
          </li>
          <li>
            <a href="#pricing" className='hover:text-lg transition duration-300'>
              Pricing
            </a>
          </li>
          <li>
            <a href="#help" className='hover:text-lg transition duration-300'>
              Help
            </a>
          </li>
          <li className='border-2 rounded-md border-solid border-black px-3 py-2'>
            <a href="#quote-request" className='hover:text-lg transition duration-300'>
              Request a Quote
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar for small screens (opens on click) */}
      {isOpen && (
        <>
          {/* Overlay for blur effect */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-[30%]`}
          >
            <button
              className="p-2 text-black"
              onClick={toggleSidebar}
            >
              Close
            </button>
            <ul className="p-4">
              <li className="my-4">
                <a href="#about-us" className='hover:text-lg transition duration-300'>
                  About Us
                </a>
              </li>
              <li className="my-4">
                <a href="#services" className='hover:text-lg transition duration-300'>
                  Services
                </a>
              </li>
              <li className="my-4">
                <a href="#use-cases" className='hover:text-lg transition duration-300'>
                  Use Cases
                </a>
              </li>
              <li className="my-4">
                <a href="#pricing" className='hover:text-lg transition duration-300'>
                  Pricing
                </a>
              </li>
              <li className="my-4">
                <a href="#help" className='hover:text-lg transition duration-300'>
                  Help
                </a>
              </li>
              <li className="my-4">
                <a href="#quote-request" className='hover:text-lg transition duration-300'>
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
