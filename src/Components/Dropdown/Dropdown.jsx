// src/Dropdown.js
import  { useState, useEffect } from 'react';

const Dropdown = ({text,option1,option2,option3}) => {
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

useEffect(() => {
    const handleClickOutside = (event) => {
    if (!event.target.closest('#dropdownButton') && !event.target.closest('#dropdownMenu')) {
        setIsOpen(false);
    }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
    document.removeEventListener('click', handleClickOutside);
    };
}, []);

return (
    <div className=" relative inline-block text-left">
    <button
        id="dropdownButton"
        onClick={toggleDropdown}
        className="group inline-flex justify-center w-full rounded-md border border-gray-800 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
    >
        {text}
        <svg className={`-mr-1 ml-2 h-5 w-5 rotate-180  ${isOpen ? 'rotate-0' : ''}  transition-all ease-in duration-200`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    </button>

    <div
        id="dropdownMenu"
        className={` absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ${isOpen ? '' : 'hidden'}`}
    >
        <div className="" role="none">
        <a href="#" className=" text-gray-700 block px-4 py-2 text-sm">{option1}</a>
        <a href="#" className=" text-gray-700 block px-4 py-2 text-sm">{option2}</a>
        <a href="#" className=" text-gray-700 block px-4 py-2 text-sm">{option3}</a>
        
        </div>
    </div>
    </div>
);
};

export default Dropdown;
