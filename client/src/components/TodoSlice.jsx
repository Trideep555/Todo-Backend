import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers : {
        insert : function(state,action){
            state.push(action.payload);
        },
        editValue : function(state,action){
            state[action.payload.index] = action.payload.value;
        },
        deleteValue : function(state,action){
            state.splice(action.payload,1);
        } ,
        searchByValue : function(state,action){
            return state.filter((item) => item.toLowerCase().includes(action.payload.toLowerCase()));
        } 
        
    }
})
export const { insert,editValue,deleteValue,searchByValue } = TodoSlice.actions

export default TodoSlice.reducer