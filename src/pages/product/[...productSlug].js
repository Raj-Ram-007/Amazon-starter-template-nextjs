import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { SeenItems } from "../../slices/itemsSeenSlice";
// import ProductCarousel from "../../components/ProductCarousel";

// import Header from "../../../..//components/Header";
import Header from "../../components/Header";

import CoreFeatures from "../../components/CoreFeatures";
import { useState } from "react";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
  Placeholder,
} from "cloudinary-react";

import { FcLock } from "react-icons/fc";
import StarRating from "../../components/StarRating";
import ScreenSize from "../../components/ScreenSize";
import ImageMultiple from "../../components/ImageMultiple";
import ImageSingle from "../../components/ImageSingle";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCache from "../../components/ProductCache";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const ProductSlug = () => {
  //==================================================
  // const queryClient = QueryClient();
  // const queryCache = queryClient.getQueryCache();

  // const query = queryCache.findall("products");

  const queryClient = useQueryClient();
  // const data = queryClient.getQueryData("products");
  // const data = queryCache.getQueryData("products");

  var { status, data, error, isFetching } = ProductCache("productSlug");

  //==================================================

  const router = useRouter();
  const slug = router.query.slug || [];

  const itemsSeen = useSelector(SeenItems);
  const lastItem = itemsSeen[itemsSeen.length - 1];

  const currency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(lastItem.price);

  const [CoreFeature, setCoreFeature] = useState([
    {
      question: "100% Pure Cotton",
      answer: "We only use cotton with minimum xxxxx",
      open: false,
    },
    {
      question: "Beautifully made",
      answer: "You know it be true",
      open: false,
    },
    {
      question: "Large 30 x 70",
      answer: "You know it be true",
      open: false,
    },
    {
      question: "Care Guide",
      answer: "Wash at low temperature and with like colours.",
      open: false,
    },
  ]);

  const toggleCoreFeature = (index) => {
    setCoreFeature(
      CoreFeature.map((CoreFeatures, i) => {
        if (i === index) {
          CoreFeatures.open = !CoreFeatures.open;
        } else {
          CoreFeatures.open = false;
        }

        return CoreFeatures;
      })
    );
  };

  const ss = ScreenSize();

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <Header />

        <main className="max-w-screen-xl mx-auto">
          <div className="flex flex-col p-2 bg-white">
            {/* 

            Breadcrumbs 

            */}
            <div className="text-xs pb-10">
              {/* Home Products &gt; For Your Kitchen
            </div>
            <div> */}
              <Breadcrumbs category={lastItem.category} />

              {/* {!isFetching && data.status} */}
            </div>
            {/* <div>{ss} </div> */}
            {/* <div className="text-gray-50 text-xs">
              <div>Items in the itemsSeenSlice: {itemsSeen.length}</div>
              <div className="pl-10">
                <div>id {lastItem.id} </div>
                <div>title {lastItem.title} </div>
                <div>price {lastItem.price} </div>
                <div>desc {lastItem.description} </div>
                <div>cate {lastItem.category} </div>
                <div>image {lastItem.image} </div>
                <div>rating {lastItem.rating} </div>
                <div>link {lastItem.link} </div>
              </div>
            </div> */}

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3   ">
              {/* 
              Image section : Single or Multiple
              */}
              <div className="md:col-span-2">
                {ss === "SMALL" ? <ImageSingle /> : <ImageMultiple />}
              </div>

              {/* 
              Info section 
              */}
              <div className=" text-left">
                {/* <div className="text-blue-100 text-xs">
                  Product info, rating, price and buy with qty
                </div> */}

                {/* 
                TITLE, Price and Rating
                */}

                <h1 className="font-bold text-left text-2xl">
                  {/* {slug.join("/")} */}
                  {lastItem.title}
                </h1>
                {/* 
                RATING 
                */}
                <div className="flex items-center">
                  <div className="pt-1">
                    <StarRating newRating={lastItem.rating} />
                  </div>
                  <div className="text-xs pl-1 text-gray-400">
                    [{lastItem.rating}]
                  </div>
                </div>
                {/* PRICE */}
                <div className="pt-4 text-2xl text-center font-semibold">
                  {currency}
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => router.push("/orders")}
                    className="button w-full"
                  >
                    Add to Basket
                  </button>

                  <p className="pt-1 text-xs flex whitespace-nowrap justify-center">
                    <FcLock /> {" Secure Transaction"}
                  </p>
                  <p className="pt-1 text-xs">Free delivery & 30 day returns</p>
                </div>

                {/* 

                Description

                */}

                <div className="pt-5 text-left font-semibold text-sm">
                  Description
                </div>

                <div className="pt-3 pl-2 text-sm">{lastItem.description} </div>

                {/* 

                Core Features

                */}

                <div className="pt-8">
                  <div className="font-semibold text-sm">Core Features</div>

                  {CoreFeature.map((CoreFeature, i) => (
                    <div className="text-sm pt-3 whitespace-normal">
                      <CoreFeatures
                        CoreFeatures={CoreFeature}
                        index={i}
                        toggleCoreFeatures={toggleCoreFeature}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 

            Enhanced Content

            */}

            <div className="pt-10 my-2">
              <div className="text-lg font-semibold mb-5">Enhanced Content</div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>

            {/* 

            Frequently Bought Together

            */}

            <div className="pt-10 my-2">
              <div className="text-lg font-semibold mb-5">
                Frequently bought together
              </div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>

            {/* 

            Customer Rating

            */}

            <div className="pt-10 my-2">
              <div className="text-lg font-semibold mb-5">Customer Ratings</div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>

            {/* 

            Other Products You May Like

            */}

            <div className="pt-10 my-2">
              <div className="text-lg font-semibold mb-5">
                Other Products You May Like
              </div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductSlug;
