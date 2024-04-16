"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


import {Registration} from "@/types/registration"
import axios from "axios"
import { useRouter } from 'next/navigation';


interface ViewRegistrationRequestProps {
    registrationRequest : Registration
} 

export const Registrationlist: React.FC<ViewRegistrationRequestProps>  = ({registrationRequest}) => {

    const router = useRouter();

    const handleSubmit=(_id:String,status:String)=>{
        console.log(_id);
        axios({
            method: "put",
            url: "http://localhost:8000/registrationRequestApproval",
            data: {
              _id:_id, 
              status:status
            },
          }).then((res) => {
            console.log("RESPONSE :", res.data);
            router.refresh();
          })
    }

    
    

    return (
        <>
            {/* <h1>Green colour shows - Your Leave Request is approved Red colour shows -Your Leave Request is Waiting/Declined  </h1> */}
            <Card className={`ml-6 mr-6 mb-3transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:shadow-md`}>
                <CardHeader>
                    <div className="flex justify-center">
                        <div className=" flex items-center space-x-4 ">
                        
                            <div className="flex-1 space-y-2">
                            
                                <div className="justify-center ">
                                <CardTitle> {"Registration Request"} </CardTitle>
                                </div>   
                               
                                   
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent> <p className=""> {"Name : "+registrationRequest.name} </p> </CardContent>
                <CardContent> <p className=""> {"Email : "+registrationRequest.email} </p> </CardContent>
                <CardContent> <p className=""> {"Role : "+registrationRequest.role} </p> </CardContent>
                <CardContent> <p className=""> {"Aided staff : "+registrationRequest.isAided} </p> </CardContent>
                <div className="flex  p-6 justify-center ">
                         <Button className="mr-9 bg-green-500 text-white"  onClick={() => { handleSubmit(registrationRequest._id, "Success") }}>Accept</Button>
                        <Button className="mr-9" variant={"destructive"} onClick={()=>{handleSubmit(registrationRequest._id,"Declined")}}>Decline</Button>   
                        
            </div>
            </Card>
        </>
    )
}
