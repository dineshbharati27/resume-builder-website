import { configureStore } from "@reduxjs/toolkit";
 import ResumeStateReducer from './redux'

 const store = configureStore({
    reducer : ResumeStateReducer
 })

 export default store;