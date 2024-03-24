const express=require('express');
const router=express.Router();

const {addTasks,getTasks,deleteTask,getIndtasks, getTasksById} = require("../controllers/task")

router.get('/tasks/:id', getTasksById);

router.post('/addTasks',addTasks);

router.post('/gettasks',getTasks);

router.post('/getIndtask',getIndtasks);

router.delete('/task/:id',deleteTask)

module.exports=router;