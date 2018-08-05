/* eslint-disable */
module.exports = {
  // some configuration
  exportPathMap: function () { // /Next-React-Components
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      "/collection": { page: "/collection" },
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dingmao' : '',
}
