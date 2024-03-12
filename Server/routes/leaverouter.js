const express=require('express');
const { addOne, getAll, updateOne,  }=require('../controllers/leaveControllers');

const router=express.Router();

router.post('/leave',addOne);
router.get('/leave',getAll);
router.put('/leave', updateOne);


module.exports=router;