import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColleges } from "./CollegeSlice";

function Colleges() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const collegeData = useSelector(state => state.college);

    useEffect(() => {
        dispatch(fetchColleges(page));
       
    },[page,dispatch]);
     //console.log(collegeData);
  return (
    <>
    <div className="d-flex justify-content-center text-black-50 " style={{fontSize: '24px', fontWeight: 'bold'}}>College List</div>
    <div className="d-flex justify-content-center">
    <table className="table table-striped w-50">
      <thead>
        <tr>
          <th>Name</th>
          <th>Adress</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {
        collegeData.status!="Loading" ? collegeData.colleges.map((college, index) => (
          <tr key={index}>
            <td>{college.name}</td>
            <td>{college.address}</td>
            <td>{college.state}</td>
          </tr>
        )) : <tr><td>Loading...</td></tr> }
      </tbody>
    </table>
    </div>
    <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-secondary" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <label className="mx-2">Page {page} of {collegeData.totalPages}</label>
        <button className="btn btn-secondary ms-2" onClick={() => setPage(page + 1)} disabled={page === collegeData.totalPages}>Next</button>
    </div>
    </>
  )
}

export default Colleges