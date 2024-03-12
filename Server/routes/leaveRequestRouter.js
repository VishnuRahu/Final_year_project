const express=require('express');
const { addOne, getAll }=require('../controllers/leaveRequestController');

const router=express.Router();

router.post('/leaveRequest',addOne);
router.get('/leaveRequest',getAll);


module.exports=router;