import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditPage() {
    const initialState = {
        title: "",
        description: "",
        category: "",
        image: "",
        price: ""
    };
    const { id } = useParams();
    const [formData, setFormData] = useState(initialState);

    const dataFetching = () => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                setFormData(res.data); 
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/products/${id}`, formData)
            .then((res) => {
                console.log(res);
                alert("Data updated");
            })
            .catch((err) => console.log(err));
    };

    

    useEffect(() => {
        dataFetching();
    }, []);  

    const { title, description, category, image, price } = formData;

    return (
        <div>
            <h1>This is Edit page</h1>
            <form onSubmit={handleSubmit}>
                <input value={image} onChange={handleChange} type="text" placeholder="image" name="image" /><br />
                <input value={title} onChange={handleChange} type="text" placeholder="title" name="title" /><br />
                <select value={category} onChange={handleChange} name="category">
                    <option value="">Select a category</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's clothing</option>
                </select><br />
                <input value={price} onChange={handleChange} type="text" placeholder="price" name="price" /><br />
                <input value={description} onChange={handleChange} type="text" placeholder="description" name="description" /><br />
                <input type="submit" value="Update" />
            </form>
            
        </div>
    );
}

export default EditPage;
