
import './App.css';
import { useState } from 'react';


function App() {
 
  const [Count,setCount]=useState(0);
  
  
  return (
    <div className="App">
     <div className="main">
    
      <div><h1 className='count'>Counter</h1>
      <p>{Count}</p>
      <button onClick={()=>setCount(Count+1)} className='count' style={{padding:"10px",width:"50px"}}>+</button>
      <button onClick={()=>setCount(0)} className='count' style={{padding:"10px",width:"50px,"}}>reset</button>
      <button onClick={()=>setCount(Count-1)} className='count' style={{padding:"10px",width:"50px"}}>-</button>
      </div>
     </div>
    </div>
  );
}

export default App;
