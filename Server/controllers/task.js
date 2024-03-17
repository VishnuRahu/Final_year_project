const schema=require("../models/tasks")

const addTasks=async(req,res)=>{
    try{
        console.log("inside tasks");
        const data=new schema(req.body);
        const result=await data.save()
        if(result){
            res.json({
                status:"success",
                message:"Task Detail added"
            })
        }
        else{
            res.send("error")
        }
    }catch(error){
        console.log(error)
    }
}
const getTasks=async(req,res)=>{
    try{
      const data=await schema.find();
      if(data){
        res.status(201).send(data)
      }
    }
    catch(e){
        console.log(e)
    }
}

const getIndtasks=async(req,res)=>{
    try{
      const _id=req.body._id ;
      console.log(_id) 
      const data=await schema.findOne({_id});
      console.log(data)
      if(data){
        res.status(201).send(data)
      }
    }
    catch(e){
        console.log(e)
    }
}

const deleteTask = async (req,res) => {
    try{
        let _id = req.params.id;
        console.log(_id);
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

module.exports={
    addTasks,
    getTasks,
    deleteTask,
    getIndtasks
}
