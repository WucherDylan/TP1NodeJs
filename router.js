var express = require('express');
var router = express.Router();
const date = require('date-and-time')
const userRepository = require('./user-repository')
router.use(express.json())
const jwt = require('express-jwt')

router.use (jwt({
    secret: 'shhhhhhared-secret',
    algorithms: ['HS256'],
    credentialsRequired:false
  }))

router.use (function log(req,res,next){ 
    const now = new Date()
    date.format(now,'YYYY/MM/DD HH:mm:ss')
    console.log("Date request : ", now , "\n Ip send : ",req.ip)
    console.log("Time request : ",new Date()-now ," ms") 
    next()
    console.log(req.method , req.baseUrl,req.url)
})

router.get("/login",(req,res)=>{
    res.send(userRepository.getLogin(req.body))
})

router.get("/users",(req,res)=>{
    res.send(userRepository.getUsers())
})

router.get("/users/:lastname",(req,res)=>{
    //console.log(req.params);
    res.status(200).send('OK');
    res.send(userRepository.getUser(req.params.lastname))
})

router.get("/users/:id",(req,res)=>{
    res.send(userRepository.getUserById(req.params.id))
    res.status(200).send('OK');
})

router.post("/users",(req,res)=>{
    userRepository.createUser(req.body)
    res.status(200).send('OK');
})

router.put("/users/:id",(req,res)=>{
    userRepository.updateUser(req.params.id,req.body)
    res.status(200).send('OK');
})

router.delete("/users/:id",(req,res)=>{
    userRepository.deleteUser(req.params.id)
    res.status(200).send('OK');
})

module.exports = router
