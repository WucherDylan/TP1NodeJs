
const express = require('express')
const app = express()
const port = 8000
const userRepository = require('./user-repository')

app.use(express.json())

app.get("/users",(req,res)=>{
    res.send(userRepository.getUsers())
})

app.get("/users/:lastname",(req,res)=>{
    //console.log(req.params);
    res.send(userRepository.getUser(req.params.lastname))
})

app.post("/users/",(req,res)=>{
    res.send(userRepository.createUser(req.body))
    res.send('success')
})

app.put("/users/:id",(req,res)=>{
    res.send(userRepository.updateUser(req.body.id))
    res.send("success")
})

app.delete("/users/:id",(req,res)=>{
    res.send(userRepository.deleteUser(req.params.id))
    res.send('success')
})

app.listen(port,()=>{
    console.log("app listeing on port 8000")
})