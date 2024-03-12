const mongoose=require("mongoose")

const leaveSchema=new mongoose.Schema({
        email:
        { type:String, 
          required:true 
        },
        casual_leave:
        { type:Number, 
          default:15 
        },
        Earned_leave:
        { type:Number,
          default:10 
        },
        Medical_leave:
        { type:Number, 
          default:10 
        },
        Onduty:
        { type:Number, 
          default:7 
        },
})

module.exports=mongoose.model("Leaves",leaveSchema);