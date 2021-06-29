import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { SeenItems } from "../../slices/itemsSeenSlice";
// import ProductCarousel from "../../components/ProductCarousel";

// import Header from "../../../..//components/Header";
import Header from "../../components/Header";

import FAQ from "../../components/FAQ";
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

const ProductSlug = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  const itemsSeen = useSelector(SeenItems);
  const lastItem = itemsSeen[itemsSeen.length - 1];

  const currency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(lastItem.price);

  const [faqs, setfaqs] = useState([
    {
      question: "How many programmers does it take to screw in a lightbulb?",
      answer: "None. We don't address hardware issues.",
      open: false,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You. The Viewer.",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  const ss = ScreenSize();

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <Header />

        <main className="max-w-screen-lg mx-auto">
          <div className="flex flex-col p-2 bg-white">
            {/* 

            Breadcrumbs 

            */}
            <div className="text-xs pb-10">
              Home Products &gt; For Your Kitchen
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

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2   ">
              {/* 
              Image section 
              */}
              <div className="  ">
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
                <div className="flex items-center align-middle">
                  <StarRating
                    className=" text-yellow-500"
                    newRating={lastItem.rating}
                  />
                  <p className="text-xs text-gray-400">({lastItem.rating})</p>
                </div>
                {/* PRICE */}
                <div className="pt-2">{currency}</div>

                <div className="text-center pb-5">
                  <button
                    onClick={() => router.push("/orders")}
                    className="button mt-8"
                  >
                    Add to Cart
                  </button>

                  <p className="pt-1 text-xs flex whitespace-nowrap justify-center  items-center ">
                    <FcLock /> {" Secure Transaction"}
                  </p>
                </div>

                {/* 

                Key Features

                */}

                <div className="text-left font-semibold">Key features</div>

                <div className="pt-1 pl-2 text-sm">{lastItem.description} </div>

                {/* 

                Description

                */}
                <div className="pt-5 ">
                  <div className="font-semibold">Description</div>

                  {faqs.map((faq, i) => (
                    <div className="text-sm pt-1">
                      <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* 

            Frequently Bought Together

            */}
            <div className="py-5 my-2">
              <div className="text-lg font-semibold mb-5">
                Frequently bought together
              </div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>
            <div className="py-5 my-2">
              <div className="text-lg font-semibold mb-5">Customer Ratings</div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>
            <div className="py-5 my-2">
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
