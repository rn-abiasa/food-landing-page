const Review = ({ name, prophecy, content, image }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-90">
        <p className="text-base font-medium text-black/50 text-center">
          {content}
        </p>
        <div className="flex items-center gap-5 mt-5">
          <img src={image} alt={name} className="h-12 w-12 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs font-normal text-black/50">{prophecy}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
