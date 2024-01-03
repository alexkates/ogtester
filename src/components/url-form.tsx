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
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  url: z.string().url("Please enter a valid URL e.g. https://alexkates.dev"),
});

export default function UrlForm() {
  const { toast } = useToast();
  const router = useRouter();

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
        description:
          "There was a problem with your request. Check that the URL is valid and try again.",
      });
      return;
    }

    const metatags = (await res.json()) as Record<string, string>;
    console.log("metatags", metatags);
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(metatags)) {
      searchParams.append(key, value);
    }

    const redirectUrl = new URL(window.location.href);
    redirectUrl.search = searchParams.toString();

    router.push(redirectUrl.toString());
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
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="flex items-center"
        >
          <ReloadIcon
            className={cn(
              "w-4 h-4 mr-2 animate-spin",
              !form.formState.isSubmitting && "hidden"
            )}
          />
          Submit
        </Button>
      </form>
    </Form>
  );
}
