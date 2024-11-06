import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf'; // Importing jsPDF library to generate PDFs
import html2canvas from 'html2canvas'; // Importing html2canvas to convert HTML to canvas
import { useSelector } from 'react-redux'; // Importing Redux's useSelector to access the selected template from the store
import TemplateOne from '../Templates/TemplateOne';
import TemplateTwo from '../Templates/TemplateTwo';
import TemplateThree from '../Templates/TemplateThree';
import TemplateFour from "../Templates/TemplateFour";
import { Link } from 'react-router-dom';

const MyResume = () => {
  // Retrieve the selected template from the Redux store
  const selectedTemplate = useSelector(state => state.selectTemplate);

  const pdfRef = useRef(); // Ref to the section to be exported as PDF
  const [name, setName] = useState("resume"); // State to manage the name of the PDF file
  const [notification, setNotification] = useState(""); // State for notification message

  // Function to generate the PDF from the resume template
  const generatePDF = () => {
    const input = pdfRef.current; // Get the current element to be converted into PDF
    html2canvas(input, { scale: 2, scrollY: -window.scrollY }).then(canvas => {
      const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data
      const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new jsPDF instance with A4 paper size
      const imgWidth = 210; // Set the image width to fit A4 paper width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio for height

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); // Add the image to the PDF
      pdf.save(name); // Save the PDF with the chosen name

      // Set the notification message
      setNotification("Your resume has been successfully saved!");

      // Clear the notification after a few seconds
      setTimeout(() => {
        setNotification("");
      }, 3000);
    });
  };

  return (
    <div className="p-6">
      {/* Notification message for resume saving */}
      {notification && (
        <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
          {notification}
        </div>
      )}

      {/* Section for the PDF name input and navigation buttons */}
      <div className='flex justify-center'>
        <div className='w-full sm:w-[50%]'>
          {/* Input field for entering the name of the PDF file */}
          <div className='flex justify-center'>
            <input 
              autoFocus
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)} // Update the name state when input changes
              placeholder='Save as PDF'
              className="border rounded-md line-height[25px] outline-none p-2 mb-4 w-full"
            />
          </div>

          {/* Navigation buttons: Back and Save as PDF */}
          <div className='flex flex-row justify-between'>
            {/* Link to go back to the Skills page */}
            <Link
              to="/details/skills"
              className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded focus:ring focus:ring-sky-500"
            >
              Back
            </Link>

            {/* Button to generate and save the resume as PDF */}
            <button 
              onClick={generatePDF} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Save as pdf
            </button>
          </div>
        </div>
      </div>

      {/* Section to display the selected resume template */}
      <div className='overflow-x-auto w-full p-6'>
        <div ref={pdfRef} className="min-w-[1000px] bg-white rounded-lg shadow-lg">
          {/* Render the template based on the selectedTemplate value from Redux */}
          {selectedTemplate === 0 && <TemplateOne />}
          {selectedTemplate === 1 && <TemplateTwo />}
          {selectedTemplate === 2 && <TemplateThree />}
          {selectedTemplate === 3 && <TemplateFour />}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
