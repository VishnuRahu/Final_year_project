import axios from "axios";
import { IAnnouncement } from "@/types/announcement";

const baseUrl = "http://localhost:8000";

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

export const getUserById = async (id: string) => {
    let res = await fetch(`${baseUrl}/user/${id}`);
    res = await res.json();
    if(res?.success) return res?.data[0];
    return null;
}