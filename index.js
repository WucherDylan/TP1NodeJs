const express = require('express')
const app = express()
const port = 3000
const route = require('./router')
const cors = require('cors')

app.use(cors({
    origin:['http://localhost:63342']
}))

app.use(route)

app.listen(port,()=>{
    console.log("app listeing on port 3000")
})