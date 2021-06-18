import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { getSession } from "next-auth/client";
// import { useQuery, QueryClient, QueryClientProvider } from "react-query";
// import DB from "../components/xxxDB";
import axios from "axios";

//import loadable from "@loadable/component";
import ProductFeed from "../components/ProductFeed";
//const ProductFeed = loadable(() => import("../components/ProductFeed"));

export default function Home({ productsjson }) {
  // const productData = DB();

  // console.log(productData);

  return (
    <div className="bg-gray-100">
      <Head>
        {/* // Common Header information moved into _document.jsx */}
        <title>HomeEffect - Products for You and Your Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="HomeEffect - Products for You and Your Home"
        />
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={productsjson} />
        {/* {productsjson} */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // const products = await fetch("https://fakestoreapi.com/products").then(
  //   (res) => res.json()
  // );

  const products = await axios
    .get("http://127.0.0.1:3000/api/backendv1/getproduct")
    .then((res) => res.data);

  const productsjson = products.product;

  console.log("JSON return from API: " + JSON.stringify(products));

  return {
    props: {
      productsjson,
      session,
    },
  };
}
