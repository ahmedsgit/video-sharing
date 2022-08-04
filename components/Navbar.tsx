import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../utils/tiktik-logo.png";

const Navbar = () => {
  const user = false;
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-2">
      <Link href="/">
        <div className="w-[100px] md:w-[130px] md:h-[30px] h-[38px] md:mb-2 mt-2">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="logo"
            layout="responsive"
          />
        </div>
      </Link>
      {/* <div>SEARCH</div>
      <div>
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log("Error")}
          />
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
