import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function TemplateOne() {
  // Selecting only the necessary data from the state
  const personalInfo = useSelector((state) => state.personalInfo);
  const workExperience = useSelector((state) => state.workExperience);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.skills);
  const image = useSelector(state => state.imageUrl);


  return (
    <div className="resume-template-static border-4 border-teal-500 bg-beige w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div>
        <div className="header flex justify-between items-center h-52">
          <div className="profile-pic flex-none text-center">
            <img
              className="rounded-full max-h-44 min-h-30 w-24 bg-gray-400"
              src={image}
              alt="profile-pic"
            />
          </div>
          <div className="name-title flex-1 text-center">
            <div className="text-teal-500 text-6xl font-serif">
              {personalInfo.firstName + " " + personalInfo.lastName}
            </div>
            <h5 className="text-xl mt-2">
              {workExperience[workExperience.length - 1]?.jobTitle}
            </h5>
          </div>
          <div className="contact-info flex-none text-left text-lg">
            <div>{personalInfo.email}</div>
            <div>{personalInfo.mobile}</div>
            <div>
              {personalInfo.address + ", " + personalInfo.city + ", " + personalInfo.state + ", " + personalInfo.postalCode}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-4 border-teal-500 my-4" />

      {/* Objective */}
      <div className="objective my-5 text-justify text-base">
        {personalInfo.objective}
      </div>
      <hr className="border-t-4 border-teal-500 my-4" />

      {/* Professional Experience */}
      <div className="section mb-5 flex">
        <h4 className="text-teal-500 font-serif w-48">Professional Experience</h4>
        <div className="text-base ml-5">
          {workExperience.map((item) => (
            <div key={shortid.generate()} className="experience-item mb-3">
              <b>{item.jobTitle}</b>
              <p>Worked at {item.organizationName} from {item.startYear} to {item.endYear}.</p>
              <p>{item.jobDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-t-4 border-teal-500 my-4" />

      {/* Education */}
      <div className="section mb-5 flex">
        <h4 className="text-teal-500 font-serif w-48">Education</h4>
        <div className="text-base ml-5">
          <div key={shortid.generate()} className="education-item mb-3">
            <b>{education.degree}</b>
            <p>Completed {education.type} in {education.degree} from {education.university}.</p>
            <p>Duration: {education.startYear} - {education.endYear}</p>
          </div>
        </div>
      </div>
      <hr className="border-t-4 border-teal-500 my-4" />

      {/* Skills */}
      <div className="section mb-5 flex">
        <h4 className="text-teal-500 font-serif w-48">Key Skills</h4>
        <ul className="text-base list-none ml-5">
          {skills.map((skill) => (
            <li key={shortid.generate()} className="mb-2">{skill.skills}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TemplateOne;
