// ------------------------------------------------------------------------------
// name: scroll
// author: mudas( fnd.cool )
// created: 2021/5/10 15:36
// ------------------------------------------------------------------------------

import { isWindow } from '..';

// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
const overflowScrollReg = /scroll|auto/i;

/**
 * 获取元素的对应支持滚动条元素对象（可能是其父级）
 * @param {HTMLElement} el
 * @param {ScrollElement} root
 * @return {ScrollElement}
 */
export function getScroller(el, root = window) {
  let node = el;

  while (
    node &&
    node.tagName !== 'HTML' &&
    node.nodeType === 1 &&
    node !== root
    ) {
    const { overflowY } = window.getComputedStyle(node);

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }

      // see: https://github.com/youzan/vant/issues/3823
      const { overflowY: htmlOverflowY } = window.getComputedStyle(node.parentNode);

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }
    node = node.parentNode;
  }

  return root;
}

/**
 * 获取滚动条 scrollTop 值
 * @param {ScrollElement} el
 * @return {number}
 */
export function getScrollTop(el) {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

/**
 * 设置滚动条 scrollTop 值
 * @param {ScrollElement} el
 * @param {number} value
 */
export function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  }
  else {
    el.scrollTo(el.scrollX, value);
  }
}

export function getRootScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

/**
 * 获取元素顶部到页面顶部或滚动条顶部的距离
 * @param {ScrollElement} el
 * @param {HTMLElement} [scroller=null]
 * @return {number}
 */
export function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }

  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

/**
 * 获取指定元素的可见高度
 * @param {ScrollElement} el
 * @return {number}
 */
export function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }
  return el.getBoundingClientRect().height;
}

/**
 * 获取指定元素的可见 top 值
 * @param {ScrollElement} el
 * @return {number}
 */
export function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }
  return el.getBoundingClientRect().top;
}

