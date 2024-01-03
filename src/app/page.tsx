import UrlForm from "@/components/url-form";
export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (Object.keys(searchParams).length > 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UrlForm />
    </main>
  );
}
