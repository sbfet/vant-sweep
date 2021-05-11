<!--------------------------------------------------
  name: demo-note.vue
  author: mudas( fnd.cool )
  created: 2021/5/11
---------------------------------------------------->

<template>
  <div class="demo-note">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'demo-note'
};
</script>

<style lang="scss">
@import "src/style/var";

.demo-note {
  color: $--color-text-placeholder;
  font-size: $--font-size-small;
  padding: 0 $--padding-base;
}
</style>
