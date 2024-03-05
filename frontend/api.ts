import { IAnnouncement } from "@/types/announcement";
const baseUrl = "http://localhost:8000";

export const getAllAnnouncements = async (): Promise<IAnnouncement[]> => {
    const res = await fetch(`${baseUrl}/announcements`, {cache: 'no-store'});
    const announcements = await res.json();
    return announcements;
}