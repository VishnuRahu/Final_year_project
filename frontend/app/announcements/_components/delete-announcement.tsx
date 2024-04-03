"use client";

import React, { useState } from "react"

import { useRouter } from "next/navigation";

import { LoadingSpinner } from "@/components/spinner";
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { TrashIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { deleteAnnouncement } from "@/api";

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
      weekday: 'long', 
      month: 'long',   
      day: '2-digit',  
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true,    
    } as Intl.DateTimeFormatOptions;
    const dateString = date.toLocaleDateString('en-US', options);
    return `${dateString}`;
  };

  async function submitHandler(id: string) {

    setSaving(true);

    try{
      await deleteAnnouncement(id);
      router.refresh();
      toast(`Post Deleted!`, { description: <span>{getCurrentDate()}</span> })
    } catch (error) {
      console.log(error);
      toast(`Something Went Wrong!`, { description: <span>{getCurrentDate()}</span> })
    } finally {
      setTimeout(() => { 
        setOpen(false);
        setSaving(false);
      }, 2000);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <span> <TrashIcon className="mr-2 h-6 w-6 border-2 rounded-md hover:bg-red-400 p-1" /> delete </span> */}
        <span className="flex w-20 mr-2 border-2 rounded-md hover:bg-red-400 p-1 place-items-center justify-around"> <TrashIcon className="" /> delete </span>
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
