// ------------------------------------------------------------------------------
// name: spacing
// author: mudas( fnd.cool )
// created: 2020/11/4 16:35
// ------------------------------------------------------------------------------

import { addUnit } from '../utils';

export default {
  props: {
    // 上下外部间距
    marginTop: {
      type: [Number, String],
      default: 5
    },

    marginBottom: {
      type: [Number, String],
      default: 5
    },

    // 左右内部间距
    paddingLeft: {
      type: [Number, String],
      default: 10
    },

    paddingRight: {
      type: [Number, String],
      default: 10
    }
  },

  computed: {
    marginStyle() {
      const top = addUnit(this.marginTop, 'px');
      const bottom = addUnit(this.marginBottom, 'px');
      return { 'margin-top': top, 'margin-bottom': bottom };
    },

    paddingStyle() {
      const left = addUnit(this.paddingLeft, 'px');
      const right = addUnit(this.paddingRight, 'px');
      return { 'padding-left': left, 'padding-right': right };
    }
  }
};
