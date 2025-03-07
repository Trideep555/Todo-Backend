import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos" , async () => {
    const response = await axios.get("http://localhost:8000/todo");
    //console.log(response);
    return response.data;
})

export const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        todos :[] ,
        status : "Pending"
    },
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
    } ,
     extraReducers  : (builder) => {
        builder.addCase(fetchTodos.fulfilled,(state,action)=> {
            state.todos = action.payload;
            state.status = "Completed";
            return state;
        })
        builder.addCase(fetchTodos.rejected , (state,action)=> {
            console.log(action.error);
        })
     }
})
export const { insert,editValue,deleteValue,searchByValue } = TodoSlice.actions

export default TodoSlice.reducer