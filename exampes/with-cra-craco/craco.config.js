// craco.config.js
const CracoSwcPlugin = require("craco-swc");

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [new NodePolyfillPlugin()],
      remove: []
    }
  },
  eslint: {
    enable: false
  },
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            parser: {
              syntax: "ecmascript",
              jsx: true,
            },
            transform: {
              react: {
                runtime: "automatic"
              }
            },
            experimental: {
              plugins: [
                // @see https://nextjs.org/docs/advanced-features/compiler#emotion
                // @see https://github.com/IvanRodriCalleja/emotion-swc-plugin
                [
                  "emotion-swc-plugin",
                  {
                    sourceMap: true,
                    autoLabel: 'dev-only',
                    labelFormat: '[local]'
                  }
                ]
              ]
            }
          }
        },
        assumptions: {
          constantSuper: true,
          noClassCalls: true
        }
      }
    }
  ]
};
