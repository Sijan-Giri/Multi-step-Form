import { cn } from "../MultiStepForm/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-white font-medium transition",
        variant === "primary" && "bg-teal-500 hover:bg-teal-600",
        variant === "secondary" && "bg-gray-300 text-black hover:bg-gray-400",
        className
      )}
      {...props}
    />
  );
};
