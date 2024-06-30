import { useState, useEffect } from 'react'


function Product() {
    const [data,setdata]=useState([])
    const [cler,setcler]=useState(true)
    let Fetchdata=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json(res))
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        Fetchdata()
    }
    ,[])
  return (
    <div>
      {
        cler ? <button onClick={()=>setcler(!cler)}  style={{margin:"auto",display:"block",textAlign:"center"}}>Click Me</button> : ''
      }
      <>
      {data.map((el)=>(


        <>
       
       {cler ? '' :<div>
        <div  style={{border:"1px solid black",width:"70%",textAlign:"center",margin:"auto",borderColor:"#44cdcd",marginBottom:"20px",}}>
        <h2 style={{textAlign:"center",}}>{el.title}</h2>
        <p style={{textAlign:"center"}}>{el.body}</p></div>
        </div>}
        </>
      ))}
      </>


    </div>
  )
}


export default Product;