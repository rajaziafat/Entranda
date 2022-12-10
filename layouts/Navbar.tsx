import OutsideClickDetector from "hooks/OutsideClickDetector";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";

interface Props {
  wrapperClassName?: string;
  textColor?: "lg:-text-black" | "text-white";
}

function Navbar({ wrapperClassName, textColor = "lg:-text-black" }: Props) {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebar(false));
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router.query.name);

  const search = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { name: searchValue },
    });
  };

  return (
    <>
      <div className={wrapperClassName}>
        <nav className="container py-4 sm:py-6 flex items-center justify-between space-x-[50px] lg:space-x-16 xl:space-x-[120px]">
          <div className="flex items-center">
            <Link href="/">
              <a className={`text-2xl md:text-2xl font-semibold ${textColor}`}>
                Entrada
              </a>
            </Link>
          </div>

          <button
            className={`flex lg:hidden text-2xl ${
              textColor == "lg:-text-black" ? "-text-blue-300" : textColor
            } `}
            onClick={() => setSidebar((val) => !val)}
          >
            <IoMenu />
          </button>

          <div
            ref={sidebarRef}
            className={`flex flex-1 flex-col p-11 -bg-green lg:p-0 lg:bg-transparent justify-[unset] items-[unset] fixed top-0 right-0 w-[300px] h-screen lg:static lg:w-auto lg:h-auto lg:justify-between lg:items-center lg:flex-row space-y-8 lg:space-y-0 z-[110] transition-all duration-[.3s] ${
              sidebar ? "translate-x-0" : "translate-x-[300px]"
            } lg:translate-x-0`}
          >
            {/*  */}
            <button
              className="flex lg:hidden text-white text-2xl ml-[-1.6%] w-fit"
              onClick={() => setSidebar((val) => !val)}
            >
              <IoCloseSharp />
            </button>
            {/*  */}
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:flex-1">
              <Link href="/destination">
                <a
                  className={`w-fit text-base md:text-sm font-medium text-white ${textColor}`}
                >
                  Destination
                </a>
              </Link>
              <Link href="/">
                <a
                  className={`w-fit text-base md:text-sm font-medium text-white ${textColor}`}
                >
                  Bookings
                </a>
              </Link>
              <Link href="/activity">
                <a
                  className={`w-fit text-base md:text-sm font-medium text-white ${textColor}`}
                >
                  Activities
                </a>
              </Link>

              <form
                onSubmit={search}
                className="flex-auto lg:flex-1 items-center justify-center flex bg-transparent"
              >
                <div className="w-full lg:w-[70%] relative mt-6 lg:mt-0">
                  <input
                    type="text"
                    placeholder="Search for “Shengjergj” or “Petrela”"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={`w-full h-full py-1 px-2 rounded-md pr-10 text-xs xl:text-sm outline-none border-[1px]  border-[#E5E5E5] ${
                      textColor === "text-white"
                        ? "bg-white lg:bg-transparent -text-black lg:text-white"
                        : "bg-white"
                    }`}
                  />

                  <GoSearch
                    className={`${
                      textColor === "text-white"
                        ? "-text-black lg:text-white"
                        : textColor
                    } text-base absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none`}
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center lg:space-x-[24px]">
              <button
                className={`text-sm  font-normal bg-white py-2 rounded-md lg:bg-transparent lg:py-0 text-black lg:${textColor}`}
              >
                Log in
              </button>
              <button className="text-inherit lg:text-white text-sm  font-normal py-2 lg:py-[0.4rem] px-4 lg:px-4 bg-white lg:-bg-green rounded-md lg:rounded-[10rem]">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className={`black-screen z-[100] ${sidebar ? "show" : null}`}></div>
    </>
  );
}

export default Navbar;
