import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 0;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const currency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

  const addItemToBasket = () => {
    const product = { id, title, price, rating, description, category, image };
    // Sending the product as an action to the redux store... the basker slice
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-600">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="Product"
        className="transform h-64 w-1/5 transition duration-500 hover:scale-125"
      />

      <h4 className="">{title}</h4>
      <div className="flex h-5 text-yellow-500">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp">{description}</p>

      <p className="mb-5">{currency}</p>

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
