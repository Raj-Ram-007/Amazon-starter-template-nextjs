import { useRouter } from "next/router";
// import Header from "../../../..//components/Header";
import Header from "../../components/Header";

const Comment = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <Header />

        <main className="max-w-screen-lg mx-auto">
          <div className="flex flex-col p-10 bg-white">
            <div className="flex items-center space-x-2 mb-5">
              <h1>Slug: {slug.join("/")}</h1>
            </div>

            <div>bread crumb</div>
            <div>Product info, rating, price and buy with qty</div>
            <div>Key feature</div>
            <div>Descr</div>
            <div>Frequently bought together</div>
            <div>Other products</div>

            <button
              onClick={() => router.push("/orders")}
              className="button mt-8"
            >
              Does something
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Comment;
