"use client"
import {ViewLeaveRequest} from "@/app/leave_Request/viewLeaveList"
import { useState,useEffect } from "react"

import { useRouter } from 'next/navigation';

import {ILeave} from "@/types/leaverequest"
import { getAllLeaveRequest } from "@/api"

export default  function LeaveRequestPage() {

  const router=useRouter();

  const [leaveRequests, setLeaveRequests] = useState<ILeave[]>([]);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const fetchedLeaveRequests: ILeave[] = await getAllLeaveRequest();
        router.refresh();
        setLeaveRequests(fetchedLeaveRequests);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };
    fetchData(); 
  }, []);


  return ( 
   <div className="space-y-6 ">
   <h1 className="mb-10 p-3 text-3xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        Leave Requests
        </h1> 
   <ViewLeaveRequest leaveRequests={leaveRequests} /> 
   </div> 
  )
}