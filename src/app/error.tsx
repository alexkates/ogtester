"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center gap-8 p-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Sorry about that!
      </h1>
      <h2 className="text-center text-lg leading-tight text-muted-foreground">
        We couldn&apos;t find the page you were looking for.
      </h2>
      <Button asChild variant={"link"}>
        <Link href="/">Try again</Link>
      </Button>
    </main>
  );
}
