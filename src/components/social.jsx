const Social = ({ icon }) => {
  return (
    <>
      <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-black hover:bg-orange-500 hover:text-white transition-all duration-300">
        {icon}
      </div>
    </>
  );
};

export default Social;
