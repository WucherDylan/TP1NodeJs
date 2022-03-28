const express = require('express');
const router = express.Router();
const userRepository = require('../models/user-repository');

router.post("/login",(req,res)=>{
    res.send(userRepository.getLogin(req.body))
})

exports.initializeRoutes = () => {
    return router;
  }