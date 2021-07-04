import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { getSession } from "next-auth/client";
// import { useQuery, QueryClient, QueryClientProvider } from "react-query";
// import DB from "../components/xxxDB";
import axios from "axios";
import ProductCache from "../components/ProductCache";

//import loadable from "@loadable/component";
import ProductFeed from "../components/ProductFeed";
//const ProductFeed = loadable(() => import("../components/ProductFeed"));
import ImageLocation from "../components/ImageLocation";

export default function Home() {
  // Get the product data
  var { status, data, error, isFetching } = ProductCache("Index");

  var dataprod = "";

  const statusprod = status;
  if (statusprod === "loading") {
    console.log("Still loading...");
    dataprod = "";
  } else {
    console.log("Loaded...");
    dataprod = data;
    const errorprod = error;
    const isFetchingprod = isFetching;

    console.log("productcache: status     >>> " + statusprod);
    console.log("productcache: error      >>> " + errorprod);
    console.log("productcache: data       >>> " + JSON.stringify(dataprod));
    console.log("productcache: isFetching >>> " + isFetchingprod);
  }

  var { status, data, error, isFetching } = ImageLocation();

  // console.log("imagelocationdbcall: status     >>> " + status);
  // console.log("imagelocationdbcall: error      >>> " + error);
  // !isFetching && console.log("imagelocationdbcall: data       >>> " + data);
  // console.log("imagelocationdbcall: isFetching >>> " + isFetching);

  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
  if (!isFetching) {
    const st = data;
    console.log("st > ", st);
  }

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

        {statusprod === "loading" ? (
          "Loading..."
        ) : statusprod === "error" ? (
          <span>Error: {errorprod.message}</span>
        ) : (
          dataprod && <ProductFeed products={dataprod} />
        )}
      </main>
    </div>

    // <div className="bg-gray-100">
    //   <Head>
    //     {/* // Common Header information moved into _document.jsx */}
    //     <title>HomeEffect - Products for You and Your Home</title>
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />

    //     <meta
    //       name="description"
    //       content="HomeEffect - Products for You and Your Home"
    //     />
    //   </Head>
    //   <Header />

    //   <main className="max-w-screen-2xl mx-auto">
    //     {/* Banner */}
    //     <Banner />
    //     {/* Product Feed */}

    //     <ProductFeed products={productsjson} />

    //     {/* {productsjson} */}
    //   </main>
    // </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   const products = await axios
//     .get("http://127.0.0.1:3000/api/backendv1/getproduct")
//     .then((res) => res.data);

//   const productsjson = products.product;

//   console.log("JSON return from API: " + JSON.stringify(products));

//   return {
//     props: {
//       productsjson,
//       session,
//     },
//   };
// }
