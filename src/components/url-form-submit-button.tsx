"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size={"lg"}>
      <ReloadIcon
        className={cn("mr-2 h-4 w-4 animate-spin", !pending && "hidden")}
      />
      Submit
    </Button>
  );
}

export default SubmitButton;
