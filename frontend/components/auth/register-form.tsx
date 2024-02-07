"use client"

import {CardWrapper} from "./card-wrapper"

import * as z from "zod";

import axios from "axios";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"

import { RegisterSchema } from "@/schema";

import {Input} from "@/components/ui/input"

import {Button} from "@/components/ui/button"

import {FormError} from "@/components/form-error";

import {FormSuccess} from "@/components/form-success";

import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { useState } from "react";

export const RegisterForm=()=>{

    const [success,setSuccess]=useState("");
    const [error,seterror]=useState("");

    const form=useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            email:"",
            password:"",
            name:""
        }
    })

    const onSubmit=(values:z.infer<typeof RegisterSchema>)=>{

        setSuccess("");
        seterror("");
        console.log(values);
        axios({
            method:"post",
            url:"http://localhost:8000/addUser",
            data:{
                email:values.email,
                password:values.password,
                name:values.name
            }
        }).then((res)=>{
                console.log("RESPONSE :", res.data);
                if(res.data=="Already registered"){
                    seterror("Already registered");
                }
                
            })
    } 

    return(
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
                           render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                       {...field}
                                       placeholder="xyz@gmail.com"
                                       type="email"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="name"
                           render={({field})=>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                       {...field}
                                       placeholder="John Doe"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name="password"
                           render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                       {...field}
                                       placeholder="********"
                                       type="password"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                           )}
                        />
                    </div>
                    <FormSuccess message={success}/>
                    <FormError message={error}/>
                    <Button type="submit" className="w-full">
                      Register
                    </Button>
                </form>

            </Form>
        </CardWrapper>
    );
}