const schema=require("../models/tasks")
const userSchema = require("../models/userSchema");

const addTasks=async(req,res)=>{
    try{
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
      if(req.body.role=="HOD"){
        const data=await schema.find({status:"Inprogress"});
        if(data){
          res.status(201).send(data)
        }
      }
      else if(req.body.role=="Faculty"){
        const data=await schema.find({assigned_to:req.body.name});
        if(data){
            res.status(201).send(data)
        }
      } 
      
    }
    catch(e){
        console.log(e)
    }
}

const getTasksById = async (req, res) => {
    const id = req.params.id;
    
    try {
        if(id){
            const user = await userSchema.findOne({ _id: id}).select("role");
            const user1 = await userSchema.findOne({ _id: id}).select("name");
            let role = user?.role;
            let name=user1?.name;
            if(role=="HOD" || role=="Principal"){
                const data = await schema.find();
                if(data){
                    return res.status(200).send(data)
                }
            } else if(role=="Faculty"){
                console.log(name)
                const data = await schema.find({assigned_to:name});
                if(data){
                    return res.status(200).send(data)
                }
            }
        }    
    } catch (error) {
        console.log('error :', error);
    }

    return res.status(400).send({success: false, message: 'Data Not Found'})
}

const getIndtasks=async(req,res)=>{
    try{
      const _id=req.body._id ;
      const data=await schema.findOne({_id});
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

const updateTask=async(req,res)=>{
    const _id=req.body._id;
    console.log(_id)
    try{
        const res=await schema.updateOne({_id:_id},{$set:{status:"completed"}})
        if(res){
            return res.status(200).send({sucess: true, message: 'Post Updated!'})
        } else {
            return res.status(400).send({sucess: false, message: 'Error in Update'})
        }
    }catch (error) {
        console.log('error :', error);
    }
}

module.exports={
    addTasks,
    getTasks,
    deleteTask,
    getIndtasks,
    getTasksById,
    updateTask
}
