const schema=require("../models/announcement")

const addAnnouncements=async(req,res)=>{
    try{
        const {title,description,author}=req.body;
        console.log(title,description,author)
        const data=new schema(req.body);
        const result=await data.save()
        if(result){
            res.json({
                status:"success",
                message:"announcement Detail added"
            })
        }
        else{
            res.send("error")
        }
    }catch(error){
        console.log(error)
    }
}


const getAnnouncements=async(req,res)=>{
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
    addAnnouncements,
    getAnnouncements
}