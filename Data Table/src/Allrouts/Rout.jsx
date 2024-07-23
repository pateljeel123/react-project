import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import Product from "../Components/Product"
import Addproducts from "../Components/Addproducts"
import Discriptionpage from "../Components/Discriptionpage"


function Rout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/addproduct" element={<Addproducts/>}></Route>
        <Route path="/discription" element={<Discriptionpage/>}></Route>
      </Routes>
    </div>
  )
}

export default Rout
