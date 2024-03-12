const mongoose=require("mongoose")

const leaveRequestSchema=new mongoose.Schema({
        email:
        { type:String, 
          required:true 
        },
        Designation:
        { type:String, 
          required:true 
        },
        type_of_leave:
        { type:String, 
            required:true 
        },
        from:
        { type:Date, 
          required:true
        },
        to:
        { type:Date, 
          required:true 
        },
        alternate_class:{
           type:String,
           required:true
        },
        isApproved_HOD:{
            type:Boolean,
            default:false
        },
        isApproved_Principal:{
            type:Boolean,
            default:false
        }
})

module.exports=mongoose.model("leaveRequests",leaveRequestSchema);