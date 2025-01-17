"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


import {ILeave} from "@/types/leaverequest"
import {DeclineLeave} from "@/app/leave_Request/decline"
import axios from "axios"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"


interface ViewLeaveRequestProps {
    leaveRequest : ILeave
} 

export const LeaveRequest: React.FC<ViewLeaveRequestProps>  = ({leaveRequest}) => {

    const router = useRouter();
    const [isModifiable, setIsModifiable] = useState<boolean>(true);
    const [isModifiableComments, setIsModifiableComments] = useState<boolean>(false);
    
    

    const [role, setRole] = useState("");

    useEffect(() => {
        setRole(localStorage.getItem("user_role") ?? '');
        if (leaveRequest.status === "Declined by Principal") {
            setIsModifiable(false);
            setIsModifiableComments(true);
        }
    }, [leaveRequest.status]); 
    
    const handleSubmit=(_id:String,email:String)=>{
        console.log(_id,role);
        alert(email+" leave request accepted")
        axios({
            method: "put",
            url: "http://localhost:8000/leaveRequestApproval",
            data: {
              _id:_id,
              role:role    
            },
          }).then((res) => {
            console.log("RESPONSE :", res.data);
            router.refresh();
          })
    }

    return (
        <>
        
            <Card className=" ml-6 mr-6 mb-3transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:shadow-md">
                <CardHeader>
                    <div className="flex justify-center">
                        <div className=" flex items-center space-x-4 ">
                            
                            <div className="flex-1 space-y-2">
                                <div className="justify-center ">
                                <CardTitle> {"Leave Request for "+leaveRequest.email} </CardTitle>
                                </div>   
                                <CardDescription className="text-center"> {leaveRequest.type_of_leave} </CardDescription>   
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent> <p className=""> {"Reason : "+leaveRequest.reason} </p> </CardContent>
                <CardContent> <p className=""> {"Leave From : "+leaveRequest.from} </p> </CardContent>
                <CardContent> <p className=""> {"Leave to : "+leaveRequest.to} </p> </CardContent>
                <CardContent> <p className=""> {"Alternate Class Details : "+leaveRequest.alternate_class} </p> </CardContent>
                {isModifiableComments?<div>
                    <CardContent> <p className=""> {"Comments: "+leaveRequest.comments} </p> </CardContent>
                </div>:null}
                {isModifiable ?<div className="flex  p-6 justify-center ">
                        <Button className="mr-9 bg-green-500"  onClick={()=>{handleSubmit(leaveRequest._id,leaveRequest.email)}}>Accept</Button>   
                        <DeclineLeave leaveRequest={leaveRequest}/> 
            </div>:null}
            </Card>
        </>
    )
}

