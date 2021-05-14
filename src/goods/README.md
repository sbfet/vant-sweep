# Goods 商品区块

### 介绍

Goods 是多个商品组件（`goods-item`）组成的区块组件，可与 CategoryTitle 标题组件组合使用。

### 引入

需先加载 `vant` 的 `Image, Icon` 组件。

```js
import Vue from 'vue';
import { Goods, GoodsItem } from '@sbfe/vant-sweep';

Vue.use(Goods);
Vue.use(GoodsItem);
```

## 代码演示

### 基础用法

标题内容可以通过 title 属性或者默认插槽来定义。

```html

<sb-goods>默认效果</sb-goods>
```
