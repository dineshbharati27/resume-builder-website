import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom'; 
import { assets } from '../assets/assets'; 

const NavBar = () => {
    // State to manage the visibility of the mobile menu
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-center justify-between py-5 font-medium border-b border-black">
            {/* Logo linking to the home page */}
            <Link to="/" >
                <img src={assets.logo} className="w-36" alt="" />
            </Link>

            {/* Main Navigation for large screens */}
            <ul className="hidden sm:flex gap-10 text-sm text-gray-700">
                <NavLink to="/" className="">
                    <p>Resume Templates</p>
                </NavLink>

                <NavLink to="/myresume" className="">
                    <p>My Resume</p>
                </NavLink>

                <NavLink to="/about" className="">
                    <p>About Us</p>
                </NavLink>
            </ul>

            {/* Mobile menu button, only visible on small screens */}
            <img 
                onClick={() => setVisible(true)} // Show the mobile menu on click
                src={assets.menu_icon} 
                className="w-5 cursor-pointer sm:hidden" 
                alt="menu"
            />

            {/* Sidebar for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${visible ? 'w-1/2' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    {/* Back button to close the mobile menu */}
                    <div 
                        onClick={() => setVisible(false)} // Hide the mobile menu on click
                        className="flex items-center gap-4 p-3 cursor-pointer"
                    >
                        <p>Back</p>
                    </div>

                    {/* Navigation links for the mobile menu */}
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">Resume Templates</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/myresume">My Resume</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">About Us</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
