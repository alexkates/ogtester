import { redirect } from "next/navigation";

async function submitUrl(formData: FormData) {
  "use server";

  const url = formData.get("url") as string;

  const redirectUrl = "/og?" + new URLSearchParams({ url }).toString();
  redirect(redirectUrl.toString());
}

export default submitUrl;
