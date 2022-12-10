const express = require("express")
const Task = require("../modelS/taskModel")
const router = express.Router()
const {createTask, readTask} = require('../controller/taskController')



/*---  CREAT A TASK  ---*/

router.post("/api/tasks", createTask)


/*---  READ A TASK  ---*/

router.get("/api/tasks", readTask)

module.exports = router