const schema=require("../models/calender")

const addOne = async (req,res) =>{
    try{
        console.log(req.body)
        const email=req.body.email
        const data=await schema.findOne({email:email})
        console.log(data)
        if(data){
            const result=await schema.updateOne({email:email},{$set:{events:req.body.events}})
            if(result){
                res.send("success")
            }
            else{
                res.send("error")
            }
        }
        else{
            const data = new schema(req.body);
            const result = await data.save()
            if(result){
                res.json({ status:"success", message:"calender Detail added" })
            }
            else{
                res.send("error")
            }
        }

        
    }catch(error){
        console.log(error)
    }
}


const getAll = async (req, res) => {
    try{
      const email=req.body.email  
      const data = await schema.find({email:email}).select("events");
      console.log(data[0].events)
      if(data){
        res.status(200).send(data)
      }
    }
    catch(e){
        console.log(e)
    }
}

const deleteEvent=async(req,res)=>{
    console.log(req.body)
    try{
    const query=await schema.updateOne({"email":req.body.email},{$pull:{"events":{"id":req.body.eventsId}}})
    if(query){
        res.send("event deleted successfully")
    }
    }catch(err){
        console.log(err)
    }
}


module.exports={ addOne, getAll,deleteEvent}