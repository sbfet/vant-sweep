<template>
  <demo-section>
    <demo-block title="基础用法">
      <sb-category-title @click="clickHandler">默认效果</sb-category-title>
    </demo-block>

    <demo-block title="标题背景颜色">
      <sb-category-title color="#fff" background-color="rgba(79,192,141,.8)">默认效果</sb-category-title>
    </demo-block>

    <demo-block title="图片地址图标">
      <sb-category-title :left-icon="bg2" color="#fff" background-color="rgba(0,0,0,.1)">七欣天海鲜推荐</sb-category-title>
      <sb-category-title :right-icon="bg3" color="#fff" background-color="rgba(0,0,0,.1)">海鲜大餐</sb-category-title>
      <sb-category-title left-icon="https://rollupjs.org/logo.svg" color="#fff" background-color="rgba(0,0,0,.1)">推荐</sb-category-title>
    </demo-block>

    <demo-block title="icon 图标">
      <sb-category-title left-icon="like" background-color="rgba(0, 0, 0, 0.025)">收藏</sb-category-title>
      <sb-category-title right-icon="gift" background-color="rgba(0, 0, 0, 0.025)">礼物</sb-category-title>
      <sb-category-title left-icon="like" right-icon="gift" background-color="rgba(0, 0, 0, 0.025)">收藏礼物</sb-category-title>
    </demo-block>

    <demo-block title="图标颜色">
      <demo-note>注意：只有 icon 图标才支持设置颜色</demo-note>
      <sb-category-title align="center" title="主食" left-icon="like" right-icon="like" icon-color="red"/>
    </demo-block>

    <demo-block title="图标大小">
      <demo-note>注意：只有 icon 图标才支持设置大小</demo-note>
      <sb-category-title align="right" title="饭后甜点" left-icon="like" right-icon="gift" icon-size="32"/>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      bg1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMS8wNC8yMMlUGZ8AAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAA3UlEQVQoka2TzRHCIBBGX5ic0U5MB9KB3s3BdJISUoKHLUA7iB1oB9qBpAE8uDoYg//fiYG3b3YWyEIIdGVZADUw4xIPrIDaipwAurIcK7MERsptlNllfrEogDY6jLMHnK5bYDLAeMDlQJOQoIXraD2UEdDkwDQBXPPqHGBq3oDeigG2f/BsDZdb8D9IPLA0VuQAzH8Qza3IwQBYkRaovpBUWstt2FZk9aGs0hruRD3Zs5n5vgQgCyE8kPplWh4fqgecFdn1awbfkYIOOEbbx5Qk2VHU2Vg7QyWnFHsGrrNJ3gXDGREAAAAASUVORK5CYII=',
      bg2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMS8wNC8yMMlUGZ8AAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAEJklEQVRYhaWY0XHaQBCGv2P8HlJBNHMFhA4sVxBcgeUKQiqwXEGggkAFERVYVBB4t8ZQQaCCzcPu2Yc4QJrsjAbptLv333+7eyuciHBNGucyILPHtRfZXzU6th8CFXAbDS+BqRepL9kOrjjOG+dq4A14setv41zZByAwBvbAAjjY2DfgpXFuesnQnWPQQDxFQxugBGogB3IvMukJNLBZA19bvicpNpMM2qpicDugAEbAFPiNMtJbLDzaC/uKsjlv658waEoPLb0luiVBNiiDV0E2zuUk4tZC5zZhsvAiRXi4aRlNEuBogQMoeiTKCKga5ypga2NrdJtTAB8a57ZepISIQcvUNfDpyoSzPrF3Jua6yGcvso9jsOwADmDeZxZjOkfDpI8UYAzaKv92MNp4kVF7sHFuGLY8vk/ozUmHUEp2XiQLDI47GpWJSXO0Nu4b5/bAtnFua895rGvBv+o415fGuSwkyQkrCVl5kcpitQKGaNCHQI/DI9y/NM6tTBeUiDEa6186zNkZ4A4YW338Ho13mSTO1Dfg2UDWXI/5/OaKAmjNKzifiQd06/d8lJEMZW3C6SKesJMITbiL2X0N4MKLFHbspRwtDFjJKRs79NQZcZoYtyiLAWS7zr5LyOL21nWRhf0+oNtWowy+tfRmKKMpEKFxOLfV9yGLp5FyFzkYmMBM7UVqL7JN6H5Hkyrl/9MFcBsvUg0a5zJznPcAOcUKaUJWKGs/gDuU3YJ+BX4F5I1z2QBYN86Nvcia0y7jnNR2PRuIdfRugsblEI3NJzTmth19b7xIjhJWD9CV/bbuogYeOzgJhz0GIove/TFQAViQIddlCRSNc2u0patubILcnK3R7LpDt/FcCciBXz0nvwastPsajcuFF5kMosN8Zi9Ca3+pPvUFdOByg/sNZf6PYZiFnvCoYbVjrERr1yWAcYkBuAvtuoVKLEN0Z3Iunzw7NNzmcTVIddRDcxYnzDAB+Afw0+6XXuRsw2GN8M/WcNw07NFSVLU7oTaDpQHr0hceTHdq+htOt7G2iesePqehmz4C2OrVZuY4R2vYua0J5/AQTa7A8oaPjufSCXVAF1ibfdBdHMVg41yBZuUB/d6oGufGZtylY9kZoMBgZhN2YW2HfnKGOedm9+hF5gFghX55lUAbcCjCqQ+c/5EQg8HvoxeZWw5MgJEXGb9/k0Tgcj5qXGFVvWo5P6C16x74jNbNR/RkecaOOS/i7N0SZSqW0nyHg+FX49zIkuRjN0SEV8hEJNyXr7B/hXE0NnoFia4yvOt6md/Yxyh6V9icZTQ2FJFkmSmALM4kG99zHFMnGZcSKzFly3bnRbKWXglsvcj8yMGZ1eaJsaLFwAkTCZvxGZtxlzlFJP3fTOpPHFvZPcextOLyEbZGS847c2hstmM6OSfAP4pXewmOtUhJAAAAAElFTkSuQmCC',
      bg3: 'data:image/png;base64,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'
    };
  },

  methods: {
    clickHandler(event) {
      this.$toast(event.type);
    }
  }
};
</script>
