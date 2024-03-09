"use client"

import React, { useEffect, useState } from "react";
import { Boardcard } from "@/app/dashboard/_components/board-card/index";
import axios from "axios";

interface Board {
    id: string;
    title: string;
    description: string;
}

export const BoardList = () => {
    const [data, setData] = useState<Board[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Board[]>("http://localhost:8000/gettasks");
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
                            key={board.id}
                            title={board.title}
                            description={board.description}
                        />
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};
