import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

const KitchenSlug = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <>
      <div className="bg-gray-100 h-screen">
        {/* {slug.join("/")} */}
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
        </main>
      </div>
    </>
  );
};

export default KitchenSlug;
