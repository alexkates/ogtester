import { notFound, redirect } from "next/navigation";
import { Input } from "./ui/input";
import fetchMetaTags from "@/lib/meta-tags";
import SubmitButton from "./url-form-submit-button";

export default function UrlForm() {
  async function onSubmit(formData: FormData) {
    "use server";

    const url = formData.get("url") as string;
    const metaTags = await fetchMetaTags(url);

    if (!metaTags || Object.keys(metaTags).length === 0) {
      notFound();
    }

    const redirectUrl = "/og?" + new URLSearchParams(metaTags).toString();
    redirect(redirectUrl.toString());
  }

  return (
    <form action={onSubmit}>
      <Input placeholder="https://alexkates.dev" name="url" type="url" />
      <SubmitButton />
    </form>
  );
}
