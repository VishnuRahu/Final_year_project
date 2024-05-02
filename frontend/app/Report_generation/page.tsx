"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, z } from "zod"
import { useState,useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import axios from "axios";
import { useRouter } from 'next/navigation';

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Input } from "@/components/ui/input"


const ProfileForm=()=> {

  var status; 
  const role= localStorage.getItem("user_role"); 
  const [pdfData, setPdfData] = useState('');
  const formSchema = z.object({    
    from: z.date({
      required_error: "from date is required.",
    }),
    to: z.date({
      required_error: "to date is required.",
    }),
   
  })
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(values.from);
    axios({
      method: "post",
      url: "http://localhost:8000/getLeaveDetails",
      data: {
        from:values.from,
        to:values.to 
      },
    }).then((res) => {
      console.log("PDF RESPONSE:", res.data.content);
      setPdfData(res.data.content);
    })
    
  }

  return (
    <div>
    <div className=" justify-center mt-10 ml-20 mr-20 text-[50px]">
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>From </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[500px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
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
                      
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Starting leave Date.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>to </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[500px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
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
                      
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                 Ending leave Date.
                </FormDescription>
                <FormMessage />
              </FormItem>
              
            )}
          />
          <Button className="w-full" type="submit">Submit</Button>
        </form>
      </Form>
      
    </div>
    <div>
            {pdfData && (
                <embed src={`data:application/pdf;base64,${pdfData}`} type="application/pdf" width="100%" height="800px" />
            )}
        </div>
    </div>
  )
}

export default ProfileForm;
