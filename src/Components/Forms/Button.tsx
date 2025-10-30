type ButtonProps = {
  children: string;
  [key: string]: unknown;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="cursor-pointer max-w-40 rounded-lg bg-blue-600 text-white font-semibold px-6 py-3 mt-4 w-full
        transition-all duration-150 shadow-md hover:bg-blue-700 hover:shadow-lg
        focus:outline-none focus:ring-4 focus:ring-blue-300
        disabled:opacity-60 disabled:cursor-wait"
    >
      {children}
    </button>
  );
};

export default Button;