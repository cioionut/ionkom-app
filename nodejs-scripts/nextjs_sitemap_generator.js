const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://ionkom.com",
  ignoredPaths: ["api"],
  ignoreIndexFiles: true,
  pagesDirectory: __dirname + "/../pages",
  targetDirectory: "public/",
  sitemapFilename: "sitemap.xml",
  ignoredExtensions: ["png", "jpg", "css"]
});

console.log(`✅ sitemap.xml generated!`);