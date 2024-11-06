import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEducation } from '../redux/redux';

const Education = () => {
  const navigate = useNavigate(); // Used for page navigation
  const dispatch = useDispatch(); // Dispatch actions to update the Redux store
  const education = useSelector((state) => state.education); // Retrieve education data from the Redux store

  const [emptyFieldsError, setEmptyFieldsError] = useState(''); // Local state for empty fields error
  const currentYear = new Date().getFullYear(); // Get the current year

  // Function to validate inputs
  const validateInputs = () => {
    setEmptyFieldsError(''); // Reset error message
    let isValid = true;

    // Check for empty fields
    for(const key in education){
      if (education[key] === '') {
        setEmptyFieldsError('All fields must be filled out.');
        isValid = false;
        break;
      }
    }

    return isValid;
  };

  // Function to navigate to the next page (Skills details)
  const navigation = () => {
    if (validateInputs()) {
      navigate('/details/skills');
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold mb-8 mx-auto">Education</h2>
      </div>

      {/* Education form */}
      <div className='space-y-6'>
        {/* Dropdown to select the type of education (Post Graduation, Under Graduation, Diploma) */}
        <div className='flex flex-col'>
          <label className='text-sm font-medium mb-1'>Type</label>
          <select
            value={education.type}
            onChange={(e) => dispatch(setEducation({ key: 'type', value: e.target.value }))} // Update the type field in Redux
            className='w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-sky-500'>
            <option value="">Select type</option>
            <option>Post Graduation</option>
            <option>Under Graduation</option>
            <option>Diploma</option>
          </select>
        </div>

        {/* Input fields for University and Degree */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Input for University */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium mb-1'>University</label>
            <input 
              type='text' 
              value={education.university}
              onChange={(e) => dispatch(setEducation({ key: 'university', value: e.target.value }))} // Update the university field in Redux
              placeholder='Select University' 
              className='w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-sky-500' 
            />
          </div>

          {/* Input for Degree */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium mb-1'>Degree</label>
            <input 
              value={education.degree}
              onChange={(e) => dispatch(setEducation({ key: 'degree', value: e.target.value }))} // Update the degree field in Redux
              type='text' 
              placeholder='Select Degree' 
              className='w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-sky-500' 
            />
          </div>
        </div>

        {/* Dropdowns for Start Year and End Year */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Dropdown for Start Year */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium mb-1'>Start Year</label>
            <select 
              value={education.startYear}
              onChange={(e) => {
                const selectedYear = e.target.value;
                dispatch(setEducation({ key: 'startYear', value: selectedYear })); // Update the startYear field in Redux
                
                // Reset endYear if startYear changes and startYear is greater than the current endYear
                if (education.endYear && selectedYear > education.endYear) {
                  dispatch(setEducation({ key: 'endYear', value: '' })); // Clear endYear to ensure data consistency
                }
              }}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-sky-500'>
              <option value="">Select year</option>
              {/* Generate start year options dynamically from 1995 to the current year */}
              {Array.from({ length: currentYear - 1994 }, (_, i) => (
                <option key={i} value={1995 + i}>
                  {1995 + i}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown for End Year */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium mb-1'>End Year</label>
            <select 
              value={education.endYear}
              onChange={(e) => dispatch(setEducation({ key: 'endYear', value: e.target.value }))} // Update the endYear field in Redux
              className='w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-sky-500'
              disabled={!education.startYear} // Disable endYear selection until startYear is selected
            >
              <option value="">Select year</option>
              {/* Generate end year options dynamically based on the selected start year */}
              {education.startYear && Array.from({ length: currentYear - education.startYear + 1 }, (_, i) => (
                <option key={i} value={parseInt(education.startYear) + i}>
                  {parseInt(education.startYear) + i}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display empty fields error message */}
        {emptyFieldsError && <span className="text-red-500 text-sm">{emptyFieldsError}</span>}

        {/* Navigation buttons */}
        <div className='flex justify-between'>
          {/* Back button to go to the previous page (Work Experience) */}
          <Link to='/details/workexperience' className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded focus:ring focus:ring-sky-500">Back</Link>

          {/* Next button to go to the next page (Skills) */}
          <button onClick={navigation} className="bg-blue-500 text-white px-6 py-2 rounded focus:ring focus:ring-sky-500">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Education;
