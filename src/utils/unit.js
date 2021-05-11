// ------------------------------------------------------------------------------
// name: unit
// author: mudas( fnd.cool )
// created: 2021/1/22 14:26
// ------------------------------------------------------------------------------

import { isDef, isNumeric } from '.';

/**
 * 主要配合同时支持 number 和 string 类型的 props 数据，快捷添加后缀单位
 * @param value
 * @param suffix
 * @return {string|undefined}
 */
export function addUnit(value, suffix = 'px') {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}${suffix}` : value;
}
