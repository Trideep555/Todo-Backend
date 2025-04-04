import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { insert} from "./ProductSlice";
import './Todo.css';

function Product() {
    const [data, setData] = useState({
        title: "",
        image: "",
        price: "",
    });
    const todoredux  = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const HandleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.value});
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        dispatch(insert(data));
        setData({
            title: "",
            image: "",
            price: "",
        });
    }

  return (
    <>
    <h2 align="center">Product List</h2>
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
          <label htmlFor="" className="control-label col-sm-3">Image</label>
          <div className="col-sm-9">
            <textarea id="image" value={data.image} className="form-control input-lg" onChange={HandleChange} />
          </div>  
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label col-sm-3">Price</label>
          <div className="col-sm-9">
            <input type="number" id="price" value={data.price}className="form-control input-lg" onChange={HandleChange} />
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
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      
    </tr>
  </thead>
  <tbody>
    {todoredux.products.map((item,index)=>(
        <>
        <tr key={item.id}>
            <th>{index+1}</th>
            <td>{item.title}</td>
            <td>{item.image}</td>
            <td>{item.price}</td>
            
        </tr>
        </>
    )) }
  </tbody>
  </table>
 
    </>
  )
}

export default Product