import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col gap-4 items-center justify-center min-h-1/2">
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
      <Link href="/">
        <Button type="button">Return Home</Button>
      </Link>
    </div>
  );
}
