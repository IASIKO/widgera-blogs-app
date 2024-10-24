import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  error: FieldError;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-red-500 font-bold">{error.message}</p>;
}
