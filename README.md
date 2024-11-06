# Resume Builder

This is a **Resume Builder** web application that allows users to create a professional resume by filling in their personal details, work experience, education, and skills after selecting a preferred resume template. Users can then preview the resume and download it as a PDF. The project is built using **React**, **Redux**, **Redux Toolkit**, and **Tailwind CSS** for a smooth, responsive experience.

## Key Features

- **Template Selection**: Users can choose from multiple resume templates.
- **Personal Information Form**: A page to fill in personal details such as name, contact information, and address.
- **Work Experience**: Add work experience with job title, organization, and years of service.
- **Education Details**: Add educational background including degree, university, and years of study.
- **Skills**: Add relevant skills for the resume.
- **Preview Resume**: Users can preview the completed resume before downloading.
- **Download as PDF**: Once satisfied, users can download the resume in PDF format.
- **Responsive Design**: Works well on all screen sizes, from mobile to desktop.

## Tech Stack

- **React**: Used for building the user interface and managing component-based architecture.
- **Redux & Redux Toolkit**: For state management across multiple components and form sections.
- **Tailwind CSS**: Provides utility-first CSS styling for responsive design.
- **jsPDF**: Library for generating the resume PDF from the user's inputs.
- **html2canvas**: Captures the resume template in the browser as an image to convert into a downloadable PDF.

## Demo

You can check out the live demo of this application [here](https://cv-genie.netlify.app/).

## Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **npm** or **yarn**


## Project Structure

```bash
├── public
├── src
│   ├── assets                      # Required assets
│   ├── components
│   │   ├── PersonalInfo.jsx        # Personal Information form
│   │   ├── WorkExperience.jsx      # Work Experience form
│   │   ├── Education.jsx           # Education form
│   │   ├── Skills.jsx              # Skills form
│   │   ├── NavBar.jsx              # NavBar
│   │   └── Footer.jsx              # Footer
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Details.jsx
│   │   ├── Home.jsx
│   │   └── MyResume.jsx            # Resume preview and PDF download
│   ├── redux
│   │   ├── store.js                # Redux store configuration
│   │   └── redux.js                # Actions and reducers for state management
│   ├── Templates                   # Contains multiple resume templates
│   │   ├── TemplateOne.jsx
│   │   ├── TemplateTwo.jsx
│   │   ├── TemplateThree.jsx
│   │   └── TemplateFour.jsx
│   ├── App.js                      # Main app component
│   ├── index.js                    # App entry point
│   └── styles
│       └── tailwind.css            # Custom Tailwind CSS configurations
└── package.json                    # Dependencies and scripts