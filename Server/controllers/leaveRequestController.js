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
      const data = await schema.find();
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
        console,log(user)
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




module.exports={ addOne, getAll,updateOne }