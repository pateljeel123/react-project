import React, { useContext } from 'react'
import { theamcontext } from '../context/Theamcontext'



function Button() {

    const {Theamcheange}=useContext(theamcontext)

  return (
    <div>
        <button className='btn-1' style={{textAlign:"center",alignItems:"center"}} onClick={Theamcheange}>change a theme</button>
    </div>
  )
}

export default Button