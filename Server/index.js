const express=require('express');
const app=express();

const cors=require('cors');

app.use(express.json());
app.use(cors({
    origin:"*"
}))

const port=process.env.port||8000;
require('./db/conn')
const router=require('./routes/crudRouters');
app.use(router);

const task_router=require('./routes/taskrouters')
app.use(task_router)

const leave_router=require("./routes/leaverouter");
app.use(leave_router);

const admin_router=require("./routes/admin");
app.use(admin_router);


const leave_request_router=require("./routes/leaveRequestRouter");
app.use(leave_request_router);

const announcement_router=require("./routes/announcementroute");
app.use(announcement_router);

const subtask_router=require("./routes/subtask");
app.use(subtask_router);

const calender_router=require("./routes/calender");
app.use(calender_router);


app.listen(port,()=>{
    console.log('Connnected to the port');
})

