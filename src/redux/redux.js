import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name : "ResumeState",
    initialState : {
        personalInfo : {
            firstName : "",
            lastName : "",
            email : "",
            mobile : "",
            address : "",
            city : "",
            state : "",
            postalCode : "",
            objective : ""
        },

        workExperience : [
            {
                jobTitle : "",
                organizationName : "",
                startYear : "",
                endYear : ""
            }
        ],

        education : {
            type : "",
            university : "",
            degree : "",
            startYear : "",
            endYear : ""
        },

        skills : [
            {
                skills : ""
            }
        ],

        imageUrl : "",

        selectTemplate : ""
    },

    reducers : {
        setPersonalInfo : (state, action) => {
            state.personalInfo[action.payload.key] = action.payload.value
        },

        setWorkExperience : (state, action) => {
            state.workExperience[action.payload.index][action.payload.key] = action.payload.value;
        },

        setEducation : (state, action) => {
            state.education[action.payload.key] = action.payload.value;
        },

        setSkills : (state, action) => {
            state.skills[action.payload.index][action.payload.key] = action.payload.value;
        },

        addElement : (state, action) => {
            state[action.payload.key].push(action.payload.element);
        },

        removeElement:(state,action)=>{
            state[action.payload.key].splice(action.payload.index, 1);
        },

        updateElement:(state,action)=>{
            state[action.payload.key]=action.payload.value;
        }
    }
})

export const {setPersonalInfo, setWorkExperience, setEducation, setSkills, addElement, removeElement, updateElement} = resumeSlice.actions

export default resumeSlice.reducer