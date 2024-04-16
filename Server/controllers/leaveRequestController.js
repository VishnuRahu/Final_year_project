const schema=require("../models/leaveRequest")
const userSchema=require("../models/userSchema")

const addOne = async (req,res) =>{
    try{
        console.log(req.body)
        const data = new schema(req.body);
        const result = await data.save()
        if(result){
            res.json({ status:"success", message:"announcement Detail added" })
        }
        else{
            res.send("error")
        }
    }catch(error){
        console.log(error)
    }
}


const getAll = async (req, res) => {
    try{
        const data = await schema.find({status:"Pending"});
        res.status(200).send(data)
     
    }
    catch(e){
        console.log(e)
    }
}

const getIndreq=async(req,res)=>{
    try{
      const data=await schema.find({email:req.params.email})
      if(data){
        res.status(200).send(data)
      }
      console.log(data)
    }
    catch(err){
       console.log(err)
    }
}

const getAllPrincipal = async (req, res) => {
    try{
        const data = await schema.find({status:"Accepted by HOD"});
        res.status(200).send(data)
     
    }
    catch(e){
        console.log(e)
    }
}

const updateOne = async (req,res) => {
    try{
        let user = req.body;
        console.log(user)
        const data = await schema.updateOne({ _id : user._id}, user);
        if(data){
            return res.status(200).send({sucess: true, message: 'Post Updated!'})
        } else {
            return res.status(400).send({sucess: false, message: 'Error in Update'})
        }
    } catch (error) {
        console.log('error :', error);
    }
}

const update_status=async(req,res)=>{
    try{
      
        let user=req.body.role
        let _id=req.body._id
        console.log(_id,user)
        if(user=="HOD"){
            let status = "Accepted by HOD"
            const data=await schema.updateOne({_id:_id},{$set:{status:status}})
            if(data){
                return res.status(200).send({sucess: true, message: 'Request Updated!'})
            } else {
                return res.status(400).send({sucess: false, message: 'Error in Update'})
            }
        }
        if(user=="Principal"){
            let status = "Accepted by Principal"
            const data=await schema.updateOne({_id:_id},{$set:{status:status}})
            if(data){
                return res.status(200).send({sucess: true, message: 'Request Updated!'})
            } else {
                return res.status(400).send({sucess: false, message: 'Error in Update'})
            }
        }

    }catch(err){
        console.log(err)
    }
}

const getLeaveById=async(req,res)=>{
    try{
        console.log(req.body._id)
        const data=await schema.find({_id:req.body._id})
        console.log(data);
        if(data){
          res.status(200).send(data)
        }
        console.log(data)
      }
      catch(err){
         console.log(err)
    }
}

