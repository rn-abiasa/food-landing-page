import { useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";
import HamburgerMenu from "./hamburgerMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white flex items-center px-5 pt-5 pb-5 sm:px-16">
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
            <button onClick={() => toggleMenu()} className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
        {menuOpen && <HamburgerMenu />}
      </header>
    </>
  );
};

export default Navbar;
