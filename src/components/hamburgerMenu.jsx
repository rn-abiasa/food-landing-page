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

const HamburgerMenu = () => {
  return (
    <>
      <div className="fixed top-26 right-5 bg-gray-100 w-40 rounded-xl flex flex-col gap-5 p-5">
        {links.map((link) => (
          <a href={link.url} className="text-sm font-normal text-black/50">
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default HamburgerMenu;
