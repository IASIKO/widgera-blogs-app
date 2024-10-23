interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} rounded-md p-2 px-4 bg-purple-500 text-white`}
    >
      {children}
    </button>
  );
}
