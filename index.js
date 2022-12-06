const dotenv = require('dotenv').config()
const express = require("express")
const app = express()
const connectDB = require('./backend/config/connectDB')
const mongoose = require('mongoose')
const Task = require('./backend/model/taskModel')
const PORT = process.env.PORT || 5002

/*---  MIDDLEWARE  ---*/
app.use(express.json())
app.use(express.urlencoded({extended: false}))

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

app.post("/api/tasks",async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
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

