import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductCategoryList = ({ category }) => {
  const router = useRouter();
  const slug = router.query.slug || [];

  console.log("category: ", category);
  return (
    <>
      <div className="bg-gray-100 h-screen">
        {/* {slug.join("/")} */}
        <Head>
          {/* // Common Header information moved into _document.jsx */}
          <title>Products for Your Kitchen | HomeEffect</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            name="description"
            content="Products for Your Kitchen | HomeEffect"
          />
        </Head>
        <Header />

        <main className="max-w-screen-xl mx-auto">
          {/* <div> {category}</div> */}
          <div className="p-2 bg-white">
            {/* 
            
            Banner 
            
            */}

            {/* <Banner /> */}

            <div className="text-xs pb-10">
              <Breadcrumbs category={category} />
            </div>

            {/* Product Feed */}

            {/* 

            Other Products You May Like

            */}

            {/* <div className="relative md:-mt-32 md:z-50 mx-auto"> */}

            <div className="pt-10">
              <div className="text-lg font-semibold ">
                Our best selling products in the {category} category
              </div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>

            {/* <div className="relative md:mt-10 md:z-50"> */}

            <div className="md:mt-10 md:z-50">
              <div className="text-lg font-semibold ">{category} products</div>
              <div className="shadow bg-blue-100">Items here</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductCategoryList;
