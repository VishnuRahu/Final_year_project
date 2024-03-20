const schema=require("../models/leaveRequest")

const addOne = async (req,res) =>{
    try{
        console.log(req.body)
        const data = new schema(req.body);
        const result = await data.save()
        if(result){
            res.json({ status:"success", message:"announcement Detail added" })
        }
        else{
            res.send("error")
        }
    }catch(error){
        console.log(error)
    }
}


const getAll = async (req, res) => {
    try{
      const data = await schema.find({status:"Pending"});
      if(data){
        res.status(200).send(data)
      }
    }
    catch(e){
        console.log(e)
    }
}

const updateOne = async (req,res) => {
    try{
        let user = req.body;
        console.log(user)
        user.status="Declined";
        const data = await schema.updateOne({ _id : user._id}, user);
        if(data){
            return res.status(200).send({sucess: true, message: 'Post Updated!'})
        } else {
            return res.status(400).send({sucess: false, message: 'Error in Update'})
        }
    } catch (error) {
        console.log('error :', error);
    }
}

const update_status=async(req,res)=>{
    try{
      
        let user=req.body.role
        let _id=req.body._id
        console.log(_id,user)
        if(user=="HOD"){
            let status = "Accepted by HOD"
            const data=await schema.updateOne({_id:_id},{$set:{status:status}})
            if(data){
                return res.status(200).send({sucess: true, message: 'Request Updated!'})
            } else {
                return res.status(400).send({sucess: false, message: 'Error in Update'})
            }
        }
        if(user=="Principal"){
            let status = "Accepted by Principal"
            const data=await schema.updateOne({_id:_id},{$set:{status:status}})
            if(data){
                return res.status(200).send({sucess: true, message: 'Request Updated!'})
            } else {
                return res.status(400).send({sucess: false, message: 'Error in Update'})
            }
        }

    }catch(err){
        console.log(err)
    }
}

module.exports={ addOne, getAll,updateOne,update_status }