"use client";

import React, { useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

import { LoadingSpinner } from "@/components/spinner";
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { TrashIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface DeleteAnnouncementProps {
    id: string;
  }

export const DeleteAnnouncement: React.FC<DeleteAnnouncementProps> = ({id}) => {

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const getCurrentDate = () => {
    const date = new Date();
    const options = {
      weekday: 'long', // Display the full name of the day (e.g., "Sunday")
      month: 'long',   // Display the full name of the month (e.g., "December")
      day: '2-digit',  // Display the day with leading zeros (e.g., "03")
      year: 'numeric', // Display the year (e.g., "2023")
      hour: 'numeric', // Display the hour in 12-hour format (e.g., "9")
      minute: 'numeric', // Display the minute (e.g., "00")
      hour12: true,    // Use 12-hour clock (true) or 24-hour clock (false)
    } as Intl.DateTimeFormatOptions;
    const dateString = date.toLocaleDateString('en-US', options);
    return `${dateString}`;
  };

  async function submitHandler(id: string) {

    setSaving(true);
    let config = { method: 'delete', url: `http://localhost:8000/announcement/${id}` };

    try {
      let response = await axios.request(config);
      console.log('response :', response);
    } catch (error) {
      console.log(error);   
    } finally {
        setTimeout(() => {
            setOpen(false);
            setSaving(false);
            router.refresh();
            toast("Post Deleted!", {
            description: <span>{getCurrentDate()}</span>,
            // action: {
            //   label: "Undo",
            //   onClick: () => console.log("Undo"),
            // },
            })
        }, 2000);
    }

  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
          <TrashIcon className="mr-2 h-6 w-6 border-2 rounded-md hover:bg-red-400" />
      </DialogTrigger>
      <DialogContent className="w-full">

        <DialogHeader>
            <DialogTitle> Delete Announcement </DialogTitle>
        </DialogHeader>

        <h3 className="text-lg"> Are you sure, you want to delete this post? </h3>

        <DialogFooter>
            <Button className="mt-4 p-4" type="button" onClick={() => submitHandler(id)} > {saving ? <LoadingSpinner /> : <span> Delete Post </span>} </Button>
        </DialogFooter>

      </DialogContent>
      
      <Toaster /> 
    </Dialog>
  )
}
