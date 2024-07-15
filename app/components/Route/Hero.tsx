"use client";

import AvatarCircles from "@/components/magicui/avatar-circles";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };

  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  return (
    <>
      <img
        alt="background"
        fetchPriority="high"
        width="1572"
        height="795"
        decoding="async"
        data-="1"
        className="absolute t w-screen top-20 lg:top-0 left-0 -z-10 scale-[1.9] md:scale-[1.5] lg:scale-[1]"
        src="/bg-grid.svg"
      />

      <div className=" w-full relative flex flex-wrap lg:flex-nowrap mt-32 ">
        <div className="p-8 lg:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-violet-600 mb-4">
            Learning Academy
          </h1>

          <p>
            Welcome to my academy of learning Coding and Designing and
            everything about technology , There are many courses available for
            you to learn and grow your skills in the field of technology.
          </p>

          <br />
          <br />

          {/* search  */}
          <div className=" w-[90%] h-[50px] bg-transparent relative mb-4">
            <input
              type="search"
              placeholder="Search Courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent  border  dark:placeholder:text-[#ffffffdd] rounded-md p-2 pl-3 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[15px]  font-Josefin"
            />
            <div
              className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-violet-900 rounded-r-md"
              onClick={handleSearch}
            >
              <SearchIcon className="text-white" size={30} />
            </div>
          </div>

          {/* Avatar Circles */}
          <div className="flex justify-between w-full md:gap-3 items-center">
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            <p>
              and more people are learning with us .{" "}
              <a href="/courses" className="text-pink-600" target="_blank">
                View Courses
              </a>
            </p>
          </div>
        </div>

        <div className="">
          <Image
            alt="programming"
            layout="fill"
            src="/programming.png"
            className="object-fit w-full"
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
