import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Product from "../Components/Product";
import Addproducts from "../Components/Addproducts";
import DescriptionPage from "../Components/Discriptionpage"; 
import EditPage from "../Components/Editpage";  

function Rout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<Addproducts />} />
        <Route path="/description/:id" element={<DescriptionPage />} />   
        <Route path="/editpage/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default Rout;
