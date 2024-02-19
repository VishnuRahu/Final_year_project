const schema=require("../models/announcement")

const addAnnouncements=async(req,res)=>{
    try{
        const {title,description,author}=req.body;
        console.log(title,description,author)
        const result=await schema.updateOne({$push:{announcement:{"title":title,"description":description,"author":author}}});
        if(result){
            res.json({
                status:"Failed",
                message:"Not able to add announcement Detail"
            })
        }
        else{
            res.send("added announcement!")
        }
    }catch(error){
        console.log(error)
    }
}


const getAnnouncements=async(req,res)=>{
    try{
      const data=await schema.find().select('announcement');
      if(data){
        res.json({
            data:data
        })
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