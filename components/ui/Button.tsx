interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button";
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean
}

export default function Button({
  children,
  className,
  type,
  isLoading,
  onClick,
  disabled
}: ButtonProps) {
  return (
    <button
      className={`${className} rounded-md p-2 px-4 bg-purple-500 text-white flex items-center justify-center`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? (
        <div
          className="inline-block w-6 h-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-white p-0"
          role="status"
        ></div>
      ) : (
        children
      )}
    </button>
  );
}
