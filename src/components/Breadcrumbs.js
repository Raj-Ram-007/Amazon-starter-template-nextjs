import { useRouter } from "next/router";

import { RiHomeHeartLine as Home } from "react-icons/ri";
import { FaAngleRight as Arrow } from "react-icons/fa";

// CODE FROM : https://tailwindcomponents.com/component/breadcrumbs-1

function Breadcrumbs() {
  const router = useRouter();

  return (
    <div className="text-sm">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center">
          <div className="text-lg hover:underline cursor-pointer">
            <Home onClick={() => router.push("/")} />
          </div>

          <div className="px-2">
            <Arrow />
          </div>
        </li>
        <li class="flex items-center  hover:underline">
          <div
            className="hover:underline cursor-pointer   "
            onClick={() => router.push("/kitchen")}
          >
            Kitchen
          </div>
        </li>
        {/* <li>
          <a href="#" class="text-gray-500 hover:underline" aria-current="page">
            Tea Towels
          </a>
        </li> */}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
