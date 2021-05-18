<!--------------------------------------------------
  name: demo/index.vue
  author: mudas( fnd.cool )
  created: 2021/5/12
---------------------------------------------------->

<template>
  <demo-section class="demo-section-goods">
    <demo-block title="基础用法">
      <sb-goods :data-source="dataSource" :limit="1" thumb-tag="热卖爆款"/>
    </demo-block>

    <demo-block title="商品分成1列">
      <sb-goods theme="col1"
                :data-source="dataSource"
                :limit="1"
                @click="clickHandler"
                @click-thumb="clickthumbHandler"
                @change="changeHandler"/>
    </demo-block>

    <demo-block title="商品分成2列">
      <sb-goods theme="col2" :data-source="dataSource" :limit="2"/>
    </demo-block>

    <demo-block title="商品最大分成3列">
      <sb-goods theme="col3" :data-source="dataSource" :limit="3" :shadow="false" transparent/>
    </demo-block>

    <demo-block title="通栏风格">
      <van-tree-select :items="items" :main-active-index.sync="active">
        <template #content>
          <sb-goods theme="block"
                    :data-source="dataSource"
                    :limit="5"
                    v-if="active===0"
                    show-origin-price
                    show-unit
                    :shadow="false"/>
          <sb-goods theme="block2"
                    :data-source="dataSource"
                    :limit="5"
                    v-if="active===1"
                    show-origin-price
                    show-unit
                    :shadow="false"/>
        </template>
      </van-tree-select>
    </demo-block>
  </demo-section>
</template>

<script>
import Vue from 'vue';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);

export default {
  // components: {
  //   TreeSelect
  // },

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
          tags: ['热卖', { text: '单点不送', hot: false }],
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
  },

  methods: {
    clickHandler(event) {
      console.warn('demo.clickHandler:', event);
    },

    clickthumbHandler(event) {
      console.warn('demo.clickthumbHandler:', event);
    },

    changeHandler(event) {
      console.warn('demo.changeHandler:', event);
    }
  }
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-section-goods {
  background-image: url("https://lib-yhbc.oss-cn-hangzhou.aliyuncs.com/res/sweep/bg.jpg");
  background-size: contain;

  .van-tree-select__nav {
    flex: 0 0 80px;
  }

  .van-tree-select__content {
    flex: 1;
  }
}
</style>
