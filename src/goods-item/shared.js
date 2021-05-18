// ------------------------------------------------------------------------------
// name: shared
// author: mudas( fnd.cool )
// created: 2021/5/12 10:58
// ------------------------------------------------------------------------------

import { isNumeric } from '../utils';

// 商品数据参数
export const GoodsData = {
  id: String,
  tags: Array,
  title: String,
  thumb: String,
  desc: String,

  price: [Number, String],
  memberPrice: [Number, String],
  originPrice: [Number, String],
  currency: { type: String, default: '¥' },

  // 购买数量（默认初始购买数量）
  num: {
    type: [Number, String],
    validator(value) {
      return isNumeric(value);
    }
  }, // 主要数量
  otherNum: {
    type: [Number, String],
    validator(value) {
      return isNumeric(value);
    }
  }, // 次要数量

  // 计价单位
  unit: String,

  // 最少购买数量（如起购数量）
  min: { type: Number, default: 0 },

  // 最多购买数量（如库存控制）
  max: { type: Number },

  // 每次加购数量（如加购数量）
  step: { type: Number, default: 1 },

  // 是否售罄
  soldout: { type: Boolean, default: false }
};

// 单个商品显示参数
export const GoodsItemData = {
  // 单个商品数据
  data: {
    type: Object,
    default() {
      return {};
    }
  },

  // 是否呈现圆角容器
  round: { type: Boolean, default: true },

  // 是否呈现阴影
  shadow: { type: Boolean, default: true },

  // 图片是否开启懒加载，需要 LazyLoad 组件使用
  lazyLoad: { type: Boolean, default: true },

  // 会员价的符号标识
  memberSymbol: { type: String, default: 'VIP' },

  // 商品标签
  thumbTag: { type: String, default: '' },

  // 标签位置 'left' | 'center' | 'right'
  thumbTagAlign: { type: String, default: 'left' },

  // 是否保留末尾小数位的 0
  trailingZeros: { type: Boolean, default: true },

  // 透明背景风格
  transparent: { type: Boolean, default: false },

  // 是否在右上角显示加购数量
  // block、block2 通栏风格无效
  showNum: { type: Boolean, default: true },

  // 是否显示商品标签
  showTags: { type: Boolean, default: true },

  // 是否显示商品简介
  showDesc: { type: Boolean, default: true },

  // 是否显示会员价
  showMemberPrice: { type: Boolean, default: true },

  // 是否显示原价
  showOriginPrice: { type: Boolean, default: false },

  // 是否显示单位
  showUnit: { type: Boolean, default: false },

  // 数量控制器的类型（默认情况下会全部显示为图标类型）
  // 'none'   - 隐藏，只能通过点击商品进入详情页进行选购
  // 'icon'   - 购物车图标，点击触发事件来快捷选购
  // 'step'   - 数量控制器，点击改变数量的同时，触发事件来快捷选购
  // icon/step 都会在内部维护当前数量
  showStep: { type: String, default: 'icon' },

  // 当 showStep = icon 时，可自定义购物车加购图标（支持任意 vant icon）
  // 'add' | 'cart-circle' | 'shopping-cart'
  cartIcon: { type: String, default: 'cart-circle' },

  // 商品组件风格
  // 'base'   - 默认1列大图风格，标题栏透明黑色，展示信息有限
  // 'col1'   - 1列大图风格（默认）
  // 'col2'   - 2列中等图风格
  // 'col3'   - 3列小图风格
  // 'block'  - 通栏风格，展示信息最全面
  // 'block2' - 通栏风格2，展示图片更大，展示信息有所省略
  theme: { type: String, default: 'base' }
};
