import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import PersonalInfo from '../componets/PersonalInfo';
import WorkExperience from '../componets/WorkExperience';
import Education from '../componets/Education';
import Skills from '../componets/Skills';

const Details = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10'>
      
      {/* Sidebar navigation for different sections */}
      <div className='min-w-60 pt-2 sm:pt-20'>
        <div className="gap-4 rounded px-10 py-3 mt-6">
          <div className='flex flex-col'>
            <Link to='/details' className='bg-black text-white border my-3 py-3 text-sm font-medium rounded hover:mt-1 hover:scale-110 text-center'>Personal info</Link>
            <Link to='workexperience' className='bg-black text-white border my-3 py-3 text-sm font-medium rounded hover:mt-1 hover:scale-110 text-center'>Work Experience</Link>
            <Link to='education' className='bg-black text-white border my-3 py-3 text-sm font-medium rounded hover:mt-1 hover:scale-110 text-center'>Education</Link>
            <Link to='skills' className='bg-black text-white border my-3 py-3 text-sm font-medium rounded hover:mt-1 hover:scale-110 text-center'>My Skills</Link>
          </div>
        </div>
      </div>

      {/* Main content area where selected section is displayed */}
      <div className='w-full mx-auto pt-5 px-10'>
        <Routes>
          {/* Routes for each section */}
          <Route path='/' element={<PersonalInfo />} />
          <Route path='workexperience' element={<WorkExperience />} />
          <Route path='education' element={<Education />} />
          <Route path='skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  )
}

export default Details
