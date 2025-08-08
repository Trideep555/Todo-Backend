import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, uploadImage } from "./CollegeSlice";

function Gallery() {
    const [page, setPage] = useState(1);
    const [file,setFile] = useState("");
    const dispatch = useDispatch();
    const collegeData = useSelector(state => state.college);
    
    useEffect(() => {
        dispatch(fetchImages(page));
           
    },[page,dispatch]);
    
  return (
    <>
    <img src={collegeData.image} alt="No Photo" height="200px" width="200px" />
    <br />
    <button onClick = {() => setPage(page-1)}>Back</button>
    
    <button onClick = {() => setPage(page+1)}>Next</button>
    <br/>
    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    {file!="" && <img src={URL.createObjectURL(file)} alt="No Photo" height="200px" width="200px" /> }

      <button onClick={() => dispatch(uploadImage(file))}> Upload </button>

    </>
  )
}

export default Gallery