const ItemCard = ({ icon, name, description }) => {
  return (
    <>
      <div>
        {icon}
        <p className="text-base font-semibold mt-5">{name}</p>
        <p className="text-sm font-normal text-black/50 max-w-70 mt-2">
          {description}
        </p>
      </div>
    </>
  );
};

export default ItemCard;
