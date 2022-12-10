const express = require("express")
const Task = require("../modelS/taskModel")
const router = express.Router()
const {createTask, readTasks, readTask, deleteTask} = require('../controller/taskController')



/*---  CREAT A TASK  ---*/

router.post("/api/tasks", createTask)


/*---  READ A TASKS  ---*/

router.get("/api/tasks", readTasks)

/*---  READ A TASK  ---*/

router.get("/api/tasks/:id", readTask)

/* DELETE TASK */
router.delete("/api/tasks/:id", deleteTask)

module.exports = router