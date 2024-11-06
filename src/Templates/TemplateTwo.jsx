import React from 'react';
import { useSelector } from 'react-redux';
const shortid = require('shortid');

function TemplateTwo() {
    // Use Redux state values from the updated structure
    const personalInfo = useSelector(state => state.personalInfo);
    const workExperience = useSelector(state => state.workExperience);
    const education = useSelector(state => state.education);
    const skills = useSelector(state => state.skills);
    const imageUrl = useSelector(state => state.imageUrl);

    return (
        <div className="border-8 border-red-200 bg-yellow-50 w-full max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <div className="flex items-center h-[200px] bg-red-200">
                <div className="w-1/5 text-center">
                    <img className="rounded-full max-h-[180px] min-h-[120px] w-[100px] bg-gray-300"
                         src={imageUrl || 'https://via.placeholder.com/100'} alt="profile-pic" />
                </div>
                <div className="w-1/2 text-center font-bold font-serif">
                    <div className="text-pink-500 text-[55px]">
                        {personalInfo.firstName + " " + personalInfo.lastName}
                    </div>
                    <h5 className="text-lg">{workExperience[workExperience.length - 1]?.jobTitle}</h5>
                </div>
                <div className="w-1/3 text-left text-lg">
                    <div>{personalInfo.email}</div>
                    <div>{personalInfo.mobile}</div>
                    <div>{`${personalInfo.address}, ${personalInfo.city}, ${personalInfo.state}, ${personalInfo.postalCode}`}</div>
                </div>
            </div>

            <hr className="h-1 bg-red-200" />

            {/* Objective Section */}
            <div className="text-justify px-4 py-4">
                {personalInfo.objective}
            </div>

            <hr className="h-1 bg-red-200" />

            {/* Professional Experience */}
            <div className="font-serif my-4">
                <div className="flex">
                    <div className="w-1/4 text-left text-pink-500">
                        <h4 className="text-xl">Professional Experience</h4>
                    </div>
                    <div className="w-3/4 text-left text-lg">
                        {workExperience.map((item, index) => (
                            <div key={shortid.generate()} className="mb-4">
                                <b>{item.jobTitle}</b>
                                <div>Worked at {item.organizationName} from {item.startYear} to {item.endYear}.</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="h-1 bg-red-200" />

            {/* Education Section */}
            <div className="font-serif my-4">
                <div className="flex">
                    <div className="w-1/4 text-left text-pink-500">
                        <h4 className="text-xl">Education</h4>
                    </div>
                    <div className="w-3/4 text-left text-lg">
                        <div className="mb-4">
                            <b>{education.degree}</b>
                            <div>I pursued my {education.type} in {education.degree} from {education.university}</div>
                            <div>Duration: {education.startYear} - {education.endYear}</div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="h-1 bg-red-200" />

            {/* Key Skills Section */}
            <div className="font-serif my-4">
                <div className="flex">
                    <div className="w-1/4 text-left text-pink-500">
                        <h4 className="text-xl">Key Skills</h4>
                    </div>
                    <div className="w-3/4 text-left text-lg">
                        <ul className="list-none pl-0">
                            {skills.map((skill, index) => (
                                <li key={shortid.generate()}>{skill.skills}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateTwo;