const getPdf=async(req,res)=>{
    try{
         
            console.log(req.body.email);

            
            const regularFontPath = './Times New Roman/times new roman.ttf';
            const buffer = require('stream-buffers').WritableStreamBuffer;
            const PDFDocument = require('pdfkit');
            const doc = new PDFDocument();
            const pdfBuffer = new buffer();

            doc.pipe(pdfBuffer)

            const email=req.body.email;
            
            const reason=req.body.reason;
            const type=req.body.leave_type;
            const to=req.body.to;
            const from=req.body.from;
            console.log("to",to)
            doc.moveDown(3);
            doc.font(regularFontPath).text('Apply leave',{align:'center',underline: true});
            doc.moveDown(1);
            
            doc.moveDown(3);
            const firstLineIndentation = 20;
            doc.text(' '.repeat(firstLineIndentation), { continued: true });
            doc.font(regularFontPath).text(`This is to confirm that ${email} requested ${type} leave,from the start date ${from} to the end date ${to}.due to ${reason}.The leave request was approved by both the Head of Department (HOD) and the Principal.`);
            // doc.moveDown(2);
            const secondLineIndentation = 5;
            // doc.text(' '.repeat(secondLineIndentation), { continued: true });
            // doc.font(regularFontPath).text(`1. Date of Birth `);
            // doc.text(' '.repeat(secondLineIndentation), { continued: true });
            // doc.font(regularFontPath).text(`2. Religion : `);
            // doc.text(' '.repeat(secondLineIndentation), { continued: true });
            // doc.font(regularFontPath).text(`3. Nationality :Indian`);
            // doc.text(' '.repeat(secondLineIndentation), { continued: true });
            // doc.font(regularFontPath).text(`4. Address : psg`);

            // doc.moveDown(2);
            // // const thirdLineIndentation = 10;
            // // doc.text(' '.repeat(thirdLineIndentation), { continued: true });
            // doc.font(regularFontPath).text(`He resides in coimbatore`);
        
            // doc.moveDown(2);
            // doc.font(regularFontPath).text(`The Certificate is issued on his request to enable him to apply for sick leave`);
            
          //const secondLineIndentation = 8;

          doc.moveDown(6);

          doc.moveDown(6);

          // Fetch both images in parallel
          const imgDataPromise = userSchema.findOne({ email: req.body.email }).select('signature.data');
          const hodImgDataPromise = userSchema.findOne({ role: "HOD" }).select('signature.data');
          const principalImgDataPromise = userSchema.findOne({ role: "Principal" }).select('signature.data');
          
          // Resolve both promises concurrently
          const [imgData, imgData1,imgData2] = await Promise.all([imgDataPromise, hodImgDataPromise,principalImgDataPromise]);
          
          // Define image width and height
          const imageWidth = 50;
          const imageHeight = 50;
          
          // Set initial x-coordinate for the first image
          let xCoordinate = doc.page.margins.left;
          
          // Embed the first image
          if (imgData && imgData.signature && imgData.signature.data) {
              const base64Image = imgData.signature.data.toString('base64');
              doc.image(`data:image/jpeg;base64,${base64Image}`, {
                  width: imageWidth, 
                  height: imageHeight,
                  align: 'left', // Align the image to the left
                  x: xCoordinate, // Set x-coordinate
                  y: doc.y // Set y-coordinate
              });
          
              // Increase x-coordinate for the next image
              xCoordinate += imageWidth + 80; // Adding 10 for spacing between images
          }
         
          
          // Embed the second image
          if (imgData1 && imgData1.signature && imgData1.signature.data) {
              const base64Image = imgData1.signature.data.toString('base64');
              doc.image(`data:image/jpeg;base64,${base64Image}`, {
                  width: imageWidth, 
                  height: imageHeight,
                  align: 'left', // Align the image to the left
                  x: xCoordinate, // Set x-coordinate
                  y: doc.y // Set y-coordinate
              });
              xCoordinate += imageWidth + 80; 
            }

            if (imgData2 && imgData2.signature && imgData2.signature.data) {
                const base64Image = imgData2.signature.data.toString('base64');
                doc.image(`data:image/jpeg;base64,${base64Image}`, {
                    width: imageWidth, 
                    height: imageHeight,
                    align: 'left', // Align the image to the left
                    x: xCoordinate, // Set x-coordinate
                    y: doc.y // Set y-coordinate
                });
                
              }


          doc.moveDown(4);
          doc.text(' '.repeat(secondLineIndentation), { continued: true });
          
          doc.font(regularFontPath).text(`Faculty Signature       HOD Signature        Principal Signature`);  

          //doc.text(' '.repeat(secondLineIndentation), { continued: true });
          //doc.font(regularFontPath).text(`HOD Signature`); 
        
          
            
            doc.save()
            
            doc.end();

            
            
            pdfBuffer.on('finish', () => {
                const pdfContents = pdfBuffer.getContents();
                // const content = atob(pdfContents)
                content = pdfContents.toString('base64')
                //console.log(content);
                // console.log(pdfContents.toString('base64'));
                //getting back the pdf from the buffer
                //fs.writeFileSync('./temppdf/original1.pdf', pdfContents);


                //bonfide part
                // Date object
                const date = new Date();

                let currentDay= String(date.getDate()).padStart(2, '0');

                let currentMonth = String(date.getMonth()+1).padStart(2,"0");

                let currentYear = date.getFullYear();

                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();

                // we will display the date as DD-MM-YYYY 

                let currentDate = `${currentYear}-${currentMonth}-${currentDay}_${hours}:${minutes}:${seconds}`;

                //console.log("The current date is " + currentDate); 
                let date1 = new Date(currentDate)
                //const bfname = "_bonafide_"+currentDate

                //console.log(bfname)


                // Set up Multer for handling file uploads
                // const storage = multer.memoryStorage(); // Store files in memory
                // const upload = multer({ storage: storage });
 
                 //console.log(content);

                 const base64String = Buffer.from(content).toString()
                 return res.json({
                         message:"download",
                         content : base64String
                     })
                 

              });
        
    }
    catch(err){
        console.log("from generatepdf",err)
    }
}

const deniedleaveRequestPrincipal = async (req, res) => {
    try{
        const data = await schema.find({status:"Denied by Principal"});
        res.status(200).send(data)
     
    }
    catch(e){
        console.log(e)
    }
}

module.exports={ addOne, getAll,updateOne,update_status,getAllPrincipal,getIndreq,getPdf,getLeaveById,deniedleaveRequestPrincipal }