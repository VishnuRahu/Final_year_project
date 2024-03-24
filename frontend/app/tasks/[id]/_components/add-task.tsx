"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { LoadingSpinner } from "@/components/spinner";
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { addTask, getUserNames } from "@/api";

const AddTaskForm = () => {

  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [userNames, setUserNames] = useState<{_id: string, name: string}[]>([]);

  useEffect(() => {
    async function onLoad() {
      let user_names = await getUserNames();
      
      if(user_names?.length > 0){
        setUserNames(user_names);
      }
    }

    onLoad()
  }, [])
  
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
    description: z.string().min(10, { message: "description must have atleast 10 characters" }).max(500, { message: "description can have atmost 500 characters" }),
    assigned_to: z.string(),
    deadline: z.date()
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '', description: '', assigned_to: '', deadline: new Date()},
  })

  async function submitHandler(values: z.infer<typeof formSchema>) {
    setSaving(true);

    try {
      let payload = JSON.stringify(values);
      await addTask(payload);
      router.refresh();
      form.setValue("title", '');
      form.setValue("description", '');
      form.setValue("assigned_to", '');
      form.setValue("deadline", new Date());
      toast(`New Task Added!`, { description: <span>{getCurrentDate()}</span> })
    } catch (error) {
      console.log(error);
      toast(`Something Went Wrong!`, { description: <span>{getCurrentDate()}</span> })
    } finally {
      setTimeout(() => {
        setSaving(false);
      }, 2000);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8 m-2 p-2">
        <fieldset disabled={saving} className="group">
          <div className="flex flex-wrap justify-around">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Title </FormLabel>
                  <FormControl> 
                    <Input className="w-48 lg:w-64" placeholder="give it a short name" {...field} /> 
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
                    <Input className="w-48 lg:w-64" placeholder="describe a little about it" {...field} /> 
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="assigned_to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Assigned To </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="pick the right person to handle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {userNames.map((user) => (<SelectItem key={user._id} value={user.name}> {user.name} </SelectItem>))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-[6.5px]">
                    <FormLabel> Deadline </FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "text-left font-normal",
                              !field.value && "text-muted-foreground",
                              "w-48 lg:w-64"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <Button className="mt-4 p-4 float-right" type="submit" > {saving ? <LoadingSpinner /> : <span> Create Task </span>} </Button>
        </fieldset>
      </form>
      <Toaster />
    </Form>
  )
}

const AddTask = () => {

  const [isHod, setIsHod] = useState(false);

  useEffect(() => {
    async function onLoad () {
      let role = localStorage.getItem("user_role");
      if(role === 'HOD'){
        setIsHod(true);
      }
    }

    onLoad();
  })
  return isHod ? <AddTaskForm /> : null
}

export default AddTask