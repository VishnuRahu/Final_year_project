"use client";
import { useState, useEffect } from "react";
import Banner from "./_components/banner";
import { AddAnnouncement } from "./_components/add-announcement";
import { motion, easeIn } from "framer-motion"


interface Announcement {
  title: string;
  description: string;
  uploaded_time: string;
  author: string;
}

const AnnoucementsPage = () => {

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
      let response = await fetch('http://localhost:8000/announcement');
      let data: Announcement [] = await response.json();
      if(data && data?.length > 0){
        setAnnoucements(data);
      }
    }
    
    load();

}, []);

  return ( 
   <div> 
    <AddAnnouncement />
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
  )
}

export default AnnoucementsPage