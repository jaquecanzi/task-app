const dotenv = require('dotenv').config()
const express = require("express")
const app = express()
const connectDB = require('./backend/config/connectDB')
const mongoose = require('mongoose')
const Task = require('./backend/modelS/taskModel')
const PORT = process.env.PORT || 5002
const taskRoutes = require('./backend/routes/taskRoute')

/*---  MIDDLEWARE  ---*/
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/tasks" ,taskRoutes)

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

