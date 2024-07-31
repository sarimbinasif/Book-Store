import express from "express"
import mysql from  "mysql"

const app = express();

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
    // res.json("hello from backend")
    const q= "SELECT * FROM books"
    db.query(q, (err,data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})


app.listen(8800, ()=>
{
    console.log("connected to backend!")

})