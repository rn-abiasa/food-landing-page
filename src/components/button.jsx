import { MoveRight } from "lucide-react";

const Button = ({ onClick, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-orange-500 flex items-center gap-4 pl-5 p-2 font-semibold text-white rounded-full hover:bg-orange-600 transition-all duration-300"
      >
        {children}
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-black">
          <MoveRight size={24} />
        </div>
      </button>
    </>
  );
};

export default Button;
