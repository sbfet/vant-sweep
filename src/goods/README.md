# Goods 商品区块

### 介绍

Goods 是多个商品组件（`goods-item`）组成的区块组件，可与 CategoryTitle 标题组件组合使用。

### 引入

```js
import Vue from 'vue';
import { Goods, GoodsItem } from '@sbfe/vant-sweep';

Vue.use(Goods);
Vue.use(GoodsItem);
```

## 代码演示

### 基础用法

通过 `theme` 来设置不同的商品展现风格，`limit` 可以限制显示商品的总数，若不设置则根据 `dataSource` 全量展示。

```html
<sb-goods :data-source="dataSource" :limit="1" thumb-tag="热卖爆款" :tags="['热卖爆款']"/>
```

### 商品分成1列

```html
<sb-goods theme="col1" :data-source="dataSource" :limit="1" :tags="['热卖',{text:'单点不送',hot:false}]"/>
```

### 商品分成2列

```html
<sb-goods theme="col2" :data-source="dataSource" :limit="2"/>
```

### 商品分成3列

```html
<sb-goods theme="col3" :data-source="dataSource" :limit="3" :shadow="false" transparent/>
```

### 通栏风格

```html
<van-tree-select :items="items" :main-active-index.sync="active">
  <template #content>
    <sb-goods theme="block"
              :data-source="dataSource"
              :limit="5"
              v-if="active===0"
              show-origin-price
              show-unit
              :shadow="false"
              :tags="['热卖',{text:'单点不送',hot:false}]"/>
    <sb-goods theme="block2"
              :data-source="dataSource"
              :limit="5"
              v-if="active===1"
              show-origin-price
              show-unit
              :shadow="false"/>
  </template>
</van-tree-select>
```

```js
export default {
  data() {
    return {
      active: 0,
      items: [{ text: '通栏风格' }, { text: '大图风格' }],
      dataSource: [
        {
          id: (Math.random() * 10000000 >> 0).toString(),
          title: '大盘鸡套餐',
          unit: '盘',
          originPrice: 200,
          price: 158,
          memberPrice: 120,
          desc: '新疆大盘鸡，又名沙湾大盘鸡、辣子炒鸡，是20世纪80年代起源于新疆公路边饭馆的江湖菜，主要用鸡块和土豆块炒炖而成，还同新疆皮带面搭配食用。 [1]  色彩鲜艳、爽滑麻辣的鸡肉和软糯甜润的土豆，辣中有香、粗中带细，是餐桌上的佳品。',
          thumb: 'http://img.blibao.com/upload/550912/decorate/2020102710005912486-dpj_800x600.jpg'
        },
        {
          id: (Math.random() * 10000000 >> 0).toString(),
          title: '金桔柠檬茶',
          unit: '杯',
          price: 16,
          thumb: 'http://img.blibao.com/upload/550912/%E9%BB%98%E8%AE%A4%E6%96%87%E4%BB%B6%E5%A4%B9/2020102714502819530-%E9%87%91%E6%A1%94%E8%9C%9C%E6%9F%9A_800x600.jpg'
        },
        {
          id: (Math.random() * 10000000 >> 0).toString(),
          title: '美味海草碟',
          unit: '碟',
          price: 12,
          thumb: 'http://img.blibao.com/upload/550912/decorate/2020102711512552932-hq_800x600.jpg'
        },
        {
          id: (Math.random() * 10000000 >> 0).toString(),
          title: '商品名称最多1行多余将换行',
          price: 23
        },
        {
          id: (Math.random() * 10000000 >> 0).toString(),
          title: '商品名称最多1行多余将换行',
          price: 24
        },
        {
          id: (Math.random() * 10000000 >> 0).toString(),
          title: '商品名称最多1行多余将换行',
          price: 25
        }
      ]
    };
  }
}
```


## API

### Goods Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | -------------------- | --- | ------ |
| theme | 商品组件风格：<br>`base` - 1列大图风格（默认），标题栏透明黑色，展示信息有限<br>`col1`   - 1列大图风格<br>`col2`   - 2列中等图风格<br>`col3`   - 3列小图风格<br>`block`  - 通栏风格，展示信息最全面<br>`block2` - 通栏风格2，展示图片更大，展示信息有所省略 | _string_ | - |
| limit | 限制展示的商品数量（0 - 不限制） | _number_ | `0` |
| gutter | 商品块间距 | _number_ | 5px |
| spacing | 商品整体容器上下间距 | _number_ | 5px |
| data-source | 商品数据源 | _GoodsData[]_ | - |

### GoodsItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | -------------------- | --- | ------ |
| theme | 商品组件风格，同 `Goods` 的 `theme` 属性 | _string_ | - |
| data | 单个商品数据结构 | _GoodsData_ | `{}` |
| round | 是否呈现圆角容器 | _boolean_ | `true` |
| shadow | 是否呈现阴影 | _boolean_ | `true` |
| lazy-load | 图片是否开启懒加载，需要 LazyLoad 组件使用 | _boolean_ | `true` |
| member-symbol | 会员价的符号标识 | _string_ | `'VIP'` |
| thumb-tag | 商品标签 | _string_ | - |
| thumb-tag-align | 商品标签位置 `'left'` `'center'` `'right'` | _string_ | `'left'` |
| trailing-zeros | 是否保留价格末尾小数位的 0 | _boolean_ | `true` |
| transparent | 透明背景风格 | _boolean_ | `false` |
| show-num | 是否在右上角显示加购数量 | _boolean_ | `true` |
| show-tags | 是否显示商品标签 | _boolean_ | `true` |
| show-desc | 是否显示商品简介 | _boolean_ | `true` |
| show-member-price | 是否显示会员价 | _boolean_ | `true` |
| show-origin-price | 是否显示原价 | _boolean_ | `false` |
| show-unit | 是否显示单位 | _boolean_ | `false` |
| show-step | 数量控制器的类型（默认情况下显示为图标）<br>支持类型：`'none'` `'icon'` `'step'` | _string_ | `'icon'` |
| cart-icon | 当 showStep = icon 时，可自定义购物车加购图标（支持任意 vant icon） | _string_ | `'cart-circle'` |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |


### GoodsData

商品数据主要字段结构：

| 参数 | 说明 | 类型 | 默认值 |
| --- | -------------------- | --- | ------ |
| id | 商品唯一编码 | _string_ | - |
| title | 商品名称 | _string_ | - |
| thumb | 商品图片地址 | _string_ | - |
| desc | 商品介绍 | _string_ | - |
| tags | 商品标签 | _string[]_ | - |
| price | 商品现介 | _string_ | - |
| member-price | 商品会员价 | _string_ | - |
| origin-price | 商品原价（`price` 和 `origin-price` 可计算出当前折扣率） | _string_ | - |
| currency | 价格货币符号 | _string_ | `¥` |
| num | 商品购买数量 | _string_ | - |
| other-num | 商品次级数量（用于同桌点餐场景区分自身与他人购买数量） | _string_ | - |
| unit | 商品单位 | _string_ | - |
| min | 最少购买数量（如起购数量） | _number_ | `0` |
| max | 最多购买数量（如库存控制） | _number_ | - |
| step | 每次加购数量（如加购数量） | _number_ | `1` |
| soldout | 是否售罄 | _boolean_ | `false` |


### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击商品空白区域时触发 | _event: MouseEvent_ |
| click-thumb  | 点击商品图片时触发 | _event: MouseEvent_ |
| change  | 当加购数量发生改变时触发 | _value, detail:{name:string}_ |
