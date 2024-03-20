const mongoose=require("mongoose")

const subTaskSchema=new mongoose.Schema({
        TaskId:{
            type:String,
            required:true
        },
        subtask:[{
            id:{
              type:Number,
              required:true
            },
            name:{
                type:String,
                required:true
            },
            isCompleted:{
                type:Boolean,
                required:true
            }

        }]
    
})

module.exports=mongoose.model("subtasks",subTaskSchema);