import UrlForm from "@/components/url-form";
import Image from "next/image";

export default function Home() {
  async function submit(formData: FormData) {}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UrlForm />
    </main>
  );
}
