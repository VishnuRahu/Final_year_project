
"use client"
import { useState,useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import axios from "axios";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


interface Subtask {
    id: number;
    name: string;
}

interface TaskData {
    _id: string;
    title: string;
    description: string;
    assigned_to: string;
    status: string;
    
}

export default function CreateSubtask() {
    const [subtasks, setSubtasks] = useState<Subtask[]>([]);
    const [completedSubtasks, setCompletedSubtasks] = useState<number[]>([]);
    const [subtaskInput, setSubtaskInput] = useState('');
    const searchParams = useSearchParams()
    const [data, setData] = useState<TaskData | null>(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _id = searchParams.get('id')
                console.log(_id);

                const response = await axios.post("http://localhost:8000/getIndtask", { _id: _id })
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, [searchParams]); // Specify searchParams as a dependency


    const handleAddSubtask = () => {
        if (subtaskInput.trim() !== '') {
            setSubtasks([...subtasks, { id: Date.now(), name: subtaskInput }]);
            setSubtaskInput('');
        }
    };

    const handleRemoveSubtask = (id: number) => {
        setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
        setCompletedSubtasks(completedSubtasks.filter((taskId) => taskId !== id));
    };

    const handleCompleteSubtask = (id: number) => {
        setCompletedSubtasks([...completedSubtasks, id]);
    };

    const isSubtaskCompleted = (id: number) => {
        return completedSubtasks.includes(id);
    };

    return (
        <div>

<Card className="mt-6 ml-6 mr-6 mb-3transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:shadow-md">
                <CardHeader>
                    <div className="flex justify-center">
                        <div className=" flex items-center space-x-4 ">
                            
                            <div className="flex-1 space-y-2">
                                <div className="justify-center ">
                                {data && <CardTitle>{data.title}</CardTitle>}
                                </div>    
                            </div>
                        </div>
                    </div>
                </CardHeader>
                {data && <CardContent><p className="">{"Assigned to : "+data.assigned_to}</p></CardContent>}
                {data && <CardContent><p className="">{"Status  :   "+data.status}</p></CardContent>}
           
            
            <CardContent>
            <h1>Create Subtask</h1>
            <div>
                <input
                    type="text"
                    value={subtaskInput}
                    onChange={(e) => setSubtaskInput(e.target.value)}
                    placeholder="Enter subtask"
                />
                <button onClick={handleAddSubtask}>Add Subtask</button>
            </div>
            <ul>
                {subtasks.map((subtask) => (
                    <li key={subtask.id} style={{ backgroundColor: isSubtaskCompleted(subtask.id) ? 'lightgreen' : 'transparent' }}>
                        {subtask.name}
                        {!isSubtaskCompleted(subtask.id) && (
                            <>
                                <button onClick={() => handleCompleteSubtask(subtask.id)}>Complete</button>
                                <button onClick={() => handleRemoveSubtask(subtask.id)}>Remove</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <button onClick={() => console.log(subtasks)}>Submit</button>
            </CardContent>
            </Card>  
        </div>

        
    );
}




