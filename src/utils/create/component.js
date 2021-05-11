// ------------------------------------------------------------------------------
// name: component
// author: mudas( fnd.cool )
// created: 2021/5/8 17:47
// ------------------------------------------------------------------------------

import { isFunction } from '..';
import { SlotsMixin } from '../../mixins/slots';

// unify slots & scopedSlots
export function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  const slots = context.slots();

  Object.keys(slots).forEach((key) => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key];
    }
  });

  return scopedSlots;
}

// should be removed after Vue 3
function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context) => pure(h, context.props, unifySlots(context), context)
  };
}

/**
 * 规格化组件规范
 * @param {string} name BEM 规范的组件名称
 * @return {function(option):{mixins}}
 */
export function createComponent(name) {
  return function(sfc) {
    if (isFunction(sfc)) {
      // 自动转换成函数式组件
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = function(Vue) {
      Vue.component(sfc.name, sfc); // 统一使用 '-' 连接符的命名方式来引用组件
      // Vue.component(camelCase(sfc.name), component); // 禁用驼峰法命名方式引用组件
    };

    return sfc;
  };
}
