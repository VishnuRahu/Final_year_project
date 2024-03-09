"use client"

import Image from "next/image";


import { Overlay } from "@/app/dashboard/_components/board-card/overlay"
import {Footer} from "@/app/dashboard/_components/board-card/footer"

interface BoardcardProps{
    key:string,
    title:string,
    description:string
}

export const Boardcard=({
     key,
     title,
     description

}:BoardcardProps)=>{
    return(
        
        <div className="group aspect-[100/105] border rounded-lg flex
        flex-col justify-between overflow-hidden mr-6 ml-6">
            <div className="relative flex-1 bg-amber-50">
            <Image
                  alt="hello"
                  src="/tsk1.jpeg"
                  fill
                  className="h-0.5"
               />
               <Overlay/>
               </div>
               <Footer
                 title={title}
                 description={description}
                />
            
        </div>
        
    )
}