"use client"

//import Banner from "@/app/announcements/_components/Ta";

import { useState, useEffect,FormEvent } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/components/ui/input";
import { motion, easeIn } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import axios from "axios";

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

interface Announcement {
  title: string;
  description: string;
  uploaded_time: string;
  author: string;
}

const BoardPage = () => {

  const [annoucements, setAnnoucements] = useState<Announcement[]>([]);
  const [title, setTitle] = useState("");
  const [titledes, setTitledes] = useState("")
  const [assignedto, setAssignedto] = useState("")
  const [date, setDate] = useState<Date>()

  const [faculty,setFaculty]=useState([])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeIn },
    },
  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8000/addTasks",
      data: {
        title: title,
        description: titledes,
        assigned_to: assignedto,
        deadline: date,
      },
    }).then((res) => {
      console.log("RESPONSE :", res.data);

    })

  }

  useEffect(() => {
    async function getFaculties() {
      try {
        const response = await axios.get("http://localhost:8000/fetchallUser");
        //console.log(response.data.result);
        setFaculty(response.data.result);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      }
    }
    getFaculties();
}, []);

useEffect(() => {
    console.log("Faculty:", faculty);
}, [faculty]);


  return (
    <div className="space-y-6 ">
      <h1 className="space-y-4 p-4 items-center text-center justify-center text-5xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        Task Management
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-4 items-center p-5 ">
          <div className="mr-7 mb-4 sm:mb-0">
            <Input placeholder="Enter the task title" required onChange={e => setTitle(e.target.value)} value={title} />
          </div>
          <div className="mr-7 mb-4 sm:mb-0">
            <Input placeholder="Enter the task description" required onChange={e => setTitledes(e.target.value)} value={titledes} />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select the deadline</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                disabled={(date) =>
                  date < new Date()
                }
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {assignedto ? assignedto : "Click and select faculty"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Faculty</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              // Assuming assignedto is a state variable used for faculty selection
              value={assignedto}
              onValueChange={setAssignedto} // Assuming setAssignedto is the setter function for assignedto state
            >
              {/* Map over faculty array and create dropdown options */}
              {faculty.map((fac: any) => (
                <DropdownMenuRadioItem key={fac._id} value={fac.name}>
                  {fac.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

          <div className="justify-center mr-7 mb-4 sm:mb-0 mt-10 ">
            <Button bg-blue >Create</Button>
          </div>

        </div>
      </form>

      <h1 className="p-3 text-3xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        On-going Progress
      </h1>
      <div>
        {annoucements.map((element, index) => {
          return (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.5 }} // Delay each animation
              className="m-1 my-2 p-1"
            >

            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default BoardPage;