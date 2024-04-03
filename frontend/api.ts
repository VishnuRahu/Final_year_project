import axios from "axios";
import { IAnnouncement } from "@/types/announcement";
import {ILeave} from "@/types/leaverequest"
import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:8000";

interface UserResponse {
    success: boolean;
    data: any[]; // You can replace 'any' with a more specific type if you know the structure of the data
}

export const getUserById = async (id: string) => {
    let res = await fetch(`${baseUrl}/user/${id}`);
    const responseData: UserResponse = await res.json();
    if(responseData.success) return responseData.data[0];
    return null;
}

export const getUserNames = async () => {
    let user_names = await fetch(`${baseUrl}/fetchallUser`)
    user_names = await user_names.json();
    user_names = user_names?.result;
    return user_names;
}

export const getAllAnnouncements = async (): Promise<IAnnouncement[]> => {
    const res = await fetch(`${baseUrl}/announcement`, {cache: 'no-store'});
    const announcements = await res.json();
    return announcements;
}

export const addAnnouncement = async (data: string) => {

    let config = {
        method: 'post', maxBodyLength: Infinity, url: `${baseUrl}/announcement`,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        data
    };

    await axios.request(config);

}

export const editAnnouncement = async (data: string) => {
    let config = {
        method: 'put', maxBodyLength: Infinity, url: `${baseUrl}/announcement`,
        headers: { 'Content-Type': 'application/json' },
        data
    };

    await axios.request(config);
}

export const deleteAnnouncement = async (id: string ) => {
    let config = { method: 'delete', url: `${baseUrl}/announcement/${id}` };
    await axios.request(config);
}

export const getFacultyLeaveRequest=async(email:string)=>{
    const res=await fetch(`${baseUrl}/getFacultyLeaveRequest/${email}`,{cache: 'no-store'});
    const data=await res.json();
    return data;
}


/** safely remove this once after deleting the old version of tasks */
export const getTasks = async (role: string, name: string): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/gettasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        },
        body: JSON.stringify({ role, name })
    });

    const tasks = await res.json();
    return tasks;
}
/** */

export const getTasksById = async (id: string): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {cache: 'no-store'});
    const tasks = await res.json();
    return tasks;
}

export const addTask = async (data: string) => {

    let config = {
        method: 'post', maxBodyLength: Infinity, url: `${baseUrl}/addTasks`,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        data
    };

    await axios.request(config);

}

export const deleteTask = async (id: string ) => {
    let config = { method: 'delete', url: `${baseUrl}/task/${id}` };
    await axios.request(config);
}

export const getAllLeaveRequest = async (): Promise<ILeave[]> => {
    const res = await fetch(`${baseUrl}/leaveRequest`, {cache: 'no-store'});
    const leaveRequests = await res.json();
    return leaveRequests;
}

export const getAllLeaveRequestPrincipal = async (): Promise<ILeave[]> => {
    const res = await fetch(`${baseUrl}/leaveRequestPrincipal`, {cache: 'no-store'});
    const leaveRequests = await res.json();
    return leaveRequests;
}

export const updateLeave = async (data: string) => {
    let config = {
        method: 'put', maxBodyLength: Infinity, url: `${baseUrl}/leaveRequest`,
        headers: { 'Content-Type': 'application/json' },
        data
    };

    await axios.request(config);
}