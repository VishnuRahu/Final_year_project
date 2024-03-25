"use client";

import React from 'react'
import { motion, easeIn } from "framer-motion"
import { ITask } from "@/types/tasks";
import { Boardcard } from "@/app/tasks/[id]/_components/board-card/index";


type Props = {
    tasks: ITask[]
}

const ViewTasks: React.FC<Props> = ({ tasks }) => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeIn },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-20 mt-8 pb-10">
      {tasks?.map((task, index) => (
          <motion.div
          key={task._id}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.5 }} // Delay each animation
          className="m-1 my-2 p-1"
        >
          <Boardcard
            key={task._id}
            _id={task._id}
            title={task.title}
            description={task.description}
            status={task.status}
            assigned_to={task.assigned_to}
          />
        </motion.div>
          ))}
    </div>
  )
}

export default ViewTasks