import { redirect } from "next/navigation";

async function submitUrl(formData: FormData) {
  "use server";

  let url = formData.get("url") as string;

  // add protocol if not present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const redirectUrl = "/og?" + new URLSearchParams({ url }).toString();
  redirect(redirectUrl.toString());
}

export default submitUrl;
