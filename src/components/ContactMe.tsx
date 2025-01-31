"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    subject: z.string().min(2, {
        message: "Subject is required!",
    }),
    message: z
        .string()
        .min(5, {
            message: "Message is too short!",
        })
        .max(500, {
            message: "Message is too long!",
        }),
});

const ContactMe = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true);
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();
            if (result.success) {
                setIsLoading(false);
                form.reset();
                toast({
                    title: "Success!",
                    description: "Your message has been sent to AB!",
                });
            } else {
                setIsLoading(false);
                toast({
                    title: "Error!",
                    description: "Failed to send Message!",
                    variant: "destructive",
                });
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Error submitting form:", error);
            toast({
                title: "Error!",
                description: "An error occurred. Please try again.",
                variant: "destructive",
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4 ">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="sm:col-span-6 col-span-12">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="sm:col-span-6 col-span-12">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., someone@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem className="col-span-12">
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Meeting, Appointment" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="col-span-12">
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type your message here..." rows={5} {...field} />
                            </FormControl>
                            <FormDescription>Max Length (500) characters</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="col-span-12" variant="default" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Send Message"}
                </Button>
            </form>
        </Form>
    );
};

export default ContactMe;
