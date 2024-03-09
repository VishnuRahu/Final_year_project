import { EditAnnouncement } from "@/app/announcements/_components/edit-announcement";


export const Overlay=()=>{
    const announcement={
        "id":"1",
      "title": "Faculty Meeting",
      "description": "There will be a faculty meeting on Wednesday, February 9th, at 10:00 AM in the conference room. Attendance is mandatory.",
      "author": "Bob",
      "uploaded_time": "2024-02-07T08:00:00"
    }
    return(
        <div className="opacity-0 group-hover:opacity-50 transition-opacity h-full w-full bg-black">
        
        </div>
    );
};