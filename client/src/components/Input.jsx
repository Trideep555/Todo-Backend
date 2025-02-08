import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input(props) {
    const buttonStyle = {
        backgroundColor:"orangered",
        borderRadius:"5%"
    };
  
  return (
    <>
    <h1 align="center">Todo List</h1>
    <Box
      component="form"
      sx={{
        display: "flex" ,
        justifyContent : "center",
        marginTop : "3%" ,
        gap: "20px"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="title" label="Enter Task" variant="filled" style={{width:"25vw"}} value={props.task.title} onChange={props.HandleChange} />
      <input type='date' id="date" placeholder='Complete Date' value={props.task.date} onChange={props.HandleChange} />
      <Button variant="contained" style={buttonStyle} onClick={props.HandleSubmit}>
        {props.edit>=0 ? "Edit" : "Submit" }
        
        </Button>
    </Box>
  
    </>
  )
}

export default Input