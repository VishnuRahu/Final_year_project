const express=require('express');
const { addOne,getSubTask}=require('../controllers/subtask');

const router=express.Router();

router.post('/addSubtask',addOne);

router.post('/getsubtask',getSubTask);


module.exports=router;