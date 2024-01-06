import { Input } from "./ui/input";
import SubmitButton from "./url-form-submit-button";
import submitUrl from "@/server/submit-url";

export default function UrlForm() {
  return (
    <form
      action={submitUrl}
      className="flex w-full max-w-md items-center gap-x-2"
    >
      <Input
        autoFocus
        className="h-10"
        placeholder="https://alexkates.dev"
        name="url"
        type="text"
        required
      />
      <SubmitButton />
    </form>
  );
}
