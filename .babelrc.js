const env = require('./env-config.js')

module.exports = {
  "presets": [
    "next/babel",
  ],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": false,
        "displayName": true,
        "preprocess": false,
      }
    ],
    ["transform-define", env],
    "add-react-displayname"
  ]
}
