const express = require("express")
const Task = require("../modelS/taskModel")
const router = express.Router()
const {createTask, readTasks, readTask, deleteTask, updateTask} = require('../controller/taskController')



/*---  CREAT A TASK  ---*/

router.post("/", createTask)


/*---  READ A TASKS  ---*/

router.get("/", readTasks)

/*---  READ A TASK  ---*/

router.get("/:id", readTask)

/* DELETE TASK */
router.delete("/:id", deleteTask)

/* UPDATE TASK */
router.patch("/:id", updateTask)
module.exports = router