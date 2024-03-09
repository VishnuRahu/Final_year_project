import {Item} from "./items"

import Link from "next/link"

export const Sidebar=()=>{
    return(
      <aside className="fixed z-[1] left-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800
      h-full w-[60px] frex p-3 flex-col gap-y-4 text-white">
         <Link href={`./announcements`}>
         <Item
           key={1}
           id={"1234"}
           name={"Announcements"}
           imageSrc="/download.png" 
         /> 
         </Link>
         <Link href={`./Task`}>
         <Item 
           key={2}
           id={"1232"}
           name={"Tasks"}
           imageSrc="/task.jpeg" 
         /> 
         </Link>
         <Link href={`./Calender`}>
          <Item 
           key={3}
           id={"1233"}
           name={"Calender"}
           imageSrc="/calender.png" 
         />
         </Link>
         <Link href={`./leave_approval`}>
         <Item 
           key={4}
           id={"1234"}
           name={"Apply Leave"}
           imageSrc="/sick.jpeg" 
         /> 
         </Link>
      </aside>
    )
}