const HeaderSection = ({ className, title, description }) => {
  return (
    <>
      <div className={className}>
        <h2 className="text-3xl font-semibold text-orange-500 max-w-70">
          {title}
        </h2>
        <p className="text-sm font-normal text-black/50 mt-2">{description}</p>
      </div>
    </>
  );
};

export default HeaderSection;
