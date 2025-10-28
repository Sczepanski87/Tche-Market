type Button = {
  children: string;
};

const Button = ({ children, ...props }: Button) => {
  return (
    <button
      {...props}
      className="cursor-pointer border-none rounded-md bg-blue-300 text-blue-950 px-5 py-3.5 transition-all duration-100 disabled:opacity-50 disabled:cursor-wait hover:shadow-[0_0_0_3px_#60a5fa,0_0_0_5px_#1e40af] focus:shadow-[0_0_0_3px_#60a5fa,0_0_0_5px_#1e40af]"
    >
      {children}
    </button>
  );
};

export default Button;
