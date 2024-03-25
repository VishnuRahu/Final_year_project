const mongoose=require("mongoose")

const calenderSchema=new mongoose.Schema({
        email:
        { type:String, 
          required:true 
        },
        events:[{
            title:{
                type:String,
                required:true
            },
            start:{
                type:mongoose.Schema.Types.Mixed,
                required:true
            },
            allDay:{
                type:Boolean
            },
            id:{
                type:Number,
                required:true
            }
        }]
})

module.exports=mongoose.model("calender",calenderSchema);