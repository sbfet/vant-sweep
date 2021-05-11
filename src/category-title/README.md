# CategoryTitle 分类标题

### 介绍

CategoryTitle 是区块相关的标题组件，一般与商品组件 Goods 组合使用。

### 引入

```js
import Vue from 'vue';
import { CategoryTitle } from '@sbfe/vant-sweep';

Vue.use(CategoryTitle);
```

## 代码演示

### 基础用法
标题内容可以通过 title 属性或者默认插槽来定义。
```html
<sb-category-title>默认效果</sb-category-title>
```

### 标题背景颜色
通过 color 属性可以自定义标题的文本颜色，通过 background-color 定义标题栏的背景颜色。
```html
<sb-category-title color="#fff" background-color="rgba(79,192,141,.8)">默认效果</sb-category-title>
```

### 图片地址图标
通过 left-icon、right-icon 属性可以自定义图片来做为图标。可以使用地址、base64 等图片，图片会限制在标题栏的高度内。
```html
<sb-category-title :left-icon="bg2" color="#fff" background-color="rgba(0,0,0,.1)">七欣天海鲜推荐</sb-category-title>
<sb-category-title :right-icon="bg3" color="#fff" background-color="rgba(0,0,0,.1)">海鲜大餐</sb-category-title>
<sb-category-title left-icon="https://rollupjs.org/logo.svg" color="#fff" background-color="rgba(0,0,0,.1)">推荐</sb-category-title>
```


### icon 图标
通过 left-icon、right-icon 属性可以自定义图标的样式。默认使用 [vant 图标](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/icon)。
```html
<sb-category-title left-icon="like" background-color="rgba(0, 0, 0, 0.025)">收藏</sb-category-title>
<sb-category-title right-icon="gift" background-color="rgba(0, 0, 0, 0.025)">礼物</sb-category-title>
<sb-category-title left-icon="like" right-icon="gift" background-color="rgba(0, 0, 0, 0.025)">收藏礼物</sb-category-title>
```

### 图标颜色
通过 icon-color 属性可以自定义图标的颜色。
```html
<sb-category-title align="center" title="主食" :left-icon="bg1" :right-icon="bg1" color="blue"/>
```


### 图标大小
通过 icon-size 属性可以自定义图标的大小。
```html
<sb-category-title align="right" title="饭后甜点" left-icon="like" right-icon="gift" icon-size="32"/>
```


## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------ | ------- | ------- | --------- |
| title | 标题 | _string_ | - |
| leftIcon | 标题左侧图标。可以是 url 或 icon 图标`（默认使用 vant icon）` | _string_ | - |
| rightIcon | 标题右侧图标。 | _string_ | - |
| iconPrefix | 使用 icon 时的类名前缀。 | _string_ | `van-icon` |
| iconColor | 图标颜色。`（仅支持 icon 图标）` | _string_ | `rgba(238,10,36,.6)` |
| iconSize | 图标大小。`（仅支持 icon 图标）` | _number｜string_ | `20px` |
| textPadding | 标题文本左右侧与图标之间的距离。 | _number｜string_ | `5px` |
| color | 标题文字颜色 | _string_ | - |
| fontSize | 标题文字大小 | _number｜string_ | `14px` |
| align | 标题内容对齐方式，可选值为 `left` `center` `right` | _string_ | `left` |
| backgroundColor | 标题背景颜色 | _string_ | `transparent` |
| marginTop | 标题外部顶部间距 | _number｜string_ | `5px` |
| marginBottom | 标题外部底部间距 | _number｜string_ | `5px` |
| paddingLeft | 标题内部左侧边缘间距 | _number｜string_ | `10px` |
| paddingRight | 标题内部右侧边缘间距 | _number｜string_ | `10px` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
