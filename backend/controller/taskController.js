/*  */

const { json } = require('express/lib/response')
const Task = require('../modelS/taskModel')

/* CREATE TASK */

const createTask = async(req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

/* READ TASKS */
const readTasks = async(req,res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

/* READ TASK */


const readTask = async(req,res) => {
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

/* DELETE TASK */

const deleteTask = async (req,res) => {
    try {
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id)
        if(!task) {
            return res.status(404).json('No task with ' + id)
        }

        res.status(200).send("Task deleted")
    } catch (error) {
        res.status(500).json({error: message})
    }
}

/* UPDATE A TASK */

const updateTask = async (req,res) => {
    try {
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(
            {_id: id},
            req.body,
            {new: true,
            runValidators: true})
        if(!task) {
            return res.status(400).json('No task with id: ' + id)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({error: message})
    }
}

module.exports = {
    createTask,
    readTasks,
    readTask,
    deleteTask,
    updateTask
}