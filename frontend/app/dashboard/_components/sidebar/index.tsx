import {Item} from "./items"

import Link from "next/link"

export const Sidebar=()=>{
    return(
        <aside className="fixed z-[1] left-0 bg-blue-950
        h-full w-[60px] frex p-3 flex-col gap-y-4 text-white">
           
           <Item
             key={1}
             id={"1234"}
             name={"Announcements"}
             imageSrc="/download.png" 
           /> 
           <Link href={`/dashboard/`}>
           <Item 
             key={2}
             id={"1232"}
             name={"Tasks"}
             imageSrc="/task.jpeg" 
           /> 
           </Link>
            <Item 
             key={3}
             id={"1233"}
             name={"Calender"}
             imageSrc="/calender.png" 
           />

           <Item 
             key={4}
             id={"1234"}
             name={"Apply Leave"}
             imageSrc="/sick.jpeg" 
           /> 
        </aside>
    )
}