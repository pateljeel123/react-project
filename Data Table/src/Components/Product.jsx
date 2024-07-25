import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        alert("Product deleted");
        fetchData(); // Refresh the product list after deletion
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {data.map((e) => (
        <div key={e.id} style={{ textAlign: "center", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
          <Link to={`/description/${e.id}`}>
            <img src={e.image} alt={e.title} height={300} width={300} />
          </Link>
          <h1>{e.price}</h1>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <p>{e.category}</p>
          <Link to={`/editpage/${e.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
