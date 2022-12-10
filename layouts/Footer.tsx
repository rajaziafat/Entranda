import Link from "next/link";
import React from "react";
import FooterLocations from "./FooterLocations";
import FooterQuickLinks from "./FooterQuickLinks";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import FooterLinks from "./FooterLinks";
import SubscribeForm from "./SubscribeForm";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="mb-8">
          <FooterQuickLinks />
        </div>
        <div className="mb-8">
          <FooterLocations />
        </div>

        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] justify-between gap-[70px] lg:gap-[100px] xl:gap-[200px] mb-16 md:mb-100px">
          <FooterLinks />

          <div className="w-full max-w-[24rem] md:max-w-none">
            <h4 className="text-sm xl:text-lg  font-medium -text-blue-300 mb-4 leading-[1]">
              Get In Touch
            </h4>

            <div className="mb-[40px] flex items-center space-x-6">
              <h1 className="text-2xl xl:text-[30px] font-semibold -text-blue-300 leading-[1]">
                Let’s Talk
              </h1>
              <span className="-text-blue-300 text-2xl xl:text-3xl">
                <HiOutlineArrowNarrowRight />
              </span>
            </div>

            <SubscribeForm />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between border-b-2 border-[rgba(112,112,112,0.26)] pb-6">
          <p className="text-sm md:text-base xl:text-lg  font-medium -text-blue-300">
            Privacy Policy
          </p>

          <div className="flex items-center space-x-[1em] text-xs md:text-sm xl:text-base  -text-blue-300 font-medium">
            <Link href="/">
              <a target="_blank">Linkedin</a>
            </Link>{" "}
            <span>/</span>{" "}
            <Link href="/">
              <a target="_blank">Facebook</a>
            </Link>{" "}
            <span>/</span>{" "}
            <Link href="/">
              <a target="_blank">Instagram</a>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-xs md:text-sm xl:text-base -text-blue-300 font-normal">
            2019-2020 © Entrada
          </p>

          <img
            src="images/payment-methods.png"
            className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px] xl:max-w-[250px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
