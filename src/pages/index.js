import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

//import loadable from "@loadable/component";
import ProductFeed from "../components/ProductFeed";
//const ProductFeed = loadable(() => import("../components/ProductFeed"));

export default function Home({ products }) {
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
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
