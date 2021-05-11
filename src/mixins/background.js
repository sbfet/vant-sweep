// ------------------------------------------------------------------------------
// name: background
// author: mudas( fnd.cool )
// created: 2020/11/4 17:24
// ------------------------------------------------------------------------------

export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  }
};
