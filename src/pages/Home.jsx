import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { updateElement } from '../redux/redux'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();

  // Function to handle template selection and update the Redux state
  const handleTemplateSelect = (index) => {
    dispatch(updateElement({key: "selectTemplate", value: index}));
  }

  return (
    <div className=''>
      <h1 className='mt-10 font-bold text-2xl'>Templates</h1>
      <p>Select one template to get started...</p>

      {/* Grid layout to display all resume templates */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 my-10'>
        {assets.resume.map((resume, index) => (
          <div key={index} className="">
            <div className="relative">
              <Link to='/Details'>
                <img src={resume} alt={`Resume Template ${index + 1}`} className="block " />
              </Link>

              {/* Overlay for template selection, visible on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-0 sm:opacity-0 transition-all duration-500 ease-in-out sm:pt-[70%] sm:hover:opacity-100 sm:hover:pt-0">
                <Link to='/Details'>
                  <button onClick={() => handleTemplateSelect(index)} className="bg-sky-500 text-white px-4 py-2 rounded">Use Template</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
