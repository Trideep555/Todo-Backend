import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'; 

function Effect() {
    const [count,SetCount]=useState("now_playing");
    const [page,SetPage] = useState(1);
    const [total_pages,SetTotalPages]=useState(0);
    const [data,setData]=useState([]);
    const [isLoad,SetLoad] = useState(true);
    /*const HandleCalculation = (count) =>{
        for(let i=count;i<100000000;i++){
            console.log(i); 
        }
    } */
   
  //HandleCalculation(5);
    useEffect(()=>{
        SetLoad(true);
        
        axios.get(`
https://api.themoviedb.org/3/movie/${count}?page=${page}&api_key=23b1a6391162e71ee2f8dda5c96129a9`).then((response)=> 
            {
                SetTotalPages(response.data.total_pages);
                 setData(response.data.results)
                SetLoad(false); 
           
            }
    ).catch((error)=> console.log(error));
    },[count,page])

    const SetParams = (type) =>{
        SetCount(type); 
        SetPage(1);
    }
    return (
        <>
        {/* <input type='text'  value={count} onChange={(e)=> SetCount(e.target.value)} /> */}
        <div style={{display:"flex",flexDirection:"row",gap:"25px",justifyContent:"center",margin:"25px 0px"}}>
            <button onClick={()=> SetParams("now_playing")}>Now Playing</button>
            <button onClick={()=> SetParams("popular")}>Popular</button>
            <button onClick={()=> SetParams("top_rated")}>Top Rated</button>
            <button onClick={()=> SetParams("upcoming")}>Upcoming</button>

        </div>

        {isLoad ? 
        <ReactLoading type={"spin"} color={"green"} height={'20%'} width={'20%'} />
            :
        <div style={{display:"flex",gap:"50px",flexWrap:"wrap",flexDirection:"row"}}>
        {data.map((value,index)=> (
            <div key={index} style={{display:"flex",flexDirection:"column",width:"300px"}}>
                 <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} height="300" width="200" />
                <h1>{value.original_title}</h1>
                <h4>{value.overview}</h4>
                <p>{value.vote_average}</p>
            </div>
        ))}
        </div> }
        <div style={{display:"flex",flexDirection:"row",gap:"25px",justifyContent:"center",margin:"25px 0px"}}>
           {page!=1?<button onClick={()=> SetPage(page-1)}>Previous</button>:
           <button disabled>Previous</button>}
           {page!=total_pages?<button onClick={()=> SetPage(page+1)}>Next</button>:
           <button disabled>Next</button>}
           

        </div>

        </>
  )
}

export default Effect;