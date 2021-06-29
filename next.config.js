module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "enginesroom.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "http://localhost:3000/*",
  //       destination: "http://127.0.0.1:3000/*",
  //     },
  //   ];
  // },
};
