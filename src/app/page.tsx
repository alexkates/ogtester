import Hero from "@/components/hero";
import UrlForm from "@/components/url-form";
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 p-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <Hero />
      <UrlForm />
    </main>
  );
}
