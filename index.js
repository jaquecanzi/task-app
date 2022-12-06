const dotenv = require('dotenv').config()
const express = require("express")
const app = express()
const connectDB = require('./backend/config/connectDB')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5002


mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    })
})
.catch((err) => {
    console.log(err)
})

/*---  ROUTES  ---*/

app.get("/", (req,res) => {
    res.send('Home Page')
})

/*---  CREAT A TASK  ---*/

app.post("/api/tasks", async (req, res) => {
    console.log(req.body)
    res.send("Task Created")
})

//-------------------------  Another way to connect server  --------------------------

/* const startServer = async() => {

    try {
       await connectDB()
       app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
       }) 

    } catch (error) {
        console.log(error);
    }
}

startServer() */



/* app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
}) */

