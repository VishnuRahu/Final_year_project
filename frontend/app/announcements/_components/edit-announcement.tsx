"use client"

import React, { useState } from "react"
import { useRouter } from 'next/navigation';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios";

import { IAnnouncement } from "@/types/announcement";
import { LoadingSpinner } from "@/components/spinner";
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Pencil1Icon } from "@radix-ui/react-icons"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface EditAnnouncementProps {
  announcement: IAnnouncement;
}

export const EditAnnouncement: React.FC<EditAnnouncementProps> = ({ announcement }) => {

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState(announcement.title);
  const [description, setDescription] = useState(announcement.description);
  const [id, _ ] = useState(announcement._id);

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

  const formSchema = z.object({
    title: z.string().min(3, { message: "title must have atleast 3 characters" }).max(50, { message: "title can have atmost 50 characters" }),
    description: z.string().min(10, { message: "description must have atleast 10 characters" }).max(500, { message: "description can have atmost 500 characters" })
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: title, description: description },
  })

  async function submitHandler(values: z.infer<typeof formSchema>) {

    setSaving(true);

    let data = JSON.stringify({ ...values, _id: id});


    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/announcement',
      headers: { 'Content-Type': 'application/json' },
      data : data
    };

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
        toast("Post Edited!", {
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
        <Pencil1Icon className="mr-2 h-6 w-6 border-2 rounded-md hover:bg-blue-400" />
      </DialogTrigger>
      <DialogContent className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
            <fieldset disabled={saving} className="group">
              <DialogHeader>
                <DialogTitle> Edit Announcement </DialogTitle>
                <DialogDescription> Have to reconsider what you post? </DialogDescription>
              </DialogHeader>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Title </FormLabel>
                    <FormControl> 
                      <Input placeholder="enter a suitable heading for your post" {...field} /> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Description </FormLabel>
                    <FormControl> 
                      <Textarea placeholder="describe your message..." {...field} /> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter> 
                <Button className="mt-4 p-4" type="submit" > {saving ? <LoadingSpinner /> : <span> Update Post </span>} </Button> 
              </DialogFooter>
            </fieldset>
          </form>
        </Form>
        
        
      </DialogContent>
      <Toaster /> 
    </Dialog>
  )
}
