const express=require('express');
const {addAnnouncements,getAnnouncements}=require('../controllers/announcements');

const router=express.Router();

router.post('/addannouncement',addAnnouncements)

router.get('/getAnonuncements',getAnnouncements);

module.exports=router;