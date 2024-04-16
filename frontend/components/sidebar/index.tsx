"use client";
import { useEffect, useState } from "react";
import { Item } from "./items"

import Link from "next/link"

export const Sidebar = () => {

  const [id, setId] = useState('');
  useEffect(() => {
    async function onLoad(){
      setId(await localStorage.getItem("user_id") ?? '');
    }

    onLoad();
  }, [])
  
  return (
    <div className="fixed z-[1] left-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 h-full w-[60px] frex p-3 flex-col gap-y-4 text-white">
      {/* <div className="mt-[120px]"> */}
      <Link className="m-[20px]" href={`/announcements`}> <Item key={1} id={"1234"} name={"Announcements"} imageSrc="/download.png" /> </Link>
      <Link className="m-[20px]" href={`/tasks/${id}`}> <Item key={2} id={"1232"} name={"Tasks"} imageSrc="/task.jpeg" /> </Link>
      <Link className="m-[20px]" href={`/Calender`}> <Item key={3} id={"1233"} name={"Calender"} imageSrc="/calender.png" /> </Link>
      <Link className="m-[20px]" href={`/leave_approval`}> <Item  key={4} id={"1234"} name={"Apply Leave"} imageSrc="/sick.jpeg" /> </Link>
      <Link className="m-[20px]" href={`/auth/login`}> <Item  key={5} id={"1235"} name={"Logout"} imageSrc="/logout.png" /> </Link>
      {/* </div> */}
    </div>
  )
}