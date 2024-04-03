const express=require('express');
const { addOne, getAll,updateOne,update_status,getAllPrincipal,getIndreq }=require('../controllers/leaveRequestController');

const router=express.Router();

router.post('/leaveRequest',addOne);
router.get('/leaveRequest',getAll);
router.put('/leaveRequest',updateOne);
router.get('/leaveRequestPrincipal',getAllPrincipal);
router.get('/getFacultyLeaveRequest/:email',getIndreq)
router.put('/leaveRequestApproval',update_status)

module.exports=router;