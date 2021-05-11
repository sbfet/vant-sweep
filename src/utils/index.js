// ------------------------------------------------------------------------------
// name: index
// author: mudas( fnd.cool )
// created: 2020/11/4 18:12
// ------------------------------------------------------------------------------

import Vue from 'vue';
import { isNil } from '@mudas/util';

export * from '@mudas/util';
export { addUnit } from './unit';
export { createNamespace } from './create';
export * from './functional';
export * from './system';
export * from './vnodes';
export * from './router';

/**
 * 当前环境的 window 或者 global 对象（兼容浏览器和 nodejs 服务端环境）
 * @type {boolean}
 * @see https://www.npmjs.com/package/window-or-global
 */
export const root = (typeof self === 'object' && self.self === self && self) ||
                    (typeof global === 'object' && global.global === global && global) ||
                    this;

/**
 * 指定的 el 是否是当前环境的 window 元素对象
 * @param {ScrollElement} val
 * @return {boolean}
 */
export const isWindow = (val) => val === root;

/**
 * 当前环境是否为浏览器
 * @type {boolean}
 */
export const inBrowser = typeof window !== 'undefined';

/**
 * 当前环境是否为 SSR 服务端渲染环境
 * @type {boolean}
 */
export const isServer = Vue.prototype.$isServer;

/**
 * 检查 value 是否有效值（不为 null 和 undefined）
 * @param {*} value 待检查的值
 * @return {boolean} 如果 value 为 null 或 undefined，那么返回 false，否则返回 true。
 * @example
 *
 * isDef(null);
 * // => false
 *
 * isDef(void 0);
 * // => false
 *
 * isDef(NaN);
 * // => true
 */
export function isDef(value) {
  return !isNil(value);
}
