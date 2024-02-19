const mongoose=require("mongoose")

const announcementSchema=new mongoose.Schema({
    announcement:[{
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        uploaded_time:{
            type:Date,
            default:new Date()
        }
    }]
})

module.exports=mongoose.model("Announcements",announcementSchema);