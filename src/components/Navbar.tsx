import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../imgs/logo.png";
import { useToggle } from "../hooks/useToggle";

export const Navbar = () => {
  const Links = [
    { name: "Batch Data Result", path: "/" },
    { name: "RD Transaction", path: "/rd" },
    { name: "Invoice Payment", path: "/invoice" },
    { name: "Reciept & AS9", path: "/reciept" },
  ];

  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();

  return (
    <div className="flex justify-between fixed z-[999] top-0 left-0 items-center shadow-sm w-full h-[50px] px-5 text-sm bg-white">
      <div className="flex items-center">
        <div>
          <img src={Logo} className="h-[16px] mr-5" />
        </div>
        <ul
          className={`md:flex items-center absolute md:static bg-white w-full md:w-auto left-0 shadow-md md:shadow-none ${
            isOpen ? "top-[50px]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="h-[50px]">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? " bg-black md:bg-white text-white md:text-black md:border-b-2 md:border-black px-3 flex items-center h-[50px]"
                    : "px-3 flex items-center h-[50px]"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={setIsOpen} className="text-[24px] md:hidden">
        <Icon icon={isOpen ? "ion:close-outline" : "basil:menu-outline"} />
      </div>
    </div>
  );
};
