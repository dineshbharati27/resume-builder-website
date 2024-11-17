import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addElement, setSkills, removeElement } from "../redux/redux"; // Importing necessary Redux actions
import { useDispatch, useSelector } from "react-redux";

const Skills = () => {
  const skills = useSelector((state) => state.skills); // Retrieve the list of skills from Redux store
  const dispatch = useDispatch(); // Dispatch actions to modify the Redux store
  const navigate = useNavigate();// Used for navigation between routes

  // Local state for empty fields error message
  const [emptyFieldsError, setEmptyFieldsError] = useState('');

  // Add a new skill input field
  const addSkill = () => {
    const element = { skills: "" }; // Template for an empty skill
    dispatch(addElement({ key: "skills", element: element })); // Add a new skill to the Redux store
  };

  // Remove a skill based on its index
  const removeSkill = (index) => {
    dispatch(removeElement({ index: index, key: "skills" })); // Remove the skill from Redux store at the given index
  };

  // Handle input change for the skill field
  const handleInputChange = (index, value) => {
    dispatch(setSkills({ index: index, key: "skills", value: value })); // Update the skill at the given index in the Redux store
  };

  // Function to navigate to the resume preview page
  const navigation = () => {
    if(validateInputs()){
      navigate("/myresume");
    }
  };

  const validateInputs = () => {
    let isValid = true;
    setEmptyFieldsError('');

    skills.forEach((skill,index) => {
      if(!skill.skills){
        setEmptyFieldsError("All fields must be filled out.");
        isValid = false;
      }
    });
    return isValid;
  };

  // Check if the last skill input is filled to enable the "Add new" button
  const isLastSkillFilled = skills.length > 0 && skills[skills.length - 1].skills.trim() !== "";

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold mb-8 mx-auto">Key Skills</h2>
      </div>

      {/* Input fields for skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center pr-3 border border-gray-300 rounded-md">
            {/* Skill input */}
            <input
              type="text"
              autoFocus={index === skills.length - 1} // Autofocus on the last input
              value={skill.skills}
              onChange={(e) => handleInputChange(index, e.target.value)} // Update the skill value in Redux
              placeholder="Enter skill"
              className="flex-grow p-2 rounded-md"
            />

            {/* Remove skill button, displayed for all skills except the first one */}
            {index > 0 && (
              <button
                className="text-red-500 text-lg ml-2"
                onClick={() => removeSkill(index)} // Remove the skill at the current index
                title="Remove skill"
              >
                &times;
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add new skill button */}
      <button 
        onClick={addSkill} 
        className={`text-blue-500 block ${isLastSkillFilled ? '' : 'opacity-50 cursor-not-allowed'}`} // Disable the button if the last input is empty
        disabled={!isLastSkillFilled} // Disable if the last skill input is empty
      >
        Add new
      </button>

      {/* Display empty fields error message */}
      {emptyFieldsError && <span className="text-red-500 text-sm mb-6">{emptyFieldsError}</span>}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        {/* Back button to go to the previous page (Education details) */}
        <Link
          to="/details/education"
          className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded focus:ring focus:ring-sky-500"
        >
          Back
        </Link>

        {/* Next button to navigate to the resume preview page */}
        <button onClick={navigation} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Preview
        </button>
      </div>
    </div>
  );
};

export default Skills;
