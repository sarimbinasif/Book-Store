import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id)=>{
        try {
            // delete and refresh
            await axios.delete("http://localhost:8800/books/"+id);
            window.location.reload()
            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className="heading">Book Store</h1>
            <div className="books">
                {books.map((book) => (
                    <div key={book.id} className="book"> 
                        {book.cover && <img src={book.cover} alt="Book cover"/>}
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <span>{book.price+"$"}</span>
                        <button className="delete" onClick={()=>handleDelete(book.id)}>Delete Book</button>
                        <button className="update">
                            <Link to={`/update/${book.id}`}>Update Book</Link>
                            </button>

                    </div>
                ))}
            </div>

            <button className = "addNewBookBtn"> 
                
            <Link to="/add">
                
            Add New Book
            </Link>
            
            </button>
            </div>
       
    );
}

export default Books;
