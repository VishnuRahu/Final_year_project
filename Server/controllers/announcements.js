const schema=require("../models/announcement")

const addOne = async (req,res) =>{
    try{
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
        res.status(201).send(data)
      }
    }
    catch(e){
        console.log(e)
    }
}

const updateOne = async (req,res) => {
    try{
        let user = req.body;
        console.log('user :', user);
        const data = await schema.updateOne({ _id : user._id}, user);
        console.log('data :', data);
        if(data){
            return res.status(200).send({sucess: true, message: 'Post Updated!'})
        } else {
            return res.status(400).send({sucess: false, message: 'Error in Update'})
        }
    } catch (error) {
        console.log('error :', error);
    }
}

const deleteOne = async (req,res) => {
    try{
        let _id = req.params.id;
        const data = await schema.deleteOne({ _id});
        if(data){
            return res.status(200).send({sucess: true, message: 'Post Updated!'})
        } else {
            return res.status(400).send({sucess: false, message: 'Error in Update'})
        }
    } catch (error) {
        console.log('error :', error);
    }
}

module.exports={ addOne, getAll, updateOne, deleteOne }