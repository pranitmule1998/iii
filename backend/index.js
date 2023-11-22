const mysql = require ("mysql");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

var connection = mysql . createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"iii"
})

connection.connect((error)=>{
  if(error){
    console.log(error)
  }else{
    console.log("conneced to db")
  }
})


app.get("/students",(req,res)=>{
   const q = "select * from students";

   connection.query(q,(error,data)=>{
     if(error){
        console.log("error");
        return res.status(500).send({error:"error in data fetching"});
     }
     return res.json(data);
   })

})


app.post("/students",(req,res)=>{
    const q = "insert into students (`name`,`gender`,`course`,`degree`) values (?,?,?,?) ";

    const values = [
        req.body.name,
        req.body.gender,
        req.body.course,
        req.body.degree,
    ]
 
    connection.query(q,values,(error,data)=>{
      if(error){
         console.log("error");
         return res.status(500).send({error:"error in data fetching"});
      }
      return res.json(data);
    })
 
 })


 app.get("/students/get/:id",(req,res)=>{
    const studentId =req.params.id;
    const q = "select * from students where id = ?";
 
    connection.query(q,[studentId],(error,data)=>{
      if(error){
         console.log("error");
         return res.status(500).send({error:"error in data fetching"});
      }
      return res.json(data);
    })
 
 })


 app.put("/students/update/:id",(req,res)=>{
    const studentId =req.params.id;
    const q = "update students set `name`=? , `gender`=? , `course`=? , `degree`=? where id = ?   ";

    const values = [
        req.body.name,
        req.body.gender,
        req.body.course,
        req.body.degree,
        studentId
    ]
 
    connection.query(q,values,(error,data)=>{
      if(error){
         console.log("error");
         return res.status(500).send({error:"error in data fetching"});
      }
      return res.json(data);
    })
 
 })



 app.listen(8000,()=>{
    console.log("run on 8000");
 })
