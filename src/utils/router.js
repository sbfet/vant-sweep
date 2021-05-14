// ------------------------------------------------------------------------------
// name: router
// author: mudas( fnd.cool )
// created: 2021/5/10 16:46
// ------------------------------------------------------------------------------

/**
 * 是否重复导航到当前路由
 * @param {Error} err
 * @return {boolean}
 */
function isRedundantNavigation(err) {
  return (
    err.name === 'NavigationDuplicated' ||
    // compatible with vue-router@3.3
    (err.message && err.message.indexOf('redundant navigation') !== -1)
  );
}

/**
 * 跳转到指定路由地址（非 functional 组件使用该方法跳转路由）
 * @param {VueRouter} router 路由实例对象
 * @param {Object} config 目标路由配置信息
 */
export function route(router, config) {
  const { to, url, replace } = config;

  if (to && router) {
    const promise = router[replace ? 'replace' : 'push'](to);

    /* istanbul ignore else */
    if (promise && promise.catch) {
      promise.catch((err) => {
        if (err && !isRedundantNavigation(err)) {
          throw err;
        }
      });
    }
  }
  else if (url) {
    replace ? location.replace(url) : (location.href = url);
  }
}

/**
 * 函数式组件（functional）使用该方法跳转路由
 * @param {RenderContext} context
 */
export function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}

// 需要支持路由功能组件相应支持的 props
export const routeProps = {
  // 点击后跳转的链接地址
  url: String,

  // 是否在跳转时替换当前页面历史
  replace: Boolean,

  // 点击后跳转的目标路由对象，同 vue-router 的 to 属性
  to: [String, Object]
};
