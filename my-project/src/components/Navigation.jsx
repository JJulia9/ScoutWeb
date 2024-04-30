import React, { useState} from 'react';
import { Link } from "react-router-dom";

    const Navigation = () => {
        const [isNavOpen, setIsNavOpen] = useState(false);
        
        const toggleNav = () => {
            setIsNavOpen(!isNavOpen); // Toggle navigation open/close
          }; 

        return (
            <nav className="w-full flex justify-between items-center py-8 px-10 bg-white">
       
           {/*logo  */}
            <Link to="/" className="text-3xl font-bold leading-none" >
                <img src='/logoScouts.svg' alt="logo" className="h-14" />
            </Link>
           

            {/* Mobile Menu */}
            <div className="lg:hidden fixed right-0 px-10">
                <button onClick={toggleNav} className="space-y-2">
                {/* Hamburger Icon */}
                <span className="block h-0.5 w-8 bg-secondary"></span>
                <span className="block h-0.5 w-8 bg-secondary"></span>
                <span className="block h-0.5 w-8 bg-secondary"></span>
                </button>
            </div>

            <div className={`fixed inset-0 z-10 ${isNavOpen ? 'flex' : 'hidden'} flex-col bg-white lg:hidden`}>
                {/* Close Icon */}
                <div className="absolute top-0 right-0 p-4" onClick={toggleNav}>
                <svg
                    className="h-8 w-8 text-secondary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                </div>


        {/* Mobile Navigation Links */}
        <ul className="flex flex-col justify-center items-center h-full">
          <li className="mb-1">
                            <Link to="/" className=" font-paragraph block p-4 text-m font-semibold text-text hover:bg-green-50 hover:text-secondary rounded" onClick={toggleNav}>Home</Link>
                        </li>

                        <li className="mb-1">
                            <Link to="#" className="font-paragraph block p-4 text-m font-semibold text-text hover:bg-green-50 hover:text-secondary rounded" onClick={toggleNav}>About Us</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="font-paragraph block p-4 text-m font-semibold text-text hover:bg-green-50 hover:text-secondary rounded"onClick={toggleNav} >Badges</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="font-paragraph block p-4 text-m font-semibold text-text hover:bg-green-50 hover:text-secondary rounded" onClick={toggleNav}>Gallery</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#" className="font-paragraph block p-4 text-m font-semibold text-text hover:bg-green-50 hover:text-secondary rounded" onClick={toggleNav} >Games</Link>
                        </li>
        </ul>

        {/* Additional Mobile Menu Items */}
        <div className="flex flex-col items-center mb-12">
          <Link to='#'className="font-paragraph text-text block px-4 py-3 mb-3 leading-loose text-s text-center font-semibold leading-none hover:text-secondary rounded-xl" onClick={toggleNav}>Become a helper</Link>
          
          <Link to='#' className="font-paragraph block px-10 py-3 mb-2 leading-loose text-s text-center text-white font-semibold bg-accent hover:bg-red-400  rounded-xl" onClick={toggleNav} >Sign Up</Link>
        </div>
      </div>

         
       {/* Desktop Navigation */}
              <ul className="hidden lg:flex space-x-6 items-center pl-14">
             
               
              <li><Link to="#" className="font-paragraph text-l text-text hover:text-secondary" >Home</Link></li>
            <li className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>

            <li><Link to="#" className="font-paragraph text-l text-text hover:text-secondary" >About Us</Link></li>
            <li className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>

            <li><Link to="#" className="font-paragraph text-l text-text hover:text-secondary" >Badges</Link></li>
            <li className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>

            <li><Link to="#" className="font-paragraph text-l text-text hover:text-secondary" >Gallery</Link></li>
            <li className="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </li>

            <li><Link to="#" className="font-paragraph text-l text-text hover:text-secondary " >Games</Link></li>

            
        </ul>
            
            {/* Desktop Additional Menu Items */}
        <div>
            <Link to="#" className="font-paragraph hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 hover:text-secondary text-l text-text font-bold  rounded-xl transition duration-200" >Become a helper</Link>
            
            <Link to="#" className="font-paragraph hidden lg:inline-block py-2 px-6 bg-accent hover:bg-red-400 text-l text-white font-bold rounded-xl transition duration-200" >Sign up</Link>
        </div>
    
    </nav>

    )
}

export default Navigation

