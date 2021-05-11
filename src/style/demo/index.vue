<template>
  <demo-section>
    <demo-block title="文字省略" class="ellipsis">
      <div class="van-ellipsis">
        这是一段最多显示一行的文字，多余的内容会省略。
        这是一段最多显示一行的文字，多余的内容会省略
      </div>
      <div class="van-multi-ellipsis--l2">
        这是一段最多显示两行的文字，多余的内容会省略。
        这是一段最多显示两行的文字，多余的内容会省略。
        这是一段最多显示两行的文字，多余的内容会省略
      </div>
      <div class="van-multi-ellipsis--l3">
        这是一段最多显示三行的文字，多余的内容会被省略。
        这是一段最多显示三行的文字，多余的内容会被省略。
        这是一段最多显示三行的文字，多余的内容会被省略。
        这是一段最多显示三行的文字，多余的内容会被省略
      </div>
    </demo-block>

    <demo-block card title="1px 边框">
      <div class="van-hairline--top"/>
    </demo-block>

    <demo-block card title="动画">
      <van-cell is-link title="Fade" @click="animate('van-fade')"/>
      <van-cell is-link title="Slide Up" @click="animate('van-slide-up')"/>
      <van-cell is-link title="Slide Down" @click="animate('van-slide-down')"/>
      <van-cell is-link title="Slide Left" @click="animate('van-slide-left')"/>
      <van-cell is-link
                title="Slide Right"
                @click="animate('van-slide-right')"/>
    </demo-block>

    <transition :name="transitionName">
      <div v-show="show" class="demo-animate-block"/>
    </transition>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      transitionName: ''
    };
  },

  methods: {
    animate(transitionName) {
      this.show = true;
      this.transitionName = transitionName;

      setTimeout(() => {
        this.show = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import '../var';

.demo-style {

  .ellipsis {
    width: 100%;
    display: flex;
    flex-direction: column;

    .van-ellipsis,
    .van-multi-ellipsis--l2,
    .van-multi-ellipsis--l3 {
      margin: $--margin-base;
      font-size: $--font-size-base;
      line-height: $--font-weight-primary;
    }
  }

  .van-hairline--top {
    height: 30px;
    background-color: $--color-white;

    &::after {
      top: 5px;
    }
  }

  .demo-animate-block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: $--color-success;
    border-radius: 3px;
  }
}
</style>
