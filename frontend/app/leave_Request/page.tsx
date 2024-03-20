import {ILeave} from "@/types/leaverequest"
import { getAllLeaveRequest } from "@/api"
import {ViewLeaveRequest} from "@/app/leave_Request/viewLeaveList"

export default  async function LeaveRequestPage() {

  const leaveRequests: ILeave[] = await getAllLeaveRequest();

  return ( 
   <div className="space-y-6 ">
      <h1 className="mb-10 p-3 text-3xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        Leave Requests
      </h1> 
      <ViewLeaveRequest leaveRequests={leaveRequests} /> 
    </div> 
  )
}