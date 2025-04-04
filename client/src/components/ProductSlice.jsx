import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        status: "Pending"
    },
    reducers: {
        insert: (state, action) => {
            state.products.push(action.payload);
        }
    }
})

export const {insert} = ProductSlice.actions;
export default ProductSlice.reducer