# 定制主题

### 介绍

vant-sweeep 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法。

### 样式变量

vant-sweeep 使用了 scss 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](https://github.com/sbfet/vant-sweep/blob/dev/src/style/var.scss)

```scss
// Component Colors

```

## 定制方法

### 步骤一 引入样式源文件

定制主题时，需要引入组件对应的 scss 样式文件，支持按需引入和手动引入两种方式。

#### 按需引入样式（推荐）

在 babel.config.js 中配置按需引入样式源文件，注意 babel6 不支持按需引入样式，请手动引入样式

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@sbfe/vant-sweep',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/scss`,
      },
      '@sbfe/vant-sweep',
    ],
  ],
};
```

#### 手动引入样式

```js
// 引入全部样式
import '@sbfe/vant-sweep/lib/index.scss';

// 引入单个组件样式
import '@sbfe/vant-sweep/lib/category-title/style/scss';
```

### 步骤二 修改样式变量

vant-sweep 不支持使用 less 类似的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 功能。 需要借助 scss `default` 语法来进行变量覆盖。

```scss
// src/css/custom.scss
// ----------------------------------------
$--color-primary: #f56c6c;
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "sass-loader",
        options: {
          prependData: `\n@import "src/css/custom.scss";\n`
        }
      }]
    }]
  }
};
```

如果 vue-cli 搭建的项目，可以在 `vue.config.js` 中进行配置。

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `\n@import "src/css/custom.scss";\n`
      }
    }
  }
};
```
