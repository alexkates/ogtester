"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  url: z.string().url("Please enter a valid URL e.g. https://alexkates.dev"),
});

export default function UrlForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await fetch(`/og?url=${encodeURIComponent(data.url)}`);

    if (!res.ok) {
      const statusText = res.statusText;
      console.error(statusText);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      return;
    }

    const json = await res.json();

    console.log(json);

    toast({
      title: "Success!",
      description: "Your OG metadata is ready.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Url</FormLabel>
              <FormControl>
                <Input placeholder="https://alexkates.dev" {...field} />
              </FormControl>
              <FormDescription>
                This is the URL for which you want to preview the OG metadata.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
