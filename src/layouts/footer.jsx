import { Instagram, Facebook, Youtube } from "lucide-react";
import Social from "../components/social";

const links = [
  {
    label: "Home",
    url: "",
  },
  {
    label: "About",
    url: "",
  },
  {
    label: "Sevices",
    url: "",
  },
  {
    label: "Contacts",
    url: "",
  },
];

const FooterItem = ({ title, links }) => {
  return (
    <>
      <div>
        <p className="text-sm font-semibold text-white mb-5">{title}</p>
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              href={link.url}
              className="text-sm font-normal text-white/50 hover:text-orange-500 hover:font-semibold transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="bg-black px-5 py-10 sm:px-16 md:flex md:justify-between md:items-center lg:px-32 xl:px-52">
        <div className="">
          <h3 className="text-2xl font-bold text-white">Logo</h3>
          <p className="text-sm font-normal text-white/50 max-w-70 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-5 mt-12">
            <a href="">
              <Social icon={<Instagram size={16} />} />
            </a>
            <a href="">
              <Social icon={<Facebook size={16} />} />
            </a>
            <a href="">
              <Social icon={<Youtube size={16} />} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-12 md:grid-cols-4 md:mt-0">
          <FooterItem title="Links" links={links} />
          <FooterItem title="Links" links={links} />
          <FooterItem title="Links" links={links} />
          <FooterItem title="Links" links={links} />
          <p className="text-xs font-normal text-white/50">
            2026 Abiasa All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
