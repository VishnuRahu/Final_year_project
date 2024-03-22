
import Image from "next/image";

import Link from "next/link"



import { Overlay } from "@/app/dashboard/_components/board-card/overlay"
import {Footer} from "@/app/dashboard/_components/board-card/footer"

interface BoardcardProps{
    _id:string,
    title:string,
    description:string,
    status:string,
    assigned_to:string,
}

export const Boardcard: React.FC<BoardcardProps>=({
     _id,
     title,
     description,
     status,
     assigned_to

}:BoardcardProps)=>{
    return(
        <>
         
        <div className="group aspect-[100/105] border rounded-lg flex
        flex-col justify-between overflow-hidden mr-6 ml-6">
            <div className="relative flex-1 bg-amber-50">
            <Image
                  alt="hello"
                  src="/tsk1.jpeg"
                  fill
                  className="h-0.5"
               />
               <Overlay id={_id}/>
               </div>
               <Link href={`./ind_task?id=${_id}`}>
               <Footer
                 title={title}
                 description={description}
                 assigned_to={assigned_to}
                 status={status}
                />
                </Link>
            
        </div>
        
        </>
    )
}
