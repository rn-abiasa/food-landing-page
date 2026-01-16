const ProductCard = ({ name, description, price, link, image }) => {
  return (
    <>
      <div className="w-52">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-cover bg-center h-52 w-52"
        ></div>
        <p className="text-base font-semibold mt-3">{name}</p>
        <p className="text-sm font-normal text-black/50 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-5">
          <p className="text-base font-bold">
            {price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <a
            href={link}
            className="border-2 border-orange-500 rounded-full px-3 py-2 text-sm text-orange-500"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
