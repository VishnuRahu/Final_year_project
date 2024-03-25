const express=require('express');
const { addOne, getAll,deleteEvent }=require('../controllers/calender');

const router=express.Router();

router.post('/calender',addOne);
router.post('/getEvents',getAll)
router.delete('/calender',deleteEvent)

module.exports=router;