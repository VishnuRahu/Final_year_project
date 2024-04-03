"use client"

import React, { useEffect, useState } from "react";
import { motion, easeIn } from "framer-motion";
import { LeaveRequest } from "@/app/view_applied_leave/leavelist";
import { ILeave } from "@/types/leaverequest";
import { getFacultyLeaveRequest } from "@/api";

const ViewLeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState<ILeave[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedEmail = localStorage.getItem("user_email") ?? "";
      console.log(storedEmail);

      try {
        const data = await getFacultyLeaveRequest(storedEmail);
        setLeaveRequests(data);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };

    fetchData();
  }, []);

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
      <h1 className="mb-10 justify-content items-center text-center p-3 text-3xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        Applied Leave Requests
      </h1>
      {leaveRequests.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="/sick.jpeg"
            alt="No Leave Requests"
            className="max-w-xs"
          />
          <p>No leave requests found.</p>
        </div>
      ) : (
        leaveRequests.map((leaveRequest, index) => (
          <motion.div
            key={leaveRequest._id}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.5 }} // Delay each animation
            className="m-1 my-2 p-1"
          >
            <LeaveRequest leaveRequest={leaveRequest} />
          </motion.div>
        ))
      )}
    </>
  );
};

export default ViewLeaveRequest;
