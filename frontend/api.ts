import axios from "axios";
import { IAnnouncement } from "@/types/announcement";
import {ILeave} from "@/types/leaverequest"
import {Board} from "@/types/Board"

const baseUrl = "http://localhost:8000";

interface UserResponse {
    success: boolean;
    data: any[]; // You can replace 'any' with a more specific type if you know the structure of the data
}

export const getAllAnnouncements = async (): Promise<IAnnouncement[]> => {
    const res = await fetch(`${baseUrl}/announcement`, {cache: 'no-store'});
    const announcements = await res.json();
    return announcements;
}

export const getAllLeaveRequest = async (): Promise<ILeave[]> => {
    const res = await fetch(`${baseUrl}/leaveRequest`, {cache: 'no-store'});
    const leaveRequests = await res.json();
    return leaveRequests;
}

export const getTasks = async (role: string, name: string): Promise<Board[]> => {
    const res = await fetch(`${baseUrl}/gettasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        },
        body: JSON.stringify({ role, name })
    });

    const boards = await res.json();
    return boards;
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

export const getUserById = async (id: string) => {
    let res = await fetch(`${baseUrl}/user/${id}`);
    const responseData: UserResponse = await res.json();
    if(responseData.success) return responseData.data[0];
    return null;
}

export const deleteTask = async (id: string ) => {
    let config = { method: 'delete', url: `${baseUrl}/task/${id}` };
    await axios.request(config);
}

export const updateLeave = async (data: string) => {
    let config = {
        method: 'put', maxBodyLength: Infinity, url: `${baseUrl}/leaveRequest`,
        headers: { 'Content-Type': 'application/json' },
        data
    };

    await axios.request(config);
}