import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "./CollegeSlice";

function Gallery() {
    const [page, setPage] = useState(1);
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
    </>
  )
}

export default Gallery