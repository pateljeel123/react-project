import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DescriptionPage() {
  const [page, setPage] = useState({});
  const params = useParams();

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/products/${params.id}`)
      .then((res) => {
        setPage(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <div>
      <div key={page.id}>
        <h1>{page.title}</h1>
        <h1>{page.name}</h1>
        <img src={page.image} alt="" />
        <h1>{page.description}</h1>
        <h1>{page.price}</h1>
      </div>
    </div>
  );
}

export default DescriptionPage;
