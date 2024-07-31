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
        const { name, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }));
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
                    value={book.title}
                />
                <input
                    type="text"
                    placeholder="Book Description here..."
                    onChange={handleChange}
                    name="description"
                    value={book.description}
                />
                <input
                    type="number"
                    placeholder="Book Price here..."
                    onChange={handleChange}
                    name="price"
                    value={book.price}
                />
                <input
                    type="text"
                    placeholder="Book Cover here..."
                    onChange={handleChange}
                    name="cover"
                    value={book.cover}
                />
            <button className="addBtn" onClick={handleClick}>Add</button>
            </div>

        </>
    );
}

export default Add;
