import React from "react";
import Mobilenavbar from "./Mobilenavbar";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap py-[30px]">
        <div className="px-[24px] py-[8px] ">
          <Link
            href={"/"}
            className="text-[16px] font-medium	 text-[#00000080]"
          >
            Home
          </Link>
        </div>

        <div className="px-[24px] py-[8px]">
          <Link href={"/"} className="text-[16px] font-medium	 text-[#00000080]">
            Service
          </Link>
        </div>

        <div className="px-[24px] py-[8px]">
          <Link href={"/"} className="text-[16px] font-medium	 text-[#00000080]">
            Pricing
          </Link>
        </div>

        <div className="px-[24px] py-[8px]">
          <Link href={"/"} className="text-[16px] font-medium	 text-[#00000080]">
            Blog
          </Link>
        </div>

        <div className="px-[24px] py-[8px]">
          <Link href={"/"} className="text-[16px] font-medium	 text-[#00000080]">
            Faq
          </Link>
        </div>
      </div>

      <Mobilenavbar />
    </div>
  );
}

export default Navbar;
