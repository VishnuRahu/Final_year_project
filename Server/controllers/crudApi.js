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
        const result=await schema.find().select("name");
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
        const email = req.body.email;
        const result = await schema.findOne({email:email});
        console.log(result)
        if(result==null){
            res.send({ success: false , message: "Not a registered User." })
        }
        else if(result.status=="Pending"){
            res.send({ success: false , message: "User account is not yet activated, Contact admin for the support" })
        }else if(result && await bcrypt.compare(req.body.password,result.password) ){
            res.send({ success: true , message: "Valid User", data: result })
        } else {
            res.send({ success: false , message: "Invalid Credentials" })
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

const getUserById = async (req, res) => {
    try {
        let _id = req.params.id;
        if(_id){
            const user = await schema.find({_id});
            res.status(200).send({ success: true, message: "data fetched!", data: user});
        } else {
            res.status(400).send({ success: false, message: "id not found in the params"});
        }
    } catch (error) {
        console.log('error :', error);
        res.status(400).send({ success: false, message: "error while fetching data", error});
    }
}

module.exports={
    updateUser,
    deleteUser,
    fetchallUser,
    fetchUser,
    fetchUsers,
    login,
    updateUserEmail,
    getUserById
}