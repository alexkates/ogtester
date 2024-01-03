function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </main>
  );
}

export default Page;
