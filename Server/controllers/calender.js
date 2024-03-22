const schema=require("../models/calender")

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



module.exports={ addOne, getAll}