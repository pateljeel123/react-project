import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Product() {

  const [data,setdata]=useState([])
  
  const fetchdata=()=>{
    axios.get("http://localhost:3000/products")
    .then((res)=>{
      setdata(res.data)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div  style={{display:"grid", gridTemplateColumns: "repeat(3,1fr)"}}>
        
      {data.map((e)=>(
        <>
        <div style={{textAlign:"center",boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
          <Link to={"/discription"}>
          <img src={e.image} alt="" height={300} width={300} />
          </Link>
          <h1>{e.price}</h1>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <p>{e.category}</p>
          <button>Edit</button>
    <button>delete</button>
          </div>
        </>
      ))}

    </div>
  )
}

export default Product
