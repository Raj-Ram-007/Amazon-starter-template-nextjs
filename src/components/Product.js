import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import StarRating from "./StarRating";

// const MAX_RATING = 5;
// const MIN_RATING = 5;

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  link,
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  // const [rating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  // );

  const currency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,

      description,
      category,
      image,
      rating,
      link,
    };
    // Sending the product as an action to the redux store... the basker slice
    dispatch(addToBasket(product));
  };

  const productDetails = () => {
    const product = {
      id,
      title,
      price,

      description,
      category,
      image,
      rating,
      link,
    };
    // Sending the product as an action to the redux store... the basker slice

    const route = "/product/" + link;

    router.push(route);
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-5">
      {/* <p className="absolute top-2 right-2 text-xs italic text-gray-600">
        {category}
      </p> */}

      {/**** Image  ****/}

      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="Product"
        // onClick={() => router.push("/productDetails")}
        onClick={productDetails}
        className="transform h-64 w-1/5 transition duration-500 hover:scale-110 cursor-pointer"
      />

      {/**** Title  ****/}

      <h4 className="font-bold pt-5">{title}</h4>

      {/* <div className="flex h-5 text-yellow-500">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-3" />
          ))}
      </div> */}

      {/* <div className="flex h-5 text-yellow-500 text-xs">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <AiFillStar color={ratingValue > rating ? "grey" : "orange"} />
          );
        })}
      </div> */}

      {/**** Star Rating  ****/}

      <div className="flex items-center ">
        <StarRating className=" text-yellow-500" newRating={rating} />
        <p className="text-xs text-gray-400">({rating})</p>
      </div>

      {/**** Description  ****/}

      <p className="text-xs my-2 line-clamp">{description}</p>

      {/**** Price  ****/}

      <p className="mb-5 font-bold">{currency}</p>

      {/**** Button  ****/}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
