"use client"

import { CardWrapper } from "./card-wrapper"

import { Toaster, toast } from "sonner";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import * as z from "zod";

import axios from "axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import { RegisterSchema } from "@/schema";

import { useRouter } from "next/navigation";


import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

import { FormError } from "@/components/form-error";

import { FormSuccess } from "@/components/form-success";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { useState } from "react";


export const RegisterForm = () => {
    const router = useRouter();
    const [success, setSuccess] = useState("");
    const [error, seterror] = useState("");
    const [position, setPosition] = useState("")

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFile(files[0]);
        }
    };

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            role: "",

        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {

        if (!file) return;
        const formData = new FormData();
        formData.append('image', file);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('name', values.name);
        formData.append('role', values.role,)


        setSuccess("");
        seterror("");
        console.log(values);
        toast.success("success")


        axios({
            method: "post",
            url: "http://localhost:8000/addUser",
            data: formData,
        }).then((res) => {
            console.log("RESPONSE :", res.data);
            if (res.data == "Already registered") {
                seterror("Already registered");
            }
            else {
                router.push("/auth/login");

            }

        })
    }

    return (
        <CardWrapper headerLabel="Create an account"
            backButtonLabel="Already have an account?"
            backButtonHref="/auth/login"
            showSocial>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="xyz@gmail.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormItem>
                            <FormLabel>Role : </FormLabel>
                            <FormControl>
                                {/* Dropdown for selecting role */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            {position ? position : "Click and select your role"}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Staff role</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioGroup
                                            value={form.getValues("role")}
                                            onValueChange={(selectedRole: string) => {
                                                form.setValue("role", selectedRole);
                                                setPosition(selectedRole); // Update selected leave type
                                            }}
                                        >
                                            <DropdownMenuRadioItem value="HOD">HOD</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="Faculty">Faculty</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="Non-teaching faculty">Non-teaching faculty</DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="John Doe"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="signature"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Upload Your Signature</FormLabel>
                                    <FormControl>
                                        <input {...field} type="file" accept="image/*" onChange={handleFileChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <FormSuccess message={success} />
                    <FormError message={error} />

                    <Button type="submit" disabled={!file} className="w-full">
                        Register
                    </Button>

                </form>

            </Form>
            <Toaster />
        </CardWrapper>
    );
}