"use client";

import Image from "next/image";
import logo from "../public/images/logo.webp";
import Link from "next/link";
import Button from "./Button";
import { useMobileMenu } from "@/store";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [transition, setTransition] = useState(true);
  const mobileMenuStore = useMobileMenu();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        setIsMobile(true);
        setTransition(false);
        setTimeout(() => setTransition(true), 50);
      } else {
        setIsMobile(false);
        setTransition(true);
        mobileMenuStore.closeMobileMenu();
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className=" absolute z-10 w-full bg-[rgba(32,43,82,0.30)]">
      <div className="mx-[3%] flex items-center justify-between">
        {/* logo -- mobile version*/}
        <Link href={"/"} className="lg:hidden ml-[-1rem] ">
          <Image src={logo} width={111} height={61} alt="Houston Science Festival logo" priority={true} />
        </Link>

        {/* logo -- desktop version*/}
        <Link href={"/"} className="max-[1023px]:hidden ml-[-1rem]">
          <Image src={logo} width={167} height={91} alt="Houston Science Festival logo" priority={true} />
        </Link>

        {/* navigation links */}
        <nav
          className={`
          absolute 
          translate-y-[61%] 
          top-[61%] 
          z-20 
          transition-opacity 
          duration-500 
          ${mobileMenuStore.isMobileMenuOpen ? `opacity-100` : `opacity-0 pointer-events-none`}
          lg:static 
          lg:translate-y-0 
          lg:top-auto 
          lg:opacity-[1] 
          lg:pointer-events-auto
          lg:transition-none
          ${transition ? "" : "lg:transition-none"}
        `}
        >
          <ul className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[75px]">
            <li>
              <Link href={"/"} className="text-[1.25rem] tracking-[0.03rem]">
                Present
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[1.25rem] tracking-[0.03rem]">
                Volunteer
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[1.25rem] tracking-[0.03rem]">
                Sponsor
              </Link>
            </li>
            <li>
              <Button ariaLabel="Donate" text="Donate" />
            </li>
          </ul>
        </nav>

        {/* mobile menu icon */}
        <button className="bg-transparent  border-0 border-solid border-white mt-1 z-10 lg:hidden" onClick={() => mobileMenuStore.toggleMobileMenu()}>
          <span className={mobileMenuStore.isMobileMenuOpen ? `w-[45px] h-0.5 bg-[#ecf0f1] block transition-all duration-[0.3s] ease-[ease-in-out] mx-auto my-[7px] translate-y-[0px] translate-x-[-5px] rotate-45` : `w-[45px] h-0.5 bg-[#ecf0f1] block transition-all duration-[0.3s] ease-[ease-in-out] mx-auto my-[7px]`}></span>
          <span className={mobileMenuStore.isMobileMenuOpen ? `opacity-0` : `w-[45px] h-0.5 bg-[#ecf0f1] block transition-all duration-[0.3s] ease-[ease-in-out] mx-auto my-[7px]`}></span>
          <span className={mobileMenuStore.isMobileMenuOpen ? `w-[45px] h-0.5 bg-[#ecf0f1] block transition-all duration-[0.3s] ease-[ease-in-out] mx-auto my-[7px] translate-y-[-9px] translate-x-[-5px] -rotate-45` : `w-[45px] h-0.5 bg-[#ecf0f1] block transition-all duration-[0.3s] ease-[ease-in-out] mx-auto my-[7px]`}></span>
        </button>

        {/* overlay */}
        <div className={`fixed w-screen h-screen bg-[#202B52] z-10 left-0 top-0 transition-opacity duration-[0.5s] ease-[ease-in-out] ${mobileMenuStore.isMobileMenuOpen ? `opacity-100` : `opacity-0`} lg:hidden`}></div>
      </div>
    </header>
  );
};
export default Header;
