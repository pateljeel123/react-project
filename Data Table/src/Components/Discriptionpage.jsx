import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Discriptionpage() {

  const [page,setpage]=useState({})
  const params=useParams()

  
  const fetchdata=()=>{
    axios.get(`http://localhost:3000/products/${params.id}`)
    .then((res)=>{
      setpage(res.data)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div>
     <div key={page.id}>
     <h1>{page.title}</h1>  
     <h1>{page.name}</h1>  
     <img src={page.image} alt="" />
     <h1>{page.description}</h1>  
     <h1>{page.price}</h1>  
     </div>
    </div>
  )
}

export default Discriptionpage
