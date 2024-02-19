const express=require('express');
const {addAnnouncements,getAnnouncements}=require('../controllers/announcements');

const router=express.Router();

router.post('/announcement',addAnnouncements)

router.get('/announcement',getAnnouncements);

module.exports=router;