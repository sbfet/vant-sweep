// ------------------------------------------------------------------------------
// name: index
// author: mudas( fnd.cool )
// created: 2021/5/8 18:00
// ------------------------------------------------------------------------------

import { createBEM } from './bem';
import { createComponent } from './component';

/**
 * 创建 BEM 组件规范
 * @param {string} name
 * @return {((function(option):{mixins})|(function((string|string[]), (string|string[]|Object)):string))[]}
 */
export function createNamespace(name) {
  name = 'sb-' + name;
  return [createComponent(name), createBEM(name)];
}
