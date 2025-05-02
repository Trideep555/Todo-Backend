import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos" , async () => {
    const response = await axios.get("http://localhost:8000/todo");
    //console.log(response);
    return response.data;
})
export const insertTodos = createAsyncThunk("todo/insertTodos" , async (data) => {
    await axios.post("http://localhost:8000/todo",data);
    //console.log(response);
    return data;
})
export const editTodos = createAsyncThunk("todo/editTodos" , async ({data,edit}) => {
    console.log(edit);
    await axios.put("http://localhost:8000/todo/"+edit,data);
    //console.log(response);
    return { data , edit };
})
export const deleteTodos = createAsyncThunk("todo/deleteTodos" , async (id) => {
    console.log(id);
    await axios.delete("http://localhost:8000/todo/"+id);
    //console.log(response);
    return id;
})

export const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        todos :[] ,
        status : "Pending",
    },
    reducers : {
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
        builder.addCase(insertTodos.fulfilled,(state,action)=> {
            state.todos.push(action.payload);
            return state;
        })
        builder.addCase(editTodos.fulfilled,(state,action)=> {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.edit ? action.payload.data : todo
              );
            return state;
        })
        builder.addCase(deleteTodos.fulfilled,(state,action)=> {
            state.todos = state.todos.filter(todo =>
                todo.id != action.payload   
            );
            return state;
        })
     }
})
export const { insert,editValue,deleteValue,searchByValue } = TodoSlice.actions

export default TodoSlice.reducer