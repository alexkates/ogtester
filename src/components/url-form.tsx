import { notFound, redirect } from "next/navigation";
import { Input } from "./ui/input";
import fetchMetaTags from "@/lib/meta-tags";
import SubmitButton from "./url-form-submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function UrlForm() {
  async function onSubmit(formData: FormData) {
    "use server";

    const url = formData.get("url") as string;

    const redirectUrl = "/og?" + new URLSearchParams({ url }).toString();
    redirect(redirectUrl.toString());
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Open Graph Tester</CardTitle>
        <CardDescription>
          Test your Open Graph tags for your website.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="https://alexkates.dev"
            name="url"
            type="url"
            required
          />
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
