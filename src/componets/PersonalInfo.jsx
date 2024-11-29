import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPersonalInfo, updateElement } from '../redux/redux';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the personal information and image URL from Redux store
  const personalDetails = useSelector((state) => state.personalInfo);
  const imageUrl = useSelector((state) => state.imageUrl);

  // Local state for validation messages
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emptyFieldsError, setEmptyFieldsError] = useState('');

  // Navigate to the next page if inputs are valid
  const navigation = () => {
    if (validateInputs()) {
      navigate('/details/workexperience');
    }
  };

  // Handle the file input change (image upload)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      // Dispatch the image URL to the Redux store
      dispatch(updateElement({ key: 'imageUrl', value: objectUrl }));
      // Clean up the object URL after the component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return regex.test(email);
  };

  // Validate mobile number format (e.g., Indian mobile number)
  const validateMobile = (mobile) => {
    const regex = /[0-9]{10}$/; // Matches +91 followed by 10 digits
    return regex.test(mobile);
  };

  // Validate inputs before navigating
  const validateInputs = () => {
    let isValid = true;
    setEmptyFieldsError(''); // Reset the empty fields error message

    // Check for empty fields
    for (const key in personalDetails) {
      if (personalDetails[key] === '') {
        setEmptyFieldsError('All fields must be filled out.');
        isValid = false;
        break; // Stop checking after the first empty field is found
      }
    }

    // Email validation
    if (!validateEmail(personalDetails.email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Mobile validation
    if (!validateMobile(personalDetails.mobile)) {
      setMobileError('Mobile number must be in XXXXXXXXXX format');
      isValid = false;
    } else {
      setMobileError('');
    }

    return isValid;
  };

  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          {/* Display the uploaded image or a placeholder if no image is available */}
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={imageUrl || 'https://via.placeholder.com/150'}
            alt="Profile"
          />
        </div>
        {/* File input to change the profile photo */}
        <label className="text-blue-500 text-sm mt-2">
          Change Profile photo
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {/* Form fields for personal information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First name</label>
          <input
            type="text"
            value={personalDetails.firstName}
            onChange={(e) =>
              dispatch(setPersonalInfo({ key: 'firstName', value: e.target.value }))
            }
            placeholder="Arjun"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name</label>
          <input
            type="text"
            value={personalDetails.lastName}
            onChange={(e) =>
              dispatch(setPersonalInfo({ key: 'lastName', value: e.target.value }))
            }
            placeholder="Mani"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={personalDetails.email}
            onChange={(e) => {
              dispatch(setPersonalInfo({ key: 'email', value: e.target.value }));
              // Validate email on change
              if (!validateEmail(e.target.value)) {
                setEmailError('Invalid email format');
              } else {
                setEmailError('');
              }
            }}
            placeholder="arjun.mani@gmail.com"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
          />
          {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile</label>
          <input
            type="tel"
            value={personalDetails.mobile}
            onChange={(e) => {
              dispatch(setPersonalInfo({ key: 'mobile', value: e.target.value }));
              // Validate mobile on change
              if (!validateMobile(e.target.value)) {
                setMobileError('Mobile number must be in XXXXXXXXXX format');
              } else {
                setMobileError('');
              }
            }}
            placeholder="8189966699"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
          />
          {mobileError && <span className="text-red-500 text-sm">{mobileError}</span>}
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            value={personalDetails.address}
            onChange={(e) =>
              dispatch(setPersonalInfo({ key: 'address', value: e.target.value }))
            }
            placeholder="10, Selvapuram, 3rd street, Mannarai post"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            value={personalDetails.city}
            onChange={(e) =>
              dispatch(setPersonalInfo({ key: 'city', value: e.target.value }))
            }
            placeholder="Tiruppur"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">State</label>
          <input
            type="text"
            value={personalDetails.state}
            onChange={(e) =>
              dispatch(setPersonalInfo({ key: 'state', value: e.target.value }))
            }
            placeholder="Tamil Nadu"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Postal code</label>
          <input
            type="text"
            value={personalDetails.postalCode}
            onChange={(e) =>
              dispatch(setPersonalInfo({ key: 'postalCode', value: e.target.value }))
            }
            placeholder="641607"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Objective</label>
          <textarea
            value={personalDetails.objective}
            onChange={(e) =>
              dispatch(setPersonalInfo({ key: 'objective', value: e.target.value }))
            }
            placeholder="Enter your objective"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded h-28"
          ></textarea>
        </div>
        {/* Display empty fields error message */}
        {emptyFieldsError && <span className="text-red-500 text-sm sm:col-span-2">{emptyFieldsError}</span>}
        <div className="sm:col-span-2 flex justify-between mt-4">
          <button
            type="button"
            className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded focus:ring focus:ring-sky-500"
          >
            Back
          </button>
          {/* Button to proceed to the next section */}
          <button
            onClick={navigation}
            className="bg-blue-500 text-white px-6 py-2 rounded focus:ring focus:ring-sky-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
