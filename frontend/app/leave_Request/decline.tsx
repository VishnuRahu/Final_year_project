"use client"

import React, { useState,useEffect } from "react"
import { useRouter } from 'next/navigation';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { ILeave } from "@/types/leaverequest";
import { LoadingSpinner } from "@/components/spinner";
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
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
import { updateLeave } from "@/api";
import { TrashIcon } from "@radix-ui/react-icons"


interface EditLeaveRequestProps {
    leaveRequest: ILeave;
}

export const DeclineLeave: React.FC<EditLeaveRequestProps> = ({ leaveRequest }) => {

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);

    const [role, setRole] = useState("");

    useEffect(() => {
        setRole(localStorage.getItem("user_role")?? '')
    }, [])


    const formSchema = z.object({
        
        comments_Hod: z.string().optional(),
        

    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

        defaultValues: {
             
            comments_Hod: leaveRequest.comments_Hod ?? '', 
            
        }
    })

    async function submitHandler(values: z.infer<typeof formSchema>) {
        
        console.log("inside submit");
        setSaving(true);
        // values.status="Declined";
        //console.log("inside submit");

        let data = {...leaveRequest}
        if(role=="HOD"){
            data["comments_Hod"] = values?.comments_Hod ?? '';
            data["status"]="Declined by HOD"
        }
        if(role=="Principal"){
            data["comments_Hod"] = values?.comments_Hod ?? '';
            data["status"]="Declined by Principal"
        }
        
        try {
            let payload = JSON.stringify(data);
            await updateLeave(payload);
            router.refresh();
            toast(`Post Edited!`)
        } catch (error) {
            console.log(error);
            toast(`Something Went Wrong!`)
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
                <span className="flex w-20 mr-2 border-2 rounded-md hover:bg-red-400 p-1 place-items-center justify-around"> <TrashIcon className="" /> Decline</span>
            </DialogTrigger>
            <DialogContent className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="comments_Hod"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel> Comments </FormLabel>
                            <FormControl> 
                                <Input placeholder="enter they reason for deniel" {...field} /> 
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <DialogFooter> 
                        <Button className="mt-4 p-4" type="submit" > {saving ? <LoadingSpinner /> : <span> Decline </span>} </Button> 
                    </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
            <Toaster />
        </Dialog>
    )
}
