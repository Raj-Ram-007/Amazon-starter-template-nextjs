import Image from "next/image";
import { signIn, signout, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import User from "./ShowUser";
import { FiLogOut } from "react-icons/fi";

//import Login from "../pages/login";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  // if (session && console.log(session.user.email, session.user.name));

  return (
    <header>
      {/*Top NAV  */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            alt="Logo"
          />
        </div>

        {/* Search bar        */}
        <div className=" flex-grow flex-shrink ">_</div>
        {/* <div className="hidden sm:flex rounded-md items-center flex-grow flex-shrink  cursor-pointer h-10 bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4 " />
        </div> */}

        {/* Signin, Accounts, Orders and Basket */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={() => !session && router.push("/login")}
            className=" link"
          >
            <User />

            {/* <p>{show_user}</p> */}
            {/* <p>{session ? `Hello, ${session.user.name}` : "Signin"}</p> */}
            {/* <p>
              {session
                ? `Hello, !${session.user.name} ? ${session.user.name} : ${session.user.email}`
                : "Signin"}
            </p> */}
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div
            onClick={() => session && router.push("/orders")}
            className=" link"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className=" relative flex  items-center link"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/*Bottom NAV  */}

      <div className="flex space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm ">
        <div className="flex items-center space-x-3">
          {/* <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Todays Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p> */}
          <p className="link">Cushions</p>
        </div>
        <div className="flex-grow justify-items-end whitespace-nowrap">
          <p
            onClick={session && signOut}
            className="link flex justify-end items-center text-right text-sm text-white pr-10 "
          >
            <p className="pr-1"> {session ? <FiLogOut /> : ""} </p>
            {session ? "  Sign Out" : ""}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
