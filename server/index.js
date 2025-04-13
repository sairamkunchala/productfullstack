const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"Attitude@2001",
    database: "login_details"
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get",(req,res)=>{
    const sqlGet = "select * from login_db";
    db.query(sqlGet,(error, result)=>{
        res.send(result)
    })
})

app.get("/api/getproduct",(req,res)=>{
    const sqlGet = "select * from product_db";
    db.query(sqlGet,(error, result)=>{
        res.send(result)
    })
})

app.post("/api/post",(req,res)=>{
    const values= [req.body.name,req.body.email,req.body.mobilenumber,req.body.password,req.body.housenumber,req.body.city,req.body.state,req.body.district,req.body.country];
    const sqlInsert = "INSERT INTO login_db(name,email,mobilenumber,password,housenumber,city,state,district,country) VALUES (?)";
    db.query(sqlInsert, [values],(error,result)=>{
        if(error){
            console.log(error);
        }
        console.log("success")
    })
})


app.post("/api/postproduct",(req,res)=>{
    const values= [req.body.machinename,req.body.rating,req.body.location,req.body.sellername,req.body.contact,req.body.productimage];
    const sqlInsert = "INSERT INTO product_db(machinename,rating,location,sellername,contact,productimage) VALUES (?)";
    db.query(sqlInsert, [values],(error,result)=>{
        if(error){
            console.log(error);
        }
        console.log("success")
    })
})


app.post('/api/login',(req,res) => {
    const sql = "SELECT * FROM login_db WHERE `email`=? AND `password`=? AND `mobilenumber`=?";
    db.query(sql, [req.body.email, req.body.password, req.body.mobilenumber],(error,result)=>{
        if(error){
            console.log(error);
        }
        console.log("success")
        return res.json("success")
    })
})


app.get("/",(req,res)=>{
    // const sqlInsert = "INSERT INTO login_db(name,email,mobilenumber,password,housenumber,city,state,district,country) VALUES ('mahe','mahe@gmail.com',9705497054,'pass','4-23','palvancha','telangana','bhadradri','india')";
    // db.query(sqlInsert,(error, result) => {
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("hai darlling...")
    // });
});

app.listen(5000,()=>{console.log("server is running is 5000");})