import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Add() {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        description: "",
        price: "",
        cover: ""
    });

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    console.log(book)

    const handleClick = async (e) => {
        e.preventDefault() // avoids defualt refresh on clicking add

        try {
            await  axios.post("http://localhost:8800/books", book)
            navigate("/")
        } catch (err) {
            console.log(err)
        
        }
    };

    return (
        <>
            <div className="form">
                
                <h1 className="heading" >Add New Book</h1>

                <input
                    type="text"
                    placeholder="Book Title here..."
                    onChange={handleChange}
                    name="title"
                    // value={book.title}
                />
                <textarea
        rows={5}
        type="text"
        placeholder="Book desc..."
        name="description"
        onChange={handleChange}
      />
                <input
                    type="number"
                    placeholder="Book Price here..."
                    onChange={handleChange}
                    name="price"
                    // value={book.price}
                />
                <input
                    type="text"
                    placeholder="Cover image URL here..."
                    onChange={handleChange}
                    name="cover"
                    // value={book.cover}
                />
            <button className="addBtn" onClick={handleClick}>Add</button>
            </div>

        </>
    );
}

export default Add;
