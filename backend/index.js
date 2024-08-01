import express from "express"
import mysql from  "mysql"
import cors from "cors"

const app = express();

// without this we cant send json data to our server
app.use(express.json())

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sarMysql123",
    database: "test",
    port: "3306"
});

app.get("/", (req, res)=>{
    res.json("hello from backend")
})


app.get("/books", (req, res)=>{
    const q= "SELECT * FROM books"
    db.query(q, (err,data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})


app.post("/books", (req,res)=>{
    const q="INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Book created successfuly!")
    })

})

app.delete("/books/:id", (req,res)=>{
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been deleted successfully!")
    })
})


app.put("/books/:id", (req,res)=>{
    const bookId = req.params.id;
    // query order and array order of variables must be same
    const q = "UPDATE books SET `title`=?, `description`=?, `cover`=?, `price`=? WHERE id=?"

    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price,
    ]

    db.query(q, [...values, bookId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been updated successfully!")
    })
})




app.listen(8800, ()=>
{
    console.log("connected to backend!")

})