"use client"

import React, { useState } from 'react'; 
import "react-datepicker/dist/react-datepicker.css"; 
import {Input} from "@/components/ui/input"

const boardPage=()=>{
    return(
        <div className="space-y-6 text-center">
            <h1 className="items-center justify-center text-4xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                Task Management
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center ">
                <Input placeholder="Enter the task"/>
                <Input placeholder="Enter the task date"/>
                <Input placeholder="Enter the faculty id"/>
            </div>
            
        </div>
    )
}

export default boardPage;