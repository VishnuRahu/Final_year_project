const express=require('express');
const { addOne, getAll, updateOne, deleteOne }=require('../controllers/announcements');

const router=express.Router();

router.post('/announcement',addOne);
router.get('/announcement',getAll);
router.put('/announcement', updateOne);
router.delete('/announcement/:id', deleteOne);

module.exports=router;