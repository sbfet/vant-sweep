// ------------------------------------------------------------------------------
// name: click-outside
// author: mudas( fnd.cool )
// created: 2021/5/10 16:21
// ------------------------------------------------------------------------------

// 监听是否当前组件外部触发了指定事件类型（可以为非 click 事件）
// Listen to click outside event

import { isFunction } from '../utils';
import { on, off } from '../utils/dom/event';

export const ClickOutsideMixin = (config) => ({
  props: {
    closeOnClickOutside: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    on(document, config.event, this.clickOutsideHandler);
  },

  beforeDestroy() {
    off(document, config.event, this.clickOutsideHandler);
  },

  methods: {
    clickOutsideHandler(event) {
      if (
        this.closeOnClickOutside &&
        // 直接检测当前组件是否包含事件触发的元素
        !this.$el.contains(event.target)
      ) {
        isFunction(config.method) ? config.method.call(this, event) : this[config.method](event);
      }
    }
  }
});
