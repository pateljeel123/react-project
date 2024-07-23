import axios from "axios"
import { useEffect, useState } from "react"


function Discriptionpage() {

  const [count,setcount]=useState([])

  const fetchdata=()=>{
    axios.get("http://localhost:3000/products")
    .then((res)=>{
      setcount(res.data)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div>
      <h1>This is a discription page </h1>

      <h1>{fetchdata.id}</h1>
    </div>
  )
}

export default Discriptionpage
