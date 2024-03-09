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
const task_router=require('./routes/taskrouters')


const itemsRouter = require("./routes/Item");
app.use("/api/v1/items", itemsRouter);


const announcement_router=require("./routes/announcementroute");
app.use(announcement_router);

app.use(router);

app.use(task_router)


app.listen(port,()=>{
    console.log('Connnected to the port');
})

