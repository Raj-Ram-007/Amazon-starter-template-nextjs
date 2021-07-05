import { useRouter } from "next/router";

import { RiHomeHeartLine as Home } from "react-icons/ri";
import { FaAngleRight as Arrow } from "react-icons/fa";

// CODE FROM : https://tailwindcomponents.com/component/breadcrumbs-1

const Breadcrumbs = ({ category }) => {
  const router = useRouter();

  var endBreadcrumb = "";
  var endRoute = "";

  switch (category) {
    case "Living":
      endBreadcrumb = category;
      endRoute = "/living";
      break;
    case "Kitchen":
      endBreadcrumb = category;
      endRoute = "/kitchen";
      break;
    case "Bathroom":
      endBreadcrumb = category;
      endRoute = "/bathroom";
      break;
    case "Bedroom":
      endBreadcrumb = category;
      endRoute = "/bedroom";
      break;
    case "Clothes":
      endBreadcrumb = category;
      endRoute = "/clothes";
      break;
    case "Toys":
      endBreadcrumb = category;
      endRoute = "/toys";
      break;
    case "Pets":
      endBreadcrumb = category;
      endRoute = "/pets";
      break;
    case "Recycled":
      endBreadcrumb = category;
      endRoute = "/recycled";
      break;
    case "Affiliate":
      endBreadcrumb = category;
      endRoute = "/affiliate";
      break;
    default:
      endBreadcrumb = category;
      endRoute = "/";
      break;
  }

  // console.log("Breadcrumbs: ", category, endBreadcrumb, endRoute);

  return (
    <div className="text-sm">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <div className="text-lg hover:underline cursor-pointer">
            <Home onClick={() => router.push("/")} />
          </div>

          <div className="px-2">
            <Arrow />
          </div>
        </li>
        <li className="flex items-center  hover:underline">
          <div
            className="hover:underline cursor-pointer   "
            onClick={() => router.push(endRoute)}
          >
            {endBreadcrumb}
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumbs;
