import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./components/TodoSlice";

export default configureStore({
    reducer : { 
        todo : TodoSlice 
    }
})