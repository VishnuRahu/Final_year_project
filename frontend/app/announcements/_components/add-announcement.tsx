"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { LoadingSpinner } from "@/components/spinner";
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { addAnnouncement, getUserById } from "@/api";

const AddAnnouncement = () => {

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

  const formSchema = z.object({
    title: z.string().min(3, { message: "title must have atleast 3 characters" }).max(50, { message: "title can have atmost 50 characters" }),
    description: z.string().min(10, { message: "description must have atleast 10 characters" }).max(500, { message: "description can have atmost 500 characters" })
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '', description: ''},
  })

  async function submitHandler(values: z.infer<typeof formSchema>) {
    setSaving(true);

    try{
      let user_id = localStorage.getItem("user_id");
      if(user_id){
        let author = await getUserById(user_id);
        if(author){
          let payload = JSON.stringify({ ...values, author_id: author?._id, author_name: author?.name});
          await addAnnouncement(payload);
          router.refresh();
          form.setValue("title", '');
          form.setValue("description", '');
          toast(`New Post Added!`, { description: <span>{getCurrentDate()}</span> })
        } else {
          console.log('invalid user');
          toast(`Invalid User!`, { description: <span>{getCurrentDate()}</span> })
        }
        
      } else {
        console.log('unauthorized user, please try logging in again');
        toast(`Unauthorized User!`, { description: <span>{getCurrentDate()}</span> })
      }
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
        <div className="flex justify-end">
          <Button variant="outline" className="m-4 p-2"> Create New </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
            <fieldset disabled={saving} className="group">
              <DialogHeader>
                <DialogTitle> Post an Announcement </DialogTitle>
                <DialogDescription> Create a post to share something with the community </DialogDescription>
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
                <Button className="mt-4 p-4" type="submit" > {saving ? <LoadingSpinner /> : <span> Create Post </span>} </Button> 
              </DialogFooter>
            </fieldset>
          </form>
        </Form>
        
        
      </DialogContent>
      <Toaster /> 
    </Dialog>
  )
}

export default AddAnnouncement;