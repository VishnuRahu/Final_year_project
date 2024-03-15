const express=require('express');
const { addOne, getAll,updateOne }=require('../controllers/leaveRequestController');

const router=express.Router();

router.post('/leaveRequest',addOne);
router.get('/leaveRequest',getAll);
router.put('/leaveRequest',updateOne);



module.exports=router;