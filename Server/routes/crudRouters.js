const express=require('express');
const schema=require('../models/userSchema');
const bcrypt=require('bcrypt');

const multer=require("multer")

const fs = require('fs');


var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
  });
  
  var upload = multer({ storage: storage });


const {updateUser,deleteUser,fetchallUser,fetchUser,fetchUsers,login,updateUserEmail}=require('../controllers/crudApi');

const router=express.Router();

router.post('/addUser',upload.single('image'),async(req,res)=>{
    try{
        console.log(req.body)
        console.log(req.file)
        const user=await schema.findOne({email:req.body.email})
        if(!user){

            var obj={
                name: req.body.name,
                password:req.body.password,
                role:req.body.role,
                signature: {
                    data :fs.readFileSync(path.join(__dirname , '../uploads/' + req.file.filename)), // Save the image as binary data
                    contentType: req.file.mimetype,
                },
                email:req.body.email
              }
            const createdItem = await schema.create(obj);
            if(createdItem){
                res.json({
                    status:"Failed",
                    message:"Not able to add User Detail"
                })
            }
            else{
                res.send("Registered Successfully!")
            }
        }
        else{
            res.send("Already registered")
        }
    }catch(e){
        console.log(e);
    };
});

router.patch('/updateUser',updateUser);

router.delete('/deleteUser',deleteUser);

router.get('/fetchallUser',fetchallUser);

router.post('/fetchUser',fetchUser);

router.get('/fetchUsers',fetchUsers);


router.post('/login',login);

router.patch('/updateUserEmail',updateUserEmail);

module.exports=router;