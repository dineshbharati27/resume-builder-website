import React from 'react';
import { useSelector } from 'react-redux';
const shortid = require('shortid');

function TemplateFour() {
    // Select specific parts of the state
    const personalInfo = useSelector(state => state.personalInfo);
    const workExperience = useSelector(state => state.workExperience);
    const education = useSelector(state => state.education);
    const skills = useSelector(state => state.skills);
    const image = useSelector(state => state.imageUrl);

    return (
        <div className='border-2 border-[#4b6982] w-full max-w-4xl mx-auto p-6'>
            <div className='flex'>
                {/* Left Column */}
                <div className='w-1/3 bg-[#4b6982] pt-20 flex flex-col items-center'>
                    <div className="media">
                        <img
                             src={image} // Accessing imageUrl from Redux state
                             alt='profile-pic' 
                             className="max-h-[180px] min-h-[100px] w-[100px] bg-gray-300 rounded-full"
                        />
                    </div>
                    <div className="mt-3 font-bold" style={{ fontFamily: "Serif", textAlign: "center" }}>
                        <div className="text-white text-[30px]">
                            {personalInfo.firstName + " " + personalInfo.lastName} {/* Updated state keys */}
                        </div>
                        <h5 className='pt-2 text-[#adccc7] text-[20px]'>
                            {workExperience[workExperience.length - 1]?.jobTitle} {/* Updated state keys */}
                        </h5>
                    </div>
                    <div className="p-5 text-[18px] text-left text-[#f7f7f7]">
                        <div className="px-2 mb-2 bg-white text-black">Email:</div>
                        <div>{personalInfo.email}</div>
                        <div className="px-2 mb-2 mt-2 bg-white text-black">Contact:</div>
                        <div>{personalInfo.mobile}</div> {/* Updated to mobile */}
                        <div className="px-2 mb-2 mt-2 bg-white text-black">Address:</div>
                        <div>{personalInfo.address + ", " + personalInfo.city + ", " + personalInfo.state + ", " + personalInfo.postalCode}</div> {/* Updated postalCode */}
                    </div>
                </div>

                {/* Right Column */}
                <div className='w-2/3 p-8'>
                    <div className="text-justify mt-4">{personalInfo.objective}</div>
                    <hr className="h-[5px] bg-[#4b6982]" />

                    {/* Professional Experience */}
                    <div className="font-serif">
                        <div className="text-left mb-4 text-[#4b6982]">
                            <h3 className="font-bold">Professional Experience</h3>
                        </div>
                        <div className="text-left text-[18px]">
                            {workExperience.map((item) => (
                                <div key={shortid.generate()}>
                                    <h4 className='mt-2'>{item.organizationName}</h4> {/* Updated state keys */}
                                    <b className='mt-2'>{item.jobTitle}</b> {/* Updated state keys */}
                                    <div className='mt-2 mb-3'>
                                        <div>Worked at {item.organizationName} from {item.startYear} to {item.endYear}.</div> {/* Updated state keys */}
                                        <div>{item.jobDescription}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="h-[5px] bg-[#4b6982] mt-4" />

                        {/* Education */}
                        <div className="text-left mb-4 text-[#4b6982]">
                            <h3 className="font-bold">Education</h3>
                        </div>
                        <div className="text-left">
                            <h5>{education.degree}</h5> {/* Accessing single education object */}
                            <div>I have pursued my {education.type} <b>from {education.university}</b></div>
                            <p>Duration: {education.startYear + " - " + education.endYear}</p>
                        </div>
                        <hr className="h-[5px] bg-[#4b6982] mt-4" />

                        {/* Key Skills */}
                        <div className="text-left mb-4">
                            <h3 className="text-[#4b6982] font-bold">Key Skills</h3>
                        </div>
                        <ul className="list-none pl-0">
                            {skills.map((skill) => (
                                <li key={shortid.generate()} className="text-[18px]">{skill.skills}</li> 
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateFour;
