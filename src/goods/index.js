// ------------------------------------------------------------------------------
// name: 商品组合展示区块（1、2、3 列数控制）
// author: mudas( fnd.cool )
// created: 2021/5/11 21:08
// ------------------------------------------------------------------------------

import { Grid } from 'vant';
import { createNamespace } from '../utils';

import GoodsItem from '../goods-item';

const [createComponent, bem] = createNamespace('goods');

export default createComponent({
  inheritAttrs: false,
  props: {
    // 商品组件风格
    // 'base'   - 默认1列大图风格，标题栏透明黑色，展示信息有限
    // 'col1'   - 1列大图风格（默认）
    // 'col2'   - 2列中等图风格
    // 'col3'   - 3列小图风格
    // 'block'  - 通栏风格，展示信息最全面
    // 'block2' - 通栏风格2，展示图片更大，展示信息有所省略
    theme: { type: String, default: 'base' },

    // 限制渲染的商品数量（0 - 不限制，若大于 0，）
    limit: { type: Number, default: 0 },

    // 商品块间距
    gutter: { type: [Number, String], default: 5 },

    // 商品整体容器上下间距
    spacing: { type: Number, default: 5 },

    dataSource: {
      type: Array,
      default() {
        return [
          {
            id: (Math.random() * 10000000 >> 0).toString(),
            title: '大盘鸡套餐',
            unit: '盘',
            originPrice: 200,
            price: 158,
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
        ];
      }
    }
  },

  render(h, context) {
    const { dataSource, theme, limit, gutter, spacing } = this.$props;
    const listeners = this.$listeners;
    const attrs = this.$attrs; // 未在此组件定义的 props 受 `inheritAttrs: false` 影响都存储于 this.$attrs

    function Children() {
      const source = limit && limit > 0 ? dataSource.slice(0, limit) : dataSource;
      return source.map(item => {
        const itemData = {
          attrs: {
            theme, // 列数传递给子级做特殊处理
            ...attrs, // 直接传递给子组件
            ...item
          },
          on: { ...listeners }
        };

        return (
          <GoodsItem {...itemData}/>
        );
      });
    }

    // 上下间距
    const Spacing = {
      'padding-top': `${spacing}px`,
      'padding-bottom': `${spacing}px`
    };

    // classes
    const classes = [
      bem(),
      bem(theme)
    ];

    let column = 1;
    if (theme === 'base' || theme === 'col1') column = 1;
    if (theme === 'col2') column = 2;
    if (theme === 'col3') column = 3;

    return (
      <Grid class={classes}
            border={false}
            column-num={column}
            gutter={gutter}
            style={Spacing}>
        {Children()}
      </Grid>
    );
  }
});
