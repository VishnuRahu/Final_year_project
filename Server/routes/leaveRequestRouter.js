const express=require('express');
const { addOne, getAll,updateOne,update_status }=require('../controllers/leaveRequestController');

const router=express.Router();

router.post('/leaveRequest',addOne);
router.get('/leaveRequest',getAll);
router.put('/leaveRequest',updateOne);

router.put('/leaveRequestApproval',update_status)

module.exports=router;