import { IAnnouncement } from "@/types/announcement";
import { getAllAnnouncements } from "@/api";

import AddAnnouncement  from "@/app/announcements/_components/add-announcement";
import ViewAnnouncements from "@/app/announcements/_components/view-announcements";


export default async function AnnouncementsPage() {

  const announcements: IAnnouncement[] = await getAllAnnouncements();

  return ( 
   <> 
    <AddAnnouncement />
    <ViewAnnouncements announcements={announcements} />
  </> 
  )
}