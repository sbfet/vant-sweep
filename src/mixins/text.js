// ------------------------------------------------------------------------------
// name: text
// author: mudas( fnd.cool )
// created: 2020/11/4 18:08
// ------------------------------------------------------------------------------

import { addUnit } from '../utils';

export default {
  props: {
    color: {
      type: String
    },

    fontSize: {
      type: [Number, String],
      default: 14
    }
  },

  computed: {
    textStyle() {
      const r = Object.create(null);

      if (this.color) r.color = this.color;
      if (this.fontSize) r['font-size'] = addUnit(this.fontSize, 'px');

      return r;
    }
  }
};
