import React from 'react';
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-lg text-gray-800 mb-6">
        Welcome to <strong>CV-GENIE</strong>, your go-to platform for creating professional resumes with ease. 
        We understand that building a standout resume can be overwhelming, which is why we’ve designed a tool that 
        streamlines the process for you.
      </p>


      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.illustration} className='w-full md:max-w-[400px] h-auto' alt="about" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <div>
            <h3 className="text-2xl font-semibold mb-2">What We Offer</h3>
            <ul className="text-md list-disc list-inside text-gray-800">
              <li><strong>Explore a wide range of expertly crafted resume templates</strong> – Choose a design that aligns with your career and showcases your personality.</li>
              <li><strong>Effortlessly customize your resume</strong> – Add key details such as personal information, work experience, education, skills, and more with ease.</li>
              <li><strong>Download your professional resume instantly</strong> – Complete your resume and download it in a polished format with a single click.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-md text-gray-800 mb-2">
            We aim to empower you to craft a resume that highlights your unique skills and achievements, paving the way to your dream job. 
            Whether you're an experienced professional or embarking on your career journey, Resume Builder streamlines the process with elegant, well-organized templates designed to leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      
      <div className='flex items-center my-8'>
        <h3 className="text-2xl font-semibold mb-4 mx-auto">Why Choose Us?</h3>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border flex-1 px-5 md:px-10 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Simple and intuitive interface:</b>
          <p className='text-gray-600'>Effortlessly create resumes with our user-friendly design, no tech skills required. Just follow the steps and you're good to go!</p>
        </div>
        <div className='border flex-1 px-5 md:px-10 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Professionally designed templates:</b>
          <p className='text-gray-600'>Stand out with sleek, expert-designed templates tailored to make your resume shine.</p>
        </div>
        <div className='border flex-1 px-5 md:px-10 py-8 sm:py-10 flex flex-col gap-5'>
          <b>Secure and private:</b>
          <p className='text-gray-600'>Your data stays safe with us—fully encrypted, private, and only accessible to you.</p>
        </div>
      </div>


      <div className="flex justify-center mt-8">
        <Link to='/'>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
          Start Building Your Resume
        </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
