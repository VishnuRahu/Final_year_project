"use client"

import React, { useState } from "react"
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


    const formSchema = z.object({
        _id: z.string(),
        email: z.string(),
        designation: z.string(),
        type_of_leave: z.string(),
        from: z.date(),
        to: z.date(),
        alternate_class: z.string(),
        comments_Hod: z.string(),
        comments_Principal: z.string(),
        status: z.string(),
        reason: z.string()

    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

        defaultValues: {
            _id: leaveRequest?._id, email: leaveRequest.email, designation: leaveRequest.designation, type_of_leave: leaveRequest.type_of_leave,
            from: leaveRequest.from, to: leaveRequest.to, alternate_class: leaveRequest.alternate_class, comments_Hod: leaveRequest.comments_Hod, comments_Principal: leaveRequest.comments_principal,
            status: leaveRequest.status, reason: leaveRequest.reason
        }
    })

    async function submitHandler(values: z.infer<typeof formSchema>) {
        
        console.log("inside submit");
        setSaving(true);
        // values.status="Declined";
        //console.log("inside submit");
        try {
            let payload = JSON.stringify({ ...values });
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
                        <fieldset disabled={saving} className="group">
                            <DialogHeader>
                                <DialogTitle> Decline Leave </DialogTitle>
                                <DialogDescription> Have to reconsider what you post? </DialogDescription>
                            </DialogHeader>

                            <FormField
                                control={form.control}
                                name="comments_Hod"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Comments </FormLabel>
                                        <FormControl>
                                            <Input placeholder="enter a suitable heading for your post" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button className="mt-4 p-4" type="submit">
                                    {saving ? <LoadingSpinner /> : <span>Decline</span>}
                                </Button>              
                            </DialogFooter>
                        </fieldset>
                    </form>
                </Form>

            </DialogContent>
            <Toaster />
        </Dialog>
    )
}
