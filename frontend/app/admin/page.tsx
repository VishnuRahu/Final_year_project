"use client"

import React, { useEffect, useState } from "react";
import { motion, easeIn } from "framer-motion";
import { Registrationlist } from "@/app/admin/registrationlist";
import { Registration } from "@/types/registration";
import { getAllRegistrationRequest } from "@/api";

const ViewLeaveRequest = () => {
  const [registrationRequests, setregistrationRequests] = useState<Registration[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRegistrationRequest();
        setregistrationRequests(data);
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
        Applied Registration Requests
      </h1>
      {registrationRequests.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="/sick.jpeg"
            alt="No Leave Requests"
            className="max-w-xs"
          />
          <p>No Registration Request found.</p>
        </div>
      ) : (
        registrationRequests.map((registrationRequest, index) => (
          <motion.div
            key={registrationRequest._id}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.5 }} // Delay each animation
            className="m-1 my-2 p-1"
          >
            <Registrationlist registrationRequest={registrationRequest} />
          </motion.div>
        ))
      )}
    </>
  );
};

export default ViewLeaveRequest;
