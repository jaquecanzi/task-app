const dotenv = require('dotenv').config()
const express = require("express")
const app = express()
const connectDB = require('./backend/config/connectDB')

const PORT = process.env.PORT || 5002

connectDB()

/*---  ROUTES  ---*/

app.get("/", (req,res) => {
    res.send('Home Page')
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})

