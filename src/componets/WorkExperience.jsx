import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addElement, setWorkExperience, removeElement } from '../redux/redux';

const WorkExperience = () => {
  // Get the current work experience data from the Redux store
  const experience = useSelector((state) => state.workExperience);
  const navigate = useNavigate(); // Used for navigation between pages
  const dispatch = useDispatch(); // Dispatch actions to update the Redux store

  // Local state for empty fields error message
  const [emptyFieldsError, setEmptyFieldsError] = useState('');

  // Add a new empty work experience entry
  const addNewExperience = () => {
    let element = {
      jobTitle: '',
      organizationName: '',
      startYear: '',
      endYear: ''
    };
    dispatch(addElement({ key: 'workExperience', element: element }));
  };

  // Remove a specific work experience entry by index
  const removeExperience = (index) => {
    dispatch(removeElement({ index: index, key: 'workExperience' }));
  };

  // Handle input change for work experience fields
  const handleInputChange = (index, field, value) => {
    dispatch(setWorkExperience({ index: index, key: field, value: value }));
  };

  // Navigate to the next page (Education details)
  const navigation = () => {
    if (validateInputs()) {
      navigate('/details/education');
    }
  };

  // Validate inputs before navigating
  const validateInputs = () => {
    let isValid = true;
    setEmptyFieldsError(''); // Reset the empty fields error message

    // Check for empty fields
    experience.forEach((exp, index) => {
      if (!exp.jobTitle || !exp.organizationName || !exp.startYear || !exp.endYear) {
        setEmptyFieldsError('All fields must be filled out for each experience.');
        isValid = false;
      }
    });

    return isValid;
  };

  // Check if the last experience input is filled to enable the "Add new" button
  const isLastExperienceFilled = experience.length > 0 && 
    experience[experience.length - 1].jobTitle.trim() !== '' &&
    experience[experience.length - 1].organizationName.trim() !== '' &&
    experience[experience.length - 1].startYear.trim() !== '' &&
    experience[experience.length - 1].endYear.trim() !== '';

  // Get the current year for generating the year options
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold mb-8 mx-auto">Work Experience</h2>
      </div>

      {/* Loop through each work experience entry and display input fields */}
      {experience.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
            {/* Show remove button only for entries other than the first one */}
            {index > 0 && (
              <button
                className="text-red-500 text-sm"
                onClick={() => removeExperience(index)}
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Input for Job Title */}
            <div>
              <label className="block text-sm font-medium">Job Title</label>
              <input
                type="text"
                placeholder="Enter Job Title"
                value={exp.jobTitle}
                onChange={(e) => handleInputChange(index, 'jobTitle', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Input for Organization Name */}
            <div>
              <label className="block text-sm font-medium">Organization Name</label>
              <input
                type="text"
                placeholder="Enter Organization Name"
                value={exp.organizationName}
                onChange={(e) => handleInputChange(index, 'organizationName', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            {/* Dropdown for Start Year */}
            <div>
              <label className="block text-sm font-medium">Start Year</label>
              <select
                value={exp.startYear}
                onChange={(e) => {
                  const selectedYear = e.target.value;
                  handleInputChange(index, 'startYear', selectedYear);
                  // Reset the endYear if startYear changes to ensure data consistency
                  if (exp.endYear && selectedYear > exp.endYear) {
                    handleInputChange(index, 'endYear', '');
                  }
                }}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
              >
                <option>Select year</option>
                {/* Generate year options from 1995 to current year */}
                {Array.from({ length: currentYear - 1994 }, (_, i) => (
                  <option key={i} value={1995 + i}>
                    {1995 + i}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown for End Year */}
            <div>
              <label className="block text-sm font-medium">End Year</label>
              <select
                value={exp.endYear}
                onChange={(e) => handleInputChange(index, 'endYear', e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
                disabled={!exp.startYear} // Disable endYear selection until startYear is selected
              >
                <option>Select year</option>
                {/* Generate end year options based on the selected start year */}
                {exp.startYear && Array.from({ length: currentYear - exp.startYear + 1 }, (_, i) => (
                  <option key={i} value={parseInt(exp.startYear) + i}>
                    {parseInt(exp.startYear) + i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}

      {/* Button to add a new work experience entry */}
      <button 
        onClick={addNewExperience} 
        className={`text-blue-500 text-sm block ${isLastExperienceFilled ? '' : 'opacity-50 cursor-not-allowed'}`} 
        disabled={!isLastExperienceFilled} // Disable if the last experience input is not filled
      >
        Add new
      </button>

      {/* Display empty fields error message */}
      {emptyFieldsError && <span className="text-red-500 text-sm">{emptyFieldsError}</span>}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <Link to='/details' className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded focus:ring focus:ring-sky-500">Back</Link>
        <button onClick={navigation} className="bg-blue-500 text-white px-6 py-2 rounded focus:ring focus:ring-sky-500">Next</button>
      </div>
    </div>
  );
};

export default WorkExperience;
