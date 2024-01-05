"use server";

import { redirect } from "next/navigation";

async function submitUrl(formData: FormData) {
  let url = formData.get("url") as string;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const redirectUrl = "/og?" + new URLSearchParams({ url }).toString();
  redirect(redirectUrl.toString());
}

export default submitUrl;
