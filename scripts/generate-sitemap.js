const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

//const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

const hostname = process.env.HOST;

!hostname
  ? console.log("Hostname not defined - set as envronment variable.")
  : console.log("Hostname defined as : ", hostname);

sitemap({
  baseUrl: `${hostname}`,

  // If you are using Vercel platform to deploy change the route to /.next/serverless/pages
  pagesDirectory: __dirname + "/../src/pages",
  targetDirectory: "./public",
  ignoredExtensions: ["map"],
  ignoredPaths: ["404", "favicon", "index", "api", "checkout"], // Exclude everything that isn't static page
  extraPaths: ["/"],
});
