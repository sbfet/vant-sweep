<!--------------------------------------------------
  name: demo/index.vue
  author: mudas( fnd.cool )
  created: 2021/5/12
---------------------------------------------------->

<template>
  <demo-section class="demo-section-goods">
    <demo-block title="基础用法">
      <sb-goods theme="base" :limit="1" thumb-tag="热卖爆款" :tags="['热卖爆款']"></sb-goods>
    </demo-block>

    <demo-block title="商品分成1列">
      <sb-goods theme="col1" :limit="1" :tags="['热卖','优惠','最高五折']"
                @click="clickHandler"
                @click-thumb="clickthumbHandler"
                @change="changeHandler"/>
    </demo-block>

    <demo-block title="商品分成2列">
      <sb-goods theme="col2" :limit="2"></sb-goods>
    </demo-block>

    <demo-block title="商品最大分成3列">
      <sb-goods theme="col3" :limit="3"></sb-goods>
    </demo-block>

    <demo-block title="通栏风格">
      <sb-goods theme="block" :limit="1"></sb-goods>
    </demo-block>

    <demo-block title="大图通栏风格">
      <sb-goods theme="block2" :limit="1"></sb-goods>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      content: 'Demo Template: demo/index.vue'
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
}
</style>
