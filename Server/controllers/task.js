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

module.exports={
    addTasks,
    getTasks
}
