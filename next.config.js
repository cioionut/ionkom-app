const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/ionkom-app' : '';

// source: https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn

module.exports = {
  basePath: repoNameURIPrefix,
  assetPrefix: repoNameURIPrefix,
};