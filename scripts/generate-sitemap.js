const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");
const path = require("path");

const url = process.env.HOST;

//const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({
  //baseUrl: url,
  baseUrl: "http://localhost:3000",

  // If you are using Vercel platform to deploy change the route to /.next/serverless/pages
  pagesDirectory: __dirname + "/../src/pages",
  targetDirectory: "./public",
  ignoredExtensions: ["map"],
  ignoredPaths: ["404", "favicon", "index", "api", "checkout"], // Exclude everything that isn't static page
  extraPaths: ["/"],
});
