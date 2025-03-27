import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { insert,editValue, deleteValue, searchByValue, fetchTodos } from "./TodoSlice";
import './Todo.css';
export default function Todo(){
    const [data,setData]=useState({
      title : "",
      description : "",
      due_date : "",
      status : "",
      created_at : "",
      created_by : "",
      category_id : ""
    });
    const [edit,setEdit] = useState(-1);
    const [search,setSearch] = useState("");
    const todoredux  = useSelector(state=>state.todo);
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(fetchTodos());
      
    },[dispatch])
    //console.log(todoredux);
    const HandleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.value});
    }
    /* const HandleSearch=(e)=>{
      setSearch(e.target.value);
    }
    const HandleSearchSubmit = () =>{
      dispatch(searchByValue(search));
    } */
    const HandleSubmit=(e)=>{
        /* if(edit==-1){
        setTodo([...todo,value]);
        }
        else{
            todo[edit]=value;
            setTodo([...todo]);
            setEdit(-1);
        } */
            
            e.preventDefault();
       dispatch(insert(data));
      setData({
        title : "",
        description : "",
        due_date : "",
        status : "",
        created_at : "",
        created_by : "",
        category_id : ""
      })
        
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
    <div className="container">
  <div className="row">
    <div className="col-sm-8 col-sm-offset-2">
      <form action="" className="form-horizontal pad-bg">
        <h1 className="text-center">Horizontal form</h1>
        <div className="form-group">
          <label htmlFor="" className="control-label col-sm-3">Title</label>
          <div className="col-sm-9">
            <input type="text" id="title" className="form-control input-lg" value={data.title} onChange={HandleChange} />
          </div>  
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label col-sm-3">Description</label>
          <div className="col-sm-9">
            <textarea id="description" value={data.description} className="form-control input-lg" onChange={HandleChange} />
          </div>  
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label col-sm-3">Due Date</label>
          <div className="col-sm-9">
            <input type="datetime-local" id="due_date" value={data.due_date}className="form-control input-lg" onChange={HandleChange} />
          </div>  
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label col-sm-3">Status</label>
          <div className="col-sm-9">
            <select className="form-control input-lg" id="status" value={data.status}  onChange={HandleChange}>
              <option value="pending">Pending</option>
              <option value="In-Progress">In Progress</option>
              <option value="Completed">Completed</option>
              </select>
          </div>  
        </div>
        <div className="form-group mt-2">
          <div className="col-sm-offset-3 col-sm-9">
            <button className="btn btn-default btn-lg btn-primary" onClick={HandleSubmit}>Submit</button>
          </div>
        </div>
      </form>
      </div>
  </div>
</div>
    <table className="table w-50 mx-auto mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Due Date</th>
      <th scope="col">Status</th>

      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {todoredux.status =="Completed" ? todoredux.todos.map((item,index)=>(
        <>
        <tr key={item.id}>
            <th>{index+1}</th>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.due_date.substring(0,10)}</td>
            <td>{item.status}</td>
            
            <td ><i className="fa-solid fa-pen cursor-pointer" onClick={()=>HandleEdit(index)} style={{cursor:"pointer"}}></i><i classNameName="ms-4 fa-solid fa-trash" onClick={()=>HandleDelete(index)} style={{cursor:"pointer"}}></i></td>
        </tr>
        </>
    )) : "Loading..."}
  </tbody>
  </table>
    
    </>)
}