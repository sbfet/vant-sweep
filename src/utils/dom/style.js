// ------------------------------------------------------------------------------
// name: style
// author: mudas( fnd.cool )
// created: 2021/5/10 15:04
// ------------------------------------------------------------------------------

import { root } from '..';

/**
 * 指定元素是否隐藏状态
 * @param {HTMLElement} el
 * @return {boolean}
 */
export function isHidden(el) {
  const style = 'getComputedStyle' in root ? root.getComputedStyle(el) : {};
  const hidden = style.display === 'none';

  // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed
  const parentHidden = el.offsetParent === null && style.position !== 'fixed';

  return hidden || parentHidden;
}
