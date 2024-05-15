const express=require("express");
const todoApp=express();
const{model} = require("./mongoose")
todoApp.get("/get",(req,res)=>{
    model.find({})
    .then((a)=>{ 
        res.json({a});
    })
    .catch((err)=>{
        res.json({err});
    })
    // res.send("This is a get.")
})
todoApp.post("/post", (req,res)=>{
    model.create(req.body)
    .then((ele)=>{
        res.json(ele)
    })
    .catch((err)=>{
        res.json(err)
    })
    // res.send("This  is a post.")
})
todoApp.put("/put/:id",(req,res)=>{
    res.send("This is a put.")
})
todoApp.delete("/delete",(req,res)=>{
    res.send("This is a delete.")
})
module.exports=todoApp;