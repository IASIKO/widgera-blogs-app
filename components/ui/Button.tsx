interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button";
}

export default function Button({ children, className, type }: ButtonProps) {
  return (
    <button
      className={`${className} rounded-md p-2 px-4 bg-purple-500 text-white`}
      type={type}
    >
      {children}
    </button>
  );
}
