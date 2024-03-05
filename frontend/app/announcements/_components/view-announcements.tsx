"use client";

import { motion, easeIn } from "framer-motion"
import Announcement from "@/app/announcements/_components/announcement";
import { IAnnouncement } from "@/types/announcement";


interface ViewAnnouncementsProps {
    announcements: IAnnouncement[]
}

const ViewAnnouncements: React.FC<ViewAnnouncementsProps> = ({ announcements }) => {

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeIn },
        },
      };

    return (
        <>
            {announcements.map((announcement, index) => (
                <motion.div
                key={announcement._id}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.5 }} // Delay each animation
                className="m-1 my-2 p-1"
              >
                <Announcement announcement={announcement} />
              </motion.div>
                ))}
        </>
    )
}

export default ViewAnnouncements;