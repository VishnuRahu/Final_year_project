"use client"

import Banner from "@/app/announcements/_components/banner";

import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css"; 
import {Input} from "@/components/ui/input";
import { motion, easeIn } from "framer-motion"
import {Button} from "@/components/ui/button"

interface Announcement {
    title: string;
    description: string;
    uploaded_time: string;
    author: string;
  }

const BoardPage=()=>{

    const [ annoucements, setAnnoucements] = useState<Announcement[]>([]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeIn },
        },
      };

    useEffect(() => {

        async function load(){
          let response = await fetch('http://localhost:3001/annoucements');
          let data: Announcement [] = await response.json();
          if(data && data?.length > 0){
            setAnnoucements(data);
          }
        }
        
        load();
    
    }, []);
    


    return(
        <div className="space-y-6 ">
            <h1 className="space-y-4 p-4 items-center text-center justify-center text-5xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                Task Management
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-4 items-center p-5 ">
                <div className="mr-7 mb-4 sm:mb-0">
                <Input  placeholder="Enter the task"/>
                </div>
                <div className="mr-7 mb-4 sm:mb-0">
                <Input  placeholder="Enter the task date"/>
                </div>
                <div className="mr-7 mb-4 sm:mb-0">
                <Input  placeholder="Enter the faculty id"/>
                </div>
                <div className="mr-7 mb-4 sm:mb-0">
                <Button bg-blue>Create</Button> 
                </div>                
                
            </div>
            <h1 className="p-3 text-3xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                On-going Progress
            </h1> 
            <div> 
    {annoucements.map((element, index) => {
      return (
          <motion.div
          key={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.5 }} // Delay each animation
          className="m-1 my-2 p-1"
        >
          <Banner announcement={element} />
        </motion.div>
      )
    })}
  </div> 
        </div>
    )
}

export default BoardPage;