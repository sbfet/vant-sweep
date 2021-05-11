// ------------------------------------------------------------------------------
// name: stylelint.config
// author: mudas( fnd.cool )
// created: 2021/5/7 16:18
// ------------------------------------------------------------------------------

module.exports = {
  processors: [],
  plugins: [],
  extends: ['@vant/stylelint-config'],
  rules: {
    'color-hex-length': 'short',
    'value-keyword-case': null,
    'at-rule-no-unknown': null,
    'at-rule-semicolon-space-before': null,
    'function-name-case': null
  }
};
