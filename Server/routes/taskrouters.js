const express=require('express');
const router=express.Router();

const {addTasks,getTasks,deleteTask} =require("../controllers/task")

router.post('/addTasks',addTasks);

router.get('/gettasks',getTasks);

router.delete('/task/:id',deleteTask)

module.exports=router;