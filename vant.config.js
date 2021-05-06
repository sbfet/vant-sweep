module.exports = {
  name: 'vant-sweep',
  build: {
    css: {
      preprocessor: 'sass'
    },
    site: {
      publicPath: '/vant-sweep/'
    }
  },
  site: {
    title: 'vant-sweep',
    logo: './src/assets/logo.png',
    description: '移动端扫码点餐基于 vant 的 vue 业务组件集',
    baiduAnnlytics: { seed: 'a5630e0caac945e2f8cbe233413552d9' },
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍'
          },
          {
            path: 'quickstart',
            title: '快速上手'
          }
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮'
          }
        ]
      }
    ]
  }
};
