const express=require('express');
const schema=require('../models/userSchema');
const bcrypt=require('bcrypt');

const {addUser,updateUser,deleteUser,fetchallUser,fetchUser,fetchUsers,login,updateUserEmail}=require('../controllers/crudApi');

const router=express.Router();

router.post('/addUser',addUser);

router.patch('/updateUser',updateUser);

router.delete('/deleteUser',deleteUser);

router.get('/fetchallUser',fetchallUser);

router.post('/fetchUser',fetchUser);

router.get('/fetchUsers',fetchUsers);


router.post('/login',login);

router.patch('/updateUserEmail',updateUserEmail);

module.exports=router;