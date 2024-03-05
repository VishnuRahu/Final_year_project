const schema=require('../models/userSchema');
const bcrypt=require('bcrypt');




const updateUser=async(req,res)=>{
    
    try{        
    const user=req.body._id;
    var pass=req.body.password;

    bcrypt.hash(pass,0,(err, hash)=>{
        if(err){
            next(err)
        }
        else{
            var myQuery={_id:user};
            var query={$set:{_id:user,password:hash}};
            var query1={$set:{_id:user,status:"Active"}};
            const result=async()=>{const res=await schema.updateOne(myQuery,query)};
            const result1=async()=>{const res=await schema.updateOne(myQuery,query1)};
            result(); 
            result1();
            if(result){
                res.json({
                    message:"Successfully Updated"
                })
            }
            else{
                res.json({
                    message:"Not able to Update"
                })
            }
        }
    })
    }catch(err){
        console.log(err);       
    }
    
}

const updateUserEmail=async(req,res)=>{
    try{        
    const user=req.body.email;
    var pass=req.body.password;

    bcrypt.hash(pass,0,(err, hash)=>{
        if(err){
            next(err)
        }
        else{
            var myQuery={email:user};
            var query={$set:{email:user,password:hash}};
            const result=async()=>{const res=await schema.updateOne(myQuery,query)};
            result(); 
            if(result){
                res.json({
                    message:"Successfully Updated"
                })
            }
            else{
                res.json({
                    message:"Not able to Update"
                })
            }
        }
    })
    }catch(err){
        console.log(err);       
    }
}

const deleteUser=async(req,res)=>{
    try{
        const result=await schema.deleteOne({email:req.body.email});
        if(result){
            res.json({
                message:"Deleted Successfully",
            })
        }
        else{
            res.json({
                message:"Failed to Delete a Record",
            })
        }  
    }catch(e){
        console.log(e);
    }
}

const fetchallUser=async(req,res)=>{
    try{
        const result=await schema.find().select("-password");
        if(result){
            res.json({
                result
            })
        }
        else{
            res.json({
                message:"Failed to fetch data",
            })
        }    
    }catch(e){
        console.log(e);
    }
}

const fetchUser=async(req,res)=>{
    try{
        const result=await schema.findOne({email:req.body.email}).select("-password");
        if(result){
            res.json({
                result
            })
        }
        else{
            res.json({
                message:"Failed to fetch data",
            })
        }    
    }
    catch(e){
        console.log(e);
    }
}

const login=async(req,res)=>{
    try{
        const email=req.body.email;
        console.log(email);
        console.log(req.body.password);
        const result=await schema.findOne({email:email});
        console.log(result.isApproved);
        if(!result.isApproved){
            res.send("notApproved")
        }
        else if(result && await bcrypt.compare(req.body.password,result.password) ){
            res.send("True")
            
        }
        else{
            res.send("False")
        }    
    }
    catch(e){
        console.log(e);
    }
}

const fetchUsers=async(req,res)=>{
    try{
        const result=await schema.find({shopname:req.body.shopname}).select("-password");
        console.log("From fetchUsers API : "+result);
        if(result.length==0){
            res.json({
                message:"Failed to fetch data",
            })
        }
        else{
            res.json({
                result
            })
        }
            
      
    }catch(e){
        console.log(e);
    }
}

module.exports={
    updateUser,
    deleteUser,
    fetchallUser,
    fetchUser,
    fetchUsers,
    login,
    updateUserEmail
}