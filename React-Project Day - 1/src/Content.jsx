function Content(){
    return(
        <div style={{display:"flex",width:"90%",justifyContent:"space-between"}}>
            <div style={{padding:"150px"}}>
            <h1 style={{fontSize:"50px"}}>Header <br />Footer</h1>
            <p style={{width:"70%",}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit explicabo distinctio similique natus aperiam, amet, numquam dolorem tempora aut quaerat fugiat quis quam eligendi ex fugit fuga, ab sit!</p>
        <div style={{display:"flex"}}>

            <div style={{height:"50px",width:"50px",backgroundColor:"yellow",borderRadius:"50%"}}></div>
            <div style={{height:"50px",width:"50px",backgroundColor:"red",borderRadius:"50%",marginTop:"-20px"}}></div>
            <div style={{height:"50px",width:"50px",backgroundColor:"blue",borderRadius:"50%"}}></div>
            </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={600} width={970} />
            </div>
        </div>
        
    )
}
export default Content