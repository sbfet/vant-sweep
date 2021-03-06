module.exports = {
  name: 'vant-sweep',
  build: {
    css: {
      preprocessor: 'sass'
    },
    site: {
      publicPath: '/vant-sweep/'
    },
    vetur: {
      tagPrefix: 'sb-'
    }
  },
  site: {
    title: 'vant-sweep',
    logo: 'data:image/png;base64,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',
    description: '??????????????????????????? vant ??? Vue ?????????',
    baiduAnnlytics: { seed: 'a5630e0caac945e2f8cbe233413552d9' },
    // searchConfig: {
    //   apiKey: '',
    //   indexName: 'vant',
    //   placeholder: '????????????...'
    // },
    nav: [
      {
        title: '????????????',
        items: [
          {
            path: 'home',
            title: '??????'
          },
          {
            path: 'quickstart',
            title: '????????????'
          },
          {
            path: 'theme',
            title: '????????????'
          }
        ]
      },
      {
        title: '????????????',
        items: [
          {
            path: 'category-title',
            title: 'CategoryTitle ????????????'
          },
          {
            path: 'style',
            title: 'Style ????????????'
          }
        ]
      },
      {
        title: '????????????',
        items: [
          {
            path: 'goods',
            title: 'Goods ????????????'
          }
        ]
      }
    ]
  }
};
