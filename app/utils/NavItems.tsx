import Link from "next/link";
import { FC } from "react";

export const navItemsData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Policy",
    href: "/policy",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

type Props = {
  isMobile?: boolean;
  activeItem?: number;
  sidebar?: boolean;
};

const NavItems: FC<Props> = ({ activeItem, isMobile, sidebar }) => {
  return (
    <>
      <div className="hidden md:flex">
        {navItemsData.map((item, index) => (
          <Link href={`${item.href}`} key={index}>
            <span
              className={`${
                activeItem === index
                  ? "dark:text-cyan-500 text-[crimson]"
                  : "dark:text-white text-black"
              } text-[18px] px-6 font-Poppins font-[400]`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {isMobile && (
        <div className="md:hidden mt-5">
          <div
            className={`${
              sidebar && "flex flex-col h-full gap-8"
            } w-full text-center py-4`}
          >
            {navItemsData.map((item, index) => (
              <Link href={item.href} key={index}>
                <span
                  className={`${
                    activeItem === index
                      ? "dark:text-cyan-500 text-[crimson]"
                      : "dark:text-white text-black"
                  } text-[18px] px-6 font-Poppins font-[400] ${
                    sidebar && "text-2xl"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
