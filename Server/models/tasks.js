const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        assigned_to:{
            type:String,
            required:true
        },
        assigned_date:{
            type:Date,
            default:new Date()
        },
        deadline:{
            type:Date,
            required:true
        }
    
})

module.exports=mongoose.model("Tasks",taskSchema);