import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <Link to={"/"}>home</Link>
      <Link to={"/product"}>product</Link>
      <Link to={"/addproduct"}>addproduct</Link>
      <Link to={"/discription"}>discription</Link>
    </div>
  )
}

export default Navigation
