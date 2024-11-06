import React from 'react';
import { useSelector } from 'react-redux';
const shortid = require('shortid');

function TemplateThree() {
    // Selecting only the necessary pieces of state
    const personalInfo = useSelector(state => state.personalInfo);
    const workExperience = useSelector(state => state.workExperience);
    const education = useSelector(state => state.education);
    const skills = useSelector(state => state.skills);
    const image = useSelector(state => state.imageUrl);


    return (
        <div className="border border-[#4b6982] bg-[#f7eebb] w-full max-w-4xl mx-auto p-6">
            <div className="flex m-0">
                {/* Left Column for Profile Information */}
                <div className="w-[30%] bg-[#583131] pt-20 flex flex-col items-center">
                    <div className="media mb-3">
                        <img
                            className="rounded-full max-h-[180px] min-h-[100px] w-[100px] bg-gray-500"
                            src={image} alt="profile-pic"
                        />
                    </div>
                    <div className="mt-3 font-bold text-center" style={{ fontFamily: "Serif" }}>
                        <div className="text-white text-[30px]">
                            {personalInfo.firstName + " " + personalInfo.lastName}
                        </div>
                        <h5 className="pt-2 text-[#adccc7] text-[20px]">
                            {workExperience[workExperience.length - 1]?.jobTitle}
                        </h5>
                    </div>
                    <div className="p-4 text-left">
                        <div className="mb-2 bg-white text-black">Email:</div>
                        <div className="text-white">{personalInfo.email}</div>
                        <div className="mb-2 mt-2 bg-white text-black">Contact:</div>
                        <div className="text-white">{personalInfo.mobile}</div>
                        <div className="mb-2 mt-2 bg-white text-black">Address:</div>
                        <div className="text-white">
                            {personalInfo.address + ", " + personalInfo.city + ", " + personalInfo.state + ", " + personalInfo.postalCode}
                        </div>
                    </div>
                </div>

                {/* Right Column for Professional Experience, Education, and Skills */}
                <div className="w-[70%] p-8">
                    <div>
                        <div className="text-justify mt-4">{personalInfo.objective}</div>
                        <hr className="h-[5px] bg-[#4b6982]" />
                    </div>
                    <div style={{ fontFamily: "Serif" }}>
                        <div>
                            <div className="text-left bg-light mb-4 text-[#4b6982]">
                                <h3 className="font-bold text-xl">Professional Experience</h3>
                            </div>
                            <div className="text-left text-lg">
                                {workExperience.map((item) => (
                                    <div key={shortid.generate()} className="mb-4">
                                        <div>
                                            <h4>{item.organizationName}</h4>
                                        </div>
                                        <div>
                                            <b>{item.jobTitle}</b>
                                        </div>
                                        <div className="mt-2 mb-3">
                                            <div>Worked in {item.organizationName} from {item.startYear} to {item.endYear}.</div>
                                            <div>{item.jobDescription}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr className="h-[5px] bg-[#4b6982]" />
                            <div className="bg-light text-left text-[#4b6982]">
                                <h3 className="font-bold text-xl">Education</h3>
                            </div>
                            <div className="text-left">
                                <div className="text-lg">
                                    <div className="mb-4">
                                        <h5>{education.degree}</h5>
                                        <div>
                                            I have pursued my {education.type} <b>from {education.university}</b>
                                        </div>
                                        <p>Duration: {education.startYear} - {education.endYear}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="h-[5px] bg-[#4b6982]" />
                            <div className="bg-light text-left">
                                <h3 className="text-[#4b6982] font-bold text-xl">Key Skills</h3>
                            </div>
                            <div className="text-left text-lg mb-4">
                                <ul className="list-none pl-0">
                                    {skills.map((skill) => (
                                        <li key={shortid.generate()}>{skill.skills}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateThree;
