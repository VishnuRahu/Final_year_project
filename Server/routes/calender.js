const express=require('express');
const { addOne, getAll, }=require('../controllers/calender');

const router=express.Router();

router.post('/calender',addOne);
router.post('/getEvents',getAll)


module.exports=router;