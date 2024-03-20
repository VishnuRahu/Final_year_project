const schema=require("../models/subtask")

const addOne = async (req,res) =>{
    try{
        console.log(req.body)
        const taskId=req.body.TaskId
        const data=await schema.findOne({TaskId:taskId})
        console.log(data)
        if(data){
            const result=await schema.updateOne({TaskId:taskId},{$set:{subtask:req.body.subtask}})
            if(result){
                res.send("success")
            }
            else{
                res.send("error")
            }
        }
        else{
          const data=new schema(req.body)
          const result=await data.save()
          if(result){
            res.send("data saved")
        }
        else{
            res.send("error")
        }
        }
    }catch(error){
        console.log(error)
    }
}

const getSubTask=async(req,res)=>{
    try{
        const taskId=req.body.TaskId
        const data=await schema.findOne({TaskId:taskId})
        if(data){
            res.json(data)
        }
    }catch(errr){
        console.log(err)
    }
    
}

module.exports={addOne,getSubTask}
