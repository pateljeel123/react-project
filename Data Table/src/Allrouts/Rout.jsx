import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import Product from "../Components/Product"
import Addproducts from "../Components/Addproducts"
import Discriptionpage from "../Components/Discriptionpage"
import Editpage from "../Components/Editpage"


function Rout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/addproduct" element={<Addproducts/>}></Route>
        <Route path="/discription/:id" element={<Discriptionpage/>}></Route>
        <Route path="/editpage/:id" element={<Editpage/>}></Route>
      </Routes>
    </div>
  )
}

export default Rout
