const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/ionkom-app' : '';

// source: https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn
// https://github.com/thierryc/Next-gh-page-example
// https://github.com/vercel/next.js/issues/3335

module.exports = {
  basePath: repoNameURIPrefix,
  assetPrefix: repoNameURIPrefix,
};