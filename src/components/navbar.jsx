import { useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";
import HamburgerMenu from "./hamburgerMenu";

const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Menu",
    url: "#menu",
  },

  {
    label: "Services",
    url: "#services",
  },
  {
    label: "Contacts",
    url: "",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white flex items-center px-5 pt-5 pb-5 sm:px-16 lg:px-32 xl:px-52">
        <div className="flex justify-between items-center w-full">
          <a href="" className="text-xl font-bold">
            Logo
          </a>
          <div className="flex items-center gap-10">
            <div className="hidden gap-5 md:flex lg:flex xl:flex">
              {links.map((link) => (
                <a
                  href={link.url}
                  className="text-xs font-normal text-black/50 hover:text-orange-500 hover:font-semibold transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
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
        </div>
        {menuOpen && <HamburgerMenu />}
      </header>
    </>
  );
};

export default Navbar;
