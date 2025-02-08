import Button from '@mui/material/Button';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from './Input';
function Form() { //{ishan,subham}   props
  const buttonStyle = {
    backgroundColor:"orangered",
    borderRadius:"5%"
};

    const [data,setData] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
    const [task,setTask] = useState({title:"",date: new Date().toISOString().slice(0, 10)});
    const [edit,setEdit] = useState(-1);
    const HandleChange =(e) =>{
        setTask({...task,[e.target.id]:e.target.value});
    }
    const HandleSubmit = () =>{
        if(edit >= 0){
            data[edit]=task;
            setData(data);
            setTask({title:"",date: new Date().toISOString().slice(0, 10)});
            setEdit(-1);
            return;
        }
        setData([...data,task])
       if(localStorage.getItem("tasks")){
        let gettask=JSON.parse(localStorage.getItem("tasks"))
        gettask.push(task);
        localStorage.setItem("tasks",JSON.stringify(gettask));
      } 
      else
     localStorage.setItem("tasks",JSON.stringify([task]));

      setTask({title:"",date: new Date().toISOString().slice(0, 10)});
        

    }
    const HandleEdit = (index) =>{
        setTask(data[index]);
        setEdit(index);
    }
    const HandleDelete = (index) => {
        data.splice(index,1);
        setData([...data]);
    }
  return (
    <>
    <Input HandleChange={HandleChange} HandleSubmit={HandleSubmit} task={task} edit={edit} />
     <TableContainer  >
      <Table sx={{ width:"50vw"}} align="center" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Date</TableCell>
            
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item,index)=> (<>
          <TableRow key={index}>
            <TableCell  scope="row">{item.title}</TableCell>
            <TableCell  scope="row">{item.date}</TableCell>
            
            <TableCell  scope="row" align="center">
            <Button variant="contained" onClick={() => HandleEdit(index)} >Edit</Button> &nbsp;&nbsp;&nbsp;
            <Button variant="contained" style={buttonStyle} onClick={() => HandleDelete(index)}>Delete</Button>
                </TableCell>
            
          </TableRow>
          </>)
        )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Form