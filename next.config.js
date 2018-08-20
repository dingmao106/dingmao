/* eslint-disable */
module.exports = {
  // some configuration
  exportPathMap: function () { // /Next-React-Components
    return {
      "/": { page: "/", query: { page: 'home' } },
      "/home": { page: "/", query: { page: 'home' } },
      "/about": { page: "/", query: { page: 'about' } },
      "/contact": { page: "/", query: { page: 'contact' }  },
      "/collection": { page: "/", query: { page: 'collection' } },
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://dingmao106.github.io/dingmao' : '',
}
