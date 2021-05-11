# 快速上手

### 通过 npm 安装

在现有项目中使用 vant-sweep 时，可以通过`npm`安装

```bash
# 通过 npm 安装
npm i @sbfe/vant-sweep -S
```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "@sbfe/vant-sweep",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: '@sbfe/vant-sweep',
      libraryDirectory: 'es',
      style: true
    }, '@sbfe/vant-sweep']
  ]
};
```

```js
// 接着你可以在代码中直接引入 vant-sweep 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from '@sbfe/vant-sweep';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from '@sbfe/vant-sweep/lib/button';
import '@sbfe/vant-sweep/lib/button/style';
```

### 方式三. 导入所有组件

vant-sweep 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

```js
import Vue from 'vue';
import VantSweep from '@sbfe/vant-sweep';
import '@sbfe/vant-sweep/lib/index.css';

Vue.use(VantSweep);
```

> 配置按需引入后，将不允许直接导入所有组件

### 方式四. 通过 CDN 引入

暂不支持，请自行编译部署 CDN 资源


## 进阶用法

### Rem 适配

Vant 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具：

- [postcss-relaxed-unit](https://github.com/youncccat/postcss-relaxed-unit) 是一款 postcss 插件，用于 css 单位转换
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

#### PostCSS 配置

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```js
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['Android >= 4.0', 'iOS >= 8']
    }),

    require('postcss-relaxed-unit')({
      rules: { px: 'unit(rem)' }
    }),

    // OR
    // require('postcss-pxtorem')({
    //   rootValue: 37.5,
    //   propList: ['*'],
    // })
  ]
};
```

> 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 vant-sweep 样式无法被编译
