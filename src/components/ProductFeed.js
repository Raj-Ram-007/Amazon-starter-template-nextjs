import Product from "./Product";

function ProductFeed({ products }) {
  console.log("ProductFeed", JSON.stringify(products));
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map(
        ({ id, title, price, description, category, image, rating, link }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            link={link}
          />
        )
      )}
    </div>
  );
}

export default ProductFeed;
