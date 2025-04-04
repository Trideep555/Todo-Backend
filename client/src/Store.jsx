import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./components/TodoSlice";
import ProductSlice from "./components/ProductSlice";

export default configureStore({
    reducer : { 
<<<<<<< Updated upstream
        todo : TodoSlice 
=======
        todo : TodoSlice,
        product : ProductSlice
    
>>>>>>> Stashed changes
    }
})