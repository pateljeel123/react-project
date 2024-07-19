import React, { useContext } from 'react'

import { theamcontext } from '../context/Theamcontext'


function Main() {
  const {Theamcheange}=useContext(theamcontext)
  return (
    <div style={{textAlign:"center"}}>
      Lorem ipsum dolor sit,  amet consectetur
      <br />adipisicing elit. Animi ipsam <br />dolore rerum, in et cupiditate <br />repellendus voluptas labore quaerat! Mollitia assumenda <br /> aspernatur ratione optio repellendus aut voluptatibus quod expedita doloribus.
      <button className='btn-1' style={{textAlign:"center",alignItems:"center"}} onClick={Theamcheange}>change a theme</button>
    </div>
  )
}

export default Main