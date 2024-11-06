import React from 'react';

const Footer = () => {
  return (
    // Main container for the footer, margin-top and padding for spacing, and a light gray background color
    <div className='mt-20 pt-5 bg-gray-50'>
      
      {/* Grid layout for the footer content on larger screens, falls back to flexbox on smaller screens */}
      <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        
        {/* Section for "Resources" links */}
        <div>
          <h2 className='text-xl font-medium mb-5'>Resources</h2>
          <ul className='flex flex-col gap-1 text-gray-800'>
            <li>Professional Resume</li> {/* Link placeholder for Professional Resume resource */}
            <li>Student Resume</li> {/* Link placeholder for Student Resume resource */}
            <li>Entry Level Resume</li> {/* Link placeholder for Entry Level Resume resource */}
            <li>Resume Guide</li> {/* Link placeholder for Resume Guide */}
          </ul>
        </div>

        {/* Section for "Get in Touch" contact information */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-800'>
            <li>+1-212-456-7890</li> {/* Placeholder for phone contact */}
            <li>contact@resume.com</li> {/* Placeholder for email contact */}
          </ul>
        </div>

      </div>

      {/* Divider and copyright section at the bottom */}
      <div>
        <hr className='mt-3' /> {/* Horizontal line to separate the content from the copyright text */}
        <p className='py-2 text-sm text-center'>
          Copyrights 2024@ resume.com - All Rights Reserved.
        </p> {/* Copyright text with padding and centered alignment */}
      </div>

    </div>
  );
};

export default Footer;
