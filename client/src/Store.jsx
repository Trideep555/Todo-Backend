import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./components/TodoSlice";
import CollegeSlice from "./components/CollegeSlice";

export default configureStore({
    reducer : { 
        todo : TodoSlice ,
        college : CollegeSlice
    
    }
})