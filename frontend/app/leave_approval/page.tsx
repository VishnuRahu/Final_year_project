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
  let isModifiable = false;
  let isHod=false;

  if(role==="HOD"){
    isHod=true;
  }

  if (role === "Principal" || role === "HOD") {
    isModifiable = true;
  }
  const [selectedLeaveType, setSelectedLeaveType] = useState(""); 

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    designation: z.string().min(2, {
      message: "not a valid designation"
    }),
    leave_type: z.string(),
    from: z.date({
      required_error: "A date of birth is required.",
    }),
    to: z.date({
      required_error: "A date of birth is required.",
    }),
    alternate_class: z.string().min(2, {
      message: "please enter the correct alternate classes"
    }),
    reason: z.string().min(2, {
      message: "please enter the correct alternate classes"
    }),
  })
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      designation: "",
      leave_type: "",
      reason:"",
      alternate_class:""
    },
  })

  function roleSubmit(){
    console.log("inside rolesumbit")
    if(role=="HOD"){
      router.refresh();
      router.push("/leave_Request")
    }
    else{
      router.refresh();
      router.push("/leaveRequest_Principal")
    }
  }

  function roleSubmit1(){
    console.log("inside rolesumbit")

      router.push("/leaveRequestdenied")
    
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    
    if(role=="HOD"){
       status="Accepted by HOD"
    }
    else if(role=="Principal"){
      status="Accepted by Principal"
    }
    else{
      status="Pending"
    }
    console.log(values)
     axios({
      method: "post",
      url: "http://localhost:8000/leaveRequest",
      data: {email:values.username,Designation:values.designation,type_of_leave:values.leave_type,from:values.from,to:values.to,alternate_class:values.alternate_class,reason:values.reason,status:status}
    }).then((res) => {
      console.log("RESPONSE :", res.data);
      if(res.data=="Not enough days"){
        alert("Kindly check the available leaves with the admin");

      }
      else{
        alert("Leave Request Submitted")
        form.reset();
      }
      
      
  })
  
  }

  return (
    <div>
    <h1 className=" p-3 text-3xl font-semibold items-center text-center text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        Apply Leave
      </h1>
    <div>
    
    <div className="flex justify-end  m-4 ">
    {isModifiable ?(<div> <div>
       <Button className="mr-5" type="submit" onClick= {roleSubmit}>
            View Leave Request
       </Button>
       </div>
       </div>
      ): null}
      {isHod?(<div>
       <Button className="mr-5" type="submit" onClick= {roleSubmit1}>
            View Request Denied by principal
       </Button>
       </div>):null}
       <Button type="submit" onClick={()=>{
        router.push("view_applied_leave")
       }}>
            View Applied Leaves
       </Button>
      </div>
      
      
    </div>
    <div className=" justify-center mt-10 ml-20 mr-20 text-[50px]">
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserEmail</FormLabel>
                <FormControl>
                  <Input placeholder="xyz@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input placeholder="Faculty" {...field} />
                </FormControl>
                <FormDescription>
                  Put your designation.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Type of Leave : </FormLabel>
            <FormControl>
              {/* Dropdown for selecting role */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {selectedLeaveType ? selectedLeaveType : "Click and select your type of Leave"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Leave Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={form.getValues("leave_type")}
                    onValueChange={(selectedRole: string) => {
                      form.setValue("leave_type", selectedRole);
                      setSelectedLeaveType(selectedRole); // Update selected leave type
                    }}
                  >
                    <DropdownMenuRadioItem value="casual_leave">Casual Leave</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Earned_leave">Earned Leave</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Medial_leave">Medical</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Onduty">OnDuty</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </FormControl>
            <FormMessage />
          </FormItem>
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
                      disabled={(date) =>
                        date < new Date()
                      }
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
                      disabled={(date) =>
                        date < new Date()
                      }
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
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  Type your Reason for leave...
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alternate_class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alternate class Details</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  Alternate class Details.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">Submit</Button>
        </form>
      </Form>
      
    </div>
    {/* {isModifiable ?(
    <div>
      
      <ViewLeaveRequest leaveRequests={leaveRequests} />
      </div>
      ): null} */}
    </div>
  )
}

export default ProfileForm;
