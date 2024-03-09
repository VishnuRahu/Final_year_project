const express=require('express');
const router=express.Router();

const {addTasks,getTasks} =require("../controllers/task")

router.post('/addTasks',addTasks);

router.get('/gettasks',getTasks);

module.exports=router;