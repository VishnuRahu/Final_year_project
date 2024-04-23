"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from "axios";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Subtask {
    id: number;
    name: string;
    isCompleted: boolean; 
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
    const [subtaskInput, setSubtaskInput] = useState('');
    const searchParams = useSearchParams()
    const [data, setData] = useState<TaskData | null>(null); 

    
    const [isModifiable, setIsModifiable] = useState<boolean>(false);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const _id = searchParams.get('id');
                const response = await axios.post("http://localhost:8000/getIndtask", { _id: _id });
                setData(response.data);
                const name=localStorage.getItem("user_name")
                console.log(name)
                console.log("ass",response.data.assigned_to)
                await setIsModifiable(name == response.data.assigned_to);
                console.log(isModifiable)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const getSubtask=async()=>{
            try{
                const _id = searchParams.get('id');
                const response = await axios.post("http://localhost:8000/getsubtask", {TaskId:_id });
                console.log(response.data.subtask)
                await setSubtasks(response.data.subtask)
                
            }
            catch(err){
                console.log("Error in getting the task details",err)
            }
        }

        fetchData();
        getSubtask();
    }, [searchParams]);

    

    const handleAddSubtask = () => {
        if (subtaskInput.trim() !== '') {
            setSubtasks([...subtasks, { id: Date.now(), name: subtaskInput, isCompleted: false }]);
            setSubtaskInput('');
        }
    };

    const handleRemoveSubtask = (id: number) => {
        setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
    };

    const handleCompleteSubtask = (id: number) => {
        setSubtasks(subtasks.map(subtask => subtask.id === id ? { ...subtask, isCompleted: true } : subtask));
    };

    const handleSubmit=()=>{
        const getSubtask=async()=>{
            try{
                const _id = searchParams.get('id');
                const response = await axios.post("http://localhost:8000/addSubtask", {TaskId:_id,subtask:subtasks });
                console.log(response)
                
            }
            catch(err){
                console.log("Error in getting the task details",err)
            }
        }
        getSubtask();
        alert("Subtask are saved and it is shown to higher officials")
    }

    return (
        <div>
            <Card className="mt-6 mx-6 mb-3 transition-colors duration-300 ease-in-out hover:bg-blue-100 hover:shadow-md">
                <div className="flex justify-center">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 space-y-2">
                            <div className="justify-center mt-6">
                                {data && <CardTitle>{data.title}</CardTitle>}
                            </div>
                        </div>
                    </div>
                </div>
                {data && <CardContent><p className="">{"Assigned to : " + data.assigned_to}</p></CardContent>}
                {data && <CardContent><p className="">{"Status  :   " + data.status}</p></CardContent>}
                <CardContent>
                    <div>
                    <h1 className="mb-4 text-lg font-semibold">Subtask</h1>
                    {isModifiable ?<div className="flex mb-4">
                        <input
                            type="text"
                            value={subtaskInput}
                            onChange={(e) => setSubtaskInput(e.target.value)}
                            placeholder="Enter subtask"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
                        />
                        <button onClick={handleAddSubtask} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Subtask</button>
                    </div>:null}
                    </div>
                    <ul>
                        {subtasks.map((subtask) => (
                            <li key={subtask.id} className="py-2 border-b border-gray-200 last:border-b-0 flex justify-between items-center">
                                <span className={`${subtask.isCompleted ? ' text-green-500' : ''}`}>{subtask.name}</span>

                               <div>
                                    {!subtask.isCompleted && (
                                        <>
                                             {isModifiable?<button onClick={() => handleRemoveSubtask(subtask.id)} className="mr-2 text-red-500 hover:text-red-600 focus:outline-none">
                                                Remove
                                            </button>:null}
                                             {isModifiable?<button onClick={() => handleCompleteSubtask(subtask.id)} className="mr-2 text-green-500 hover:text-green-600 focus:outline-none">
                                                Complete
                                            </button>:null}
                                        </>
                                    )}
                                    {subtask.isCompleted && <span className='text-green-500 w-6 text-xl'>&#10003;</span>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                {isModifiable ?( <div className="flex justify-center">
        <button onClick={handleSubmit} className="p-4 mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit the Task</button>
    </div>):null }

            </Card>
        </div>
    );
}
