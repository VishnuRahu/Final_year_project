const express=require('express');
const { addOne, getAll,updateOne,update_status,getAllPrincipal,getIndreq,getPdf,getLeave,getLeaveById,deniedleaveRequestPrincipal,getLeaveDetails }=require('../controllers/leaveRequestController');

const router=express.Router();

router.post('/leaveRequest',addOne);
router.get('/leaveRequest',getAll);
router.put('/leaveRequest',updateOne);
router.get('/leaveRequestPrincipal',getAllPrincipal);
router.get('/getFacultyLeaveRequest/:email',getIndreq)
router.put('/leaveRequestApproval',update_status)
router.post('/getLeaveById',getLeaveById)
router.post('/getpdf',getPdf)
router.get('/deniedleaveRequestPrincipal',deniedleaveRequestPrincipal)

router.post('/getleavedata',getLeave);
router.post('/getLeaveDetails',getLeaveDetails)

module.exports=router;