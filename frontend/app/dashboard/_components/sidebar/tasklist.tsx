"use client"

import React, { useEffect, useState } from "react";

import { Boardcard } from "@/app/dashboard/_components/board-card/index";
import axios from "axios";

interface Board {
    _id: string;
    title: string;
    description: string;
    status:string,
    assigned_to:string
}

export const BoardList = () => {
    const [data, setData] = useState<Board[]>([]);
    
    // const role=localStorage.getItem('role')
    // console.log('inside useeffect',role)
    
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const role=localStorage.getItem('role')
                const response = await axios.post<Board[]>("http://localhost:8000/gettasks",{role:role});
                console.log("RESPONSE :", response.data);
                setData(response.data);
                
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-20 mt-8 pb-10">
                {data.length > 0 ? (
                    data.map((board) => (
                        <Boardcard
                            _id={board._id}
                            title={board.title}
                            description={board.description}
                            status={board.status}
                            assigned_to={board.assigned_to}
                        />
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};
