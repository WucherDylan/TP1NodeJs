const express = require('express')
const app = express()
const port = 8000
const route = require('./router')
app.use('/router',route)

app.listen(port,()=>{
    console.log("app listeing on port 8000")
})