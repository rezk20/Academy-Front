"use client";
import Link from "next/link";
import { FC, useState } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { CircleUserRound } from "lucide-react";
import MobileNav from "../utils/MobileNav";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
}
const Header: FC<Props> = ({ activeItem, setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <div className="w-full h-auto sticky top-0 left-0 backdrop-blur-xl">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-50 dark:border-[#ffffff1c] shadow-xl transition duration-500 "
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-50 dark:shadow"
        }`}
      >
        <div className=" md:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <Link
              href={"/"}
              className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
            >
              Academy-LMS
            </Link>
            <NavItems activeItem={activeItem} isMobile={false} />
            <div className="flex items-center gap-2 md:gap-4">
              {/* theme switcher  */}
              <ThemeSwitcher />

              {/* profile icon  */}
              <CircleUserRound
                className="cursor-pointer dark:text-white text-black duration-200 transition "
                onClick={() => setOpen(!open)}
              />

              {/* menu icon & sidebar for mobile  */}
              <div className="md:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
