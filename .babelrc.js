const env = require('./env-config.js')

module.exports = {
  "presets": [
    "next/babel",
  ],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": true
      }
    ],
    ["transform-define", env],
    "add-react-displayname"
  ]
}
