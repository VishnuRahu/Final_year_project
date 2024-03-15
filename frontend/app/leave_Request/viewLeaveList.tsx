"use client";

import { motion, easeIn } from "framer-motion"
import {LeaveRequest} from "@/app/leave_Request/leavelist"

import {ILeave} from "@/types/leaverequest"


interface ViewLeaveRequestProps {
    leaveRequests : ILeave[]
} 


export const ViewLeaveRequest: React.FC<ViewLeaveRequestProps> = ({ leaveRequests }) => {

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeIn },
        },
      };

    return (
        <>
            {leaveRequests.map((leaveRequest, index) => (
                <motion.div
                key={leaveRequest._id}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.5 }} // Delay each animation
                className="m-1 my-2 p-1"
              >
              <LeaveRequest leaveRequest={leaveRequest}/>
              </motion.div>
                ))}
        </>
    )
}
