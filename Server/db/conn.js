const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/backstage').then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log("Error");
})