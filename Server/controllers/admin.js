const schema=require("../models/userSchema")

const getAllregistrationRequest = async (req, res) => {
    try{
        const data = await schema.find({status:"Pending"},{_id:1,name:1,email:1,role:1,isAided:1});
        res.status(200).send(data)
     
    }
    catch(e){
        console.log(e)
    }
}

const registerApproval=async(req,res)=>{
    try{
        console.log("inside approval")
        const _id=req.body._id;
        const status=req.body.status;
        const data=await schema.updateOne({_id:_id},{$set:{status:status}})
        if(data){
            return res.status(200).send({sucess: true, message: 'Request Updated!'})
        } else {
            return res.status(400).send({sucess: false, message: 'Error in Update'})
        }
    }catch(e){
        console.log(e)
    }
}
module.exports={getAllregistrationRequest,registerApproval}