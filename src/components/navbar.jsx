import { Menu, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center px-5 py-12">
        <div className="flex justify-between items-center w-full">
          <a href="" className="text-xl font-bold">
            Logo
          </a>
          <div classNAme="hidden"></div>
          <div className="flex gap-5">
            <button>
              <Search size={24} />
            </button>
            <button>
              <ShoppingCart size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
