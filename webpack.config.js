// ------------------------------------------------------------------------------
// name: webpack.config
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2019/4/23 21:48
// ------------------------------------------------------------------------------

const path = require('path');

function resolve(...dir) {
  return path.join(__dirname, ...dir);
}

module.exports = function() {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        demo: resolve('demo')
      }
    },

    entry: {
      'site-mobile': ['./docs/site/mobile']
    }

    // module: {
    //   rules: [{
    //     test: /\.scss$/,
    //     use: [{
    //       loader: "sass-loader",
    //       options: {
    //         prependData: `\n@import "src/style/a.scss";\n`
    //       }
    //     }]
    //   }]
    // }
  };
};
