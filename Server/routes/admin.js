const express=require('express');
const { getAllregistrationRequest,registerApproval}=require('../controllers/admin');

const router=express.Router();

router.get('/registrationRequest',getAllregistrationRequest);
router.put('/registrationRequestApproval',registerApproval)

module.exports=router;