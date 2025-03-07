import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { insert,editValue, deleteValue, searchByValue, fetchTodos } from "./TodoSlice";

export default function Todo(){
    const [value,setValue]=useState("");
    const [edit,setEdit] = useState(-1);
    const [search,setSearch] = useState("");
    const todoredux  = useSelector(state=>state.todo);
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(fetchTodos());
      
    },[dispatch])
    console.log(todoredux);
    const HandleChange=(e)=>{
        setValue(e.target.value);
    }
    const HandleSearch=(e)=>{
      setSearch(e.target.value);
    }
    const HandleSearchSubmit = () =>{
      dispatch(searchByValue(search));
    }
    const HandleSubmit=()=>{
        /* if(edit==-1){
        setTodo([...todo,value]);
        }
        else{
            todo[edit]=value;
            setTodo([...todo]);
            setEdit(-1);
        } */
       if(edit == -1)
        dispatch(insert(value));
      else
      dispatch(editValue({value:value,index:edit}));
        setValue("");
        
    }
    const HandleEdit=(index)=>{
        setValue(todoredux[index]);
        setEdit(index);
    }
    const HandleDelete=(index)=>{
        /* todo.splice(index,1);
        setTodo([...todo]); */
        dispatch(deleteValue(index));
    }
    return(<>
    <h2 align="center">Todo List</h2>
    <div className="d-flex justify-content-center gap-3">
    <input type="text" placeholder="Enter Item..." className="form-control w-50" value={value} onChange={HandleChange} />
    <button className="btn btn-primary" onClick={HandleSubmit}>Add</button>
    </div>
    <table className="table w-50 mx-auto mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {todoredux.status =="Completed" ? todoredux.todos.map((item,index)=>(
        <>
        <tr key={item.id}>
            <th>{index+1}</th>
            <td>{item.title}</td>
            <td ><i className="fa-solid fa-pen cursor-pointer" onClick={()=>HandleEdit(index)} style={{cursor:"pointer"}}></i><i className="ms-4 fa-solid fa-trash" onClick={()=>HandleDelete(index)} style={{cursor:"pointer"}}></i></td>
        </tr>
        </>
    )) : "Loading..."}
  </tbody>
  </table>
    
    </>)
}