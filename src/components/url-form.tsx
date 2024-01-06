import { Input } from "./ui/input";
import SubmitButton from "./url-form-submit-button";
import submitUrl from "@/server/submit-url";

export default function UrlForm({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  return (
    <form
      action={submitUrl}
      className="flex w-full max-w-xl flex-col items-center gap-8"
    >
      <Input
        autoFocus
        className="h-16"
        defaultValue={defaultValue}
        placeholder="alexkates.dev"
        name="url"
        type="text"
        required
      />
      <div className="flex w-full justify-evenly">
        <SubmitButton />
      </div>
    </form>
  );
}
